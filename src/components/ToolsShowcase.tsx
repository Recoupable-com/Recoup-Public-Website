'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ToolsShowcase() {
  const tools = [
    {
      title: "Press Release Generator",
      description: "Create professional press releases in minutes with AI assistance.",
      image: "/tools/press-release.png",
      link: "/press-release",
      stats: "1000+ releases generated"
    },
    {
      title: "Content Strategy",
      description: "Get personalized social media and marketing strategies.",
      image: "/tools/content-strategy.png",
      link: "/content-strategy",
      stats: "10K+ strategies created"
    },
    {
      title: "Streaming Calculator",
      description: "Calculate potential earnings across major platforms.",
      image: "/tools/streaming-calc.png",
      link: "/streamingcalculator",
      stats: "Used by 50K+ artists"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Free tools to supercharge your growth
          </h2>
          <p className="text-gray-500 max-w-[600px] mx-auto">
            Try our most popular tools used by thousands of artists and industry professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Link href={tool.link} key={tool.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:scale-[1.02] group"
              >
                <div className="relative h-[200px] bg-black">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-medium mb-1">{tool.title}</h3>
                    <p className="text-white/80 text-sm">{tool.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{tool.stats}</span>
                    <span className="text-sm font-medium text-black group-hover:translate-x-1 transition-transform">
                      Try now →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link 
            href="/free-tools"
            className="text-black hover:text-gray-600 transition-colors inline-flex items-center gap-2"
          >
            View all tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 