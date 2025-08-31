
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { CheckCircle2, BrainCircuit } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section className="py-20 px-6 md:px-10 relative">
        <div className="absolute inset-0 bg-gradient-tech z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI驱动，一人公司的强力支持</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              轻松部署，即刻使用，让您的一人公司获得专业团队般的支持
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tech-card shine-effect">
              <div className="relative z-10 space-y-6">
                <div className="p-3 inline-flex rounded-lg bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">高效AI助手</h3>
                <ul className="space-y-3">
                  {[
                    "智能解析项目信息，准确理解需求",
                    "根据行业特点定制营销策略建议",
                    "持续学习优化，提供越来越精准的建议",
                    "跨领域知识整合，提供全方位视角"
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="tech-card shine-effect">
              <div className="relative z-10 space-y-6">
                <div className="p-3 inline-flex rounded-lg bg-accent/10">
                  <BrainCircuit className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">简单部署与使用</h3>
                <ul className="space-y-3">
                  {[
                    "简单部署，无需复杂配置",
                    "直观操作界面，无需技术背景",
                    "兼容手机、平板和桌面设备",
                    "安全可靠，保护您的项目信息"
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary/20 backdrop-blur-sm border border-border/40 shine-effect">
              <p className="text-sm text-foreground/70">专为一人公司打造</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">立即开始，提升效率</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              只需几分钟，即可拥有专属AI营销助手
            </p>
            <div className="flex flex-col items-center justify-center gap-3 text-sm text-foreground/60">
              <p>简单部署 · 智能分析 · 持续优化</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
