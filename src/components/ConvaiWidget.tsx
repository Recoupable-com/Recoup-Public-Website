'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ConvaiWidget() {
  useEffect(() => {
    console.log('ConvaiWidget: Component mounted');
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
        onLoad={() => console.log('ElevenLabs script loaded')}
        onError={() => console.error('ElevenLabs script failed to load')}
      />
    </>
  );
} 