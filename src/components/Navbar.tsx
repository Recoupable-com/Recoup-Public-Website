'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const platformItems = [
    {
      title: 'Fan Analyzer',
      description: 'Understand your fans and how to reach them',
      href: '/fan-analyst',
      icon: (
        <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h18M3 12h18M3 18h12" />
        </svg>
      )
    },
    {
      title: 'Web Player',
      description: 'Let fans sign in and stream on your website',
      href: '/web-player',
      icon: (
        <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12l-6 4V8l6 4z" />
        </svg>
      )
    },
    {
      title: 'Chatbot',
      description: 'Strategize campaigns and activations',
      href: '/chatbot',
      icon: (
        <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
          <circle cx="8" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Activations',
      description: 'Rollout bespoke album experiences',
      href: '/activations',
      icon: (
        <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Backdrop blur overlay */}
      <div 
        className={`fixed inset-0 bg-[#EDEDED]/50 transition-opacity duration-200 ${isMobileMenuOpen || isDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
                <button 
                  className="flex items-center hover:opacity-70 transition-opacity peer font-medium"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Platform</span>
                  <svg className="w-4 h-4 ml-1 opacity-60" viewBox="0 0 15 15" fill="none">
                    <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor"/>
                  </svg>
                </button>
                
                <Link href="/research" className="hover:opacity-70 transition-opacity">
                  Research
                </Link>
                
                <Link href="/changelog" className="hover:opacity-70 transition-opacity">
                  Changelog
                </Link>
              </div>

              {/* Right Side */}
              <div className="hidden md:flex flex-shrink-0 w-[200px] justify-end items-center gap-2">
                <Link 
                  href="/login"
                  className="text-[#09090B] text-[13px] px-4 py-1.5 rounded-lg hover:opacity-70 transition-opacity font-medium"
                >
                  Log in
                </Link>
                <Link 
                  href="/signup"
                  className="bg-black text-white text-[13px] px-4 py-1.5 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out font-medium"
                >
                  Sign up
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6 text-[#09090B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Platform Dropdown - Part of main container */}
            <div className={`h-0 ${isDropdownOpen ? 'h-auto' : ''} overflow-hidden transition-all duration-200 ease-in-out`}>
              <div className={`border-t ${isDropdownOpen ? 'border-gray-100' : 'border-transparent'}`}>
                <div className="py-8">
                  <div className="grid grid-cols-2 gap-4 px-1">
                    {platformItems.map((item) => (
                      <Link 
                        key={item.title}
                        href={item.href}
                        className="group p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex gap-5">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-white transition-colors flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-[14.5px] mb-1.5 text-gray-900">{item.title}</div>
                            <div className="text-[13px] text-gray-500 leading-relaxed">{item.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden font-jakarta">
                <div className="flex flex-col space-y-4 pt-2 pb-3 border-t border-gray-200 text-[#09090B]">
                  <div className="px-2">
                    <div className="text-sm font-medium mb-2">Platform</div>
                    <div className="grid grid-cols-1 gap-2">
                      {platformItems.map((item) => (
                        <Link 
                          key={item.title}
                          href={item.href}
                          className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-medium text-[14px] mb-0.5">{item.title}</div>
                            <div className="text-[13px] text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/research" className="hover:opacity-70 transition-opacity px-2">
                    Research
                  </Link>
                  
                  <Link href="/changelog" className="hover:opacity-70 transition-opacity px-2">
                    Changelog
                  </Link>

                  <div className="flex flex-col gap-2 px-2 pt-2 border-t border-gray-200">
                    <Link 
                      href="/login"
                      className="text-[#09090B] text-[13px] px-4 py-1.5 rounded-lg hover:opacity-70 transition-opacity text-center font-medium"
                    >
                      Log in
                    </Link>
                    <Link 
                      href="/signup"
                      className="bg-black text-white text-[13px] px-4 py-1.5 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out font-medium"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
} 