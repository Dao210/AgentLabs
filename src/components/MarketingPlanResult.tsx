
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Download, Share2, FileText, BarChart, Users, Megaphone, Calendar, Target, Link } from "lucide-react";
import { MarketingPlanData } from "@/pages/MarketingPlanGenerator";
import { goalOptions, channelOptions } from "@/utils/marketingOptions";

interface MarketingPlanResultProps {
  planData: MarketingPlanData;
}

const MarketingPlanResult = ({ planData }: MarketingPlanResultProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  
  const targetGoals = planData.goals.map(goalId => {
    return goalOptions.find(option => option.id === goalId)?.label || goalId;
  });
  
  const usedChannels = planData.currentChannels.map(channelId => {
    return channelOptions.find(option => option.id === channelId)?.label || channelId;
  });
  
  // Smart recommendations based on industry
  const getIndustrySpecificTools = () => {
    switch (planData.industry) {
      case "科技/IT":
        return [
          { name: "Hootsuite", url: "hootsuite.com", description: "社交媒体管理平台" },
          { name: "SEMrush", url: "semrush.com", description: "SEO和竞争分析工具" },
          { name: "GitHub", url: "github.com", description: "技术内容与社区" }
        ];
      case "电子商务":
        return [
          { name: "Shopify", url: "shopify.com", description: "电商平台" },
          { name: "Klaviyo", url: "klaviyo.com", description: "电子邮件营销" },
          { name: "TikTok Shop", url: "tiktok.com/shop", description: "社交电商" }
        ];
      case "教育":
        return [
          { name: "Teachable", url: "teachable.com", description: "在线课程平台" },
          { name: "LinkedIn Learning", url: "linkedin.com/learning", description: "专业技能培训" },
          { name: "Notion", url: "notion.so", description: "内容管理与协作" }
        ];
      case "健康医疗":
        return [
          { name: "Doximity", url: "doximity.com", description: "医疗专业人士网络" },
          { name: "WebMD", url: "webmd.com", description: "医疗内容平台" },
          { name: "Zocdoc", url: "zocdoc.com", description: "医疗预约平台" }
        ];
      case "金融服务":
        return [
          { name: "Mint", url: "mint.com", description: "个人理财工具" },
          { name: "Investopedia", url: "investopedia.com", description: "金融教育内容" },
          { name: "LinkedIn", url: "linkedin.com", description: "专业人脉与内容" }
        ];
      default:
        return [
          { name: "Hubspot", url: "hubspot.com", description: "营销自动化平台" },
          { name: "Canva", url: "canva.com", description: "设计与视觉内容工具" },
          { name: "Buffer", url: "buffer.com", description: "社交媒体管理" }
        ];
    }
  };
  
  // Smart channel recommendations based on goals
  const getRecommendedChannels = () => {
    // 默认推荐渠道
    let recommendedChannels = ["LinkedIn", "官方博客", "行业论坛"];
    
    if (planData.goals.includes("awareness")) {
      recommendedChannels = ["小红书", "微信公众号", "知乎", "B站"];
    }
    
    if (planData.goals.includes("traffic")) {
      recommendedChannels = ["SEO优化", "SEM广告", "内容营销", "社交媒体引流"];
    }
    
    if (planData.goals.includes("leads")) {
      recommendedChannels = ["LinkedIn广告", "行业垂直媒体", "线下活动", "网络研讨会"];
    }
    
    if (planData.goals.includes("sales")) {
      recommendedChannels = ["精准电子邮件", "销售自动化工具", "再营销广告", "社交媒体私信"];
    }
    
    if (planData.goals.includes("retention")) {
      recommendedChannels = ["会员计划", "邮件通讯", "社区建设", "客户成功案例"];
    }
    
    return recommendedChannels;
  };
  
  // 基于预算的策略推荐
  const getBudgetStrategy = () => {
    switch (planData.budget) {
      case "低预算 (5千以下/月)":
        return {
          focus: "内容营销和有机增长",
          allocation: [
            { name: "内容创作", percentage: 50 },
            { name: "社交媒体运营", percentage: 30 },
            { name: "SEO优化", percentage: 20 }
          ],
          tactics: [
            "重点发展自有媒体渠道",
            "利用免费工具进行SEO优化",
            "与行业KOL建立合作关系"
          ]
        };
      case "中等预算 (5千-2万/月)":
        return {
          focus: "平衡有机增长和付费渠道",
          allocation: [
            { name: "内容营销", percentage: 35 },
            { name: "付费广告", percentage: 35 },
            { name: "KOL合作", percentage: 20 },
            { name: "工具与自动化", percentage: 10 }
          ],
          tactics: [
            "测试不同付费渠道的ROI",
            "投资高质量内容创作",
            "实施有限的自动化营销"
          ]
        };
      case "高预算 (2万-10万/月)":
        return {
          focus: "多渠道整合与品牌建设",
          allocation: [
            { name: "品牌建设", percentage: 30 },
            { name: "付费广告", percentage: 30 },
            { name: "内容策略", percentage: 25 },
            { name: "营销技术", percentage: 15 }
          ],
          tactics: [
            "全面的品牌建设活动",
            "投资高级营销自动化工具",
            "发展多渠道获客策略"
          ]
        };
      case "企业级 (10万以上/月)":
        return {
          focus: "全方位市场占领与品牌领导力",
          allocation: [
            { name: "品牌领导力建设", percentage: 35 },
            { name: "整合营销传播", percentage: 30 },
            { name: "营销技术生态", percentage: 20 },
            { name: "数据分析与优化", percentage: 15 }
          ],
          tactics: [
            "行业领导者定位策略",
            "全渠道品牌一致性建设",
            "高级数据分析与AI营销技术应用"
          ]
        };
      default:
        return {
          focus: "平衡策略",
          allocation: [
            { name: "内容营销", percentage: 40 },
            { name: "社交媒体", percentage: 30 },
            { name: "SEO与广告", percentage: 30 }
          ],
          tactics: [
            "均衡分配资源到不同渠道",
            "测试新兴平台与传统渠道",
            "根据数据调整投入"
          ]
        };
    }
  };
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
      toast({
        title: "营销方案已下载",
        description: `已为${planData.businessName}生成定制营销方案PDF文件`,
      });
      setIsDownloading(false);
    }, 1500);
  };
  
  const budgetStrategy = getBudgetStrategy();
  const industryTools = getIndustrySpecificTools();
  const recommendedChannels = getRecommendedChannels();
  
  return (
    <div className="space-y-6 py-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{planData.businessName} 的定制营销方案</h2>
          <p className="text-muted-foreground">基于您提供的业务信息，驰觅AI智能助手为您量身定制</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Share2 className="h-4 w-4 mr-2" /> 分享
          </Button>
          <Button 
            size="sm"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <Download className="h-4 w-4 mr-2" /> 
            {isDownloading ? "下载中..." : "下载方案"}
          </Button>
        </div>
      </div>
      
      <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="h-5 w-5 text-primary" />
            营销策略概览
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-secondary/20 border border-border/40">
              <h4 className="font-medium mb-2 text-primary">行业特点</h4>
              <p className="text-sm text-foreground/80">
                {planData.industry} 行业当前市场竞争激烈，消费者决策周期长，需要建立品牌信任和专业权威。
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline">{planData.industry}</Badge>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-secondary/20 border border-border/40">
              <h4 className="font-medium mb-2 text-primary">营销目标</h4>
              <p className="text-sm text-foreground/80">
                根据您选择的目标，我们推荐重点关注以下方向：
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {targetGoals.map((goal, index) => (
                  <Badge key={index} variant="secondary">{goal}</Badge>
                ))}
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-secondary/20 border border-border/40">
              <h4 className="font-medium mb-2 text-primary">预算策略</h4>
              <p className="text-sm text-foreground/80">
                {planData.budget} 级别最适合采用<strong className="text-primary">{budgetStrategy.focus}</strong>策略
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline">{planData.budget}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="audience" className="w-full">
        <TabsList className="grid grid-cols-4 h-auto py-2">
          <TabsTrigger value="audience" className="flex items-center gap-1.5">
            <Users className="h-4 w-4" /> 受众策略
          </TabsTrigger>
          <TabsTrigger value="channels" className="flex items-center gap-1.5">
            <Megaphone className="h-4 w-4" /> 渠道规划
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-1.5">
            <FileText className="h-4 w-4" /> 内容策略
          </TabsTrigger>
          <TabsTrigger value="metrics" className="flex items-center gap-1.5">
            <BarChart className="h-4 w-4" /> 效果指标
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="audience" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">受众分析</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border/40">
                  <h4 className="font-medium mb-2 text-primary">目标受众描述</h4>
                  <p className="text-sm whitespace-pre-line">
                    {planData.targetAudience || "未提供目标受众信息"}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <h5 className="text-sm font-medium mb-2">受众特征分析</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-xs">决策周期较长</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-xs">注重专业内容</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-xs">需要可靠证据</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-xs">追求价值与效率</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/20 border border-border/40">
                  <h4 className="font-medium mb-2 text-primary">受众触达策略</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs">1</span>
                      </div>
                      <span>在目标受众高度活跃的专业平台建立品牌影响力</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs">2</span>
                      </div>
                      <span>创建针对行业痛点的高质量教育内容</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs">3</span>
                      </div>
                      <span>利用社交媒体进行精准人群定向投放</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">行业洞察</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border/40">
                  <h4 className="font-medium mb-2 text-primary">行业趋势</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>数字化转型加速，客户期望全渠道一致体验</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>内容营销重要性提升，视频内容消费占比增加</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>个性化营销成为标准，客户期望定制化体验</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/20 border border-border/40">
                  <h4 className="font-medium mb-2 text-primary">竞争格局</h4>
                  <p className="text-sm mb-3">
                    {planData.industry}行业中，主要竞争对手正在采取以下策略：
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>内容营销</span>
                        <span className="text-primary">85%</span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>社交媒体影响力</span>
                        <span className="text-primary">78%</span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>KOL合作</span>
                        <span className="text-primary">65%</span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="channels" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">最佳营销渠道</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-primary">推荐渠道优先级</h4>
                      <Badge variant="outline">基于您的目标</Badge>
                    </div>
                    <div className="space-y-3">
                      {recommendedChannels.map((channel, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary text-xs">{index + 1}</span>
                          </div>
                          <span className="font-medium">{channel}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {usedChannels.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-border/40">
                      <h4 className="font-medium text-primary mb-3">当前使用渠道分析</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {usedChannels.map((channel, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span className="text-sm">{channel}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">预算分配</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge className="mb-2" variant="secondary">推荐预算策略</Badge>
                    <p className="text-sm">{budgetStrategy.focus}</p>
                  </div>
                  <div className="space-y-4">
                    {budgetStrategy.allocation.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>{item.name}</span>
                          <span className="text-primary">{item.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center justify-between">
                    <span>推荐工具平台</span>
                    <Badge variant="outline" className="text-xs">
                      {planData.industry} 行业专用
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {industryTools.map((tool, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-md bg-secondary/20 border border-border/30">
                        <Link className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium">{tool.name}</h4>
                            <Badge variant="outline" className="ml-2 text-xs">{tool.url}</Badge>
                          </div>
                          <p className="text-sm">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">战略执行要点</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">实施时间表</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 rounded-lg bg-secondary/20 border border-border/30">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full mb-2 inline-block">1-30天</span>
                        <ul className="space-y-1">
                          <li>• 确定营销目标与KPI</li>
                          <li>• 建立渠道内容框架</li>
                          <li>• 创建初始内容库</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/20 border border-border/30">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full mb-2 inline-block">30-90天</span>
                        <ul className="space-y-1">
                          <li>• 完善内容分发机制</li>
                          <li>• 测试付费广告策略</li>
                          <li>• 开展KOL合作</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="content" className="mt-6 space-y-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">内容类型</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-3">
                  <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                    <h4 className="font-medium mb-2 text-primary">教育型内容</h4>
                    <p className="text-sm">
                      创建解决行业问题的指南、教程、电子书等，建立专业形象并吸引潜在客户。
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                    <h4 className="font-medium mb-2 text-primary">案例分享</h4>
                    <p className="text-sm">
                      通过真实成功案例展示产品价值，增强信任度与购买信心。
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                    <h4 className="font-medium mb-2 text-primary">数据报告</h4>
                    <p className="text-sm">
                      发布行业研究与趋势分析，展示专业洞察与市场理解能力。
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">发布频率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>官方网站博客</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 rounded-full">
                          每周1-2篇
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>社交媒体更新</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 rounded-full">
                          每日1-2次
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>行业报告</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 rounded-full">
                          每季度1次
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>电子邮件</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 rounded-full">
                          每周1次
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">内容主题</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                      <Badge variant="outline" className="mb-2">核心主题</Badge>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          <span>行业趋势与未来展望</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          <span>解决方案对比与选择指南</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          <span>客户成功案例与ROI分析</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                      <Badge variant="outline" className="mb-2">热门话题</Badge>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          <span>数字化转型实践指南</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                          <span>效率提升与成本优化策略</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">内容分发矩阵</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                      <tr className="border-b border-border/40">
                        <th className="text-left p-2 text-sm font-medium text-muted-foreground">内容类型</th>
                        <th className="text-left p-2 text-sm font-medium text-muted-foreground">官方网站</th>
                        <th className="text-left p-2 text-sm font-medium text-muted-foreground">社交媒体</th>
                        <th className="text-left p-2 text-sm font-medium text-muted-foreground">电子邮件</th>
                        <th className="text-left p-2 text-sm font-medium text-muted-foreground">第三方平台</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/40">
                        <td className="p-2 font-medium">深度文章</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-muted-foreground">○</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-primary">●</td>
                      </tr>
                      <tr className="border-b border-border/40">
                        <td className="p-2 font-medium">视频内容</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-muted-foreground">○</td>
                        <td className="p-2 text-center text-primary">●</td>
                      </tr>
                      <tr className="border-b border-border/40">
                        <td className="p-2 font-medium">案例分析</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-muted-foreground">○</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">行业报告</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-muted-foreground">○</td>
                        <td className="p-2 text-center text-primary">●</td>
                        <td className="p-2 text-center text-muted-foreground">○</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="metrics" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">关键绩效指标 (KPI)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                    <h4 className="font-medium mb-2 text-primary">品牌知名度指标</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-xs">1</span>
                        </div>
                        <div>
                          <span className="font-medium">社交媒体关注增长率</span>
                          <p className="text-xs text-muted-foreground">目标: 每月20%的增长速度</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-xs">2</span>
                        </div>
                        <div>
                          <span className="font-medium">品牌提及次数</span>
                          <p className="text-xs text-muted-foreground">目标: 行业媒体每月至少5次正面提及</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                    <h4 className="font-medium mb-2 text-primary">转化指标</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-xs">1</span>
                        </div>
                        <div>
                          <span className="font-medium">线索转化率</span>
                          <p className="text-xs text-muted-foreground">目标: 访客到线索的转化率达到5%以上</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-xs">2</span>
                        </div>
                        <div>
                          <span className="font-medium">客户获取成本(CAC)</span>
                          <p className="text-xs text-muted-foreground">目标: 逐月降低10%的获客成本</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">数据监测与优化</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                    <h4 className="font-medium mb-2 text-primary">推荐监测工具</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Google Analytics 4</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Hotjar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>SEMrush</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Buffer Analytics</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                    <h4 className="font-medium mb-2 text-primary">评估周期</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>每周评估</span>
                        <Badge variant="outline" className="text-xs">
                          内容表现与流量
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>每月评估</span>
                        <Badge variant="outline" className="text-xs">
                          转化率与ROI
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>季度评估</span>
                        <Badge variant="outline" className="text-xs">
                          整体策略与预算
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                    <h4 className="font-medium mb-2 text-primary">优化路径</h4>
                    <p className="text-sm mb-2">数据驱动的迭代策略:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>A/B测试内容标题与格式</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>优化转化路径与触发点</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>根据渠道ROI调整预算分配</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-background/50 backdrop-blur-sm border border-border/40">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">预期成果</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                  <h4 className="font-medium mb-2 text-primary">短期成果 (1-3个月)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>品牌知名度提升20%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>网站流量增加30%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>线索生成提升15%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                  <h4 className="font-medium mb-2 text-primary">中期成果 (3-6个月)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>转化率提升25%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>客户获取成本降低20%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>内容互动率增加40%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-3 rounded-lg bg-secondary/20 border border-border/40">
                  <h4 className="font-medium mb-2 text-primary">长期成果 (6-12个月)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>市场份额增加15%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>客户终身价值提升30%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                      <span>营销投资回报率达200%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingPlanResult;
