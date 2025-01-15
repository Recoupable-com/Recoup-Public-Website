'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-24 pb-24">
      <div className="container mx-auto px-8">
        {/* Hero text and card section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          {/* Left side - Hero text */}
          <div className="lg:max-w-[640px] w-full mb-16 lg:mb-0">
            <h1 className="text-[60px] lg:text-[80px] leading-[0.95] tracking-tight mb-6 font-medium">
              AI made for
              <br />
              the music
              <br />
              industry
            </h1>
            <p className="text-lg text-gray-400 mb-8 font-inter text-left leading-[1.4] tracking-wide">
              Grow like a major label—
              <br className="lg:hidden" />
              no team required. Pause
              <br className="lg:hidden" />
              or cancel anytime.
            </p>
          </div>

          {/* Right side - Join card */}
          <div className="w-full max-w-[280px] lg:max-w-[320px] lg:mt-8">
            <div className="bg-[#0051FF] p-10 rounded-[24px] text-white shadow-2xl relative overflow-hidden">
              {/* Card content remains the same */}
              <div className="relative">
                {/* Start today pill */}
                <div className="inline-flex items-center px-5 py-2.5 bg-black rounded-full mb-10">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-2.5 animate-blink"></div>
                  <span className="text-[15px] font-medium">Start today</span>
                </div>
                
                <h2 className="text-5xl font-medium mb-3 tracking-tight">
                  Join
                  <br />
                  Recoup
                </h2>
                
                <p className="text-base mb-10 text-white/90">
                  One agent to rule them all.
                </p>
                
                {/* See pricing button */}
                <Link href="/pricing" className="block w-full bg-white text-black text-center py-4 rounded-xl text-xl font-medium mb-8 hover:bg-opacity-95 transition-all duration-200">
                  See pricing
                </Link>
                
                {/* Book a call link */}
                <Link href="/call" className="flex items-center justify-between group">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12.2H8.01M12 12.2H12.01M16 12.2H16.01M3 20.4V4.6C3 3.72 3.72 3 4.6 3H19.4C20.28 3 21 3.72 21 4.6V15.4C21 16.28 20.28 17 19.4 17H7L3 20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium">Book a 15-min intro call</div>
                      <div className="text-[9px] text-white/50">Schedule now</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:scale-95 transition-transform">
                    <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* New text section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] lg:max-w-[800px] mx-auto text-center mb-32">
          <h2 className="text-[42px] lg:text-[52px] leading-[1.1] tracking-tight font-medium">
            It&apos;s like having
            <br className="lg:hidden" />
            a major record label in your pocket
          </h2>
        </motion.div>

        {/* Explainer cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[280px] lg:max-w-none mx-auto px-4 lg:px-8">
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

        {/* Membership Benefits section - Adjusted for desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] lg:max-w-[800px] mx-auto mt-32 text-center">
          <h3 className="text-sm font-mono mb-12">MEMBERSHIP BENEFITS</h3>
          <h2 className="text-[52px] lg:text-[72px] leading-[1.1] tracking-tight">
            You&apos;ll never go back to the old way of doing things.
          </h2>
          <p className="mt-12 text-[24px] leading-[1.4] text-gray-400/70">
            Recoup redefines how labels operate,
            <br className="lg:hidden" />
            giving you cutting-edge tools and
            <br className="lg:hidden" />
            the freedom to focus on what matters—
            <br className="lg:hidden" />
            your artists and their fans.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 