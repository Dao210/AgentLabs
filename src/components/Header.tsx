
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
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span>驰觅</span>
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
