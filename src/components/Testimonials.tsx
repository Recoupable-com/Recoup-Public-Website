'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Recoup's AI automated our entire artist development process. In 6 months, we saw massive growth across our roster.",
      author: "Sarah Chen",
      role: "Head of A&R",
      company: "Indie Label Collective",
      metrics: [
        { label: "Revenue Growth", value: "850%", description: "Increased streaming & brand deals" },
        { label: "New Followers", value: "13k+", description: "Per artist monthly" },
        { label: "Time Saved", value: "85%", description: "On routine tasks" }
      ],
      image: "/testimonials/indie-label.jpg"
    },
    {
      quote: "The AI-powered brand matching is game-changing. We're closing deals while we sleep.",
      author: "Marcus Thompson",
      role: "Artist Manager",
      company: "Modern Music Group",
      metrics: [
        { label: "Partnership Success", value: "35%", description: "Brand deal close rate" },
        { label: "Revenue Increase", value: "1000%", description: "Year over year" },
        { label: "Monthly Matches", value: "50+", description: "Qualified brand leads" }
      ],
      image: "/testimonials/modern-music.jpg"
    },
    {
      quote: "Finally, we can scale our roster without scaling our team. The data insights are incredible.",
      author: "Lisa Rodriguez",
      role: "Marketing Director",
      company: "Forward Records",
      metrics: [
        { label: "Data Points", value: "110k+", description: "Per artist analyzed" },
        { label: "Fan Interactions", value: "300k+", description: "Automated monthly" },
        { label: "Campaign ROI", value: "425%", description: "Average return" }
      ],
      image: "/testimonials/forward-records.jpg"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black text-white">
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4 font-plus-jakarta text-sm"
          >
            Success Stories
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-plus-jakarta bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
          >
            Real Results
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto font-plus-jakarta"
          >
            See how leading labels are transforming their operations
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Card */}
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-8 hover:border-white/20 transition-all duration-300">
                {/* Quote */}
                <div className="mb-6 sm:mb-8">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/20 mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                  </svg>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed font-plus-jakarta">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="mb-6 sm:mb-8">
                  <p className="font-semibold text-white font-plus-jakarta">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-white/60 font-plus-jakarta">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-white/60 font-plus-jakarta">{testimonial.company}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-2">
                  {testimonial.metrics.map((metric) => (
                    <div key={metric.label} className="flex sm:block items-center justify-between sm:text-center group-hover:transform group-hover:scale-105 transition-all duration-300 bg-white/5 sm:bg-transparent rounded-lg sm:rounded-none p-3 sm:p-0">
                      <div>
                        <p className="text-sm sm:text-xs text-white/60 font-plus-jakarta sm:mb-1">{metric.label}</p>
                        <p className="text-[10px] text-white/40 font-plus-jakarta leading-tight sm:block hidden">{metric.description}</p>
                      </div>
                      <p className="text-lg sm:text-2xl font-bold text-white sm:mb-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-plus-jakarta">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 