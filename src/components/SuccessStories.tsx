'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SuccessStories() {
  const stories = [
    {
      name: "Sarah Chen",
      role: "Independent Artist",
      image: "/headshots/Sarah.jpg",
      quote: "Recoupable helped me grow my Spotify monthly listeners from 1K to 50K in just 3 months. The AI-powered strategies were game-changing.",
      stats: [
        { label: "Spotify Growth", value: "50K+" },
        { label: "Revenue Increase", value: "312%" }
      ]
    },
    {
      name: "Marcus Rodriguez",
      role: "Music Producer",
      image: "/headshots/Marcus.jpg",
      quote: "The automated press releases and content generation saved me hours of work. Now I can focus on what matters - making music.",
      stats: [
        { label: "Time Saved", value: "15hrs/week" },
        { label: "Press Features", value: "25+" }
      ]
    },
    {
      name: "Elena Kim",
      role: "Indie Label Owner",
      image: "/headshots/Elena.jpg",
      quote: "Managing multiple artists became so much easier. The analytics help us make data-driven decisions for each release.",
      stats: [
        { label: "Artists Managed", value: "12" },
        { label: "ROI", value: "425%" }
      ]
    }
  ];

  return (
    <section className="py-32 md:py-40 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.015]" />
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[70%] bg-gradient-to-tr from-orange-100/30 to-rose-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-6">
            <div className="bg-black/5 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-gray-600">
              Success Stories
            </div>
          </div>
          <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight mb-6">
            From artists like you
          </h2>
          <p className="text-gray-500 max-w-[600px] mx-auto text-lg">
            See how musicians and industry professionals are using Recoupable to grow their careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-[32px] p-8 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="relative w-[72px] h-[72px]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover mix-blend-multiply"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-1 rounded-2xl border border-black/[0.08] -z-10" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{story.name}</h3>
                  <p className="text-gray-500 text-[15px]">{story.role}</p>
                </div>
              </div>
              
              <div className="relative mb-10">
                <svg className="absolute -top-3 -left-1 w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[17px] leading-relaxed text-gray-600 pl-8">
                  {story.quote}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {story.stats.map((stat, i) => (
                  <div key={i} className="relative group/stat">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-2xl -z-10 group-hover/stat:scale-105 transition-transform duration-300" />
                    <div className="px-6 py-5">
                      <div className="text-[32px] font-medium mb-1 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-[13px] text-gray-500 font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card hover effect */}
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-gray-900/[0.08] group-hover:ring-gray-900/[0.15] transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 