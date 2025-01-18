'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    {
      name: 'Spotify',
      logo: '/partners/Spotify.svg',
    },
    {
      name: 'Warner Music Group',
      logo: '/partners/WMG.svg',
    },
    {
      name: 'Atlantic Records',
      logo: '/partners/Atlantic.svg',
    },
    {
      name: '300 Entertainment',
      logo: '/partners/$300.svg',
    },
    {
      name: 'A Boogie',
      logo: '/partners/Aboogie.svg',
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Trusted by top music pros
          </h2>
          <p className="text-gray-600 mb-16 max-w-[600px] mx-auto">
            Join the industry leaders and artists who use our platform to accelerate their success in the music business.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-16 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-12 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  priority={index < 3}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 