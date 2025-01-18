'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="relative pt-32 md:pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] mb-6 font-medium">
              Meet Your AI Agent
              <br />
              for Music Success
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <motion.h1 
            className="text-[56px] sm:text-[72px] lg:text-[96px] leading-[1.05] tracking-[-0.03em] mb-8 font-medium bg-clip-text text-transparent bg-gradient-to-r from-black to-black/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Meet Your AI Agent
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              for Music Success
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-[20px] text-gray-600 mb-12 font-inter leading-relaxed tracking-[-0.01em] max-w-[640px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Deploy intelligent AI agents that work 24/7 to analyze your data, engage fans automatically, and optimize your revenue across all platforms.
          </motion.p>

          <motion.div 
            className="flex items-center gap-6 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="/signup"
              className="bg-black hover:bg-black/90 text-white px-10 py-5 rounded-2xl text-[18px] font-medium transition-all hover:scale-[1.02] hover:shadow-xl shadow-lg"
            >
              Get started
            </Link>
          </motion.div>

          {/* SVG Image with Terminal Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[800px] mx-auto relative"
          >
            <div className="relative w-full h-[500px]">
              <Image
                src="/Recoup Website.svg"
                alt="Recoup Website Interface"
                fill
                className="object-contain"
                priority
              />

              {/* Fan Analysis Terminal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: -150, y: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="absolute left-[160px] top-[80px] w-[280px] bg-[#111111] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 bg-[#1C1C1C] px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[13px] text-white/50 ml-2 font-mono">fan-analysis</div>
                </div>

                <div className="p-5 text-[13px] font-mono text-white/90">
                  <div className="space-y-3.5">
                    {[
                      { text: "> Initializing fan analysis...", color: "text-blue-400", delay: 0 },
                      { text: "> Scanning social platforms:", color: "text-white/90", delay: 0.5 },
                      { text: "• Instagram: 8.2k followers", color: "text-pink-400", delay: 1 },
                      { text: "• TikTok: 5.1k followers", color: "text-purple-400", delay: 1.5 },
                      { text: "> Generating segments...", color: "text-green-400", delay: 2 }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: item.delay }}
                        className={item.color}
                      >
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div 
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>

              {/* Engagement Analysis Terminal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: 150, y: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="absolute right-[80px] top-[-20px] w-[300px] bg-[#111111] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.25)] border border-white/5 backdrop-blur-xl z-10"
              >
                <div className="flex items-center gap-2 bg-[#1C1C1C] px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[13px] text-white/50 ml-2 font-mono">engagement-metrics</div>
                </div>
                
                <div className="p-5 text-[13px] font-mono text-white/90">
                  <div className="space-y-3.5">
                    {[
                      { text: "> Analyzing engagement...", color: "text-purple-400", delay: 0 },
                      { text: "• Comment rate: 4.2%", color: "text-blue-400", delay: 0.5 },
                      { text: "• Save rate: 8.7%", color: "text-green-400", delay: 1 },
                      { text: "> High engagement times:", color: "text-white/90", delay: 1.5 },
                      { text: "• Peak: 8PM-10PM EST", color: "text-yellow-400", delay: 2 }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: item.delay }}
                        className={item.color}
                      >
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div 
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-500/15 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>

              {/* Revenue Projection Terminal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: 200, y: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="absolute right-[0px] bottom-[40px] w-[320px] bg-[#111111] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.3)] border border-white/5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 bg-[#1C1C1C] px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[13px] text-white/50 ml-2 font-mono">revenue-projection</div>
                </div>
                
                <div className="p-5 text-[13px] font-mono text-white/90">
                  <div className="space-y-3.5">
                    {[
                      { text: "> Calculating ROI...", color: "text-emerald-400", delay: 0 },
                      { text: "> Projected growth:", color: "text-white/90", delay: 0.5 },
                      { text: "• Monthly revenue: +32%", color: "text-green-400", delay: 1 },
                      { text: "• Merch sales: +45%", color: "text-blue-400", delay: 1.5 },
                      { text: "> Strategy optimized ✨", color: "text-yellow-400", delay: 2 }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: item.delay }}
                        className={item.color}
                      >
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div 
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-emerald-500/15 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 