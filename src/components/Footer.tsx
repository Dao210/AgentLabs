
import { Link } from "react-router-dom";
import { 
  DiamondPlus, 
  Github, 
  Mail, 
  MessageSquare, 
  PenTool, 
  LineChart, 
  ChevronRight 
} from "lucide-react";

interface FooterProps {
  simple?: boolean;
}

const Footer = ({ simple = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  if (simple) {
    return (
      <footer className="py-6 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <DiamondPlus className="h-5 w-5 text-primary" />
            <span className="font-semibold">驰觅 AI</span>
          </div>
          <div className="text-xs text-foreground/60">
            © {currentYear} 驰觅科技. 一人公司的AI助手
          </div>
        </div>
      </footer>
    );
  }
  
  return (
    <footer className="py-16 bg-card border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <DiamondPlus className="h-6 w-6 text-primary" />
              <span>驰觅 AI</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-6">
              智能AI助手，为一人公司提供全方位支持，提升效率，创造价值。
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <Github className="h-5 w-5 text-foreground/70" />
              </a>
              <a href="mailto:contact@chimi.ai" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <Mail className="h-5 w-5 text-foreground/70" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <MessageSquare className="h-5 w-5 text-foreground/70" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">功能</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/dashboard" className="text-foreground/70 hover:text-primary flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>智能对话</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-foreground/70 hover:text-primary flex items-center gap-2">
                  <PenTool className="h-4 w-4" />
                  <span>营销方案生成</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-foreground/70 hover:text-primary flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  <span>市场分析</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">资源</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>使用文档</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>常见问题</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>用户案例</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-foreground/70" />
                <span>contact@chimi.ai</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="h-4 w-4 mt-1 text-foreground/70" />
                <span>在线客服: 工作日 9:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground/60">
            © {currentYear} 驰觅科技. 保留所有权利.
          </div>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-foreground/60 hover:text-foreground">隐私政策</Link>
            <Link to="#" className="text-sm text-foreground/60 hover:text-foreground">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
