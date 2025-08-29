export interface DemandCaseStudy {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demandSource: string;
  userAnalysis: string;
  currentSupply: string;
  feasibility: number; // 0-100分
  successRate: number; // 0-100分
  analysisDate: string; // YYYY-MM-DD格式
}

export const demandCaseStudies: DemandCaseStudy[] = [
  {
    id: 1,
    title: "倒计时工具应用",
    description: "一款简洁美观的倒计时工具，支持多种主题和提醒功能。",
    tags: ["工具", "效率", "生产力"],
    demandSource: "用户在社交媒体上经常询问如何更好地管理时间，特别是在重要事件前的倒计时需求。",
    userAnalysis: "目标用户主要是学生、职场人士和活动策划者，他们需要一个简单易用的倒计时工具来帮助管理时间。",
    currentSupply: "市场上已有一些倒计时应用，但大多数功能复杂或广告过多，缺乏简洁美观的设计。",
    feasibility: 85,
    successRate: 75,
    analysisDate: "2023-10-15"
  },
  {
    id: 2,
    title: "个性化音乐生成器",
    description: "基于AI技术的个性化音乐生成器，用户可以根据心情、场景生成专属音乐。",
    tags: ["音乐", "AI", "娱乐"],
    demandSource: "随着AI技术的发展，用户对个性化内容的需求增加，特别是在音乐领域。",
    userAnalysis: "目标用户是音乐爱好者、内容创作者和需要背景音乐的视频制作者。",
    currentSupply: "目前市场上有一些AI音乐生成工具，但个性化程度和易用性有待提高。",
    feasibility: 70,
    successRate: 65,
    analysisDate: "2023-10-16"
  },
  {
    id: 3,
    title: "智能购物清单应用",
    description: "结合AI推荐和用户习惯分析的智能购物清单应用，帮助用户更高效地购物。",
    tags: ["购物", "AI", "生活"],
    demandSource: "用户在购物时经常忘记需要购买的物品，需要一个智能提醒工具。",
    userAnalysis: "目标用户是家庭主妇、上班族和经常购物的人群。",
    currentSupply: "市场上已有很多购物清单应用，但智能化程度不高，缺乏个性化推荐。",
    feasibility: 80,
    successRate: 70,
    analysisDate: "2023-10-17"
  },
  {
    id: 4,
    title: "北美《道德经》释意网页",
    description: "专为北美用户设计的《道德经》现代化英文释意网站，结合当代生活场景和西方思维方式的深度解读。",
    tags: ["文化", "哲学", "教育", "北美市场", "东方智慧"],
    demandSource: "Google搜索显示41万+相关网页，Reddit r/taoism社区12万+成员，Amazon《道德经》英文版年销量50万+，显示北美用户对东方哲学特别是道家思想的强烈兴趣。",
    userAnalysis: "核心用户：25-45岁北美高学历人群（大学以上学历占78%）、科技从业者、心理咨询师、瑜伽/冥想教练、哲学爱好者。次要用户：对中国文化感兴趣的学者、寻求心灵平静的职场人士。",
    currentSupply: "现有供给严重不足：1) 学术性翻译过于晦涩，缺乏生活化应用；2) 碎片化内容多，系统性解读少；3) 缺乏结合北美文化语境的本土化解释；4) 交互体验差，多为静态文本；5) 缺乏现代生活场景的应用指导。",
    feasibility: 92,
    successRate: 78,
    analysisDate: "2024-01-15"
  }
];