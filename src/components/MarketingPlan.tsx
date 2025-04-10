
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Download, RefreshCcw, TargetIcon, UsersIcon, Share2Icon, LineChart, FileText } from "lucide-react";

interface MarketingPlanProps {
  projectName?: string;
}

const MarketingPlan = ({ projectName = "您的项目" }: MarketingPlanProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
      toast({
        title: "营销方案已生成",
        description: "您可以查看并下载完整的营销方案。",
      });
    }, 2000);
  };

  const handleDownload = () => {
    toast({
      title: "营销方案下载中",
      description: "文件将在几秒钟后下载到您的设备。",
    });
  };

  return (
    <Card className="tech-card w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">营销方案生成器</CardTitle>
            <CardDescription>
              基于您的项目信息，AI助手将生成完整的营销策略方案
            </CardDescription>
          </div>
          <div className="flex gap-2">
            {isGenerated && (
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" /> 下载
              </Button>
            )}
            <Button 
              size="sm" 
              onClick={handleGenerate}
              disabled={isGenerating}
              className={isGenerated ? "bg-secondary hover:bg-secondary/80" : "bg-primary hover:bg-primary/90"}
            >
              {isGenerating ? (
                <>
                  <RefreshCcw className="h-4 w-4 mr-2 animate-spin" /> 生成中...
                </>
              ) : isGenerated ? (
                <>
                  <RefreshCcw className="h-4 w-4 mr-2" /> 重新生成
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" /> 生成方案
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {!isGenerated ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <FileText className="h-16 w-16 text-primary/20 mb-4" />
            <h3 className="text-lg font-medium mb-2">营销方案尚未生成</h3>
            <p className="text-muted-foreground max-w-md mb-6">
              点击"生成方案"按钮，AI助手将基于{projectName}的信息创建完整的营销策略。
            </p>
          </div>
        ) : (
          <Tabs defaultValue="summary">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="summary">总览</TabsTrigger>
              <TabsTrigger value="audience">目标受众</TabsTrigger>
              <TabsTrigger value="channels">营销渠道</TabsTrigger>
              <TabsTrigger value="content">内容策略</TabsTrigger>
            </TabsList>
            
            <TabsContent value="summary" className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  方案摘要
                </h3>
                <p className="text-foreground/80">
                  针对{projectName}的营销方案侧重于内容营销和社交媒体推广，通过高质量内容建立品牌权威性，同时利用精准的社交媒体广告触达目标受众。建议采用90天执行周期，并根据数据分析持续优化策略方向。
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">预期成效</h4>
                    <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">中期见效</Badge>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• 品牌知名度提升40%</li>
                    <li>• 网站流量增加60%</li>
                    <li>• 转化率提升15%</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">预算分配</h4>
                    <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">高效利用</Badge>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• 内容创作: 40%</li>
                    <li>• 社交媒体广告: 35%</li>
                    <li>• SEO优化: 25%</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">关键指标</h4>
                    <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">可量化</Badge>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• 网站访客转化率</li>
                    <li>• 内容互动率</li>
                    <li>• 客户获取成本</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="audience" className="space-y-4">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <UsersIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">目标受众分析</h3>
                  <p className="text-foreground/70 mb-4">
                    根据{projectName}的特点，我们确定了以下主要目标受众群体：
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="tech-card border border-primary/20">
                  <h4 className="text-lg font-medium mb-3">主要受众</h4>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                      <div>
                        <strong className="block mb-1">城市白领专业人士</strong>
                        <p className="text-sm">25-40岁，关注职业发展和效率提升的专业人士，活跃于LinkedIn和专业社区。</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                      <div>
                        <strong className="block mb-1">小型企业主</strong>
                        <p className="text-sm">30-45岁，寻求提高业务效率，减少运营成本的创业者和小企业主。</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="tech-card border border-accent/20">
                  <h4 className="text-lg font-medium mb-3">次要受众</h4>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="bg-accent/20 text-accent w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                      <div>
                        <strong className="block mb-1">自由职业者</strong>
                        <p className="text-sm">20-35岁，需要高效管理多个项目和客户关系的独立工作者。</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-accent/20 text-accent w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                      <div>
                        <strong className="block mb-1">技术爱好者</strong>
                        <p className="text-sm">18-40岁，热衷尝试新技术产品，经常参与科技讨论社区的用户。</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="channels" className="space-y-4">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <Share2Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">推荐营销渠道</h3>
                  <p className="text-foreground/70 mb-4">
                    基于受众分析，以下营销渠道最适合{projectName}：
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">优先级高</Badge>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span>LinkedIn定向广告</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span>专业内容博客</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span>行业KOL合作</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Badge className="bg-accent/20 text-accent border-accent/30">优先级中</Badge>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span>电子邮件营销</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span>微信公众号</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span>专业论坛参与</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Badge variant="outline">辅助渠道</Badge>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
                      <span>搜索引擎优化</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
                      <span>线下活动</span>
                    </li>
                    <li className="flex items-center gap-2 text-foreground/80">
                      <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
                      <span>播客广告</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="content" className="space-y-4">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">内容策略规划</h3>
                  <p className="text-foreground/70 mb-4">
                    为{projectName}设计的内容营销策略，包含主题建议和发布计划：
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 pb-2 border-b border-border/40">核心内容主题</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <TargetIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block mb-1">行业趋势分析</strong>
                        <p className="text-sm text-foreground/80">
                          深度分析行业最新发展趋势，展现专业洞察，建立权威形象。
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <TargetIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block mb-1">问题解决指南</strong>
                        <p className="text-sm text-foreground/80">
                          针对目标用户痛点提供实用解决方案，强调产品价值。
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <TargetIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block mb-1">案例分享</strong>
                        <p className="text-sm text-foreground/80">
                          展示成功客户案例，通过真实故事建立产品信任度。
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 pb-2 border-b border-border/40">发布频率建议</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <LineChart className="h-5 w-5 text-accent" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">专业博客</span>
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">每周1-2篇</span>
                        </div>
                        <div className="w-full h-1.5 bg-secondary rounded-full mt-1.5">
                          <div className="h-full bg-accent rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <LineChart className="h-5 w-5 text-accent" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">社交媒体</span>
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">每日1次</span>
                        </div>
                        <div className="w-full h-1.5 bg-secondary rounded-full mt-1.5">
                          <div className="h-full bg-accent rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <LineChart className="h-5 w-5 text-accent" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">电子邮件</span>
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">每周1次</span>
                        </div>
                        <div className="w-full h-1.5 bg-secondary rounded-full mt-1.5">
                          <div className="h-full bg-accent rounded-full" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <LineChart className="h-5 w-5 text-accent" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">专业报告</span>
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">每月1次</span>
                        </div>
                        <div className="w-full h-1.5 bg-secondary rounded-full mt-1.5">
                          <div className="h-full bg-accent rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default MarketingPlan;
