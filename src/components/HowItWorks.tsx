'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      title: "Connect Your Platforms",
      description: "One-click integration with Spotify, Apple Music, social media, and more. Import your entire roster's data instantly.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      stats: "5-minute setup"
    },
    {
      title: "AI Analysis & Strategy",
      description: "Our AI analyzes your roster's performance, identifies growth opportunities, and creates personalized strategies for each artist.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      stats: "24/7 optimization"
    },
    {
      title: "Automated Execution",
      description: "Our AI agents work around the clock to implement strategies, engage fans, and optimize performance across all platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: "450+ hours saved monthly"
    },
    {
      title: "Growth & Insights",
      description: "Track your roster's growth with real-time analytics. Get actionable insights and recommendations for continuous improvement.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      stats: "142% average growth"
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold tracking-wide uppercase text-gray-200">How It Works</h2>
          <p className="mt-2 text-4xl font-bold sm:text-5xl">
            AI-Powered Growth in 4 Steps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            From setup to scale, our AI handles everything
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gray-800 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-200 group">
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="bg-gray-800 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-200">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-4">{step.description}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center text-sm text-emerald-400 font-medium">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {step.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 