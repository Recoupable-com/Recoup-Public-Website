'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-2xl border border-[#DBDBDB] overflow-hidden"
        >
          <div className="p-8 md:p-12 lg:p-16">
            {/* Content */}
            <div className="text-center max-w-3xl mx-auto">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F5F5F5] border border-[#DBDBDB] mb-4 font-plus-jakarta font-semibold text-sm sm:text-base"
              >
                Get Started Today
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 font-plus-jakarta"
              >
                Transform Your Label
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-neutral-600 mb-8 font-plus-jakarta"
              >
                Join the AI revolution in music management. Start growing your roster with data-driven decisions and automated execution.
              </motion.p>

              {/* Feature List */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                <div className="p-6 bg-[#F5F5F5] rounded-xl">
                  <p className="text-2xl font-bold text-black mb-2 font-plus-jakarta">1000%+</p>
                  <p className="text-sm text-neutral-600 font-plus-jakarta">ROI on Activations</p>
                </div>
                
                <div className="p-6 bg-[#F5F5F5] rounded-xl">
                  <p className="text-2xl font-bold text-black mb-2 font-plus-jakarta">110k+</p>
                  <p className="text-sm text-neutral-600 font-plus-jakarta">Data Points per Artist</p>
                </div>
                
                <div className="p-6 bg-[#F5F5F5] rounded-xl">
                  <p className="text-2xl font-bold text-black mb-2 font-plus-jakarta">35%</p>
                  <p className="text-sm text-neutral-600 font-plus-jakarta">Brand Partnership Success</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="https://chat.recoupable.com/signin"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-black hover:bg-black/90 transition-colors duration-200 font-plus-jakarta w-full sm:w-auto"
                >
                  Start Free Trial
                </a>
                <Link
                  href="https://calendly.com/sidney-recoupable/one-on-one"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Schedule Demo
                </Link>
              </motion.div>

              {/* Pricing Note */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-sm text-neutral-500 font-plus-jakarta"
              >
                Starting at $99/month per artist. 14-day free trial, no credit card required.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 