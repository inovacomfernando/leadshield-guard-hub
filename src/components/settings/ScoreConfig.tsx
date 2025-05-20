
import React, { useState } from "react";
import { Plus, Trash2, Pencil, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";

interface ScoreRule {
  id: string;
  name: string;
  description: string;
  type: "timeOnPage" | "ipReputation" | "formCompletion" | "deviceFingerprint" | "inputPattern";
  weight: number;
  enabled: boolean;
  isEditing?: boolean;
}

const initialRules: ScoreRule[] = [
  {
    id: "rule-1",
    name: "Time on Page",
    description: "Score based on how much time a user spends on the form",
    type: "timeOnPage",
    weight: 25,
    enabled: true,
  },
  {
    id: "rule-2",
    name: "IP Reputation",
    description: "Check IP address against known fraud databases",
    type: "ipReputation",
    weight: 35,
    enabled: true,
  },
  {
    id: "rule-3",
    name: "Form Completion Time",
    description: "Detect unusually fast form completions",
    type: "formCompletion",
    weight: 20,
    enabled: true,
  },
  {
    id: "rule-4",
    name: "Device Fingerprinting",
    description: "Analyze device information for suspicious patterns",
    type: "deviceFingerprint",
    weight: 15,
    enabled: true,
  },
  {
    id: "rule-5",
    name: "Input Pattern Analysis",
    description: "Detect suspicious patterns in form inputs",
    type: "inputPattern",
    weight: 5,
    enabled: false,
  },
];

const ScoreConfig: React.FC = () => {
  const { t } = useLanguage();
  const [rules, setRules] = useState<ScoreRule[]>(initialRules);
  const [threshold, setThreshold] = useState<number>(60);
  const [editingRule, setEditingRule] = useState<{ id: string, name: string, description: string } | null>(null);

  const handleRuleToggle = (id: string) => {
    setRules(
      rules.map((rule) =>
        rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
      )
    );
  };

  const handleWeightChange = (id: string, value: number[]) => {
    setRules(
      rules.map((rule) =>
        rule.id === id ? { ...rule, weight: value[0] } : rule
      )
    );
  };

  const handleDeleteRule = (id: string) => {
    setRules(rules.filter((rule) => rule.id !== id));
  };

  const handleAddRule = () => {
    const newRule: ScoreRule = {
      id: `rule-${Date.now()}`,
      name: "New Rule",
      description: "Description of the new rule",
      type: "timeOnPage",
      weight: 10,
      enabled: true,
      isEditing: true,
    };
    
    setRules([...rules, newRule]);
    setEditingRule({ id: newRule.id, name: newRule.name, description: newRule.description });
  };

  const handleEditRule = (id: string) => {
    const rule = rules.find(r => r.id === id);
    if (rule) {
      setEditingRule({ id, name: rule.name, description: rule.description });
    }
  };

  const handleCancelEdit = () => {
    setEditingRule(null);
  };

  const handleSaveEdit = () => {
    if (!editingRule) return;
    
    setRules(rules.map(rule => 
      rule.id === editingRule.id 
        ? { ...rule, name: editingRule.name, description: editingRule.description, isEditing: false } 
        : rule
    ));
    
    setEditingRule(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{t("settings.score.threshold")}</CardTitle>
          <CardDescription>
            Leads with a score below this threshold will be flagged as suspicious or fraudulent
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="threshold">{t("settings.score.threshold")}: {threshold}</Label>
                <span className="text-sm text-muted-foreground">
                  {threshold < 40 ? 'Strict' : threshold < 70 ? 'Balanced' : 'Lenient'}
                </span>
              </div>
              <Slider
                id="threshold"
                min={0}
                max={100}
                step={1}
                defaultValue={[threshold]}
                onValueChange={(value) => setThreshold(value[0])}
                className="mt-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0 (All Blocked)</span>
                <span>50</span>
                <span>100 (All Allowed)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{t("settings.score.rules")}</CardTitle>
            <CardDescription>
              Configure how lead scores are calculated
            </CardDescription>
          </div>
          <Button onClick={handleAddRule}>
            <Plus className="h-4 w-4 mr-2" />
            {t("settings.score.addRule")}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {rules.map((rule) => (
              <div key={rule.id} className="space-y-4">
                {editingRule && editingRule.id === rule.id ? (
                  <div className="space-y-4 bg-forest-50 dark:bg-forest-800/50 p-4 rounded-md">
                    <div>
                      <Label htmlFor={`rule-name-${rule.id}`}>{t("settings.score.ruleName")}</Label>
                      <Input
                        id={`rule-name-${rule.id}`}
                        value={editingRule.name}
                        onChange={(e) => setEditingRule({ ...editingRule, name: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`rule-desc-${rule.id}`}>{t("settings.score.ruleDesc")}</Label>
                      <Textarea
                        id={`rule-desc-${rule.id}`}
                        value={editingRule.description}
                        onChange={(e) => setEditingRule({ ...editingRule, description: e.target.value })}
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={handleCancelEdit}>
                        <X className="h-4 w-4 mr-1" /> Cancel
                      </Button>
                      <Button size="sm" onClick={handleSaveEdit}>
                        <Save className="h-4 w-4 mr-1" /> Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{rule.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {rule.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={rule.enabled}
                        onCheckedChange={() => handleRuleToggle(rule.id)}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditRule(rule.id)}
                        title="Edit rule"
                      >
                        <Pencil className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteRule(rule.id)}
                        title="Delete rule"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>{t("settings.score.weight")}: {rule.weight}%</Label>
                  </div>
                  <Slider
                    disabled={!rule.enabled}
                    min={0}
                    max={100}
                    step={1}
                    value={[rule.weight]}
                    onValueChange={(value) => handleWeightChange(rule.id, value)}
                  />
                </div>

                <Separator />
              </div>
            ))}

            {rules.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>No rules configured. Add a rule to get started.</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <p className="text-sm text-muted-foreground">
            Total weight: {rules.reduce((acc, rule) => acc + (rule.enabled ? rule.weight : 0), 0)}%
          </p>
          <Button className="bg-forest-500 hover:bg-forest-600">{t("settings.score.saveConfig")}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ScoreConfig;
