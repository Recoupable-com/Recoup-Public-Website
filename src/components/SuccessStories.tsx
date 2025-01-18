'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SuccessStories() {
  const stories = [
    {
      name: "Sarah Chen",
      role: "Independent Artist",
      image: "/artists/sarah.jpg",
      quote: "Recoup helped me grow my Spotify monthly listeners from 1K to 50K in just 3 months. The AI-powered strategies were game-changing.",
      stats: [
        { label: "Spotify Growth", value: "50K+" },
        { label: "Revenue Increase", value: "312%" }
      ]
    },
    {
      name: "Marcus Rodriguez",
      role: "Music Producer",
      image: "/artists/marcus.jpg",
      quote: "The automated press releases and content generation saved me hours of work. Now I can focus on what matters - making music.",
      stats: [
        { label: "Time Saved", value: "15hrs/week" },
        { label: "Press Features", value: "25+" }
      ]
    },
    {
      name: "Elena Kim",
      role: "Indie Label Owner",
      image: "/artists/elena.jpg",
      quote: "Managing multiple artists became so much easier. The analytics help us make data-driven decisions for each release.",
      stats: [
        { label: "Artists Managed", value: "12" },
        { label: "ROI", value: "425%" }
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Success stories from artists like you
          </h2>
          <p className="text-gray-500 max-w-[600px] mx-auto">
            See how musicians and industry professionals are using Recoup to grow their careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{story.name}</h3>
                  <p className="text-sm text-gray-500">{story.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                "{story.quote}"
              </p>

              <div className="grid grid-cols-2 gap-4">
                {story.stats.map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-2xl font-medium">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 