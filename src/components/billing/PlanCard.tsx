
import React from "react";
import { CheckCircle, X } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type PlanTier = "free" | "start" | "growth" | "full";

export interface PlanFeature {
  name: string;
  included: boolean;
  limit?: string;
}

export interface PlanProps {
  name: string;
  tier: PlanTier;
  description: string;
  monthlyPrice: number;
  annualPrice?: number;
  features: PlanFeature[];
  isPopular?: boolean;
  isCurrentPlan?: boolean;
  onSelectPlan: (tier: PlanTier, isAnnual: boolean) => void;
  showAnnual: boolean;
}

const PlanCard: React.FC<PlanProps> = ({
  name,
  tier,
  description,
  monthlyPrice,
  annualPrice,
  features,
  isPopular,
  isCurrentPlan,
  onSelectPlan,
  showAnnual,
}) => {
  const formattedMonthlyPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(monthlyPrice);

  const formattedAnnualPrice = annualPrice
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(annualPrice)
    : null;

  const annualSavings =
    annualPrice && monthlyPrice
      ? ((monthlyPrice * 12 - annualPrice) / (monthlyPrice * 12)) * 100
      : 0;

  return (
    <Card
      className={`flex flex-col hover-scale ${
        isPopular
          ? "border-forest-500 dark:border-forest-400 shadow-lg"
          : "border-border"
      } ${
        isCurrentPlan
          ? "bg-forest-50 dark:bg-forest-800/50"
          : "bg-card"
      }`}
    >
      {isPopular && (
        <div className="bg-forest-500 text-white text-center text-sm py-1">
          Most Popular
        </div>
      )}
      {isCurrentPlan && (
        <div className="bg-forest-700 text-white text-center text-sm py-1">
          Your Current Plan
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          {name}
        </CardTitle>
        <div className="mt-2">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">
              {showAnnual && annualPrice ? formattedAnnualPrice : formattedMonthlyPrice}
            </span>
            <span className="text-muted-foreground ml-1 text-sm">
              /{showAnnual ? "year" : "month"}
            </span>
          </div>
          {showAnnual && annualPrice && (
            <div className="text-forest-600 dark:text-forest-400 text-sm mt-1">
              Save {annualSavings.toFixed(0)}% with annual billing
            </div>
          )}
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              {feature.included ? (
                <CheckCircle className="h-4 w-4 text-forest-500 mt-0.5 shrink-0" />
              ) : (
                <X className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              )}
              <span
                className={
                  feature.included ? "text-foreground" : "text-muted-foreground"
                }
              >
                {feature.name}
                {feature.limit && (
                  <span className="text-muted-foreground"> ({feature.limit})</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            isCurrentPlan
              ? "bg-forest-200 text-forest-800 hover:bg-forest-300 dark:bg-forest-800 dark:text-forest-100 dark:hover:bg-forest-700"
              : "bg-forest-500 hover:bg-forest-600 text-white"
          }`}
          disabled={isCurrentPlan}
          onClick={() => onSelectPlan(tier, showAnnual)}
        >
          {isCurrentPlan ? "Current Plan" : "Select Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
