
import React from "react";
import FeatureCard from "./FeatureCard";
import { Feature } from "@/types/features";

interface FeaturesGridProps {
  features: Feature[];
  userPlan?: string;
  searchQuery?: string;
  activeTab?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ 
  features, 
  userPlan, 
  searchQuery = "", 
  activeTab = "all" 
}) => {
  // Filter features based on active tab and search query
  const filteredFeatures = features.filter((feature) => {
    // Filter by search query
    if (searchQuery && !feature.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !feature.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by tab
    if (activeTab === "all") return true;
    if (activeTab === "included" && userPlan) {
      return !!feature.includedIn[userPlan as keyof typeof feature.includedIn];
    }
    if (activeTab === "available" && userPlan) {
      return !feature.includedIn[userPlan as keyof typeof feature.includedIn];
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {filteredFeatures.map((feature, index) => (
        <FeatureCard key={index} feature={feature} userPlan={userPlan} />
      ))}
    </div>
  );
};

export default FeaturesGrid;
