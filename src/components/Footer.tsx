'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
          <Link 
            href="/privacy-policy" 
            className="hover:text-gray-700 transition-colors"
          >
            Privacy Policy
          </Link>
          <span>|</span>
          <Link 
            href="/terms-of-service" 
            className="hover:text-gray-700 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
} 