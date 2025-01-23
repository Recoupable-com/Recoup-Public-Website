'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Blog post type definition
export interface BlogPost {
  title: string;
  category: string;
  date: string;
  description: string;
  bgColor: string;
  href: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: 'The Rise of AI in Music Marketing',
    category: 'Technology',
    date: 'January 17, 2024',
    description: 'Discover how artificial intelligence is revolutionizing music marketing and creating new opportunities for independent artists.',
    bgColor: 'bg-gray-50',
    href: '/research/ai-music-marketing',
    keywords: ['AI marketing', 'music promotion', 'artificial intelligence']
  },
  {
    title: 'Social Media Strategy for Musicians in 2024',
    category: 'Marketing',
    date: 'January 15, 2024',
    description: 'A comprehensive guide to building your music brand on social media platforms. Learn the latest strategies for TikTok, Instagram, and emerging platforms.',
    bgColor: 'bg-gray-50',
    href: '/research/social-media-strategy-2024',
    keywords: ['social media', 'music marketing', 'TikTok']
  },
  {
    title: 'Hip Hop Marketing Trends 2024',
    category: 'Industry',
    date: 'January 10, 2024',
    description: 'Stay ahead of the curve with the latest marketing trends in hip hop. From viral strategies to authentic brand building.',
    bgColor: 'bg-gray-50',
    href: '/research/hip-hop-marketing-trends',
    keywords: ['hip hop', 'marketing trends', 'music industry']
  },
  {
    title: 'Maximizing Spotify Playlist Placement',
    category: 'Streaming',
    date: 'Jan 8, 2024',
    description: 'Expert tips for getting your music featured on popular Spotify playlists. Learn proven strategies for playlist pitching and promotion.',
    bgColor: 'bg-gray-50',
    href: '/research/spotify-playlist-strategy',
    keywords: ['Spotify playlists', 'music streaming', 'playlist promotion']
  },
  {
    title: 'Building a Loyal Fan Base',
    category: 'Fan Engagement',
    date: 'Jan 5, 2024',
    description: 'Strategies for creating and nurturing a dedicated following in the digital age. Learn how to turn casual listeners into superfans.',
    bgColor: 'bg-gray-50',
    href: '/research/building-fan-base',
    keywords: ['fan engagement', 'music community', 'audience growth']
  },
  {
    title: 'Music Memecoins: The New Wave of Artist Tokens',
    category: 'Web3',
    date: 'January 3, 2024',
    description: 'Explore how artists are leveraging memecoins for fan engagement and creating new revenue streams in the music industry.',
    bgColor: 'bg-gray-50',
    href: '/research/music-memecoins',
    keywords: ['memecoins', 'web3', 'music tokens', 'fan engagement']
  }
];

function ResearchPage() {
  // Add structured data for the blog listing
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Recoup Music Marketing Research & Insights',
    description: 'Expert insights on music marketing trends, strategies, and industry analysis.',
    url: 'https://recoup.com/research',
    publisher: {
      '@type': 'Organization',
      name: 'Recoup',
      logo: {
        '@type': 'ImageObject',
        url: 'https://recoup.com/logo.png'
      }
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      keywords: post.keywords.join(', '),
      url: `https://recoup.com${post.href}`
    }))
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Add structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Header */}
        <div className="text-center py-16 bg-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-medium mb-4 text-gray-900"
          >
            Research & Insights
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In-depth articles and analysis on music marketing trends, strategies, and industry insights
          </p>
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
              </motion.div>
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

export default ResearchPage; 