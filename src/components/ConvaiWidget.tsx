'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ConvaiWidget() {
  useEffect(() => {
    console.log('ConvaiWidget: Component mounted');
    
    // Add styles to hide the "Powered by" text
    const style = document.createElement('style');
    style.textContent = `
      elevenlabs-convai::part(powered-by),
      elevenlabs-convai .powered-by,
      elevenlabs-convai [class*="powered"],
      elevenlabs-convai [class*="branding"],
      elevenlabs-convai [data-testid*="powered"],
      elevenlabs-convai [data-testid*="branding"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        overflow: hidden !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
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
        src="https://unpkg.com/@elevenlabs/convai-widget-embed" 
        strategy="afterInteractive"
        async
        onLoad={() => console.log('ElevenLabs ConvAI script loaded')}
        onError={() => console.error('ElevenLabs ConvAI script failed to load')}
      />
    </>
  );
} 