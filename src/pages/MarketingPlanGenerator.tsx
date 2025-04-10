
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketingPlanForm from "@/components/MarketingPlanForm";
import MarketingPlanResult from "@/components/MarketingPlanResult";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, FileLineChart, Target } from "lucide-react";

export interface MarketingPlanData {
  businessName: string;
  industry: string;
  budget: string;
  goals: string[];
  targetAudience: string;
  currentChannels: string[];
}

const MarketingPlanGenerator = () => {
  const [planData, setPlanData] = useState<MarketingPlanData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("form");
  
  const handleSubmit = (data: MarketingPlanData) => {
    setPlanData(data);
    setActiveTab("result");
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">驰觅 营销方案生成器</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              基于您的业务信息，AI助手将生成定制化的营销方案和推广策略
            </p>
          </div>
          
          <div className="tech-card max-w-5xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-md grid grid-cols-2 mx-auto mb-8">
                <TabsTrigger value="form" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>业务信息</span>
                </TabsTrigger>
                <TabsTrigger value="result" className="flex items-center gap-2" disabled={!planData}>
                  <RocketIcon className="h-4 w-4" />
                  <span>营销方案</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="form">
                <MarketingPlanForm onSubmit={handleSubmit} />
              </TabsContent>
              
              <TabsContent value="result">
                {planData && <MarketingPlanResult planData={planData} />}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingPlanGenerator;
