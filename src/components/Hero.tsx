'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import AgentPills from '@/components/AgentPills';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="relative pt-12 md:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-[72px] sm:text-[84px] lg:text-[120px] leading-[0.95] tracking-[-0.04em] mb-6 font-extrabold font-plus-jakarta">
              Grow Your
              <br />
              Artists Faster
              <br />
              With AI Agents
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="max-w-[1200px] mx-auto relative min-h-[800px] py-8">
          <div className="text-center relative z-10">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-[#F5F5F5] border border-[#DBDBDB] mb-3 sm:mb-6 font-plus-jakarta text-[10px] sm:text-base whitespace-nowrap font-medium"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
              </svg>
              Made For Music Professionals
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-[72px] sm:text-[84px] lg:text-[120px] leading-[0.95] tracking-[-0.04em] mb-4 font-extrabold font-plus-jakarta"
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Grow Your
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Artists Faster
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                With AI Agents
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-3xl text-black max-w-[800px] mx-auto mb-6 font-plus-jakarta font-medium leading-[1.4] sm:leading-[60px] tracking-[-0.01em] sm:tracking-[-0.02em] px-4 sm:px-0"
            >
              Automated roster development to maximize revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 mb-12"
            >
              <Link
                href="https://calendly.com/sidney-recoupable/one-on-one"
                className="inline-flex items-center justify-center px-8 py-4 border border-black text-base font-medium rounded-xl text-black hover:bg-gray-50 transition-colors duration-200 font-plus-jakarta"
              >
                Schedule Your Demo
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] font-medium border border-gray-200 rounded-2xl sm:rounded-xl hover:bg-gray-50 transition-all"
              >
                View Case Studies
              </Link>
            </motion.div>

            {/* Website Image with Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative w-full max-w-[1000px] mx-auto"
            >
              <div className="relative w-full">
                <Image
                  src="/Recoup Website.svg"
                  alt="Recoup Website Interface"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0">
                  <AgentPills />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 