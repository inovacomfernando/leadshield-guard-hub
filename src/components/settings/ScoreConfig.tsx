
import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ScoreRule {
  id: string;
  name: string;
  description: string;
  type: "timeOnPage" | "ipReputation" | "formCompletion" | "deviceFingerprint" | "inputPattern";
  weight: number;
  enabled: boolean;
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
  const [rules, setRules] = useState<ScoreRule[]>(initialRules);
  const [threshold, setThreshold] = useState<number>(60);

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
    };
    
    setRules([...rules, newRule]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Score Threshold</CardTitle>
          <CardDescription>
            Leads with a score below this threshold will be flagged as suspicious or fraudulent
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="threshold">Threshold: {threshold}</Label>
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
            <CardTitle className="text-xl font-bold">Scoring Rules</CardTitle>
            <CardDescription>
              Configure how lead scores are calculated
            </CardDescription>
          </div>
          <Button onClick={handleAddRule}>
            <Plus className="h-4 w-4 mr-2" />
            Add Rule
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {rules.map((rule) => (
              <div key={rule.id} className="space-y-4">
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
                      onClick={() => handleDeleteRule(rule.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Weight: {rule.weight}%</Label>
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
          <Button className="bg-forest-500 hover:bg-forest-600">Save Configuration</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ScoreConfig;
