'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const highlights = [
  {
    label: "Email Value",
    value: "$196,607",
    subtext: "Generated in 4 days"
  },
  {
    label: "Campaign ROI",
    value: "+1053%",
    subtext: "Record-breaking return"
  },
  {
    label: "Fan Data Points",
    value: "110,286",
    subtext: "For targeted marketing"
  }
];

const keyResults = [
  {
    metric: "12,450",
    label: "Game Plays",
    description: "Active fan engagement through gamification"
  },
  {
    metric: "9,892",
    label: "New Spotify Followers",
    description: "Direct platform growth"
  },
  {
    metric: "8,213",
    label: "Playlists Created",
    description: "Organic music promotion"
  }
];

const timeline = [
  {
    date: "Day 1",
    title: "Campaign Launch",
    description: "Launched Better Off Alone Game with AI-powered targeting",
    metrics: ["42,044 fan data points collected", "4,450 game plays"]
  },
  {
    date: "Day 2",
    title: "Early Results",
    description: "AI optimization kicked in based on Day 1 data",
    metrics: ["Email value: $98,303", "3,150 super fans identified"]
  },
  {
    date: "Day 3",
    title: "Peak Performance",
    description: "Campaign reached maximum efficiency",
    metrics: ["4,100 playlists created", "4,946 Spotify followers gained"]
  },
  {
    date: "Day 4",
    title: "Campaign Success",
    description: "Exceeded all target metrics",
    metrics: ["Total value: $196,607", "ROI: +1053%"]
  }
];

export default function ABoogieCaseStudy() {
  return (
    <main className="bg-white">
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

            {/* Campaign Overview Card */}
            <div className="relative rounded-3xl overflow-hidden mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/90 to-rose-700/90 mix-blend-multiply" />
              <Image
                src="/artists/z5oa3040hj651.webp"
                alt="Campaign Overview"
                width={1200}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white max-w-3xl p-8">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    4-Day Campaign Generated $196,607 in Fan Value
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90">
                    How Atlantic Records used Recoup&apos;s AI to drive record-breaking ROI through A Boogie&apos;s Better Off Alone Game campaign.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {highlights.map((highlight) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl border border-gray-200 p-8 text-center"
                >
                  <p className="text-5xl font-bold text-black mb-2">{highlight.value}</p>
                  <p className="text-lg font-medium text-gray-900 mb-1">{highlight.label}</p>
                  <p className="text-sm text-gray-500">{highlight.subtext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {/* The Challenge */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
                <div className="bg-red-50 rounded-xl p-8">
                  <p className="text-gray-900 mb-6 text-lg">
                    Atlantic Records needed a way to:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="block w-2 h-2 rounded-full bg-red-500" />
                      </span>
                      <span className="text-gray-700">Drive fan engagement for A Boogie&apos;s new release</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="block w-2 h-2 rounded-full bg-red-500" />
                      </span>
                      <span className="text-gray-700">Capture valuable fan data for future marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="block w-2 h-2 rounded-full bg-red-500" />
                      </span>
                      <span className="text-gray-700">Maximize ROI from the campaign investment</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              {/* The Solution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">The Recoup Solution</h2>
                <div className="bg-emerald-50 rounded-xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">AI-Powered Fan Engagement</h3>
                        <p className="text-gray-700">Custom game mechanics that capture fan data while providing entertainment value</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Real-Time Analytics</h3>
                        <p className="text-gray-700">Continuous optimization based on fan behavior and engagement patterns</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Automated Growth</h3>
                        <p className="text-gray-700">24/7 fan acquisition and engagement optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Additional Results */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Campaign Results</h2>
                <div className="grid grid-cols-1 gap-6">
                  {keyResults.map((result) => (
                    <div
                      key={result.label}
                      className="bg-gray-50 rounded-xl p-6 flex items-center gap-6"
                    >
                      <div className="flex-1">
                        <p className="text-3xl font-bold text-black mb-1">{result.metric}</p>
                        <p className="text-sm font-medium text-gray-900">{result.label}</p>
                      </div>
                      <p className="text-sm text-gray-600 max-w-[200px]">{result.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Timeline */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">4-Day Campaign Timeline</h2>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div
                      key={item.date}
                      className="relative pl-8 pb-6 last:pb-0"
                    >
                      {index !== timeline.length - 1 && (
                        <div className="absolute left-[15px] top-[24px] bottom-0 w-px bg-gray-200" />
                      )}
                      <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="block w-3 h-3 rounded-full bg-red-500" />
                      </div>
                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-medium text-red-600">{item.date}</span>
                          <span className="text-lg font-semibold text-gray-900">{item.title}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-3">
                          {item.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="inline-flex px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-24"
          >
            <div className="bg-black text-white rounded-2xl px-8 py-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Fan Engagement?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join Atlantic Records and other major labels using Recoup&apos;s AI to drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://chat.recoupable.com/signin"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-black bg-white hover:bg-gray-100 transition-colors duration-200"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="https://calendly.com/sidney-recoupable/recoup-product-demo"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white border border-white/20 hover:bg-white/10 transition-colors duration-200"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </article>
    </main>
  );
} 