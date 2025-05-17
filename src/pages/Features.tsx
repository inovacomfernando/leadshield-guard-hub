
import React, { useState } from "react";
import { CheckCircle, Shield, ShieldCheck, ShieldPlus, Database, DatabaseZap, ChartBar, Webhook, Code, Clock, Users, Settings, Eye, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
  includedIn: {
    free: boolean | string;
    start: boolean | string;
    growth: boolean | string;
    full: boolean | string;
  };
  implementation?: string;
  scriptSnippet?: string;
}

const Features: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const features: Feature[] = [
    {
      name: "Lead Tracking",
      description: "Track and monitor leads that visit your website",
      icon: Database,
      includedIn: {
        free: "100 leads/mo",
        start: "500 leads/mo",
        growth: "2,000 leads/mo",
        full: "Unlimited",
      },
    },
    {
      name: "Basic Lead Scoring",
      description: "Simple algorithm to score leads based on behavior",
      icon: Shield,
      includedIn: {
        free: true,
        start: true,
        growth: true,
        full: true,
      },
    },
    {
      name: "Advanced Lead Scoring",
      description: "Enhanced algorithms with machine learning for accurate scoring",
      icon: ShieldCheck,
      includedIn: {
        free: false,
        start: true,
        growth: true,
        full: true,
      },
    },
    {
      name: "Customer Support",
      description: "Access to customer support team",
      icon: Clock,
      includedIn: {
        free: "Email",
        start: "Email & chat",
        growth: "Priority",
        full: "24/7 Priority",
      },
    },
    {
      name: "Custom Scoring Rules",
      description: "Create your own custom rules for lead scoring",
      icon: Settings,
      includedIn: {
        free: false,
        start: "2 rules",
        growth: "5 rules",
        full: "Unlimited",
      },
    },
    {
      name: "API Access",
      description: "Access to our API for custom integrations",
      icon: Code,
      includedIn: {
        free: false,
        start: true,
        growth: true,
        full: true,
      },
    },
    {
      name: "Team Members",
      description: "Add team members to your account",
      icon: Users,
      includedIn: {
        free: false,
        start: "2 users",
        growth: "5 users",
        full: "Unlimited",
      },
    },
    {
      name: "Advanced Analytics",
      description: "Detailed analytics and reporting",
      icon: ChartBar,
      includedIn: {
        free: false,
        start: false,
        growth: true,
        full: true,
      },
    },
    {
      name: "Webhook Integrations",
      description: "Connect to your own systems via webhooks",
      icon: Webhook,
      includedIn: {
        free: false,
        start: false,
        growth: true,
        full: true,
      },
    },
    {
      name: "Invisible Honeypot",
      description: "Hidden form fields to catch bots and spammers",
      icon: Eye,
      includedIn: {
        free: false,
        start: false,
        growth: false,
        full: true,
      },
      implementation: "Add this script to your form pages to automatically add invisible honeypot fields",
      scriptSnippet: `<script>
  // LeadShield Honeypot Implementation
  (function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const honeyField = document.createElement('div');
      honeyField.style.opacity = '0';
      honeyField.style.position = 'absolute';
      honeyField.style.height = '0';
      honeyField.style.overflow = 'hidden';
      
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'shield_check_' + Math.random().toString(36).substring(2);
      input.autocomplete = 'off';
      
      honeyField.appendChild(input);
      form.appendChild(honeyField);
      
      form.addEventListener('submit', function(e) {
        if (input.value) {
          e.preventDefault();
          console.log('Bot detected via honeypot');
        }
      });
    });
  })();
</script>`
    },
    {
      name: "Advanced Firewall",
      description: "Client-side protection against malicious traffic",
      icon: Lock,
      includedIn: {
        free: false,
        start: false,
        growth: false,
        full: true,
      },
      implementation: "Add this script to your website header to enable the LeadShield firewall",
      scriptSnippet: `<script>
  // LeadShield Firewall Implementation
  (function() {
    const apiKey = "YOUR_API_KEY";
    const config = {
      blockSuspiciousIPs: true,
      monitorFormSubmissions: true,
      detectAutomation: true,
      reportToShieldAPI: true
    };
    
    // Initialize firewall
    window.LeadShield = window.LeadShield || {};
    window.LeadShield.firewall = true;
    window.LeadShield.config = config;
    
    // Load the full firewall script
    const script = document.createElement('script');
    script.src = 'https://api.leadshield.com/firewall.js?key=' + apiKey;
    script.async = true;
    document.head.appendChild(script);
  })();
</script>`
    },
    {
      name: "Invisible reCAPTCHA v3",
      description: "Google's invisible reCAPTCHA to protect forms without user friction",
      icon: ShieldPlus,
      includedIn: {
        free: false,
        start: false,
        growth: false,
        full: true,
      },
      implementation: "Add this script to your website and configure with your reCAPTCHA site key",
      scriptSnippet: `<script src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY"></script>
<script>
  // LeadShield reCAPTCHA Implementation
  document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', {action: 'submit'})
            .then(function(token) {
              // Add the token to your form
              const input = document.createElement('input');
              input.type = 'hidden';
              input.name = 'g-recaptcha-response';
              input.value = token;
              form.appendChild(input);
              
              // Submit the form
              form.submit();
            });
        });
      });
    });
  });
</script>`
    }
  ];

  // Filter features based on active tab
  const filteredFeatures = features.filter((feature) => {
    // Filter by search query
    if (searchQuery && !feature.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !feature.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by tab
    if (activeTab === "all") return true;
    if (activeTab === "included" && user?.subscription?.plan) {
      return !!feature.includedIn[user.subscription.plan as keyof typeof feature.includedIn];
    }
    if (activeTab === "available" && user?.subscription?.plan) {
      return !feature.includedIn[user.subscription.plan as keyof typeof feature.includedIn];
    }
    return true;
  });

  const handleAddFeature = (featureName: string) => {
    toast({
      title: "Feature request submitted",
      description: `Your request to add ${featureName} has been sent to our team.`,
    });
  };

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? 
        <CheckCircle className="h-5 w-5 text-forest-500" /> : 
        <span className="text-muted-foreground">—</span>;
    }
    return <span className="text-sm font-medium">{value}</span>;
  };

  return (
    <div className="flex-1 p-8 pt-24 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Features & Implementation</h1>
        <p className="text-muted-foreground mt-2">
          Explore available features and how to implement them on your website
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Features</TabsTrigger>
            <TabsTrigger value="included">Included in Plan</TabsTrigger>
            <TabsTrigger value="available">Available to Add</TabsTrigger>
          </TabsList>
        
          {/* Fix: Moving TabsContent inside the Tabs component */}
          <TabsContent value="all" className="mt-0">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Features Comparison</CardTitle>
                  <CardDescription>
                    Compare features across different plans
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="pb-4 font-medium">Feature</th>
                          <th className="pb-4 font-medium text-center">Free</th>
                          <th className="pb-4 font-medium text-center">Starter</th>
                          <th className="pb-4 font-medium text-center">Growth</th>
                          <th className="pb-4 font-medium text-center">Full Shield</th>
                        </tr>
                      </thead>
                      <tbody>
                        {features.map((feature, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-4">
                              <div className="flex items-center space-x-2">
                                <feature.icon className="h-5 w-5 text-muted-foreground" />
                                <span className="font-medium">{feature.name}</span>
                              </div>
                            </td>
                            <td className="py-4 text-center">{renderFeatureValue(feature.includedIn.free)}</td>
                            <td className="py-4 text-center">{renderFeatureValue(feature.includedIn.start)}</td>
                            <td className="py-4 text-center">{renderFeatureValue(feature.includedIn.growth)}</td>
                            <td className="py-4 text-center">{renderFeatureValue(feature.includedIn.full)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredFeatures.map((feature, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <feature.icon className="h-5 w-5" />
                  <CardTitle className="text-xl">{feature.name}</CardTitle>
                </div>
                {user?.subscription?.plan && feature.includedIn[user.subscription.plan as keyof typeof feature.includedIn] && (
                  <span className="bg-forest-100 text-forest-700 text-xs font-medium rounded-full px-2 py-1">
                    Included
                  </span>
                )}
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Availability by Plan:</h3>
                  <div className="grid grid-cols-4 gap-2 text-center text-sm">
                    <div>
                      <div className="font-medium">Free</div>
                      <div className="mt-1">
                        {renderFeatureValue(feature.includedIn.free)}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Starter</div>
                      <div className="mt-1">
                        {renderFeatureValue(feature.includedIn.start)}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Growth</div>
                      <div className="mt-1">
                        {renderFeatureValue(feature.includedIn.growth)}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Full</div>
                      <div className="mt-1">
                        {renderFeatureValue(feature.includedIn.full)}
                      </div>
                    </div>
                  </div>
                </div>
                
                {feature.implementation && (
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full">
                          View Implementation
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogHeader>
                          <DialogTitle>{feature.name} Implementation</DialogTitle>
                          <DialogDescription>
                            {feature.implementation}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto">
                          <pre className="text-sm">
                            <code>{feature.scriptSnippet}</code>
                          </pre>
                        </div>
                        <DialogFooter>
                          <Button 
                            onClick={() => {
                              navigator.clipboard.writeText(feature.scriptSnippet || "");
                              toast({
                                title: "Copied to clipboard",
                                description: "Implementation code copied to clipboard",
                              });
                            }}
                          >
                            Copy Code
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              {user?.subscription?.plan && !feature.includedIn[user.subscription.plan as keyof typeof feature.includedIn] ? (
                <Button 
                  className="w-full bg-forest-500 hover:bg-forest-600" 
                  onClick={() => handleAddFeature(feature.name)}
                >
                  Add to My Plan
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  className="w-full" 
                  disabled={!feature.implementation}
                >
                  {feature.implementation ? "Implement Now" : "Included in Your Plan"}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
