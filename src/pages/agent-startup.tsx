import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Lightbulb, Target, Wrench, Rocket, Users, TrendingUp, BarChart3, CheckCircle, Brain, Zap, Globe, Cpu, Network } from "lucide-react";

const AgentStartupPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "发现痛点",
      description: "识别真实存在的问题和需求",
      icon: Lightbulb,
      details: "通过观察、调研和数据分析，发现用户在日常生活或工作中遇到的真实问题。一个好的产品始于对痛点的深刻理解。"
    },
    {
      id: 2,
      title: "验证需求",
      description: "确认问题的普遍性和重要性",
      icon: Target,
      details: "通过用户访谈、问卷调查等方式，验证你发现的问题是否具有普遍性，以及用户是否愿意为此付费解决。"
    },
    {
      id: 3,
      title: "构建方案",
      description: "设计解决问题的产品方案",
      icon: Wrench,
      details: "基于对痛点的理解，构思创新的解决方案。考虑技术可行性、成本控制和用户体验，设计出简洁有效的产品原型。"
    },
    {
      id: 4,
      title: "快速验证",
      description: "用最小成本测试产品概念",
      icon: Rocket,
      details: "制作MVP（最小可行产品），快速推向市场进行测试。收集用户反馈，验证产品是否真正解决了用户问题。"
    }
  ];

  const principles = [
    {
      title: "用户至上",
      description: "始终以用户需求为核心，解决真实问题",
      icon: Users
    },
    {
      title: "简单有效",
      description: "专注于核心功能，避免过度设计",
      icon: CheckCircle
    },
    {
      title: "快速迭代",
      description: "小步快跑，持续优化产品",
      icon: TrendingUp
    },
    {
      title: "数据驱动",
      description: "基于数据反馈，科学决策",
      icon: BarChart3
    }
  ];

  const agentCaseStudies = [
    {
      id: 1,
      title: "智能客服代理",
      description: "通过AI技术实现24小时在线客服，提升用户体验和企业效率",
      feasibility: 92,
      successRate: 88,
      tags: ["AI", "客服", "自动化"],
      demandSource: "传统客服成本高、响应慢，用户对即时服务需求强烈",
      userAnalysis: "主要面向电商、金融、教育等行业，目标用户是需要客户服务的企业",
      solution: "利用自然语言处理技术，构建智能客服系统，实现自动问答和问题解决",
      analysisDate: "2023-12-15"
    },
    {
      id: 2,
      title: "智能写作助手",
      description: "帮助内容创作者快速生成高质量文章和文案",
      feasibility: 88,
      successRate: 85,
      tags: ["AI", "写作", "内容创作"],
      demandSource: "内容营销需求增长，但专业写作者供给不足，创作效率有待提升",
      userAnalysis: "目标用户包括自媒体运营者、市场营销人员、文案策划等需要频繁产出内容的群体",
      solution: "基于大规模语言模型，提供多种写作模板和风格选择，辅助用户快速生成内容",
      analysisDate: "2023-12-10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">智能体创业</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从发现痛点到验证需求，掌握智能体创业的核心方法论
            </p>
          </div>
          
          <Card className="mb-12 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                智能体创业四步法
              </CardTitle>
              <CardDescription className="text-base">遵循科学的方法论，提高创业成功率</CardDescription>
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
                    <p className="text-sm text-rose-700 dark:text-rose-400 mb-3">选择一个你感兴趣的领域，开始观察和记录可能存在的用户痛点。</p>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                      记录我的第一个想法
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <h4 className="font-medium text-rose-900 dark:text-rose-100 mb-2">深入学习</h4>
                    <p className="text-sm text-rose-700 dark:text-rose-400 mb-3">了解更多关于用户调研、需求验证和产品设计的方法。</p>
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
                智能体创业案例
                <Badge variant="outline" className="ml-auto bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                  精选 2 个
                </Badge>
              </CardTitle>
              <CardDescription>学习成功智能体产品背后的思维模式</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {agentCaseStudies.map((caseStudy) => (
                  <div key={caseStudy.id} className="group bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-purple-900/20">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
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
                              <Globe className="h-4 w-4 mr-2" />
                              需求来源
                            </h4>
                            <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
                              {caseStudy.demandSource}
                            </p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              用户分析
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-400 leading-relaxed">
                              {caseStudy.userAnalysis}
                            </p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-800">
                            <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2 flex items-center">
                              <Wrench className="h-4 w-4 mr-2" />
                              解决方案
                            </h4>
                            <p className="text-sm text-orange-700 dark:text-orange-400 leading-relaxed">
                              {caseStudy.solution}
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AgentStartupPage;