import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MarketingPlanGenerator from "./pages/MarketingPlanGenerator";
import NotFound from "./pages/NotFound";
import DemandPage from "./pages/demand";
import AiTools from "./pages/aitools";
import BuildingPage from "./pages/building";
import BrandingPage from "./pages/branding";
// 检查文件路径是否正确，推测可能是文件扩展名缺失，尝试添加 .tsx 扩展名
import SingleMemberPage from "./pages/single-member.tsx";
import AgentStartupPage from "./pages/agent-startup";
import OneDollarPage from "./pages/onedollar";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<DemandPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketing" element={<MarketingPlanGenerator />} />
            <Route path="/single-member" element={<SingleMemberPage />} />
            <Route path="/aitools" element={<AiTools />} />
            <Route path="/building" element={<BuildingPage />} />
            <Route path="/branding" element={<BrandingPage />} />
            <Route path="/agent-startup" element={<AgentStartupPage />} />
            <Route path="/onedollar" element={<OneDollarPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
