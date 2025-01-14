'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-inter">
        <div className="flex gap-8">
          <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
            Privacy
          </Link>
        </div>
        
        <Link 
          href="https://base.org" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          Built on Base
          <Image
            src="/base-logo.svg"
            alt="Base logo"
            width={16}
            height={16}
          />
        </Link>
      </div>
    </footer>
  );
} 