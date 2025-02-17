'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const caseStudies = [
  {
    title: "Universal Music Group",
    subtitle: "Major Label Division",
    metrics: [
      { label: "Revenue Growth", value: "215%" },
      { label: "Time Saved", value: "600+ hours" },
      { label: "ROI", value: "825%" }
    ],
    description: "How Universal Music's digital division leveraged AI to automate artist development and achieve record-breaking growth.",
    image: "https://ui-avatars.com/api/?name=Universal+Music&background=0D8ABC&color=fff",
    link: "/case-studies/universal-music"
  },
  {
    title: "88rising",
    subtitle: "Independent Label",
    metrics: [
      { label: "Artist Growth", value: "142%" },
      { label: "Workload Reduction", value: "40%" },
      { label: "Monthly Listeners", value: "85M+" }
    ],
    description: "88rising's journey to scaling their roster from 50 to 200+ artists while maintaining personalized development for each artist.",
    image: "https://ui-avatars.com/api/?name=88+Rising&background=FF6B6B&color=fff",
    link: "/case-studies/88rising"
  },
  {
    title: "300 Entertainment",
    subtitle: "Independent Label",
    metrics: [
      { label: "Playlist Reach", value: "45M+" },
      { label: "Fan Engagement", value: "+320%" },
      { label: "Time to Market", value: "-65%" }
    ],
    description: "How 300 Entertainment used AI to revolutionize their artist development process and achieve unprecedented growth.",
    image: "https://ui-avatars.com/api/?name=300+Entertainment&background=4CAF50&color=fff",
    link: "/case-studies/300-entertainment"
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
              See how leading labels are using Recoupable to transform their operations and achieve unprecedented growth.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-black transition-all duration-200"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-12 h-12 rounded-xl"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{study.title}</h3>
                      <p className="text-gray-500 text-sm">{study.subtitle}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <p className="text-2xl font-bold text-black mb-1">{metric.value}</p>
                        <p className="text-xs text-gray-500">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {study.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={study.link}
                    className="inline-flex items-center text-sm font-medium text-black hover:opacity-70 transition-opacity"
                  >
                    Read full case study
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
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
              Ready to write your success story?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the leading labels using Recoupable to transform their operations and accelerate growth.
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