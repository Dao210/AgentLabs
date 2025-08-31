import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Lightbulb, Target, Palette, Rocket, Users, TrendingUp, BarChart3, CheckCircle, Heart, Zap, Globe } from "lucide-react";

const BrandingPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "品牌定位",
      description: "明确品牌的核心价值和目标受众",
      icon: Target,
      details: "品牌定位是品牌建设的第一步，需要明确品牌的核心价值、使命和愿景。通过深入分析目标受众的需求和偏好，确定品牌在市场中的独特位置，与竞争对手形成差异化。"
    },
    {
      id: 2,
      title: "品牌识别",
      description: "设计品牌的视觉和语言识别系统",
      icon: Palette,
      details: "品牌识别包括品牌的视觉元素（Logo、色彩、字体等）和语言风格（品牌口号、语调等）。这些元素需要与品牌定位保持一致，形成统一的品牌形象，增强品牌记忆度。"
    },
    {
      id: 3,
      title: "品牌传播",
      description: "制定有效的品牌传播策略",
      icon: Zap,
      details: "品牌传播是将品牌信息传递给目标受众的过程。需要选择合适的传播渠道（社交媒体、内容营销、公关活动等），制定一致的传播信息，建立品牌与消费者之间的情感连接。"
    },
    {
      id: 4,
      title: "品牌体验",
      description: "打造一致的品牌用户体验",
      icon: Heart,
      details: "品牌体验是消费者在与品牌互动过程中的整体感受。从产品设计、客户服务到售后支持，每个触点都需要体现品牌价值，提供优质的用户体验，增强品牌忠诚度。"
    }
  ];

  const principles = [
    {
      title: "一致性",
      description: "在所有触点保持品牌形象统一",
      icon: CheckCircle
    },
    {
      title: "差异化",
      description: "突出品牌的独特价值和个性",
      icon: Rocket
    },
    {
      title: "情感连接",
      description: "与目标受众建立深层次的情感联系",
      icon: Heart
    },
    {
      title: "持续进化",
      description: "根据市场变化不断优化品牌策略",
      icon: TrendingUp
    }
  ];

  const brandCaseStudies = [
    {
      id: 1,
      title: "苹果 Apple",
      description: "通过极简设计和创新理念，成为全球最具价值品牌",
      brandStrength: 95,
      recognition: 98,
      loyalty: 92,
      tags: ["科技", "创新", "设计"],
      brandOrigin: "苹果始终坚持以用户体验为核心，通过革命性的产品设计和技术创新，重新定义了多个行业。",
      userAnalysis: "苹果的目标用户是追求高品质生活、注重设计和体验的消费者，他们愿意为优质产品支付溢价。",
      brandStrategy: "苹果采用高端定位策略，通过极简设计、创新技术和整合生态系统，打造独特的品牌体验。",
      analysisDate: "2023-12-15"
    },
    {
      id: 2,
      title: "耐克 Nike",
      description: "以激励运动精神为核心，成为全球运动品牌领导者",
      brandStrength: 92,
      recognition: 95,
      loyalty: 88,
      tags: ["运动", "激励", "创新"],
      brandOrigin: "耐克的品牌理念源于创始人对运动的热爱，致力于为运动员提供最好的产品，帮助他们突破极限。",
      userAnalysis: "耐克的目标用户涵盖专业运动员和普通运动爱好者，品牌通过不同产品线满足不同层次用户的需求。",
      brandStrategy: "耐克通过与顶级运动员合作、赞助体育赛事和创新营销活动，强化品牌的专业形象和激励精神。",
      analysisDate: "2023-12-10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">创品牌</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从品牌定位到用户体验，掌握品牌建设的核心方法论
            </p>
          </div>
          
          <Card className="mb-12 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                品牌建设四步法
              </CardTitle>
              <CardDescription className="text-base">遵循科学的方法论，打造具有影响力的品牌</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={step.id}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeStep === index ? 'bg-white dark:bg-gray-800 shadow-lg border-primary border-2' : 'bg-white/80 dark:bg-gray-800/80 hover:shadow-md border border-gray-200 dark:border-gray-700'}`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${activeStep === index ? 'bg-primary text-primary-foreground' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      {activeStep === index && (
                        <p className="text-sm text-foreground mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">{step.details}</p>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Search className="h-5 w-5 mr-2 text-primary" />
                  当前步骤详情
                </h3>
                <div className="prose max-w-none">
                  <p>{steps[activeStep].details}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-800">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-700 dark:text-indigo-300">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-3">
                    <Target className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  核心原则
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {principles.map((principle, index) => {
                    const Icon = principle.icon;
                    return (
                      <div key={index} className="flex items-start p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-900 dark:text-indigo-100">{principle.title}</h4>
                          <p className="text-sm text-indigo-700 dark:text-indigo-400 mt-1">{principle.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-rose-200 dark:border-rose-800">
              <CardHeader>
                <CardTitle className="flex items-center text-rose-700 dark:text-rose-300">
                  <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-800 flex items-center justify-center mr-3">
                    <Rocket className="h-4 w-4 text-rose-600 dark:text-rose-300" />
                  </div>
                  行动建议
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <h4 className="font-medium text-rose-900 dark:text-rose-100 mb-2">立即行动</h4>
                    <p className="text-sm text-rose-700 dark:text-rose-400 mb-3">明确你的品牌核心价值和目标受众，写下品牌的使命和愿景陈述。</p>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                      记录我的品牌定位
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <h4 className="font-medium text-rose-900 dark:text-rose-100 mb-2">深入学习</h4>
                    <p className="text-sm text-rose-700 dark:text-rose-400 mb-3">了解更多关于品牌识别、传播策略和用户体验设计的方法。</p>
                    <Button variant="outline" className="w-full border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white">
                      查看完整指南
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                品牌建设案例
                <Badge variant="outline" className="ml-auto bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                  精选 2 个
                </Badge>
              </CardTitle>
              <CardDescription>学习成功品牌的建设策略和方法</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {brandCaseStudies.map((caseStudy) => (
                  <div key={caseStudy.id} className="group bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-purple-900/20">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                            {caseStudy.title}
                          </h3>
                          <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                            品牌强度 {caseStudy.brandStrength}%
                          </Badge>
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
                            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">品牌起源</h4>
                            <p className="text-sm text-blue-700 dark:text-blue-400">
                              {caseStudy.brandOrigin}
                            </p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">用户分析</h4>
                            <p className="text-sm text-green-700 dark:text-green-400">
                              {caseStudy.userAnalysis}
                            </p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-800">
                            <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">品牌策略</h4>
                            <p className="text-sm text-orange-700 dark:text-orange-400">
                              {caseStudy.brandStrategy}
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
                          <span className="text-gray-600 dark:text-gray-400">认知度: <strong className="text-emerald-600 dark:text-emerald-400">{caseStudy.recognition}%</strong></span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-400">忠诚度: <strong className="text-blue-600 dark:text-blue-400">{caseStudy.loyalty}%</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrandingPage;