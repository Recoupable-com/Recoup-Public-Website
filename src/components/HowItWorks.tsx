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
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium text-white mb-6">
            How Recoup works
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Get started in minutes and let our AI help you grow your music career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors"
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-4 w-fit mb-8 ring-1 ring-white/10">
                {step.icon}
              </div>
              <div className="text-zinc-600 text-6xl font-medium mb-6">
                {step.number}
              </div>
              <h3 className="text-white text-3xl font-medium mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 