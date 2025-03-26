import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        {/* 将原HTML内容转换为JSX，使用Tailwind CSS类 */}
        <header className="py-8">
          <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
        </header>
        
        <main className="my-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </section>
          
          {/* 其他内容部分 */}
        </main>
        
        <footer className="py-4 border-t">
          <p className="text-center text-gray-600">
            &copy; 2023 Our Company. All rights reserved.
          </p>
        </footer>
      </div>
    </Layout>
  )
}