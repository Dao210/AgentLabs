import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Search, BarChart3, Database, Calculator, TrendingUp, Globe, ShoppingCart, Github, Smartphone } from "lucide-react";
import { demandCaseStudies, DemandCaseStudy } from '@/utils/demandCaseStudies';

const DemandPage: React.FC = () => {
  const [demand, setDemand] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = () => {
    if (!demand.trim()) return;
    
    setIsLoading(true);
    
    // 模拟分析过程
    setTimeout(() => {
      setAnalysisResult({
        demandStrength: 85,
        supplySaturation: 60,
        successProbability: 75,
        difficulty: 40,
        demandSources: [
          { source: 'Google Trends', value: 80, icon: TrendingUp },
          { source: 'Social Media', value: 75, icon: Globe },
          { source: 'E-commerce', value: 90, icon: ShoppingCart },
        ],
        supplyMetrics: [
          { metric: 'Website Count', value: 12500, icon: Globe },
          { metric: 'App Store', value: 350, icon: Smartphone },
          { metric: 'GitHub Repos', value: 5420, icon: Github },
        ],
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">找需求</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              挖掘用户需求，研究市场供给，帮助创业者评估小需求的可行性、难度及成功率
            </p>
          </div>
          
          <Card className="mb-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                智能需求分析
              </CardTitle>
              <CardDescription className="text-base">输入您的产品需求或概念，AI将为您分析市场机会</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="例如：AI个人理财助手、健康饮食追踪应用..."
                    value={demand}
                    onChange={(e) => setDemand(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                    className="pl-10 py-6 text-lg border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>
                <Button 
                  onClick={handleAnalyze} 
                  disabled={isLoading}
                  className="w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      分析中...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      开始分析
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {analysisResult && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 dark:from-emerald-900/20 dark:to-emerald-800/20 dark:border-emerald-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-emerald-700 dark:text-emerald-400">需求强度</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">{analysisResult.demandStrength}</div>
                    <Progress value={analysisResult.demandStrength} className="h-2 bg-emerald-200 dark:bg-emerald-800" />
                    <div className="text-xs text-emerald-600 dark:text-emerald-500 mt-2">/100分</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 dark:from-amber-900/20 dark:to-amber-800/20 dark:border-amber-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-amber-700 dark:text-amber-400">供给饱和度</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-2">{analysisResult.supplySaturation}</div>
                    <Progress value={analysisResult.supplySaturation} className="h-2 bg-amber-200 dark:bg-amber-800" />
                    <div className="text-xs text-amber-600 dark:text-amber-500 mt-2">/100分</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200 dark:from-violet-900/20 dark:to-violet-800/20 dark:border-violet-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-violet-700 dark:text-violet-400">项目难度</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-violet-900 dark:text-violet-100 mb-2">{analysisResult.difficulty}</div>
                    <Progress value={analysisResult.difficulty} className="h-2 bg-violet-200 dark:bg-violet-800" />
                    <div className="text-xs text-violet-600 dark:text-violet-500 mt-2">/100分</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-400">成功概率</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">{analysisResult.successProbability}</div>
                    <Progress value={analysisResult.successProbability} className="h-2 bg-blue-200 dark:bg-blue-800" />
                    <div className="text-xs text-blue-600 dark:text-blue-500 mt-2">/100分</div>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue="demand">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="demand">需求分析</TabsTrigger>
                  <TabsTrigger value="supply">供给分析</TabsTrigger>
                  <TabsTrigger value="evaluation">综合评估</TabsTrigger>
                </TabsList>
                
                <TabsContent value="demand" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>需求来源分析</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {analysisResult.demandSources.map((item: any, index: number) => {
                        const Icon = item.icon;
                        return (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Icon className="mr-2 h-4 w-4" />
                                <span className="font-medium">{item.source}</span>
                              </div>
                              <Badge variant="secondary">{item.value}%</Badge>
                            </div>
                            <Progress value={item.value} />
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="supply" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>供给指标</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {analysisResult.supplyMetrics.map((item: any, index: number) => {
                        const Icon = item.icon;
                        return (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center">
                              <Icon className="mr-3 h-5 w-5 text-muted-foreground" />
                              <span className="font-medium">{item.metric}</span>
                            </div>
                            <span className="text-lg font-semibold">{item.value.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="evaluation" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>成功概率分析</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p>
                          根据需求强度与供给饱和度的对比分析，该需求的成功概率为 
                          <span className="font-bold text-primary"> {analysisResult.successProbability}%</span>。
                        </p>
                        
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-semibold mb-2">建议：</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>需求强度较高，市场存在真实痛点</li>
                            <li>供给饱和度适中，存在市场机会</li>
                            <li>项目难度较低，适合初创团队</li>
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="p-4 border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center">
                              <BarChart3 className="mr-2 h-4 w-4" />
                              需求洞察
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              需求强度指数较高，表明用户对这类产品有较强的需求意愿。
                            </p>
                          </div>
                          
                          <div className="p-4 border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center">
                              <Database className="mr-2 h-4 w-4" />
                              市场机会
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              供给饱和度适中，说明市场尚未完全饱和，有进入机会。
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          {!analysisResult && !isLoading && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-indigo-700 dark:text-indigo-300">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-3">
                      <span className="text-indigo-600 dark:text-indigo-300 font-bold">1</span>
                    </div>
                    分析流程
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300">1</span>
                      </div>
                      <span className="text-sm">输入产品需求或概念</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300">2</span>
                      </div>
                      <span className="text-sm">AI智能分析市场数据</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300">3</span>
                      </div>
                      <span className="text-sm">生成多维度评估报告</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300">4</span>
                      </div>
                      <span className="text-sm">获得可行性建议</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-rose-200 dark:border-rose-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-rose-700 dark:text-rose-300">
                    <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-800 flex items-center justify-center mr-3">
                      <Database className="h-4 w-4 text-rose-600 dark:text-rose-300" />
                    </div>
                    数据来源
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-rose-500 mr-3" />
                      <div>
                        <div className="font-medium text-sm">Google Trends</div>
                        <div className="text-xs text-rose-600 dark:text-rose-400">搜索趋势分析</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <Globe className="h-5 w-5 text-rose-500 mr-3" />
                      <div>
                        <div className="font-medium text-sm">社交媒体</div>
                        <div className="text-xs text-rose-600 dark:text-rose-400">用户讨论热度</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <ShoppingCart className="h-5 w-5 text-rose-500 mr-3" />
                      <div>
                        <div className="font-medium text-sm">电商平台</div>
                        <div className="text-xs text-rose-600 dark:text-rose-400">产品需求反馈</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <Github className="h-5 w-5 text-rose-500 mr-3" />
                      <div>
                        <div className="font-medium text-sm">开源平台</div>
                        <div className="text-xs text-rose-600 dark:text-rose-400">技术供给分析</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  供需分析案例
                  <Badge variant="outline" className="ml-auto bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                    {demandCaseStudies.length} 个精选案例
                  </Badge>
                </CardTitle>
                <CardDescription>深度剖析真实市场需求，提供数据驱动的洞察</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {demandCaseStudies.map((caseStudy: DemandCaseStudy) => (
                    <div key={caseStudy.id} className="group bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-purple-900/20">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                              {caseStudy.title}
                            </h3>
                            <div className="flex gap-2 ml-4">
                              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                                可行性 {caseStudy.feasibility}%
                              </Badge>
                              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                                成功率 {caseStudy.successRate}%
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {caseStudy.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {caseStudy.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 text-purple-700 dark:text-purple-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center">
                                <TrendingUp className="h-4 w-4 mr-2" />
                                需求来源
                              </h4>
                              <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
                                {caseStudy.demandSource}
                              </p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 flex items-center">
                                <Globe className="h-4 w-4 mr-2" />
                                用户分析
                              </h4>
                              <p className="text-sm text-green-700 dark:text-green-400 leading-relaxed">
                                {caseStudy.userAnalysis}
                              </p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-800">
                              <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2 flex items-center">
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                当前供给
                              </h4>
                              <p className="text-sm text-orange-700 dark:text-orange-400 leading-relaxed">
                                {caseStudy.currentSupply}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          分析日期: <span className="font-medium">{caseStudy.analysisDate}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                            <span className="text-gray-600 dark:text-gray-400">可行性: <strong className="text-emerald-600 dark:text-emerald-400">{caseStudy.feasibility}%</strong></span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                            <span className="text-gray-600 dark:text-gray-400">成功率: <strong className="text-blue-600 dark:text-blue-400">{caseStudy.successRate}%</strong></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DemandPage;