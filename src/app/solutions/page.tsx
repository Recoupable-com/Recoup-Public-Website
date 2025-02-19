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
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F5F5F5] border border-[#DBDBDB] mb-4 font-plus-jakarta text-sm sm:text-base"
            >
              Used by Atlantic Records, 300 Entertainment & More
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Agents for Every <br />Label Function
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate your operations, maximize artist growth, and drive revenue with AI-powered solutions built for the music industry.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-black text-white rounded-2xl p-8 text-center">
              <p className="text-4xl font-bold mb-2">85%</p>
              <p className="text-lg text-white/80">Time Saved on Operations</p>
            </div>
            <div className="bg-black text-white rounded-2xl p-8 text-center">
              <p className="text-4xl font-bold mb-2">2-3x</p>
              <p className="text-lg text-white/80">Faster Artist Growth</p>
            </div>
            <div className="bg-black text-white rounded-2xl p-8 text-center">
              <p className="text-4xl font-bold mb-2">312%</p>
              <p className="text-lg text-white/80">Average Campaign ROI</p>
            </div>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-black transition-all duration-200"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="bg-black text-white p-3 rounded-xl flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>

                  {/* Features with Enhanced Visual Design */}
                  <div className="space-y-4">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-900 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Results Card */}
                  <div className="mt-8 bg-black text-white rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold mb-1">
                      {solution.metrics.value}
                    </p>
                    <p className="text-sm text-white/80">{solution.metrics.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integrations with Visual Enhancement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold mb-4">
              Works With Your Entire Stack
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Seamlessly integrate with all major music and social platforms
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {integrations.map((platform) => (
                <div
                  key={platform}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-black hover:shadow-lg transition-all duration-200"
                >
                  <p className="font-medium">{platform}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Enhanced CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center bg-black text-white rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Label Operations?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join leading labels using AI to automate growth, maximize fan engagement, and drive revenue.
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
            <p className="mt-6 text-sm text-white/60">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  );
} 