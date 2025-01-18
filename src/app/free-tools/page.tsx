'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const tools = [
  {
    title: 'Research Assistant',
    description: 'Get instant insights on music industry trends and strategies',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: 'Caption Generator',
    description: 'Create engaging, platform-optimized social media captions',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    )
  },
  {
    title: 'Streaming Calculator',
    description: 'Calculate potential earnings across major streaming platforms',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'WebPlayer',
    description: 'Let fans sign in and stream on your website',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12l-6 4V8l6 4z" />
      </svg>
    )
  },
  {
    title: 'Release Checklist',
    description: 'Stay organized with an interactive pre-release checklist',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Press Kit Generator',
    description: 'Create a professional press kit in minutes',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    title: 'Press Release Generator',
    description: 'Create professional press releases in minutes',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    title: 'Content Strategy',
    description: 'Generate personalized social media and marketing plans',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

export default function FreeTools() {
  return (
    <>
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1000px] mx-auto px-4">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] leading-[1.1] tracking-tight font-medium mb-6">
              <span className="text-black">Free music marketing tools</span>
              <br />
              to help you get unstuck
            </h1>
            <p className="text-gray-500 text-xl max-w-[600px] mx-auto">
              Solve your marketing problems with our free tools.
              From understanding your audience to generating content ideas.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tools.map((tool, index) => {
              const cardContent = (
                <div className="bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:border-black/20 hover:shadow-lg hover:shadow-black/5">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 p-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-black/5"></div>
                      <div className="w-3 h-3 rounded-full bg-black/5"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center group-hover:bg-black transition-colors duration-200">
                        <div className="text-black group-hover:text-white transition-colors duration-200">
                          {tool.icon}
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-grow flex flex-col justify-end">
                      <h3 className="text-xl font-medium mb-3">{tool.title}</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  {tool.title === 'Research Assistant' ? (
                    <Link href="/research-assistant">
                      {cardContent}
                    </Link>
                  ) : tool.title === 'Caption Generator' ? (
                    <Link href="/caption-generator">
                      {cardContent}
                    </Link>
                  ) : tool.title === 'Streaming Calculator' ? (
                    <Link href="/streamingcalculator">
                      {cardContent}
                    </Link>
                  ) : tool.title === 'Release Checklist' ? (
                    <Link href="/release-checklist">
                      {cardContent}
                    </Link>
                  ) : tool.title === 'WebPlayer' ? (
                    <Link href="https://webplayer.recoupable.com" target="_blank" rel="noopener noreferrer">
                      {cardContent}
                    </Link>
                  ) : tool.title === 'Press Kit Generator' ? (
                    <Link href="/press-kit">
                      {cardContent}
                    </Link>
                  ) : tool.title === 'Press Release Generator' ? (
                    <Link href="/press-release">
                      {cardContent}
                    </Link>
                  ) : tool.title === 'Content Strategy' ? (
                    <Link href="/content-strategy">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
} 