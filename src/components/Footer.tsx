import { Link } from "react-router-dom";
import { 
  Github, 
  Mail, 
  MessageSquare, 
  PenTool, 
  LineChart, 
  ChevronRight 
} from "lucide-react";

const ChimiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path
      d="M10.7712 11.7433C10.6088 11.9057 10.4731 12.0362 10.4731 12.0362L10.4744 12.0368C10.472 12.0359 10.3384 12.1675 10.1763 12.3297L8.6995 13.8065C8.53707 13.9689 8.53707 14.2344 8.6995 14.3968L10.1809 15.8782C10.3433 16.0406 10.6088 16.0406 10.7712 15.8782L20.8289 5.81848C20.9913 5.65606 20.9913 5.39057 20.8289 5.22815L15.8956 0.294838C15.7332 0.132416 15.4123 0 15.1827 0L5.76352 0.00391377C5.53391 0.00391377 5.21298 0.136982 5.05056 0.299404L0.121816 5.2288C-0.0406054 5.39122 -0.0406054 5.65671 0.121816 5.81913L6.04074 11.7381C6.20316 11.9005 6.46865 11.9005 6.63107 11.7381L8.10786 10.2613C8.27029 10.0988 8.27029 9.83336 8.10786 9.67094L4.25606 5.81913C4.09364 5.65671 4.09364 5.39122 4.25606 5.2288L6.26252 3.22299C6.42494 3.06057 6.74587 2.9275 6.97548 2.9275L13.9726 2.92424C14.2023 2.92359 14.5232 3.05666 14.6856 3.21908L16.6953 5.2288C16.8577 5.39122 16.8577 5.65671 16.6953 5.81913L10.7712 11.7433Z"
      fill="currentColor"
    />
  </svg>
);

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
            <ChimiIcon />
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
              <ChimiIcon />
              <span>驰觅 AI</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-6">
              智能AI助手，为一人公司提供全方位支持，提升效率，创造价值。
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <Github className="h-5 w-5 text-foreground/70" />
              </a>
              <a href="mailto:contact@chimi.com" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <Mail className="h-5 w-5 text-foreground/70" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary/10 transition-colors">
                <MessageSquare className="h-5 w-5 text-foreground/70" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">用驰觅能做什么？</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/single-member" className="text-foreground/70 hover:text-primary flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>一人公司的AI助手</span>
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
                <a href="aitools.html" className="text-foreground/70 hover:text-primary flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  <span>AI工具导航</span>
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
                <span>contact@chimi.com</span>
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
