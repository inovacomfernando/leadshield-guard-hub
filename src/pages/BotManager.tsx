
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Edit, Trash2, Play, Clock, FileText } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Json } from "@/integrations/supabase/types";

interface BotConfig {
  id: string;
  name: string;
  target_url: string;
  form_selectors: Record<string, string> | Json;
  schedule: {
    frequency: string;
    time?: string;
    days?: string[];
  };
  execution_rules: {
    quantity: number;
    ip_range?: string[];
  };
  created_at: string;
  user_id?: string;
  updated_at?: string;
}

interface ExecutionLog {
  id: string;
  bot_config_id: string;
  status: string;
  response_data: any;
  execution_details: any;
  created_at: string;
}

const BotManager = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [botConfigs, setBotConfigs] = useState<BotConfig[]>([]);
  const [executionLogs, setExecutionLogs] = useState<ExecutionLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedBot, setSelectedBot] = useState<BotConfig | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    target_url: "",
    form_selectors: "{}",
    frequency: "daily",
    time: "12:00",
    days: ["Monday", "Wednesday", "Friday"],
    quantity: 1,
    ip_range: ""
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    
    fetchBotConfigs();
  }, [user, navigate]);

  const fetchBotConfigs = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("bot_configs")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      
      // Type cast and transform data to match BotConfig interface
      const typedData = data?.map(item => ({
        id: item.id,
        name: item.name,
        target_url: item.target_url,
        form_selectors: item.form_selectors,
        schedule: item.schedule as BotConfig['schedule'],
        execution_rules: item.execution_rules as BotConfig['execution_rules'],
        created_at: item.created_at || '',
        user_id: item.user_id,
        updated_at: item.updated_at
      })) || [];
      
      setBotConfigs(typedData);
      
      if (typedData.length > 0) {
        fetchExecutionLogs(typedData[0].id);
      }
    } catch (error) {
      console.error("Error fetching bot configurations:", error);
      toast.error("Failed to load bot configurations");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchExecutionLogs = async (botId: string) => {
    try {
      const { data, error } = await supabase
        .from("bot_execution_logs")
        .select("*")
        .eq("bot_config_id", botId)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      setExecutionLogs(data || []);
      setSelectedBot(botConfigs.find(bot => bot.id === botId) || null);
    } catch (error) {
      console.error("Error fetching execution logs:", error);
      toast.error("Failed to load execution logs");
    }
  };

  const handleCreateBot = async () => {
    try {
      const botData = {
        name: formData.name,
        target_url: formData.target_url,
        form_selectors: JSON.parse(formData.form_selectors),
        schedule: {
          frequency: formData.frequency,
          time: formData.time,
          days: formData.frequency === "weekly" ? formData.days : null
        },
        execution_rules: {
          quantity: parseInt(formData.quantity.toString()),
          ip_range: formData.ip_range ? formData.ip_range.split(",").map(ip => ip.trim()) : []
        },
        user_id: user?.id
      };

      const { data, error } = await supabase
        .from("bot_configs")
        .insert(botData)
        .select();

      if (error) throw error;
      
      toast.success("Bot configuration created successfully");
      setIsCreating(false);
      setFormData({
        name: "",
        target_url: "",
        form_selectors: "{}",
        frequency: "daily",
        time: "12:00",
        days: ["Monday", "Wednesday", "Friday"],
        quantity: 1,
        ip_range: ""
      });
      fetchBotConfigs();
    } catch (error: any) {
      console.error("Error creating bot configuration:", error);
      toast.error("Failed to create bot configuration");
    }
  };

  const handleDeleteBot = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this bot configuration?")) {
      try {
        const { error } = await supabase
          .from("bot_configs")
          .delete()
          .eq("id", id);

        if (error) throw error;
        
        toast.success("Bot configuration deleted successfully");
        fetchBotConfigs();
        if (selectedBot?.id === id) {
          setSelectedBot(null);
          setExecutionLogs([]);
        }
      } catch (error) {
        console.error("Error deleting bot configuration:", error);
        toast.error("Failed to delete bot configuration");
      }
    }
  };

  const handleExecuteBot = async (id: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/bot-executor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          configId: id,
          immediate: true
        })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "Failed to execute bot");
      }
      
      toast.success("Bot execution scheduled successfully");
      fetchExecutionLogs(id);
    } catch (error: any) {
      console.error("Error executing bot:", error);
      toast.error("Failed to execute bot");
    }
  };

  return (
    <div className="flex-1 p-8 pt-24 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{t("botManager.title")}</h1>
        <p className="text-muted-foreground">
          {t("botManager.subtitle")}
        </p>
      </div>

      <Tabs defaultValue="configurations">
        <TabsList className="mb-8">
          <TabsTrigger value="configurations">{t("botManager.tabs.configurations")}</TabsTrigger>
          <TabsTrigger value="logs">{t("botManager.tabs.logs")}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="configurations">
          <div className="space-y-6">
            {!isCreating ? (
              <div className="flex justify-end">
                <Button onClick={() => setIsCreating(true)} className="bg-forest-500 hover:bg-forest-600">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  {t("botManager.createNew")}
                </Button>
              </div>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>{t("botManager.createBot")}</CardTitle>
                  <CardDescription>
                    {t("botManager.configDescription")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("botManager.name")}</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="E.g., Contact Form Bot"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="target-url">{t("botManager.targetUrl")}</Label>
                      <Input 
                        id="target-url" 
                        value={formData.target_url}
                        onChange={(e) => setFormData(prev => ({ ...prev, target_url: e.target.value }))}
                        placeholder="https://example.com/contact"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="form-selectors">{t("botManager.formSelectors")}</Label>
                    <Textarea 
                      id="form-selectors" 
                      value={formData.form_selectors}
                      onChange={(e) => setFormData(prev => ({ ...prev, form_selectors: e.target.value }))}
                      placeholder='{"name": "#name", "email": "#email", "message": "#message"}'
                      rows={5}
                    />
                    <p className="text-sm text-muted-foreground">
                      {t("botManager.selectorsHint")}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="frequency">{t("botManager.frequency")}</Label>
                      <select
                        id="frequency"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        value={formData.frequency}
                        onChange={(e) => setFormData(prev => ({ ...prev, frequency: e.target.value }))}
                      >
                        <option value="once">{t("botManager.frequencyOptions.once")}</option>
                        <option value="daily">{t("botManager.frequencyOptions.daily")}</option>
                        <option value="weekly">{t("botManager.frequencyOptions.weekly")}</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">{t("botManager.time")}</Label>
                      <Input 
                        id="time" 
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">{t("botManager.quantity")}</Label>
                      <Input 
                        id="quantity" 
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData(prev => ({ ...prev, quantity: parseInt(e.target.value) || 1 }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ip-range">{t("botManager.ipRange")}</Label>
                      <Input 
                        id="ip-range" 
                        value={formData.ip_range}
                        onChange={(e) => setFormData(prev => ({ ...prev, ip_range: e.target.value }))}
                        placeholder="192.168.1.1, 10.0.0.1"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsCreating(false)}
                  >
                    {t("botManager.cancel")}
                  </Button>
                  <Button 
                    className="bg-forest-500 hover:bg-forest-600"
                    onClick={handleCreateBot}
                  >
                    {t("botManager.save")}
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            {isLoading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-forest-500"></div>
              </div>
            ) : botConfigs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {botConfigs.map((bot) => (
                  <Card key={bot.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{bot.name}</CardTitle>
                      <CardDescription className="truncate">{bot.target_url}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t("botManager.schedule")}</span>
                          <span className="font-medium">
                            {bot.schedule.frequency === "once" 
                              ? "One-time" 
                              : `${bot.schedule.frequency} at ${bot.schedule.time}`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t("botManager.quantity")}</span>
                          <span className="font-medium">{bot.execution_rules.quantity}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => fetchExecutionLogs(bot.id)}
                          title="View logs"
                        >
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          title="Edit configuration"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleDeleteBot(bot.id)}
                          title="Delete configuration"
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                      <Button 
                        size="sm"
                        className="bg-forest-500 hover:bg-forest-600"
                        onClick={() => handleExecuteBot(bot.id)}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        {t("botManager.execute")}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 border rounded-lg bg-slate-50 dark:bg-slate-900">
                <p className="text-muted-foreground">
                  {t("botManager.noConfigs")}
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {selectedBot 
                  ? `${t("botManager.logsFor")}: ${selectedBot.name}`
                  : t("botManager.executionLogs")}
                
                {botConfigs.length > 0 && (
                  <select
                    className="text-sm border rounded p-1"
                    value={selectedBot?.id || ""}
                    onChange={(e) => {
                      const botId = e.target.value;
                      if (botId) fetchExecutionLogs(botId);
                    }}
                  >
                    <option value="" disabled>{t("botManager.selectBot")}</option>
                    {botConfigs.map(bot => (
                      <option key={bot.id} value={bot.id}>{bot.name}</option>
                    ))}
                  </select>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {executionLogs.length > 0 ? (
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4">
                    {executionLogs.map((log) => (
                      <div key={log.id} className="border rounded-md p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-2 ${
                              log.status === "success" 
                                ? "bg-green-500" 
                                : log.status === "failure" 
                                ? "bg-red-500" 
                                : "bg-amber-500"
                            }`}></div>
                            <span className="font-medium">
                              {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {new Date(log.created_at).toLocaleString()}
                          </div>
                        </div>
                        <div className="text-sm mt-2 bg-slate-50 dark:bg-slate-800 rounded-md p-2 overflow-x-auto">
                          <pre className="text-xs">
                            {JSON.stringify(log.execution_details, null, 2)}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">
                    {selectedBot 
                      ? t("botManager.noLogsSelected")
                      : t("botManager.selectBotFirst")}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BotManager;
