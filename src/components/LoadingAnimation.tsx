'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on server-side to prevent hydration mismatch
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-16 h-16">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-full"
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-gray-500 text-sm font-medium"
      >
        Generating your content...
      </motion.div>
    </div>
  );
} 