
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BrainCircuit, ChevronRight, LineChart, MessageSquare, PenTool } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-tech-gradient z-0"></div>
      
      {/* Glowing orbs (decorative elements) */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-border/40 shine-effect">
            <p className="text-sm text-foreground/70 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
              AI助手为一人公司提供强大支持
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-blue">驰觅 AI</span>，
            <span className="text-foreground">一人公司的最强搭档</span>
          </h1>
          
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl">
            上传项目信息，让AI助手帮你生成营销方案、内容创作、市场分析，让一个人也能高效运营公司。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="bg-gradient-blue hover:opacity-90 transition-opacity shine-effect">
              <Link to="/dashboard">
                立即开始使用
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
              <Link to="/marketing">
                生成营销方案
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Feature cards */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="tech-card group shine-effect">
            <div className="relative z-10">
              <div className="p-3 mb-4 inline-flex rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">智能对话</h3>
              <p className="text-foreground/70">
                与AI助手自然交流，快速获取专业建议和解决方案。
              </p>
            </div>
          </div>
          
          <Link to="/marketing" className="block">
            <div className="tech-card group shine-effect h-full hover:border-primary/60 transition-colors">
              <div className="relative z-10">
                <div className="p-3 mb-4 inline-flex rounded-lg bg-accent/10">
                  <PenTool className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">营销方案生成</h3>
                <p className="text-foreground/70">
                  一键生成专业营销策略，包含目标客户、渠道选择和内容建议。
                </p>
              </div>
            </div>
          </Link>
          
          <div className="tech-card group shine-effect">
            <div className="relative z-10">
              <div className="p-3 mb-4 inline-flex rounded-lg bg-primary/10">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">市场分析</h3>
              <p className="text-foreground/70">
                分析项目潜力，发现机会，规避风险，制定科学决策。
              </p>
            </div>
          </div>
        </div>
        
        {/* Tech badge */}
        <div className="mt-28 max-w-xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-foreground/50 mb-6">高效AI助手，智能分析，快速部署</p>
          <div className="p-4 rounded-xl bg-secondary/20 border border-border/40 backdrop-blur-sm inline-flex items-center gap-3 shine-effect">
            <BrainCircuit className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">简单快速 · 智能分析 · 轻松管理</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
