'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

type ChecklistItem = {
  id: string;
  title: string;
  description: string;
  category: 'preparation' | 'distribution' | 'marketing' | 'promotion';
};

const checklistItems: ChecklistItem[] = [
  {
    id: 'artwork',
    title: 'Artwork Ready',
    description: 'High-resolution cover art (3000x3000px, RGB)',
    category: 'preparation'
  },
  {
    id: 'metadata',
    title: 'Metadata Prepared',
    description: 'Song title, artist name, features, producers, writers',
    category: 'preparation'
  },
  {
    id: 'audio',
    title: 'Audio Mastered',
    description: 'WAV file (16-bit, 44.1kHz)',
    category: 'preparation'
  },
  {
    id: 'distributor',
    title: 'Distribution Setup',
    description: 'Upload to your distributor (2-3 weeks before)',
    category: 'distribution'
  },
  {
    id: 'presave',
    title: 'Pre-save Campaign',
    description: 'Set up pre-save links for major platforms',
    category: 'marketing'
  },
  {
    id: 'social',
    title: 'Social Media Plan',
    description: 'Content calendar and promotional assets ready',
    category: 'marketing'
  },
  {
    id: 'press',
    title: 'Press Materials',
    description: 'Press release, bio, and photos prepared',
    category: 'promotion'
  },
  {
    id: 'playlists',
    title: 'Playlist Pitching',
    description: 'Submit to editorial and independent playlists',
    category: 'promotion'
  }
];

export default function ReleaseChecklist() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on server-side to prevent hydration mismatch
  }

  const toggleItem = (id: string) => {
    setCompleted(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const categories = {
    preparation: 'Preparation',
    distribution: 'Distribution',
    marketing: 'Marketing',
    promotion: 'Promotion'
  };

  return (
    <>
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto px-4">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight font-medium mb-6">
              Release Checklist
            </h1>
            <p className="text-gray-500 text-lg max-w-[600px] mx-auto">
              Stay organized and ensure you&apos;ve completed all necessary steps before releasing your music.
            </p>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-black/5 rounded-full h-2 mb-2">
              <div 
                className="bg-black h-full rounded-full transition-all duration-300"
                style={{ width: `${(completed.length / checklistItems.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-500">
              {completed.length} of {checklistItems.length} tasks completed
            </p>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {Object.entries(categories).map(([category, title]) => (
              <div key={category} className="space-y-3">
                <h2 className="text-lg font-medium">{title}</h2>
                <div className="space-y-2">
                  {checklistItems
                    .filter(item => item.category === category)
                    .map(item => (
                      <motion.div
                        key={item.id}
                        className={`p-4 border rounded-xl cursor-pointer transition-all duration-200
                          ${completed.includes(item.id) 
                            ? 'bg-black text-white border-transparent' 
                            : 'bg-white border-gray-200 hover:border-black/20'
                          }`}
                        onClick={() => toggleItem(item.id)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-md border flex-shrink-0 flex items-center justify-center mt-0.5
                            ${completed.includes(item.id)
                              ? 'bg-white border-transparent'
                              : 'border-gray-300'
                            }`}
                          >
                            {completed.includes(item.id) && (
                              <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h3 className={`font-medium ${completed.includes(item.id) ? 'text-white' : 'text-gray-900'}`}>
                              {item.title}
                            </h3>
                            <p className={`text-sm ${completed.includes(item.id) ? 'text-white/70' : 'text-gray-500'}`}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
} 