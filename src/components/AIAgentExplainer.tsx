'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AIAgentExplainer() {
  return (
    <section className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-medium">
            The old way vs <span className="bg-[#4477FF] text-white px-3 py-1 rounded-md">Recoup way</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {/* The Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-[400px] mx-auto w-full"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg text-gray-600">The old way</h3>
            </div>

            <h4 className="text-2xl font-medium mb-8">Traditional Music Marketing</h4>
            
            <ul className="space-y-4">
              {[
                "No control over fan data",
                "Limited reach and engagement",
                "Wasted marketing budget",
                "Time-consuming manual work"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-1 shrink-0 text-red-500" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-[15px] text-gray-600">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 relative">
              <Image
                src="/frustrated-artist.jpg"
                alt="Frustrated artist"
                width={300}
                height={200}
                className="rounded-lg mx-auto"
              />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md text-sm text-red-500">
                &ldquo;Where are my fans?&rdquo;
              </div>
            </div>
          </motion.div>

          {/* The Recoup Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-[400px] mx-auto w-full"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#4477FF]" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg text-[#4477FF]">The Recoup Way</h3>
            </div>

            <h4 className="text-2xl font-medium mb-8">AI-Powered Growth Platform</h4>
            
            <ul className="space-y-4">
              {[
                "Total fan data control and insights",
                "Global reach with smart targeting",
                "Optimized marketing spend",
                "Automated workflows save time"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-1 shrink-0 text-[#4477FF]" viewBox="0 0 16 16" fill="none">
                    <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[15px] text-gray-600">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 relative">
              <Image
                src="/happy-artist.jpg"
                alt="Happy artist using Recoup"
                width={300}
                height={200}
                className="rounded-lg mx-auto"
              />
              <div className="absolute bottom-4 right-4 bg-[#4477FF] px-3 py-2 rounded-lg shadow-md text-sm text-white">
                +200% fan growth
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 