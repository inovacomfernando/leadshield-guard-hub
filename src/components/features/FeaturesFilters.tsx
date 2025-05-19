
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FeaturesFiltersProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const FeaturesFilters: React.FC<FeaturesFiltersProps> = ({ activeTab, onTabChange }) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full sm:w-auto">
      <TabsList>
        <TabsTrigger value="all">All Features</TabsTrigger>
        <TabsTrigger value="included">Included in Plan</TabsTrigger>
        <TabsTrigger value="available">Available to Add</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default FeaturesFilters;
