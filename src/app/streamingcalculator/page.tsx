'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

type Platform = 'spotify' | 'apple' | 'tidal' | 'amazon' | 'youtube';

const platforms: Record<Platform, number> = {
  spotify: 0.004,
  apple: 0.007,
  tidal: 0.013,
  amazon: 0.004,
  youtube: 0.002,
};

export default function StreamingCalculator() {
  const [streams, setStreams] = useState('');
  const [platform, setPlatform] = useState<Platform>('spotify');

  const calculateEarnings = () => {
    const streamCount = parseInt(streams.replace(/,/g, '')) || 0;
    return (streamCount * platforms[platform]).toFixed(2);
  };

  return (
    <>
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[600px] mx-auto px-4">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight font-medium mb-6">
              Streaming Revenue Calculator
            </h1>
            <p className="text-gray-500 text-lg">
              Calculate your potential earnings from music streaming platforms.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-gray-200 rounded-2xl p-8"
          >
            {/* Platform Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Streaming Platform</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(Object.keys(platforms) as Platform[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all
                      ${platform === p 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Stream Count Input */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Number of Streams</label>
              <input
                type="text"
                value={streams}
                onChange={(e) => {
                  // Allow only numbers and commas
                  const value = e.target.value.replace(/[^\d,]/g, '');
                  // Format with commas
                  const formatted = value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                  setStreams(formatted);
                }}
                placeholder="Enter number of streams"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none text-gray-900"
              />
            </div>

            {/* Results */}
            <div className="bg-gray-100 rounded-xl p-6 text-center">
              <div className="text-sm text-gray-500 mb-2">Estimated Earnings</div>
              <div className="text-4xl font-medium text-gray-900">
                ${calculateEarnings()}
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Based on average payout of ${platforms[platform]} per stream
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-gray-500 text-center mt-8"
          >
            Note: These calculations are estimates based on average payouts. Actual earnings may vary depending on various factors including region, subscription type, and agreements.
          </motion.p>
        </div>
      </section>
    </>
  );
} 