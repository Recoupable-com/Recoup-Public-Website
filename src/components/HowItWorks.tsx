'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      title: "Connect",
      description: "Link your Spotify profile and our AI starts analyzing your artist data instantly.",
      details: [
        "One-click Spotify integration",
        "Instant data import",
        "Real-time analytics setup"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Analyze",
      description: "AI processes your data and creates custom growth strategies.",
      details: [
        "Deep fan analysis",
        "Market opportunity detection",
        "Revenue optimization paths"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Execute",
      description: "24/7 automated campaigns optimize your growth and revenue.",
      details: [
        "Continuous optimization",
        "Automated fan engagement",
        "Real-time performance tracking"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white border border-[#DBDBDB] mb-4 font-plus-jakarta text-xs sm:text-base"
          >
            How It Works
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 font-plus-jakarta"
          >
            Simple Setup
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto font-plus-jakarta"
          >
            Get started in minutes, see results in hours
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#DBDBDB] -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white z-10 transition-transform duration-300 group-hover:scale-110 bg-black">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl border border-[#DBDBDB] p-8 transition-all duration-300 hover:border-black hover:shadow-xl group-hover:-translate-y-1">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-flex p-4 rounded-xl bg-white border border-[#DBDBDB] group-hover:bg-black group-hover:text-white transition-colors mb-6"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 font-plus-jakarta">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed font-plus-jakarta mb-6">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-neutral-600 bg-white border border-[#DBDBDB] rounded-lg px-3 py-2"
                      >
                        <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 