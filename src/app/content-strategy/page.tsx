'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import LoadingAnimation from '@/components/LoadingAnimation';

type Platform = 'instagram' | 'tiktok' | 'twitter' | 'youtube';

interface ContentPlan {
  platform: Platform;
  contentIdeas: string[];
  postingSchedule: string;
  engagementTips: string[];
}

interface PlatformInfo {
  id: Platform;
  label: string;
  icon: React.ReactNode;
}

export default function ContentStrategy() {
  const [artistData, setArtistData] = useState({
    name: '',
    genre: '',
    style: '',
    targetAudience: '',
    goals: '',
    platforms: [] as Platform[],
    upcomingReleases: '',
    uniqueStory: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [contentPlan, setContentPlan] = useState<ContentPlan[]>([]);

  const platforms: PlatformInfo[] = [
    {
      id: 'instagram',
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'twitter',
      label: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      )
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const togglePlatform = (platform: Platform) => {
    setArtistData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const generateStrategy = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-strategy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(artistData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate strategy');
      }

      setContentPlan(data.contentPlan);
    } catch (error) {
      console.error('Error generating strategy:', error);
      alert(error instanceof Error ? error.message : 'Error generating strategy. Please try again.');
    }
    setIsGenerating(false);
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
              Content Strategy Generator
            </h1>
            <p className="text-gray-500 text-lg">
              Get a personalized social media and marketing strategy powered by AI.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <form onSubmit={(e) => { e.preventDefault(); generateStrategy(); }} className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Artist/Band Name</label>
                  <input
                    type="text"
                    value={artistData.name}
                    onChange={(e) => setArtistData({ ...artistData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    placeholder="Enter your artist or band name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Genre</label>
                  <input
                    type="text"
                    value={artistData.genre}
                    onChange={(e) => setArtistData({ ...artistData, genre: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    placeholder="e.g. Hip Hop, Indie Rock, Electronic"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Style/Subgenre</label>
                  <input
                    type="text"
                    value={artistData.style}
                    onChange={(e) => setArtistData({ ...artistData, style: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    placeholder="Describe your specific style or subgenre"
                    required
                  />
                </div>
              </div>

              {/* Target Audience & Goals */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <textarea
                    value={artistData.targetAudience}
                    onChange={(e) => setArtistData({ ...artistData, targetAudience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none min-h-[80px]"
                    placeholder="Describe your ideal listeners (age, interests, location, etc.)"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Goals</label>
                  <textarea
                    value={artistData.goals}
                    onChange={(e) => setArtistData({ ...artistData, goals: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none min-h-[80px]"
                    placeholder="What are your main goals? (e.g., grow followers, increase streams, build email list)"
                    required
                  />
                </div>
              </div>

              {/* Platforms */}
              <div className="space-y-4">
                <label className="block text-sm font-medium mb-2">Platforms</label>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => togglePlatform(platform.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all ${
                        artistData.platforms.includes(platform.id)
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      {platform.icon}
                      {platform.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Context */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Upcoming Releases</label>
                  <textarea
                    value={artistData.upcomingReleases}
                    onChange={(e) => setArtistData({ ...artistData, upcomingReleases: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none min-h-[80px]"
                    placeholder="Any upcoming releases, shows, or important dates?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Story</label>
                  <textarea
                    value={artistData.uniqueStory}
                    onChange={(e) => setArtistData({ ...artistData, uniqueStory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none min-h-[80px]"
                    placeholder="What makes you unique? Share your story, influences, or interesting facts."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isGenerating || artistData.platforms.length === 0}
                className="w-full bg-black text-white px-8 py-4 rounded-xl text-[15px] font-medium hover:bg-black/90 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating Strategy...' : 'Generate Content Strategy'}
              </button>
            </form>
          </motion.div>

          {/* Results */}
          {isGenerating ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <LoadingAnimation />
            </motion.div>
          ) : contentPlan.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 space-y-8"
            >
              {contentPlan.map((plan) => (
                <div
                  key={plan.platform}
                  className="bg-white border border-gray-200 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-medium mb-6">{plan.platform} Strategy</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Content Ideas</h3>
                      <ul className="space-y-2">
                        {plan.contentIdeas.map((idea, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-gray-400">•</span>
                            {idea}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Posting Schedule</h3>
                      <p className="text-gray-600">{plan.postingSchedule}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Engagement Tips</h3>
                      <ul className="space-y-2">
                        {plan.engagementTips.map((tip, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-gray-400">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
} 