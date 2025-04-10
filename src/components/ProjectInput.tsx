
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Globe, FileText } from "lucide-react";

interface ProjectData {
  name: string;
  description: string;
  url?: string;
}

interface ProjectInputProps {
  onSubmit: (data: ProjectData) => void;
}

const ProjectInput = ({ onSubmit }: ProjectInputProps) => {
  const [activeTab, setActiveTab] = useState<string>("text");
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectUrl, setProjectUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectName.trim()) {
      toast({
        title: "项目名称必填",
        description: "请输入您的项目名称。",
        variant: "destructive",
      });
      return;
    }

    if (activeTab === "text" && !projectDescription.trim()) {
      toast({
        title: "项目描述必填",
        description: "请输入您的项目详细描述。",
        variant: "destructive",
      });
      return;
    }

    if (activeTab === "url" && !projectUrl.trim()) {
      toast({
        title: "项目网址必填",
        description: "请输入您的项目网址。",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      onSubmit({
        name: projectName,
        description: activeTab === "text" ? projectDescription : "从URL获取的项目信息",
        url: activeTab === "url" ? projectUrl : undefined,
      });
      
      toast({
        title: "项目信息已提交",
        description: "AI助手正在分析您的项目信息。",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="tech-card w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>项目信息</CardTitle>
        <CardDescription>
          请提供您的项目信息，AI助手将基于这些信息为您生成营销方案。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="projectName" className="text-sm font-medium block mb-2">
                项目名称
              </label>
              <Input
                id="projectName"
                placeholder="输入项目名称"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="tech-input"
                required
              />
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-2">
                <TabsTrigger value="text" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>文本描述</span>
                </TabsTrigger>
                <TabsTrigger value="url" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>项目网址</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="text" className="space-y-4">
                <div>
                  <label htmlFor="description" className="text-sm font-medium block mb-2">
                    项目详细描述
                  </label>
                  <Textarea
                    id="description"
                    placeholder="描述您的项目，包括目标客户、产品特点、当前营销策略等"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="tech-input min-h-32"
                    required
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="url" className="space-y-4">
                <div>
                  <label htmlFor="url" className="text-sm font-medium block mb-2">
                    项目网址
                  </label>
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://yourproject.com"
                    value={projectUrl}
                    onChange={(e) => setProjectUrl(e.target.value)}
                    className="tech-input"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    AI助手将分析您提供的网址内容，提取相关项目信息。
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-6 bg-gradient-blue hover:opacity-90 transition-opacity"
            disabled={isSubmitting}
          >
            {isSubmitting ? "正在提交..." : "提交项目信息"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProjectInput;
