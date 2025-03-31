import Layout from '../components/Layout'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AI和你一起创建运营项目
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              和你的AI团队一起创建项目，运营项目
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/create-project">
                <a className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
                  创建你的项目
                </a>
              </Link>
              <Link href="/get-started">
                <a className="bg-transparent hover:bg-blue-500 text-white border border-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
                  开始行动
                </a>
              </Link>
            </motion.div>
            <div className="mt-6 text-blue-100">当前项目自动化等级：L1</div>
            <div className="mt-8">
              <span className="text-3xl font-bold">10+</span>
              <p className="mt-2">项目创建完成</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">一天创建宣传网站及运营项目</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                轻松发布专业网站，无需具备编程技能。只需要一个想法
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">让AI帮助寻找客户，运营客户</h3>
                <p className="text-gray-600">
                  利用搜索引擎优化、营销工具以及评论自动化这些强大助力，实现收益的增长。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI行业专家帮助你快速成长</h3>
                <p className="text-gray-600">
                  借助人工智能，获取专家级协助，让繁琐的工作流程实现自动化。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">内容自动生成</h3>
                <p className="text-gray-600">
                  把智能体和你的项目结合起来，自动生成内容，每天在本地学习你的进展，并给出内容建议。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI创建的项目</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                加入创客平台，携手数万同行，一人企业创无限可能。
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Project examples - showing 8 as thumbnails */}
              {[
                "Pizza", "Portfolio", "Fitness", "Interior design", 
                "Social media", "Sushi", "Car detailing", "Dog walking"
              ].map((project, idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-500">{project}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{project} website example</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/create-business">
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
                  创建企业
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">关于驰幂科技</h2>
              <p className="text-gray-600 mb-8 text-lg">
                我们的使命就是要让经营一份事业比一份工作更为轻松容易。让创造更简单一些
              </p>
              <p className="text-gray-600 mb-10 text-lg">
                借助强大的人工智能工具，点燃你的梦想、创造你的业务。
              </p>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center mb-12">
                {["SEO优化", "内容生产", "品牌", "广告", "策略", "市场营销"].map((item, idx) => (
                  <div key={idx} className="p-2">
                    <div className="bg-white rounded-full p-4 shadow-sm mb-2 mx-auto w-12 h-12 flex items-center justify-center text-blue-600">
                      <span className="text-xs">{idx + 1}</span>
                    </div>
                    <div className="text-sm">{item}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <blockquote className="text-gray-600 italic mb-4">
                  "创客平台给了我极大的助力。这里没有干扰因素，一切都不复杂。当我对自己的网站有了想法时，我可以直接上手添加，就是这么快速且直观的体验。"
                </blockquote>
                <div className="font-semibold">纯钧 TopZeal</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">一周创建一个项目，快速成长</h2>
            <p className="text-xl mb-10">
              驰幂科技，用AI让你的业务快速建立，快速增长
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/create-project">
                <a className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
                  创建你的项目
                </a>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-4">驰幂科技</h3>
                <p className="mb-4">驰幂科技,让创造更简单一些</p>
                <p>©2023-2025 驰幂科技</p>
                <p>浙ICP备20021153号-4</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">产品中心</h4>
                  <ul className="space-y-2">
                    {["想法验证", "商品或服务定价", "网页设计", "内容生产", "创建品牌"].map((item, idx) => (
                      <li key={idx}><Link href="#"><a className="hover:text-white">{item}</a></Link></li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4">自动化L1的智能体</h4>
                  <ul className="space-y-2">
                    {["recraft", "cursor", "zapier", "NotebookLM", "开始引导", "网站模板"].map((item, idx) => (
                      <li key={idx}><Link href="#"><a className="hover:text-white">{item}</a></Link></li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4">业务介绍</h4>
                  <ul className="space-y-2">
                    {["关于我们", "合作伙伴", "一起合作", "发布计划", "新闻报道", "隐私政策"].map((item, idx) => (
                      <li key={idx}><Link href="#"><a className="hover:text-white">{item}</a></Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700 text-center">
              <p>©2025 Chuangke Technologies Inc</p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
}