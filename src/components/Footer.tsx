'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>Built on</span>
          <Image
            src="/Base Symbol.svg"
            alt="Base"
            width={16}
            height={16}
            className="opacity-80"
          />
          <span>Base</span>
        </div>
      </div>
    </footer>
  );
} 