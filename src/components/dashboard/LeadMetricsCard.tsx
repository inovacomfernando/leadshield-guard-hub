
import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

interface LeadMetricsCardProps {
  title: string;
  value: string;
  changePercentage: number;
  icon: React.ReactNode;
  description?: string;
}

const LeadMetricsCard: React.FC<LeadMetricsCardProps> = ({
  title,
  value,
  changePercentage,
  icon,
  description,
}) => {
  const isPositive = changePercentage >= 0;
  const { language } = useLanguage();
  
  // Preserve the original color for "Leads Fraudulentos" in Portuguese
  const titleClass = language === 'pt' && title.includes('Fraudulentos') 
    ? "text-sm font-medium text-[#8E9196]" 
    : "text-sm font-medium";

  return (
    <Card className="glass-card hover-scale">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={titleClass}>{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-forest-100 dark:bg-forest-800 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2 text-xs">
          <div
            className={`flex items-center ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            <span>{Math.abs(changePercentage)}%</span>
          </div>
          <p className="text-muted-foreground">vs last month</p>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadMetricsCard;
