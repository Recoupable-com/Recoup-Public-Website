'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import AgentPills from '@/components/AgentPills';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickProgress = (clickX / rect.width) * 100;
    const newTime = (clickProgress / 100) * video.duration;
    
    video.currentTime = newTime;
    setProgress(clickProgress);
  };

  if (!isClient) {
    return (
      <section className="relative pt-12 md:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-[72px] sm:text-[84px] lg:text-[120px] leading-[0.95] tracking-[-0.04em] mb-6 font-extrabold font-plus-jakarta">
              Grow Your
              <br />
              Artists Faster
              <br />
              With AI Agents
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="max-w-[1200px] mx-auto relative min-h-[800px] py-8">
          <div className="text-center relative z-10">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-[#F5F5F5] border border-[#DBDBDB] mb-3 sm:mb-6 font-plus-jakarta text-[10px] sm:text-base whitespace-nowrap font-medium"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
              </svg>
              Made For Music Professionals
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-[72px] sm:text-[84px] lg:text-[120px] leading-[0.95] tracking-[-0.04em] mb-4 font-extrabold font-plus-jakarta"
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Grow Your
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Artists Faster
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                With AI Agents
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-3xl text-black max-w-[800px] mx-auto mb-6 font-plus-jakarta font-medium leading-[1.4] sm:leading-[60px] tracking-[-0.01em] sm:tracking-[-0.02em] px-4 sm:px-0"
            >
              Automated roster development to maximize revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 mb-12"
            >
              <Link
                href="https://calendly.com/sidney-recoupable/one-on-one"
                className="inline-flex items-center justify-center px-8 py-4 border border-black text-base font-medium rounded-xl text-black hover:bg-gray-50 transition-colors duration-200 font-plus-jakarta"
              >
                Schedule Your Demo
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] font-medium border border-gray-200 rounded-2xl sm:rounded-xl hover:bg-gray-50 transition-all"
              >
                View Case Studies
              </Link>
            </motion.div>

            {/* Website Image with Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative w-full max-w-[1000px] mx-auto"
            >
              <div className="relative w-full">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/Recoup Website.svg"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{ aspectRatio: '16/10' }}
                >
                  <source src="/Getting Started with Recoup (2).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Progress Bar */}
                <div className="absolute bottom-4 left-4 right-16 bg-black/50 rounded-full h-2 backdrop-blur-sm">
                  <div
                    className="relative h-full bg-white/70 hover:bg-white/90 rounded-full cursor-pointer transition-all duration-200"
                    onClick={handleProgressClick}
                    role="slider"
                    aria-label="Video progress"
                  >
                    <div
                      className="h-full bg-white rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                    {/* Progress thumb */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200"
                      style={{ left: `${progress}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                    />
                  </div>
                </div>
                
                {/* Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    // Muted icon (speaker with X)
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l4.18 4.18a.996.996 0 001.41 0 .996.996 0 000-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.71z"/>
                    </svg>
                  ) : (
                    // Unmuted icon (speaker with sound waves)
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 