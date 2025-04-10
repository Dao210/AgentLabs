import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { MarketingPlanData } from "@/pages/MarketingPlanGenerator";
import { Building, DollarSign, Users, Target, Briefcase } from "lucide-react";
import { industryOptions, budgetOptions, channelOptions, goalOptions } from "@/utils/marketingOptions";

interface MarketingPlanFormProps {
  onSubmit: (data: MarketingPlanData) => void;
}

const MarketingPlanForm = ({ onSubmit }: MarketingPlanFormProps) => {
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState(industryOptions[0]);
  const [budget, setBudget] = useState(budgetOptions[0]);
  const [targetAudience, setTargetAudience] = useState("");
  const [currentChannels, setCurrentChannels] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleChannelChange = (channelId: string, checked: boolean) => {
    if (checked) {
      setCurrentChannels([...currentChannels, channelId]);
    } else {
      setCurrentChannels(currentChannels.filter(id => id !== channelId));
    }
  };
  
  const handleGoalChange = (goalId: string, checked: boolean) => {
    if (checked) {
      setGoals([...goals, goalId]);
    } else {
      setGoals(goals.filter(id => id !== goalId));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessName.trim()) {
      toast({
        title: "请输入业务名称",
        description: "业务名称是必填项。",
        variant: "destructive",
      });
      return;
    }
    
    if (!targetAudience.trim()) {
      toast({
        title: "请描述目标受众",
        description: "目标受众信息是生成有效营销方案的关键。",
        variant: "destructive",
      });
      return;
    }
    
    if (goals.length === 0) {
      toast({
        title: "请选择营销目标",
        description: "至少选择一个您希望达成的营销目标。",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with a short delay
    setTimeout(() => {
      const planData: MarketingPlanData = {
        businessName,
        industry,
        budget,
        targetAudience,
        currentChannels,
        goals
      };
      
      onSubmit(planData);
      toast({
        title: "信息已提交",
        description: "正在为您生成定制营销方案...",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="businessName" className="text-base flex items-center gap-2 mb-2">
              <Building className="h-4 w-4 text-primary" />
              业务名称
            </Label>
            <Input
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="输入您的公司或品牌名称"
              className="bg-background/50"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="industry" className="text-base flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-primary" />
              所属行业
            </Label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full h-10 px-3 py-2 bg-background/50 border border-input rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {industryOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div>
            <Label htmlFor="budget" className="text-base flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary" />
              营销预算
            </Label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full h-10 px-3 py-2 bg-background/50 border border-input rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {budgetOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div>
            <Label htmlFor="targetAudience" className="text-base flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              目标受众
            </Label>
            <Textarea
              id="targetAudience"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="描述您的理想客户群体，包括年龄、职业、兴趣爱好等"
              className="min-h-[120px] bg-background/50"
              required
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <Label className="text-base flex items-center gap-2 mb-3">
              <Target className="h-4 w-4 text-primary" />
              营销目标
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {goalOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`goal-${option.id}`} 
                    checked={goals.includes(option.id)}
                    onCheckedChange={(checked) => handleGoalChange(option.id, checked === true)}
                  />
                  <Label htmlFor={`goal-${option.id}`} className="text-sm cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Label className="text-base flex items-center gap-2 mb-3">
              <Users className="h-4 w-4 text-primary" />
              当前使用的营销渠道
            </Label>
            <Card className="border border-border/40 bg-background/50">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {channelOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`channel-${option.id}`} 
                        checked={currentChannels.includes(option.id)}
                        onCheckedChange={(checked) => handleChannelChange(option.id, checked === true)}
                      />
                      <Label htmlFor={`channel-${option.id}`} className="text-sm cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="pt-4 flex justify-center">
        <Button 
          type="submit" 
          className="w-full max-w-md bg-gradient-blue hover:opacity-90 transition-opacity"
          disabled={isSubmitting}
        >
          {isSubmitting ? "生成方案中..." : "生成定制营销方案"}
        </Button>
      </div>
    </form>
  );
};

export default MarketingPlanForm;
