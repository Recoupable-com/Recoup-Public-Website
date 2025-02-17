'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  const agents = [
    { title: 'Roster Analysis', position: 'top-[-20px] left-20', color: 'text-blue-500', bgColor: 'bg-blue-500' },
    { title: 'Growth Strategy', position: 'top-12 right-28', color: 'text-purple-500', bgColor: 'bg-purple-500' },
    { title: 'Revenue Optimization', position: 'top-40 right-[-10px]', color: 'text-yellow-500', bgColor: 'bg-yellow-500' },
    { title: 'Artist Development', position: 'bottom-20 right-20', color: 'text-green-500', bgColor: 'bg-green-500' },
    { title: 'Market Intelligence', position: 'bottom-[-10px] left-32', color: 'text-orange-500', bgColor: 'bg-orange-500' },
    { title: 'Campaign Manager', position: 'top-40 left-[-10px]', color: 'text-pink-500', bgColor: 'bg-pink-500' }
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
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content */}
        <div className="relative">
          {/* Agent Tags */}
          <div className="absolute inset-0 -z-10">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`absolute ${agent.position}`}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-gray-100 shadow-sm group cursor-pointer transition-all duration-200 ${agent.color} text-sm font-medium`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${agent.bgColor} opacity-80 mr-2 group-hover:scale-110 transition-transform duration-200`} />
                  {agent.title}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Hero Content */}
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="text-[120px] font-bold leading-[0.95] tracking-[-0.03em] mb-8"
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Grow Artists
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-black via-black/95 to-black/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Faster With AI
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Agents
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-[600px] mx-auto mb-10"
              >
                Automate artist development and maximize revenue with AI-powered optimization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              >
                <Link
                  href="https://calendly.com/sidney-recoupable/recoup-product-demo"
                  className="group inline-flex items-center justify-center px-8 py-4 text-[15px] font-medium bg-black text-white rounded-xl hover:bg-black/90 transition-all hover:scale-105 hover:shadow-lg"
                >
                  Schedule Your Demo
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
                <Link
                  href="/case-studies"
                  className="group inline-flex items-center justify-center px-8 py-4 text-[15px] font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-all hover:border-black"
                >
                  View Case Studies
                  <motion.span 
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -5 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16 pt-8 border-t border-gray-100"
              >
                <p className="text-sm text-gray-500 mb-4">Limited spots available this month</p>
                <motion.div 
                  className="flex justify-center items-center gap-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-green-800">45% Average Artist Growth Rate</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image and Terminals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[800px] mx-auto h-[500px]"
              >
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
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="hidden md:block absolute left-[80px] top-[40px] w-[280px] bg-[#111111] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2 bg-[#1C1C1C] px-4 py-3 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="text-[12px] text-white/60 ml-2 font-mono">fan-analysis</div>
                  </div>
                  
                  <div className="p-5 text-[12px] font-mono text-white/90">
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
                          className={item.color}
                        >
                          {item.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Revenue Projection Terminal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, x: 200, y: 150 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 60 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute right-[40px] bottom-[20px] w-[320px] bg-[#111111] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2 bg-[#1C1C1C] px-4 py-3 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="text-[12px] text-white/60 ml-2 font-mono">revenue-projection</div>
                  </div>
                  
                  <div className="p-5 text-[12px] font-mono text-white/90">
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
                          className={item.color}
                        >
                          {item.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 