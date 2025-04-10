
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { BrainCog, Send, User, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  projectName?: string;
}

const ChatInterface = ({ projectName }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `欢迎使用SoloAI助手！${
        projectName ? `我已经了解了您的"${projectName}"项目。` : ""
      }您可以向我咨询任何关于营销策略、内容创作或市场分析的问题。`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === "" || isLoading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "根据您的项目信息，我建议您考虑采用内容营销策略。创建有价值的博客文章和社交媒体内容能够吸引目标受众并建立品牌权威性。",
        "您的项目适合使用社交媒体营销。根据目标客户画像，建议重点关注LinkedIn和微信平台，通过定期发布专业内容来提高品牌知名度。",
        "分析您的项目后，我建议采用搜索引擎优化(SEO)策略。通过优化网站内容和结构，可以提高自然流量并降低获客成本。",
        "您的项目可以考虑电子邮件营销策略。通过建立订阅列表并定期发送有价值的内容，可以培养潜在客户并提高转化率。",
        "对于您的项目，建议尝试合作营销策略。寻找互补业务的合作伙伴，共同开展营销活动可以扩大受众范围并共享资源。"
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="tech-card flex flex-col h-[600px] max-h-[80vh]">
      <div className="p-4 border-b border-border/40 flex items-center gap-2">
        <BrainCog className="h-5 w-5 text-primary" />
        <h3 className="font-medium">AI助手对话</h3>
      </div>
      
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`flex gap-3 max-w-[80%] ${
                  message.role === "assistant" ? "" : "flex-row-reverse"
                }`}
              >
                <Avatar className={`h-8 w-8 ${
                  message.role === "assistant" 
                    ? "bg-primary/20 border border-primary/50" 
                    : "bg-secondary"
                }`}>
                  {message.role === "assistant" ? (
                    <BrainCog className="h-4 w-4 text-primary" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </Avatar>
                
                <div>
                  <div
                    className={`rounded-2xl p-4 ${
                      message.role === "assistant"
                        ? "bg-secondary/50 text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 px-2">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8 bg-primary/20 border border-primary/50">
                  <Loader2 className="h-4 w-4 text-primary animate-spin" />
                </Avatar>
                <div className="rounded-2xl p-4 bg-secondary/50 text-foreground flex items-center">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 bg-primary/60 rounded-full animate-pulse"></span>
                    <span className="h-2 w-2 bg-primary/60 rounded-full animate-pulse delay-75"></span>
                    <span className="h-2 w-2 bg-primary/60 rounded-full animate-pulse delay-150"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t border-border/40">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            placeholder="输入您的问题..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="tech-input flex-1"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon"
            className="bg-primary hover:bg-primary/90"
            disabled={isLoading || inputValue.trim() === ""}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default ChatInterface;
