'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const metrics = [
  {
    label: "Artist Growth",
    value: "142%",
    description: "Average increase in monthly listeners"
  },
  {
    label: "Workload Reduction",
    value: "40%",
    description: "Decrease in manual management tasks"
  },
  {
    label: "Roster Size",
    value: "4x",
    description: "Increase in managed artists"
  },
  {
    label: "Monthly Listeners",
    value: "85M+",
    description: "Total reach across all artists"
  }
];

const timeline = [
  {
    date: "Month 1",
    title: "Platform Integration",
    description: "Connected all streaming and social platforms, imported historical data for analysis."
  },
  {
    date: "Month 2",
    title: "Strategy Optimization",
    description: "AI began identifying growth opportunities and optimizing promotion strategies."
  },
  {
    date: "Month 4",
    title: "Roster Expansion",
    description: "Successfully scaled from 50 to 100 artists while maintaining quality of management."
  },
  {
    date: "Month 6",
    title: "Full Scale",
    description: "Reached 200+ artists with automated management and consistent growth rates."
  }
];

export default function EightEightRisingCaseStudy() {
  return (
    <main>
      <Navbar />
      <article className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-8"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How 88rising Scaled from 50 to 200+ Artists
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A look at how 88rising used AI to expand their roster while maintaining personalized artist development.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-8">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-4xl font-bold text-black mb-1">
                    {metric.value}
                  </p>
                  <p className="text-sm font-medium text-gray-900 mb-2">{metric.label}</p>
                  <p className="text-sm text-gray-500">{metric.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                88rising faced several challenges in their mission to scale their artist roster:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-600">Limited capacity to manage more than 50 artists effectively</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-600">Difficulty maintaining consistent growth across diverse artist portfolio</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-600">Time-intensive manual processes limiting scalability</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
            <div className="bg-emerald-50 rounded-2xl p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                Recoupable provided an AI-powered solution that enabled massive scale:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Automated artist development workflows and promotion strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">AI-driven performance analysis and optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Scalable management system supporting 200+ artists</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-8">Implementation Timeline</h2>
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.date} className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-24">
                    <p className="text-sm font-medium text-gray-500">{item.date}</p>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Scale Your Label?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 88rising and hundreds of other labels using Recoupable to transform their operations.
            </p>
            <Link
              href="https://chat.recoupable.com/signin"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-black hover:bg-black/90 transition-colors duration-200"
            >
              Start Your Free Trial
            </Link>
          </motion.section>
        </div>
      </article>
    </main>
  );
} 