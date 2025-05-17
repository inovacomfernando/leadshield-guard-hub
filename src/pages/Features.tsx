
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { featuresList } from "@/data/features";
import FeaturesFilters from "@/components/features/FeaturesFilters";
import SearchBar from "@/components/features/SearchBar";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import FeaturesComparison from "@/components/features/FeaturesComparison";

const Features: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  return (
    <div className="flex-1 p-8 pt-24 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Features & Implementation</h1>
        <p className="text-muted-foreground mt-2">
          Explore available features and how to implement them on your website
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <FeaturesFilters activeTab={activeTab} onTabChange={setActiveTab} />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="all">
        <TabsList className="hidden">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="included">Included</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <FeaturesComparison features={featuresList} />
        </TabsContent>
        
        <TabsContent value="included">
          <FeaturesComparison features={featuresList.filter(f => 
            user?.subscription?.plan && f.includedIn[user.subscription.plan as keyof typeof f.includedIn]
          )} />
        </TabsContent>
        
        <TabsContent value="available">
          <FeaturesComparison features={featuresList.filter(f => 
            user?.subscription?.plan && !f.includedIn[user.subscription.plan as keyof typeof f.includedIn]
          )} />
        </TabsContent>
      </Tabs>

      <FeaturesGrid 
        features={featuresList} 
        userPlan={user?.subscription?.plan} 
        searchQuery={searchQuery}
        activeTab={activeTab}
      />
    </div>
  );
};

export default Features;
