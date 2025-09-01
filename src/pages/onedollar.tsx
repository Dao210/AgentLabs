import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, DollarSign, Globe, Code, Users, TrendingUp, Award } from 'lucide-react';

const OneDollarPage = () => {
  // SEO metadata
  const pageTitle = "我的第一个一美元 - 从零到一的创业故事";
  const pageDescription = "真实记录通过做海外网站获得第一个一美元的完整过程，分享从想法到实现的经验和教训。";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* SEO优化的标题和描述 */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{pageTitle}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{pageDescription}</p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <DollarSign className="mr-2 h-6 w-6 text-green-500" />
                从零到一美元的旅程
              </CardTitle>
              <CardDescription>
                一个关于坚持、学习和突破的故事
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  在创业的道路上，第一个一美元往往具有特殊的意义。它不仅仅是收入，更是对想法可行性的验证，
                  是对努力的回报，也是继续前行的动力。今天，我想分享我通过做海外网站获得第一个一美元的真实经历。
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  背景与动机
                </h2>
                <p className="mb-4">
                  作为一名独立开发者，我一直想验证自己的技术能力能否转化为实际收入。在观察了海外市场对特定工具的需求后，
                  我决定创建一个解决具体问题的网站。我的目标很明确：做出一个有人愿意为之付费的产品。
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  产品开发过程
                </h2>
                <p className="mb-4">
                  我花了大约两周时间开发了一个简单的工具网站，主要功能是帮助用户快速生成特定格式的内容。
                  我专注于核心功能，避免过度设计，确保用户能够快速理解和使用。
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  推广与获客
                </h2>
                <p className="mb-4">
                  产品上线后，我在相关的Reddit社区和论坛分享了我的工具，并附上了真实使用案例。
                  我也通过Twitter和LinkedIn分享产品更新，吸引早期用户。
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  第一笔收入
                </h2>
                <p className="mb-4">
                  大约在产品上线的第三周，我收到了第一笔付款通知。虽然只有一美元，但那种兴奋和成就感难以言表。
                  这证明了我的想法是有价值的，也给了我继续优化产品的信心。
                </p>
                
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">关键经验总结</h3>
                      <ul className="list-disc pl-5 space-y-2 text-green-700 dark:text-green-300">
                        <li>专注于解决一个具体问题，而不是做一个大而全的产品</li>
                        <li>早期用户反馈极其宝贵，要积极收集并快速迭代</li>
                        <li>即使是很小的收入也值得庆祝，它是验证假设的重要里程碑</li>
                        <li>持续学习和改进是长期成功的关键</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold mt-8 mb-4">后续发展</h2>
                <p className="mb-4">
                  获得第一个一美元后，我继续优化产品功能，改善用户体验，并逐步增加营销投入。
                  虽然路程还很长，但这第一个一美元给了我继续前进的勇气和方向。
                </p>
                
                <div className="text-center mt-10">
                  <Button asChild size="lg">
                    <a href="/">
                      返回首页
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                    <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  技术实现
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  使用React和Next.js构建，部署在Vercel上，确保快速加载和良好的用户体验。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  用户反馈
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  早期用户提供了宝贵的改进建议，帮助我不断完善产品功能。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  持续增长
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  通过持续优化和推广，产品用户数量稳步增长，收入也在逐步提升。
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">你也可以做到</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              每个成功的创业者都曾经历过从零到一的过程。不要害怕开始，不要忽视小的进展。
              坚持学习，持续改进，你的第一个一美元也会到来。
            </p>
            <Button asChild variant="outline">
              <a href="/building">
                了解更多创业经验
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OneDollarPage;