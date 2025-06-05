'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Backdrop blur overlay */}
      <div 
        className={`absolute inset-0 bg-[#EDEDED]/50 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ zIndex: 30 }}
      />
      
      <div className="relative z-40">
        <nav className="relative max-w-7xl mx-auto px-8 pt-2 pb-4">
          {/* Main Navigation */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Recoup Logo Black.svg"
                  alt="Recoup"
                  width={220}
                  height={64}
                  className="h-[64px] w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-16 font-medium text-[15px]">
              <Link 
                href="/solutions"
                className="hover:opacity-70 transition-opacity"
              >
                Solutions
              </Link>
              
              <Link href="/case-studies" className="hover:opacity-70 transition-opacity">
                Case Studies
              </Link>

              <Link href="/blog" className="hover:opacity-70 transition-opacity">
                Industry Research
              </Link>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="https://calendly.com/sidney-recoupable/one-on-one"
                className="text-[15px] hover:opacity-70 transition-opacity font-medium"
              >
                Book Demo
              </Link>
              <Link 
                href="https://chat.recoupable.com/signin"
                className="text-[15px] text-[#666666] hover:text-gray-900 transition-colors font-medium"
              >
                Log In
              </Link>
              <Link 
                href="https://chat.recoupable.com/signin"
                className="bg-black text-white text-[15px] px-6 py-2.5 rounded-xl hover:opacity-90 transition-all duration-200 ease-in-out font-medium"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-b-[20px] transition-all duration-200 mt-4 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <Link href="/solutions" className="block px-4 py-2 text-[15px] hover:bg-gray-50 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                    Solutions
                  </Link>
                  <Link href="/case-studies" className="block px-4 py-2 text-[15px] hover:bg-gray-50 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                    Case Studies
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-[15px] hover:bg-gray-50 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                    Industry Research
                  </Link>
                  <Link 
                    href="https://calendly.com/sidney-recoupable/one-on-one"
                    className="block px-4 py-2 text-[15px] hover:bg-gray-50 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Demo
                  </Link>
                  <Link 
                    href="https://chat.recoupable.com/signin" 
                    className="block px-4 py-2 text-[15px] hover:bg-gray-50 rounded-xl" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link 
                    href="https://chat.recoupable.com/signin" 
                    className="block px-4 py-2 text-[15px] font-medium bg-black text-white hover:bg-black/90 rounded-xl" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
} 