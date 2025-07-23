'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const caseStudies = [
  {
    title: "Atlantic Records",
    subtitle: "Luh Tyler Campaign",
    metrics: [
      { label: "Email Value", value: "$30,030" },
      { label: "Campaign ROI", value: "+200%" },
      { label: "Fan Data Points", value: "53,011" }
    ],
    description: "How Atlantic Records leveraged Recoupable's AI to drive unprecedented fan engagement and revenue growth for emerging artist Luh Tyler.",
    image: "/artists/luh-tyler-profile.webp",
    link: "/case-studies/atlantic-luh-tyler",
    color: "from-blue-500/80"
  },
  {
    title: "Atlantic Records",
    subtitle: "A Boogie Campaign",
    metrics: [
      { label: "Email Value", value: "$196,607" },
      { label: "Campaign ROI", value: "+1053%" },
      { label: "Fan Data Points", value: "110,286" }
    ],
    description: "A deep dive into how Atlantic Records used Recoupable's AI to maximize fan engagement and revenue for A Boogie's Better Off Alone campaign.",
    image: "/artists/z5oa3040hj651.webp",
    link: "/case-studies/atlantic-a-boogie",
    color: "from-red-500/80"
  },
  {
    title: "300 Entertainment",
    subtitle: "Megan Thee Stallion Campaign",
    metrics: [
      { label: "Email Value", value: "$206,400" },
      { label: "Fan Data Points", value: "97,133" },
      { label: "Super Fans", value: "6,450" }
    ],
    description: "How 300 Entertainment used Recoupable's AI to drive massive fan engagement and identify superfans for Megan Thee Stallion's BOA campaign.",
    image: "/artists/megan-thee-stallion-prime-doc.webp",
    link: "/case-studies/300-megan-thee-stallion",
    color: "from-green-500/80"
  }
];

export default function CaseStudies() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how major labels are using Recoupable's AI to transform their artist development and drive unprecedented growth.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link href={study.link} key={study.title + study.subtitle}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-black transition-all duration-200 h-full"
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
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <p className="text-lg font-bold text-black mb-1">{metric.value}</p>
                          <p className="text-xs text-gray-500 leading-tight">{metric.label}</p>
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Ready to transform your artist development?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join leading labels using Recoupable's AI to automate growth, maximize fan engagement, and drive revenue.
            </p>
            <Link
              href="https://chat.recoupable.com/signin"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-black hover:bg-black/90 transition-colors duration-200"
            >
              Start Your Free Trial
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 