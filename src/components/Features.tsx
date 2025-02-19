'use client';

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "AI-Powered Growth",
      description: "24/7 automated growth and revenue optimization for your roster.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      metric: "85%",
      metricLabel: "Time Saved on Operations",
      bullets: [
        "24/7 opportunity detection",
        "Automated deal matching",
        "Real-time performance tracking"
      ]
    },
    {
      title: "Fan Insights",
      description: "Know exactly who your fans are and what they want.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "2-3x",
      metricLabel: "Faster Growth Rate",
      bullets: [
        "Spot trends before others",
        "Find your superfans",
        "Never miss opportunities"
      ]
    },
    {
      title: "Revenue Analytics",
      description: "Maximize revenue across all streams with AI-driven insights.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      metric: "312%",
      metricLabel: "Average ROI",
      bullets: [
        "Revenue stream analysis",
        "Smart opportunity matching",
        "Continuous optimization"
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F5F5F5] border border-[#DBDBDB] mb-4 font-plus-jakarta text-sm sm:text-base"
          >
            AI-Powered Results
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 font-plus-jakarta"
          >
            Supercharge Your Label
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto font-plus-jakarta"
          >
            AI agents that drive real growth while saving you time
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl border border-[#DBDBDB] overflow-hidden transition-all duration-300 hover:border-black hover:shadow-xl hover:-translate-y-1">
                {/* Metric Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-black text-white px-4 py-2 rounded-xl">
                    <p className="text-2xl font-bold">{feature.metric}</p>
                    <p className="text-xs text-white/80">{feature.metricLabel}</p>
                  </div>
                </div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-8">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-flex rounded-2xl p-5 bg-[#F5F5F5] hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      {feature.icon}
                    </motion.div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-3 font-plus-jakarta">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed font-plus-jakarta">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-4">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4 hover:bg-neutral-100 transition-all">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-neutral-700 font-medium font-plus-jakarta">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 