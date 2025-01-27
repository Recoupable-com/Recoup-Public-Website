'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on server-side to prevent hydration mismatch
  }

  return (
    <>
      {/* Backdrop blur overlay */}
      <div 
        className={`fixed inset-0 bg-[#EDEDED]/50 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ zIndex: 30 }}
      />
      
      <div className="fixed top-4 left-4 right-4 z-40">
        <nav className="relative bg-white/100 shadow-[0_2px_3px_-1px_rgba(0,0,0,0.07),0_1px_0px_0px_rgba(0,0,0,0.03)] rounded-xl transition-all duration-200 ease-in-out max-w-[800px] mx-auto border border-[#E5E5E5]">
          <div className="px-2 group">
            {/* Main Navigation */}
            <div className="flex justify-between items-center h-[48px]">
              {/* Logo */}
              <div className="flex-shrink-0 w-[120px] flex items-center">
                <Link href="/" className="relative w-[140px] h-10">
                  <Image
                    src="/Recoup Logo Black.svg"
                    alt="Recoup"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>

              {/* Center Navigation */}
              <div className="hidden md:flex items-center gap-6 font-jakarta text-[14px] text-[#09090B]">
                <Link 
                  href="/free-tools"
                  className="hover:opacity-70 transition-opacity font-medium"
                >
                  Free Tools
                </Link>
                
                <Link href="/research" className="hover:opacity-70 transition-opacity">
                  Research
                </Link>

                <Link href="/pricing" className="hover:opacity-70 transition-opacity">
                  Pricing
                </Link>
              </div>

              {/* Right Side */}
              <div className="hidden md:flex flex-shrink-0 w-[200px] justify-end items-center gap-2">
                <Link 
                  href="https://chat.recoupable.com/signin"
                  className="text-[#09090B] text-[13px] px-4 py-1.5 rounded-lg hover:opacity-70 transition-opacity font-medium"
                >
                  Log in
                </Link>
                <Link 
                  href="https://chat.recoupable.com/signin"
                  className="bg-black text-white text-[13px] px-4 py-1.5 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out font-medium"
                >
                  Sign up
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
              <div className={`absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-all duration-200 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-4 px-6 space-y-4">
                  <div className="space-y-2">
                    <Link href="/free-tools" className="block px-3 py-2 text-base hover:bg-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      Free Tools
                    </Link>
                    <Link href="/research" className="block px-3 py-2 text-base hover:bg-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      Research
                    </Link>
                    <Link href="/pricing" className="block px-3 py-2 text-base hover:bg-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      Pricing
                    </Link>
                    <Link href="https://chat.recoupable.com/signin" className="block px-3 py-2 text-base hover:bg-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      Log in
                    </Link>
                    <Link href="https://chat.recoupable.com/signin" className="block px-3 py-2 text-base font-medium bg-black text-white hover:bg-black/90 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
} 