'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';

interface PressReleaseData {
  headline: string;
  subheading: string;
  dateline: string;
  introduction: string;
  body: string[];
  boilerplate: string;
  contactInfo: string;
}

export default function PressRelease() {
  const [isLoading, setIsLoading] = useState(false);
  const [pressRelease, setPressRelease] = useState<PressReleaseData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      artistName: formData.get('artistName'),
      releaseType: formData.get('releaseType'),
      releaseTitle: formData.get('releaseTitle'),
      releaseDate: formData.get('releaseDate'),
      genre: formData.get('genre'),
      description: formData.get('description'),
      quotes: formData.get('quotes'),
      achievements: formData.get('achievements'),
      links: formData.get('links'),
    };

    try {
      const response = await fetch('/api/generate-press', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate press release');
      }

      const result = await response.json();
      setPressRelease(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate press release');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight font-medium mb-6">
                Press Release Generator
              </h1>
              <p className="text-gray-500 text-lg max-w-[600px] mx-auto">
                Create professional press releases for your music releases, tours, and announcements.
                Fill in the details below and our AI will craft a compelling press release.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-6 rounded-xl border"
              >
                <div>
                  <label htmlFor="artistName" className="block text-sm font-medium text-gray-700 mb-1">
                    Artist Name *
                  </label>
                  <input
                    type="text"
                    name="artistName"
                    id="artistName"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="releaseType" className="block text-sm font-medium text-gray-700 mb-1">
                    Release Type *
                  </label>
                  <select
                    name="releaseType"
                    id="releaseType"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select type...</option>
                    <option value="single">Single</option>
                    <option value="album">Album</option>
                    <option value="ep">EP</option>
                    <option value="tour">Tour</option>
                    <option value="music_video">Music Video</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="releaseTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="releaseTitle"
                    id="releaseTitle"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Release Date *
                  </label>
                  <input
                    type="date"
                    name="releaseDate"
                    id="releaseDate"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
                    Genre *
                  </label>
                  <input
                    type="text"
                    name="genre"
                    id="genre"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="Describe the release, its significance, and any key details..."
                  />
                </div>

                <div>
                  <label htmlFor="quotes" className="block text-sm font-medium text-gray-700 mb-1">
                    Quotes
                  </label>
                  <textarea
                    name="quotes"
                    id="quotes"
                    rows={2}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="Any quotes from the artist about the release..."
                  />
                </div>

                <div>
                  <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-1">
                    Notable Achievements
                  </label>
                  <textarea
                    name="achievements"
                    id="achievements"
                    rows={2}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="Previous achievements, awards, or milestones..."
                  />
                </div>

                <div>
                  <label htmlFor="links" className="block text-sm font-medium text-gray-700 mb-1">
                    Important Links
                  </label>
                  <textarea
                    name="links"
                    id="links"
                    rows={2}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
                    placeholder="Social media, website, or streaming links..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                >
                  {isLoading ? 'Generating...' : 'Generate Press Release'}
                </button>

                {error && (
                  <div className="text-red-500 text-sm mt-2">
                    {error}
                  </div>
                )}
              </motion.form>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl border"
              >
                {isLoading ? (
                  <div className="h-full flex items-center justify-center">
                    <LoadingAnimation />
                  </div>
                ) : pressRelease ? (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">{pressRelease.headline}</h2>
                    <p className="text-lg text-gray-600">{pressRelease.subheading}</p>
                    <p className="text-sm text-gray-500">{pressRelease.dateline}</p>
                    <p className="text-gray-800">{pressRelease.introduction}</p>
                    {pressRelease.body.map((paragraph: string, index: number) => (
                      <p key={index} className="text-gray-800">
                        {paragraph}
                      </p>
                    ))}
                    <div className="border-t pt-4 mt-6">
                      <p className="text-gray-800">{pressRelease.boilerplate}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600">{pressRelease.contactInfo}</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Your generated press release will appear here
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 