
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BrainCircuit, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 md:px-10 bg-background/90 backdrop-blur-md border-b border-border/40 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <svg width=30" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.7712 11.7433C10.6088 11.9057 10.4731 12.0362 10.4731 12.0362L10.4744 12.0368C10.472 12.0359 10.3384 12.1675 10.1763 12.3297L8.6995 13.8065C8.53707 13.9689 8.53707 14.2344 8.6995 14.3968L10.1809 15.8782C10.3433 16.0406 10.6088 16.0406 10.7712 15.8782L20.8289 5.81848C20.9913 5.65606 20.9913 5.39057 20.8289 5.22815L15.8956 0.294838C15.7332 0.132416 15.4123 0 15.1827 0L5.76352 0.00391377C5.53391 0.00391377 5.21298 0.136982 5.05056 0.299404L0.121816 5.2288C-0.0406054 5.39122 -0.0406054 5.65671 0.121816 5.81913L6.04074 11.7381C6.20316 11.9005 6.46865 11.9005 6.63107 11.7381L8.10786 10.2613C8.27029 10.0988 8.27029 9.83336 8.10786 9.67094L4.25606 5.81913C4.09364 5.65671 4.09364 5.39122 4.25606 5.2288L6.26252 3.22299C6.42494 3.06057 6.74587 2.9275 6.97548 2.9275L13.9726 2.92424C14.2023 2.92359 14.5232 3.05666 14.6856 3.21908L16.6953 5.2288C16.8577 5.39122 16.8577 5.65671 16.6953 5.81913L10.7712 11.7433Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
          <span>驰觅智能</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-6">
              <li><Link to="/" className="text-foreground/80 hover:text-primary transition-colors">首页</Link></li>
              <li><Link to="/dashboard" className="text-foreground/80 hover:text-primary transition-colors">控制台</Link></li>
              <li><Link to="/marketing" className="text-foreground/80 hover:text-primary transition-colors">营销方案</Link></li>
              <li><a href="aitools.html" className="text-foreground/80 hover:text-primary transition-colors">AI工具集</a></li>
            </ul>
          </nav>
          <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            <Link to="/dashboard">开始使用</Link>
          </Button>
        </div>

        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/40 py-4 px-6">
          <nav>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">首页</Link></li>
              <li><Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">控制台</Link></li>
              <li><Link to="/marketing" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">营销方案</Link></li>
              <li><a href="#features" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">功能</a></li>
            </ul>
          </nav>
          <Button asChild variant="outline" className="mt-4 w-full border-primary/50 text-primary hover:bg-primary/10">
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>开始使用</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
