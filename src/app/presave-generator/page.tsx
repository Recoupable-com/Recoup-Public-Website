'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function PresaveGenerator() {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    releaseDate: '',
    spotifyURI: '',
    appleMusicID: '',
  });

  const [selectedPlatforms, setSelectedPlatforms] = useState({
    spotify: true,
    appleMusic: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to your backend API to:
    // 1. Create a Spotify pre-save using their API
    // 2. Create an Apple Music pre-add using their MusicKit JS
    // 3. Generate a landing page with the pre-save buttons
    alert('To implement this feature, we need to:\n\n1. Set up Spotify API credentials\n2. Set up Apple Music developer account\n3. Create backend API endpoints\n4. Create pre-save landing page templates');
  };

  return (
    <>
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[600px] mx-auto px-4">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight font-medium mb-6">
              Presave Generator
            </h1>
            <p className="text-gray-500 text-lg">
              Create pre-save campaigns for your upcoming releases.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Song Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Song Title</label>
                  <input
                    type="text"
                    value={songData.title}
                    onChange={(e) => setSongData({ ...songData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    placeholder="Enter song title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Artist Name</label>
                  <input
                    type="text"
                    value={songData.artist}
                    onChange={(e) => setSongData({ ...songData, artist: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    placeholder="Enter artist name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Release Date</label>
                  <input
                    type="date"
                    value={songData.releaseDate}
                    onChange={(e) => setSongData({ ...songData, releaseDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    required
                  />
                </div>
              </div>

              {/* Platform Selection */}
              <div className="space-y-4">
                <h3 className="font-medium">Platforms</h3>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlatforms(prev => ({ ...prev, spotify: !prev.spotify }))}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2
                      ${selectedPlatforms.spotify 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotify
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPlatforms(prev => ({ ...prev, appleMusic: !prev.appleMusic }))}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2
                      ${selectedPlatforms.appleMusic 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.137-1.564-.14-.05-.002-.1-.005-.15-.005H5.988c-.107.003-.215.005-.322.012-.707.041-1.397.152-2.062.373-1.62.537-2.815 1.607-3.303 3.32-.162.567-.225 1.147-.253 1.735-.015.272-.015.544-.015.816v9.323c.003.29.003.58.018.87.038.844.15 1.677.45 2.466.454 1.182 1.208 2.08 2.30 2.66 1.027.543 2.125.724 3.264.785.35.02.7.027 1.05.027h12.053c.15 0 .3-.005.45-.012.9-.044 1.78-.198 2.588-.595 1.692-.837 2.787-2.465 2.754-4.66l.003-11.638h-.005z"/>
                      <path fill="#FFF" d="M16.802 13.835l-.038.048c-.15.188-.33.345-.523.482-.085.063-.173.12-.262.172l-.04.025c-.395.245-.82.405-1.265.495-.278.054-.554.08-.834.086-.88.02-1.648-.214-2.242-.885-.08-.092-.152-.19-.217-.292l-.035-.055c-.357-.59-.598-1.446-.243-2.417.142-.393.353-.738.646-1.02.67-.65 1.814-.95 2.804-.765l.07.013c.137.027.277.06.412.103.118.037.235.08.35.127l.066.027c.397.168.764.405 1.115.697l.073.062c.21.17.413.348.608.537l.14.13c.15.14.3.283.44.433l.126.13.05.052c.21.23.384.49.487.787.077.227.132.46.145.7l.006.076c-.007.276-.052.548-.154.805z"/>
                    </svg>
                    Apple Music
                  </button>
                </div>
              </div>

              {/* Platform IDs */}
              {selectedPlatforms.spotify && (
                <div>
                  <label className="block text-sm font-medium mb-2">Spotify URI</label>
                  <input
                    type="text"
                    value={songData.spotifyURI}
                    onChange={(e) => setSongData({ ...songData, spotifyURI: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    placeholder="spotify:track:xxxxx"
                  />
                </div>
              )}

              {selectedPlatforms.appleMusic && (
                <div>
                  <label className="block text-sm font-medium mb-2">Apple Music ID</label>
                  <input
                    type="text"
                    value={songData.appleMusicID}
                    onChange={(e) => setSongData({ ...songData, appleMusicID: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    placeholder="Enter Apple Music ID"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-xl text-[15px] font-medium hover:bg-black/90 transition-all hover:scale-105"
              >
                Generate Pre-save Link
              </button>
            </form>
          </motion.div>

          {/* Implementation Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
          >
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> To fully implement this feature, we need to:
              <br />
              1. Set up Spotify API credentials
              <br />
              2. Set up Apple Music developer account
              <br />
              3. Create backend API endpoints
              <br />
              4. Create pre-save landing page templates
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
} 