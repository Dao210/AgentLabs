import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, Home, Calendar, Wrench, Feather, Image, Paintbrush, Music, Video, Code, Brain, GraduationCap, ToggleLeft, Users, Zap, Radio, Package } from 'lucide-react';

// 定义工具分类类型
interface ToolCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  subCategories?: { id: string; name: string }[];
}

// 定义工具类型
interface ToolItem {
  id: number;
  name: string;
  description: string;
  url: string;
  category: string;
  imageUrl: string;
}

const AiTools: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // 工具分类数据
  const categories: ToolCategory[] = [
    { id: 'term-117', name: 'AI Agent智能体', icon: Users },
    { id: 'term-37', name: 'AI应用/AI搜索', icon: Wrench },
    { id: 'term-7', name: 'AI写作工具', icon: Feather },
    {
      id: 'term-2',
      name: 'AI图像工具',
      icon: Image,
      subCategories: [
        { id: 'term-2-37', name: '常用AI图像工具' },
        { id: 'term-2-33', name: 'AI图片插画生成' },
        { id: 'term-2-32', name: 'AI图片背景移除' },
        { id: 'term-2-34', name: 'AI图片无损调整' },
        { id: 'term-2-36', name: 'AI图片优化修复' },
        { id: 'term-2-35', name: 'AI图片物体抹除' },
      ]
    },
    { id: 'term-19', name: 'AI设计工具', icon: Paintbrush },
    { id: 'term-6', name: 'AI音乐音频工具', icon: Music },
    { id: 'term-4', name: 'AI视频工具', icon: Video },
    { id: 'term-13', name: 'AI编程工具', icon: Code },
    { id: 'term-16', name: 'AI大模型', icon: Brain },
    {
      id: 'term-38',
      name: 'AI办公工具',
      icon: Wrench,
      subCategories: [
        { id: 'term-38-45', name: 'AI幻灯片和演示' },
        { id: 'term-38-46', name: 'AI表格数据处理' },
        { id: 'term-38-47', name: 'AI文档工具' },
        { id: 'term-38-48', name: 'AI思维导图' },
        { id: 'term-38-49', name: 'AI会议工具' },
        { id: 'term-38-51', name: 'AI效率提升' },
      ]
    },
    { id: 'term-20', name: 'AI内容检测', icon: Radio },
    { id: 'term-42', name: 'AI提示指令', icon: ToggleLeft },
    { id: 'term-17', name: 'AI垂直应用', icon: Wrench },
    { id: 'term-12', name: 'AI学习网站', icon: GraduationCap },
    { id: 'term-15', name: 'AI开发框架', icon: Code },
    { id: 'term-14', name: 'AI训练模型', icon: Package },
  ];

  // 工具数据
  const tools: ToolItem[] = [
    {
      id: 1,
      name: 'ChatGPT',
      description: 'OpenAI旗下AI对话工具',
      url: 'https://chat.openai.com',
      category: 'term-117',
      imageUrl: './aitools/chatgpt-icon.png'
    },
    {
      id: 2,
      name: '阿里通义',
      description: '阿里通义模型，中文最佳',
      url: 'https://tongyi.aliyun.com',
      category: 'term-16',
      imageUrl: './aitools/tongyi.png'
    },
    {
      id: 3,
      name: '百川模型',
      description: '开源、应用到行业',
      url: 'https://www.baichuan-ai.com',
      category: 'term-16',
      imageUrl: './aitools/baichuan.png'
    },
    {
      id: 4,
      name: '智谱AI',
      description: '清华系AI',
      url: 'https://open.bigmodel.cn/',
      category: 'term-16',
      imageUrl: './aitools/zhipu.png'
    },
    {
      id: 5,
      name: 'civitai',
      description: '图像模型社区',
      url: 'https://civitai.com/',
      category: 'term-2',
      imageUrl: './aitools/civitai.png'
    },
    {
      id: 6,
      name: 'GPT-4',
      description: 'OpenAI旗下最新的GPT-4模型',
      url: 'https://openai.com/product/gpt-4',
      category: 'term-16',
      imageUrl: './aitools/openai-gpt-model.png'
    },
    {
      id: 7,
      name: 'Midjourney',
      description: 'AI图像和插画生成工具',
      url: 'https://midjourney.com',
      category: 'term-2',
      imageUrl: './aitools/midjourney-icon.png'
    },
    {
      id: 8,
      name: 'midreal',
      description: 'AI游戏',
      url: 'https://www.midreal.ai',
      category: 'term-17',
      imageUrl: './aitools/midreal.png'
    },
    {
      id: 9,
      name: '极睿电商AI',
      description: '电商AI工具',
      url: 'https://www.infimind.com/',
      category: 'term-17',
      imageUrl: './aitools/infimind.png'
    },
    {
      id: 10,
      name: 'Chat2DB',
      description: '数据库AI',
      url: 'http://chat2db.ai/zh-CN',
      category: 'term-13',
      imageUrl: './aitools/chat2db.webp'
    },
    {
      id: 11,
      name: 'Chat2excel',
      description: '数据表AI',
      url: 'https://chatexcel.com',
      category: 'term-38',
      imageUrl: './aitools/chat2excel.png'
    },
    {
      id: 12,
      name: 'ReadWise Reader',
      description: 'AI总结提炼文章',
      url: 'https://readwise.io',
      category: 'term-7',
      imageUrl: './aitools/readwise.png'
    }
  ];

  // 过滤工具
  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 切换侧边栏
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* 移动端侧边栏 */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
          <div className="relative w-80 h-full bg-background shadow-lg">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg width="30" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.7712 11.7433C10.6088 11.9057 10.4731 12.0362 10.4731 12.0362L10.4744 12.0368C10.472 12.0359 10.3384 12.1675 10.1763 12.3297L8.6995 13.8065C8.53707 13.9689 8.53707 14.2344 8.6995 14.3968L10.1809 15.8782C10.3433 16.0406 10.6088 16.0406 10.7712 15.8782L20.8289 5.81848C20.9913 5.65606 20.9913 5.39057 20.8289 5.22815L15.8956 0.294838C15.7332 0.132416 15.4123 0 15.1827 0L5.76352 0.00391377C5.53391 0.00391377 5.21298 0.136982 5.05056 0.299404L0.121816 5.2288C-0.0406054 5.39122 -0.0406054 5.65671 0.121816 5.81913L6.04074 11.7381C6.20316 11.9005 6.46865 11.9005 6.63107 11.7381L8.10786 10.2613C8.27029 10.0988 8.27029 9.83336 8.10786 9.67094L4.25606 5.81913C4.09364 5.65671 4.09364 5.39122 4.25606 5.2288L6.26252 3.22299C6.42494 3.06057 6.74587 2.9275 6.97548 2.9275L13.9726 2.92424C14.2023 2.92359 14.5232 3.05666 14.6856 3.21908L16.6953 5.2288C16.8577 5.39122 16.8577 5.65671 16.6953 5.81913L10.7712 11.7433Z"
                      fill="currentColor"
                      className="text-primary"
                    />
                  </svg>
                  <span className="text-xl font-bold">驰觅智能</span>
                </div>
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
              <nav>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        to={`#${category.id}`} 
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted"
                        onClick={toggleSidebar}
                      >
                        <category.icon className="h-5 w-5" />
                        <span>{category.name}</span>
                      </Link>
                      {category.subCategories && (
                        <ul className="ml-8 mt-2 space-y-1">
                          {category.subCategories.map((sub) => (
                            <li key={sub.id}>
                              <Link 
                                to={`#${sub.id}`} 
                                className="block p-2 rounded-lg hover:bg-muted text-sm"
                                onClick={toggleSidebar}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-1">
        {/* 桌面端侧边栏 */}
        <div className="hidden lg:block w-64 bg-muted/30 border-r h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">AI工具分类</h2>
            <nav>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      to={`#${category.id}`} 
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted"
                    >
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </Link>
                    {category.subCategories && (
                      <ul className="ml-8 mt-1 space-y-1">
                        {category.subCategories.map((sub) => (
                          <li key={sub.id}>
                            <Link 
                              to={`#${sub.id}`} 
                              className="block p-2 rounded-lg hover:bg-muted text-sm"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* 主内容区域 */}
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            {/* 移动端菜单按钮 */}
            <div className="lg:hidden mb-4">
              <Button variant="outline" size="icon" onClick={toggleSidebar}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            {/* 搜索栏 */}
            <div className="mb-8">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="搜索AI工具..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* 热门工具 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="mr-2 h-6 w-6 text-yellow-500" />
                热门AI工具
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTools.slice(0, 8).map((tool) => (
                  <Card key={tool.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <a href={tool.url} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
                            <img 
                              src={tool.imageUrl} 
                              alt={tool.name} 
                              className="w-6 h-6 object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/aitools/default-tool.png';
                              }}
                            />
                          </div>
                          <h3 className="font-semibold text-lg">{tool.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 工具分类 */}
            <div className="space-y-12">
              {categories.map((category) => {
                const categoryTools = filteredTools.filter(tool => tool.category === category.id);
                if (categoryTools.length === 0) return null;

                return (
                  <section key={category.id} id={category.id}>
                    <div className="flex items-center mb-6">
                      <category.icon className="mr-2 h-5 w-5" />
                      <h2 className="text-xl font-bold">{category.name}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {categoryTools.map((tool) => (
                        <Card key={tool.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <a href={tool.url} target="_blank" rel="noopener noreferrer">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
                                  <img 
                                    src={tool.imageUrl} 
                                    alt={tool.name} 
                                    className="w-6 h-6 object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = '/aitools/default-tool.png';
                                    }}
                                  />
                                </div>
                                <h3 className="font-semibold">{tool.name}</h3>
                              </div>
                              <p className="text-sm text-muted-foreground">{tool.description}</p>
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AiTools;