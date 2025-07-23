'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              Ready to grow your music career?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-[600px] mx-auto">
              Join thousands of artists using Recoupable to reach new audiences and increase their revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://chat.recoupable.com/signin"
                className="bg-white text-black px-8 py-4 rounded-xl text-[15px] font-medium hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl"
              >
                Get started for free
              </Link>
              <a
                href="https://calendly.com/sidney-recoupable/one-on-one"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-black rounded-xl hover:bg-gray-800 transition-colors"
              >
                Request a demo
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 