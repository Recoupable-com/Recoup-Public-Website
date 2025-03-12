'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ConvaiWidget() {
  useEffect(() => {
    // This ensures the widget is properly initialized after the script loads
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      <div 
        className="fixed bottom-4 right-4 z-50"
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="HtnLW3b77p6BqY7bipgr"></elevenlabs-convai>'
        }}
      />
      <Script 
        src="https://elevenlabs.io/convai-widget/index.js" 
        strategy="afterInteractive"
      />
    </>
  );
} 