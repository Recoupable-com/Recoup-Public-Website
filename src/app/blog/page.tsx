'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const blogPosts = [
  {
    title: 'Music Industry Insights',
    category: 'Industry News',
    date: 'Jan 17, 2024',
    description: 'Latest trends and developments in the music industry',
    bgColor: 'bg-purple-400',
    href: '/blog/research?topic=industry_news'
  },
  {
    title: 'Marketing Strategy Guide',
    category: 'Marketing',
    date: 'Jan 15, 2024',
    description: 'Effective marketing strategies for musicians',
    bgColor: 'bg-orange-400',
    href: '/blog/research?topic=marketing'
  },
  {
    title: 'Genre Analysis: Hip Hop',
    category: 'Genre Insights',
    date: 'Jan 10, 2024',
    description: 'Deep dive into hip hop market trends',
    bgColor: 'bg-yellow-400',
    href: '/blog/research?topic=market_trends&genre=hip%20hop'
  }
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-20">
        {/* Header */}
        <div className="text-center py-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-medium mb-4"
          >
            Blog
          </motion.h1>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={post.href} className="block">
                  <div className={`${post.bgColor} rounded-2xl p-6 h-[300px] relative overflow-hidden transition-transform hover:scale-[1.02] bg-opacity-20`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-30" />
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="mb-auto">
                        <div className="text-sm mb-2">{post.category} · {post.date}</div>
                        <h2 className="text-2xl font-medium mb-3">{post.title}</h2>
                        <p className="text-gray-200">{post.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Browse More Section */}
          <div className="mt-16 flex justify-between items-center">
            <h2 className="text-3xl font-medium">Browse more</h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800">
                Filter
              </button>
              <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800">
                Sort
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 