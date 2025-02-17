'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const solutions = [
  {
    title: "Artist Development",
    description: "AI-powered growth strategies customized for each artist's unique journey.",
    features: [
      "Personalized development roadmaps",
      "Performance analytics and insights",
      "Automated milestone tracking",
      "Growth opportunity identification"
    ],
    metrics: {
      value: "142%",
      label: "Average Artist Growth"
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Playlist & Radio Promotion",
    description: "Smart targeting and automated pitching to maximize playlist inclusion.",
    features: [
      "AI-powered playlist matching",
      "Automated pitch customization",
      "Performance tracking",
      "Relationship management"
    ],
    metrics: {
      value: "45M+",
      label: "Monthly Playlist Reach"
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    )
  },
  {
    title: "Fan Engagement",
    description: "24/7 automated fan interaction and community building across platforms.",
    features: [
      "Automated social media management",
      "Fan sentiment analysis",
      "Content optimization",
      "Engagement analytics"
    ],
    metrics: {
      value: "320%",
      label: "Engagement Increase"
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Revenue Optimization",
    description: "AI-driven strategies to maximize revenue across all streams.",
    features: [
      "Revenue stream analysis",
      "Opportunity identification",
      "Automated optimization",
      "ROI tracking"
    ],
    metrics: {
      value: "215%",
      label: "Revenue Growth"
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const integrations = [
  "Spotify", "Apple Music", "Amazon Music", "YouTube Music",
  "Instagram", "TikTok", "Twitter", "Facebook",
  "SoundCloud", "Bandcamp", "Discord", "Twitch"
];

export default function Solutions() {
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
              Complete Label Management Solution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to scale your label operations and maximize artist growth.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-black transition-all duration-200"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-black text-white p-3 rounded-xl">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">{solution.title}</h3>
                      <p className="text-gray-500">{solution.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-black mb-1">
                      {solution.metrics.value}
                    </p>
                    <p className="text-sm text-gray-500">{solution.metrics.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integrations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-semibold mb-8">
              Seamless Integrations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {integrations.map((platform) => (
                <div
                  key={platform}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-black transition-all duration-200"
                >
                  <p className="font-medium">{platform}</p>
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
              Ready to Transform Your Label?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of labels using Recoupable to scale their operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://chat.recoupable.com/signin"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-black hover:bg-black/90 transition-colors duration-200"
              >
                Start Free Trial
              </Link>
              <Link
                href="https://calendly.com/sidney-recoupable/recoup-product-demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-black text-base font-medium rounded-xl text-black hover:bg-gray-50 transition-colors duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
} 