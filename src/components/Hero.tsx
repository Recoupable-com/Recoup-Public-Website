'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-[1000px] mx-auto px-2">
        {/* Hero text section */}
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h1 
            className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.02em] mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI agents made for
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              the music industry
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-[17px] text-gray-500 mb-8 font-inter leading-[1.6] tracking-[-0.01em] max-w-[340px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Grow like a major label—no team required.
          </motion.p>
          <motion.div 
            className="flex items-center gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="/signup" 
              className="bg-black text-white px-8 py-4 rounded-xl text-[15px] font-medium hover:bg-black/90 transition-all hover:scale-105 hover:shadow-xl"
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
                className="absolute left-[160px] top-[80px] w-[220px] bg-[#1C1C1C] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 bg-[#2D2D2D] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[13px] text-white/60 ml-2 font-mono">fan-analysis</div>
                </div>
                
                <div className="p-4 text-[13px] font-mono text-white/90">
                  <div className="space-y-3">
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
                        transition={{ duration: 0.3, delay: item.delay }}
                        className={item.color}
                      >
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div 
                  animate={{ opacity: [0.1, 0.15, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/15 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>

              {/* Engagement Analysis */}
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
                className="absolute right-[80px] top-[-20px] w-[260px] bg-[#1C1C1C] rounded-xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-sm z-10"
              >
                <div className="flex items-center gap-2 bg-[#2D2D2D] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[13px] text-white/60 ml-2 font-mono">engagement-metrics</div>
                </div>
                
                <div className="p-4 text-[13px] font-mono text-white/90">
                  <div className="space-y-3">
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
                        transition={{ duration: 0.3, delay: item.delay }}
                        className={item.color}
                      >
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div 
                  animate={{ opacity: [0.15, 0.2, 0.15] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>

              {/* Revenue Projection */}
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
                className="absolute right-[0px] bottom-[40px] w-[300px] bg-[#1C1C1C] rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 bg-[#2D2D2D] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[13px] text-white/60 ml-2 font-mono">revenue-projection</div>
                </div>
                
                <div className="p-4 text-[13px] font-mono text-white/90">
                  <div className="space-y-3">
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
                        transition={{ duration: 0.3, delay: item.delay }}
                        className={item.color}
                      >
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div 
                  animate={{ opacity: [0.2, 0.25, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-emerald-500/25 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* New text section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px] mx-auto text-center mt-32 mb-32">
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] font-medium">
            It&apos;s like having a major record label in your pocket
          </h2>
        </motion.div>

        {/* Explainer cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[280px] md:max-w-none mx-auto px-4 lg:px-8">
          {/* Subscribe card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-[24px] relative overflow-hidden h-[400px] flex flex-col justify-end">
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div>
              <h3 className="text-4xl font-medium mb-4">Subscribe</h3>
              <p className="text-xl text-black/70">Pick a plan and unlock full access to Recoup&apos;s AI-agent powered suite.</p>
            </div>
          </motion.div>

          {/* Analyze card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-[24px] text-white relative overflow-hidden h-[400px] flex flex-col justify-end">
            <div className="absolute inset-x-8 top-8">
              <div className="grid grid-cols-4 gap-2">
                {['Playlisting', 'Promotion', 'Marketing', 'Growth', 'Fanbase', 'Analytics', 'Strategy', 'Outreach'].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-4xl font-medium mb-4">Analyze</h3>
              <p className="text-xl text-white/70">Dive deep into fan behavior, track engagement, and identify untapped opportunities.</p>
            </div>
          </motion.div>

          {/* Grow card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-red-500 to-purple-600 p-8 rounded-[24px] text-white relative overflow-hidden h-[400px] flex flex-col justify-end">
            <div className="absolute top-8 right-8 flex -space-x-4">
              <div className="w-32 h-48 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl rotate-6"></div>
              <div className="w-32 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl -rotate-6"></div>
            </div>
            
            <div>
              <h3 className="text-4xl font-medium mb-4">Grow</h3>
              <p className="text-xl text-white/70">Launch campaigns, measure results, and watch your artist&apos;s career take off.</p>
            </div>
          </motion.div>
        </div>

        {/* Partner logos - Adjusted for desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white/5 mt-32">
          <div className="max-w-[400px] lg:max-w-[800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 p-6">
            {/* Megan - Top */}
            <div className="relative h-20 w-[240px]">
              <Image
                src="/partners/Megan.svg"
                alt="Megan Thee Stallion"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Atlantic and WMG - Middle */}
            <div className="flex justify-between w-full">
              <div className="relative h-16 w-[200px]">
                <Image
                  src="/partners/Atlantic.svg"
                  alt="Atlantic Records"
                  fill
                  className="object-contain scale-75"
                  priority
                />
              </div>
              <div className="relative h-16 w-[200px]">
                <Image
                  src="/partners/WMG.svg"
                  alt="Warner Music Group"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* A Boogie - Bottom */}
            <div className="relative h-16 w-[200px] -mt-2">
              <Image
                src="/partners/Aboogie.svg"
                alt="A Boogie Wit da Hoodie"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Historical text card - Adjusted for desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[280px] lg:max-w-[600px] mx-auto mt-16">
          <div className="border-[1.5px] border-dashed border-gray-300/50 rounded-[24px] p-8 lg:p-12 h-[500px] lg:h-[300px] flex items-center">
            <p className="text-[16px] lg:text-[18px] leading-[1.4] tracking-wide text-gray-500/90 text-center font-normal">
              Founded in 2024, Recoup transforms music with AI agents that do the hard work for you. Unlike platforms that just provide data, Recoup&apos;s AI agents run campaigns, engage fans, and drive growth—so you can focus on the music. Built by industry veteran Sidney Swift, Recoup bridges the gap between insights and action, saving time and turning listeners into lifelong fans.
            </p>
          </div>
        </motion.div>

        {/* Membership Benefits section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1000px] mx-auto mt-32 relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Section label with enhanced design */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-4 mb-16"
            >
              <div className="h-[1px] w-12 bg-gray-500/20" />
              <h3 className="text-sm font-mono text-gray-500/80 tracking-wider">BENEFITS</h3>
              <div className="h-[1px] w-12 bg-gray-500/20" />
            </motion.div>

            {/* Main heading with staggered animation */}
            <div className="text-center max-w-[800px] mx-auto">
              <motion.h2 
                className="text-[52px] lg:text-[72px] leading-[1.1] tracking-tight font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Work smarter, not harder
              </motion.h2>

              {/* Subtitle with gradient highlight */}
              <motion.p 
                className="mt-12 text-[24px] leading-[1.4] text-gray-400/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Recoup replaces guesswork and endless tasks with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> AI agents </span> 
                that do the hard work for you—running campaigns, analyzing data, and driving growth, so you don&apos;t have to.
              </motion.p>
            </div>

            {/* Feature cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* AI Automation Card */}
              <motion.div 
                className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-black/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">AI Automation</h4>
                <p className="text-gray-500">Let our AI agents handle the repetitive tasks while you focus on strategy.</p>
              </motion.div>

              {/* Data Analytics Card */}
              <motion.div 
                className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-black/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Deep Analytics</h4>
                <p className="text-gray-500">Get actionable insights from comprehensive data analysis.</p>
              </motion.div>

              {/* Fan Engagement Card */}
              <motion.div 
                className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-black/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Fan Engagement</h4>
                <p className="text-gray-500">Build stronger connections with your audience through smart engagement.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 