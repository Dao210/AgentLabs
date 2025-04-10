
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ProjectInput from "@/components/ProjectInput";
import ChatInterface from "@/components/ChatInterface";
import MarketingPlan from "@/components/MarketingPlan";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectData {
  name: string;
  description: string;
  url?: string;
}

const Dashboard = () => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  
  const handleProjectSubmit = (data: ProjectData) => {
    setProjectData(data);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">驰觅 AI 控制台</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              上传您的项目信息，让AI助手根据您的需求生成营销方案和内容策略
            </p>
          </div>
          
          {!projectData ? (
            <div className="max-w-2xl mx-auto">
              <ProjectInput onSubmit={handleProjectSubmit} />
            </div>
          ) : (
            <div className="space-y-8">
              <div className="tech-card p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold">{projectData.name}</h2>
                    <p className="text-sm text-foreground/70 mt-1 line-clamp-2">
                      {projectData.description || "通过URL提取的项目信息"}
                    </p>
                  </div>
                  <button 
                    className="text-sm text-primary hover:text-primary/80 underline underline-offset-4"
                    onClick={() => setProjectData(null)}
                  >
                    更换项目
                  </button>
                </div>
              </div>
              
              <Tabs defaultValue="chat" className="w-full">
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                  <TabsTrigger value="chat" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>AI对话</span>
                  </TabsTrigger>
                  <TabsTrigger value="marketing" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>营销方案</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="chat" className="mt-0">
                  <div className="max-w-4xl mx-auto">
                    <ChatInterface projectName={projectData.name} />
                  </div>
                </TabsContent>
                
                <TabsContent value="marketing" className="mt-0">
                  <div className="max-w-4xl mx-auto">
                    <MarketingPlan projectName={projectData.name} />
                    <div className="mt-6 text-center">
                      <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/5">
                        <Link to="/marketing" className="flex items-center gap-2">
                          获取更全面的营销方案
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
      
      <Footer simple={true} />
    </div>
  );
};

export default Dashboard;
