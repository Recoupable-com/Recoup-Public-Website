'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  const agents = [
    { title: 'Roster Analysis', position: 'top-[-20px] left-16', color: 'text-blue-500' },
    { title: 'Growth Strategy', position: 'top-8 right-24', color: 'text-purple-500' },
    { title: 'Revenue Optimization', position: 'top-32 right-[-10px]', color: 'text-yellow-500' },
    { title: 'Artist Development', position: 'bottom-12 right-8', color: 'text-green-500' },
    { title: 'Market Intelligence', position: 'bottom-[-10px] left-32', color: 'text-orange-500' },
    { title: 'Campaign Manager', position: 'top-32 left-[-20px]', color: 'text-pink-500' }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="relative pt-32 md:pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] mb-6 font-medium">
              A Record Label
              <br />
              in Your Pocket
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
          {/* Desktop Heading with Agent Tags */}
          <div className="hidden md:block relative mb-6">
            {/* Agent Tags */}
            {agents.map((agent, index) => (
              <motion.div
                key={agent.title}
                className={`absolute ${agent.position} flex items-center gap-2`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-black/5">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={agent.color}
                  >
                    <circle cx="7" cy="7" r="4" fill="currentColor"/>
                  </svg>
                  <span className="text-[13px] font-medium text-black/80">
                    {agent.title}
                  </span>
                </div>
              </motion.div>
            ))}

            <h1 className="text-[120px] leading-[1.1] tracking-tight font-semibold">
              Grow Artists Faster
              <span className="block">With AI Management</span>
            </h1>
          </div>

          {/* Mobile Heading */}
          <div className="block md:hidden mb-6">
            <h1 className="text-[56px] leading-[1.1] tracking-tight font-semibold">
              Grow Artists Faster
              <span className="block">With AI Management</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-xl text-center mb-8 max-w-[600px] mx-auto">
            Turn your roster into predictable revenue streams with AI-powered optimization.
            <span className="block mt-2">From artist development to revenue maximization.</span>
          </p>

          {/* CTA Button */}
          <motion.div 
            className="flex flex-col items-center justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <Link 
                href="https://chat.recoupable.com/signin"
                className="bg-black text-white text-[15px] px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-200 ease-in-out font-medium"
              >
                Schedule Your Demo →
              </Link>
              <Link 
                href="https://docs.recoupable.com"
                className="text-black border border-black/10 hover:border-black text-[15px] px-8 py-4 rounded-xl transition-all duration-200 ease-in-out font-medium"
              >
                View Case Studies
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[13px] text-black/60 font-medium">Limited spots available this month</span>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-2">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=John+Smith&background=0062FF&color=fff" alt="John Smith" />
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Sarah+Jones&background=FF0000&color=fff" alt="Sarah Jones" />
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=Mike+Wilson&background=00FF00&color=fff" alt="Mike Wilson" />
                </div>
                <span className="text-[11px] text-gray-500">12 labels joined this week</span>
              </div>
            </div>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Trusted by Universal, Sony & 500+ Labels</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Managing $100M+ in Artist Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>45% Average Artist Growth Rate</span>
            </div>
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
                      { text: "> Analyzing roster performance...", color: "text-purple-400", delay: 0 },
                      { text: "• Total artists: 2,450+", color: "text-blue-400", delay: 0.5 },
                      { text: "• Average growth: +45%", color: "text-green-400", delay: 1 },
                      { text: "> Growth opportunities:", color: "text-white/90", delay: 1.5 },
                      { text: "• Potential revenue: $2.8M", color: "text-yellow-400", delay: 2 }
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
                      { text: "> Market analysis complete", color: "text-purple-400", delay: 0 },
                      { text: "• Playlist reach: 85M+", color: "text-blue-400", delay: 0.5 },
                      { text: "• Fan engagement: 94%", color: "text-green-400", delay: 1 },
                      { text: "> Growth trajectory:", color: "text-white/90", delay: 1.5 },
                      { text: "• YoY revenue: +142%", color: "text-yellow-400", delay: 2 }
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
                      { text: "> AI optimization active", color: "text-emerald-400", delay: 0 },
                      { text: "> Performance metrics:", color: "text-white/90", delay: 0.5 },
                      { text: "• Monthly growth: +12%", color: "text-green-400", delay: 1 },
                      { text: "• Time saved: 450h/mo", color: "text-blue-400", delay: 1.5 },
                      { text: "> ROI: 825% ✨", color: "text-yellow-400", delay: 2 }
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