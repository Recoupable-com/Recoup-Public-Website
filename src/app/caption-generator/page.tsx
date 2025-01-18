'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

type Platform = 'instagram' | 'tiktok' | 'twitter' | 'facebook';
type ContentType = 'new_release' | 'behind_scenes' | 'tour' | 'merch' | 'fan_engagement';

export default function CaptionGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('instagram');
  const [contentType, setContentType] = useState<ContentType>('new_release');
  const [artistName, setArtistName] = useState('');
  const [contentDetails, setContentDetails] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');

  const platforms = [
    { id: 'instagram', label: 'Instagram', icon: '📸' },
    { id: 'tiktok', label: 'TikTok', icon: '🎵' },
    { id: 'twitter', label: 'Twitter', icon: '🐦' },
    { id: 'facebook', label: 'Facebook', icon: '👥' }
  ];

  const contentTypes = [
    { id: 'new_release', label: 'New Release', icon: '🎵' },
    { id: 'behind_scenes', label: 'Behind the Scenes', icon: '🎬' },
    { id: 'tour', label: 'Tour/Show', icon: '🎪' },
    { id: 'merch', label: 'Merch', icon: '👕' },
    { id: 'fan_engagement', label: 'Fan Engagement', icon: '❤️' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedCaption('');

    try {
      const response = await fetch('/api/generate-caption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: selectedPlatform,
          contentType,
          artistName,
          contentDetails,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate caption');
      }

      const data = await response.json();
      setGeneratedCaption(data.caption);
    } catch (error) {
      console.error('Error generating caption:', error);
      alert('Failed to generate caption. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium text-center mb-6">
              Social Media Caption Generator
            </h1>
            <p className="text-gray-600 text-center mb-12 text-lg">
              Create engaging, platform-optimized captions for your music content in seconds
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Platform Selection */}
            <div className="space-y-4">
              <label className="block text-lg font-medium mb-2">Choose Platform</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => setSelectedPlatform(platform.id as Platform)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedPlatform === platform.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{platform.icon}</div>
                    <div className="font-medium">{platform.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Type Selection */}
            <div className="space-y-4">
              <label className="block text-lg font-medium mb-2">Content Type</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setContentType(type.id as ContentType)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      contentType === type.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-medium text-sm">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Artist Name */}
            <div className="space-y-2">
              <label className="block text-lg font-medium">Artist/Band Name</label>
              <input
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-black focus:ring-0 transition-colors"
                placeholder="Enter your artist or band name"
                required
              />
            </div>

            {/* Content Details */}
            <div className="space-y-2">
              <label className="block text-lg font-medium">Content Details</label>
              <textarea
                value={contentDetails}
                onChange={(e) => setContentDetails(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-black focus:ring-0 transition-colors h-32"
                placeholder="Describe your content (e.g., new song details, tour dates, merch description)"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-4 px-8 rounded-xl text-lg font-medium hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Generating...' : 'Generate Caption'}
            </button>
          </motion.form>

          {/* Generated Caption */}
          {generatedCaption && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-medium mb-4">Your Generated Caption</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="whitespace-pre-wrap">{generatedCaption}</p>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(generatedCaption)}
                className="mt-4 text-black hover:text-gray-700 font-medium"
              >
                Copy to Clipboard
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
} 