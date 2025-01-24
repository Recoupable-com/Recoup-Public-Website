import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { articles } from './articles';

export const metadata = {
  title: 'Research & Insights | Recoup',
  description: 'In-depth articles and analysis on music marketing trends, strategies, and industry insights'
};

export default function ResearchPage() {
  const blogPosts = Object.entries(articles).map(([slug, article]) => ({
    title: article.title,
    category: article.category,
    date: article.date,
    description: article.description,
    bgColor: 'bg-gray-50',
    href: `/research/${slug}`,
    keywords: article.keywords
  }));

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Header */}
        <div className="text-center py-16 bg-white">
          <h1 className="text-5xl font-medium mb-4 text-gray-900">
            Research & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In-depth articles and analysis on music marketing trends, strategies, and industry insights
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.title} href={post.href} className="block">
                <article className={`${post.bgColor} rounded-2xl p-6 h-[300px] relative overflow-hidden transition-all hover:scale-[1.02] border border-gray-200 hover:shadow-lg hover:bg-gray-100`}>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-auto">
                      <div className="text-sm mb-2 text-gray-600">{post.category} · {post.date}</div>
                      <h2 className="text-2xl font-medium mb-3 text-gray-900">{post.title}</h2>
                      <p className="text-gray-700">{post.description}</p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Browse More Section */}
          <div className="mt-16 flex justify-between items-center">
            <h2 className="text-3xl font-medium text-gray-900">Browse more</h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700">
                Filter
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700">
                Sort
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 