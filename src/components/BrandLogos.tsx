'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandLogos() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <style jsx global>{`
        :root {
          --svg-fill-color: #000000;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neutral-600 text-xl font-plus-jakarta">
            Trusted by leading labels and management companies
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-32 gap-y-16"
        >
          <div className="w-48 h-16 relative">
            <Image
              src="/partners/Atlantic.svg"
              alt="Atlantic Records"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="w-48 h-16 relative">
            <Image
              src="/partners/$300.svg"
              alt="300 Entertainment"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="w-56 h-20 relative">
            <Image
              src="/partners/WMG.svg"
              alt="Warner Music Group"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 