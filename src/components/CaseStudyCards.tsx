'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudyCards() {
  const caseStudies = [
    {
      title: "Atlantic Records",
      subtitle: "A Boogie Campaign",
      metrics: [
        { label: "Email Value", value: "$196,607" },
        { label: "Campaign ROI", value: "+1053%" }
      ],
      description: "How Atlantic Records used Recoup's AI to maximize fan engagement and revenue for A Boogie's Better Off Alone Game campaign.",
      image: "/artists/z5oa3040hj651.webp",
      link: "/case-studies/atlantic-a-boogie",
      color: "from-blue-500/80"
    },
    {
      title: "300 Entertainment",
      subtitle: "Megan Thee Stallion Campaign",
      metrics: [
        { label: "Email Value", value: "$206,400" },
        { label: "Fan Data Points", value: "97,133" }
      ],
      description: "How 300 Entertainment used Recoup's AI to drive massive fan engagement and identify superfans for Megan Thee Stallion's BOA Game campaign.",
      image: "/artists/megan-thee-stallion-prime-doc.webp",
      link: "/case-studies/300-megan-thee-stallion",
      color: "from-purple-500/80"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto">
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
            Success Stories
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 font-plus-jakarta"
          >
            Real Results
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto font-plus-jakarta"
          >
            See how leading labels are using Recoup to transform their operations
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link href={study.link} key={study.title + study.subtitle}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl border border-[#DBDBDB] overflow-hidden hover:border-black transition-all duration-200"
              >
                {/* Image Container */}
                <div className="relative h-[280px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} to-transparent opacity-40 mix-blend-overlay z-10`} />
                  <Image
                    src={study.image}
                    alt={study.subtitle}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Label Overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <p className="text-sm font-medium text-black">{study.title}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-2">{study.subtitle}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-3 bg-neutral-50 rounded-xl">
                        <p className="text-lg font-bold text-black mb-1">{metric.value}</p>
                        <p className="text-xs text-neutral-500 leading-tight">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <div className="flex items-center justify-end">
                    <span className="text-sm font-medium text-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View case study
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-4 border border-black text-base font-medium rounded-xl text-black hover:bg-gray-50 transition-colors duration-200 font-plus-jakarta"
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 