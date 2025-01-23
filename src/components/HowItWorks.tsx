'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Subscribe",
      description: "Choose your plan and create your account.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Deploy",
      description: "Connect your music platforms in one click.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Grow",
      description: "Let AI help you reach new heights.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-zinc-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-blue-200 font-medium">
              Simple 3-Step Process
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight"
          >
            How Recoup works
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Get started in minutes and let our AI help you grow your music career.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-3xl p-8 hover:border-zinc-600/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl p-4 w-fit mb-8 ring-1 ring-white/20 group-hover:ring-white/30 transition-all duration-300">
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
              
              <div className="text-zinc-400 text-7xl font-medium mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                {String(step.number).padStart(2, '0')}
              </div>
              
              <h3 className="text-white text-2xl md:text-3xl font-medium mb-4 group-hover:text-white/90 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 