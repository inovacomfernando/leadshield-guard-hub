
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Feature } from "@/types/features";
import { renderFeatureValue } from "./FeatureCard";

interface FeaturesComparisonProps {
  features: Feature[];
}

const FeaturesComparison: React.FC<FeaturesComparisonProps> = ({ features }) => {
  return (
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
  );
};

export default FeaturesComparison;
