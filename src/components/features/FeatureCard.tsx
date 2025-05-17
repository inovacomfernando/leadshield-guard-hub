
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { useSupabaseClient } from "@/lib/supabase";
import { Feature } from "@/types/features";

interface FeatureCardProps {
  feature: Feature;
  userPlan?: string;
}

export const renderFeatureValue = (value: boolean | string) => {
  if (typeof value === "boolean") {
    return value ? 
      <CheckCircle className="h-5 w-5 text-forest-500" /> : 
      <span className="text-muted-foreground">—</span>;
  }
  return <span className="text-sm font-medium">{value}</span>;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, userPlan }) => {
  const { user } = useAuth();
  const supabase = useSupabaseClient();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddFeature = async (featureName: string) => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please log in to subscribe to features",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    try {
      // Call Stripe checkout function
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          featureName,
          priceId: `price_${featureName.toLowerCase().replace(/[^a-z0-9]/g, '')}`
        }
      });
      
      if (error) throw error;
      
      // Redirect to Stripe checkout
      if (data?.url) {
        window.location.href = data.url;
      }
      
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast({
        title: "Subscription Error",
        description: "Failed to initiate subscription process. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const implementFeature = () => {
    if (feature.implementation && feature.scriptSnippet) {
      navigator.clipboard.writeText(feature.scriptSnippet);
      toast({
        title: "Code copied to clipboard",
        description: "Implementation code copied to clipboard",
      });
    }
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <feature.icon className="h-5 w-5" />
            <CardTitle className="text-xl">{feature.name}</CardTitle>
          </div>
          {userPlan && feature.includedIn[userPlan as keyof typeof feature.includedIn] && (
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
        {userPlan && !feature.includedIn[userPlan as keyof typeof feature.includedIn] ? (
          <Button 
            className="w-full bg-forest-500 hover:bg-forest-600" 
            onClick={() => handleAddFeature(feature.name)}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Subscribe to Feature"}
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="w-full" 
            disabled={!feature.implementation}
            onClick={implementFeature}
          >
            {feature.implementation ? "Implement Now" : "Included in Your Plan"}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default FeatureCard;
