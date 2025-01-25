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
          <h1 className="text-[72px] md:text-[96px] font-bold tracking-[-0.02em] leading-[1.1] text-center mb-6 text-black font-jakarta">
            <span className="md:hidden">
              AI Agents for
              <span className="block">Music Artists</span>
              <span className="block">and Labels.</span>
            </span>
            <span className="hidden md:block">
              AI Agents for Music
              <span className="block mt-1">Artists and Labels.</span>
            </span>
          </h1>
          
          <p className="text-[20px] md:text-[24px] text-gray-600 text-center max-w-[800px] mx-auto leading-relaxed mb-10">
            <span className="md:hidden">
              Deploy robots that work 24/7<br />
              to help you grow.
            </span>
            <span className="hidden md:block">
              Deploy robots that work 24/7 to help you grow.
            </span>
          </p>

          <motion.div 
            className="flex flex-col items-center justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="/signup"
              className="bg-black text-white text-[15px] px-6 py-2.5 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out font-medium"
            >
              Get Started Today For Free →
            </Link>
            <span className="text-[11px] text-gray-400 mt-2">No Credit Card Required</span>
          </motion.div>

          {/* SVG Image with Terminal Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[800px] mx-auto relative"
          >
            <div className="relative w-full h-[500px] md:h-[500px]">
              <Image
                src="/Recoup Website.svg"
                alt="Recoup Website Interface"
                fill
                className="object-contain"
                priority
              />

              {/* Fan Analysis Terminal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: -200, y: 150 }}
                animate={{ opacity: 1, scale: 1, x: -20, y: 30 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:block absolute left-[80px] top-[40px] w-[280px] bg-[#111111] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-xl"
              >
                <div className="flex items-center gap-1.5 md:gap-2 bg-[#1C1C1C] px-2 md:px-4 py-2 md:py-3 border-b border-white/10">
                  <div className="flex gap-1 md:gap-1.5">
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[10px] md:text-[12px] text-white/60 ml-1 md:ml-2 font-mono tracking-tight">fan-analysis</div>
                </div>
                
                <div className="p-5 text-[12px] font-mono text-white/90 leading-relaxed">
                  <div className="space-y-4">
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
                        className={`${item.color} tracking-tight`}
                      >
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div 
                  animate={{ opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>

              {/* Engagement Analysis Terminal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: 150, y: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:block absolute right-[40px] top-[-10px] w-[300px] bg-[#111111] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.25)] border border-white/5 backdrop-blur-xl z-10"
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

              {/* Revenue Projection Terminal - Mobile & Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: 200, y: 150 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 60 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="absolute left-[35%] -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[20px] top-[100px] md:top-auto md:bottom-[20px] w-[280px] md:w-[320px] bg-[#111111] rounded-xl md:rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 bg-[#1C1C1C] px-4 py-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[12px] text-white/60 ml-2 font-mono tracking-tight">revenue-projection</div>
                </div>
                
                <div className="p-5 text-[12px] font-mono text-white/90 leading-relaxed">
                  <div className="space-y-4">
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
                        className={`${item.color} tracking-tight`}
                      >
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div 
                  animate={{ opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 