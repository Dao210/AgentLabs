import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="w-full py-4 px-6 md:px-10 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md border-b border-border/40 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
          <svg width="30" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.7712 11.7433C10.6088 11.9057 10.4731 12.0362 10.4731 12.0362L10.4744 12.0368C10.472 12.0359 10.3384 12.1675 10.1763 12.3297L8.6995 13.8065C8.53707 13.9689 8.53707 14.2344 8.6995 14.3968L10.1809 15.8782C10.3433 16.0406 10.6088 16.0406 10.7712 15.8782L20.8289 5.81848C20.9913 5.65606 20.9913 5.39057 20.8289 5.22815L15.8956 0.294838C15.7332 0.132416 15.4123 0 15.1827 0L5.76352 0.00391377C5.53391 0.00391377 5.21298 0.136982 5.05056 0.299404L0.121816 5.2288C-0.0406054 5.39122 -0.0406054 5.65671 0.121816 5.81913L6.04074 11.7381C6.20316 11.9005 6.46865 11.9005 6.63107 11.7381L8.10786 10.2613C8.27029 10.0988 8.27029 9.83336 8.10786 9.67094L4.25606 5.81913C4.09364 5.65671 4.09364 5.39122 4.25606 5.2288L6.26252 3.22299C6.42494 3.06057 6.74587 2.9275 6.97548 2.9275L13.9726 2.92424C14.2023 2.92359 14.5232 3.05666 14.6856 3.21908L16.6953 5.2288C16.8577 5.39122 16.8577 5.65671 16.6953 5.81913L10.7712 11.7433Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
          <span>驰觅</span>
        </Link>
        
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav>
            <ul className="flex gap-2 items-center font-bold text-lg">
              <li>
                <Link 
                  to="/" 
                  className={`px-4 py-2 rounded-lg text-foreground transition-colors ${location.pathname === '/' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                  onClick={() => window.location.pathname === '/' && window.location.reload()}
                >
                  找需求
                </Link>
              </li>
              <li className="text-muted-foreground">&gt;</li>
              <li>
                <Link 
                  to="/building" 
                  className={`px-4 py-2 rounded-lg text-foreground transition-colors ${location.pathname === '/building' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                  onClick={() => window.location.pathname === '/building' && window.location.reload()}
                >
                  做产品
                </Link>
              </li>
              <li className="text-muted-foreground">&gt;</li>
              <li>
                <Link 
                  to="/marketing" 
                  className={`px-4 py-2 rounded-lg text-foreground  transition-colors ${location.pathname === '/marketing' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                  onClick={() => window.location.pathname === '/marketing' && window.location.reload()}
                >
                  搞营销
                </Link>
              </li>
              <li className="text-muted-foreground">&gt;</li>
              <li>
                <Link 
                  to="/branding" 
                  className={`px-4 py-2 rounded-lg text-foreground  transition-colors ${location.pathname === '/branding' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                  onClick={() => window.location.pathname === '/branding' && window.location.reload()}
                >
                  创品牌
                </Link>
              </li>
            </ul>
          </nav>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/40 py-4 px-6">
          <nav>
            <ul className="flex flex-col gap-2 font-medium text-lg">
              <li>
                <Link 
                  to="/demand" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block px-4 py-3 rounded-lg text-foreground hover:text-primary transition-colors ${location.pathname === '/demand' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                >
                  找需求
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/building" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block px-4 py-3 rounded-lg text-foreground hover:text-primary transition-colors ${location.pathname === '/building' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                >
                  做产品
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/agent-startup" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block px-4 py-3 rounded-lg text-foreground hover:text-primary transition-colors ${location.pathname === '/agent-startup' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                >
                  智能体创业
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/marketing" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block px-4 py-3 rounded-lg text-foreground hover:text-primary transition-colors ${location.pathname === '/marketing' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                >
                  搞营销
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/branding" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block px-4 py-3 rounded-lg text-foreground hover:text-primary transition-colors ${location.pathname === '/branding' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                >
                  创品牌
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/single-member" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block px-4 py-3 rounded-lg text-foreground hover:text-primary transition-colors ${location.pathname === '/single-member' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-primary/10'}`}
                >
                  一人公司
                </Link>
              </li>
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
