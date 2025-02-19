import { plusJakartaSans, inter } from './fonts';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Recoup - AI-Powered Artist Development',
  description: 'Grow your artists faster with AI agents. More streams, more fans, less guesswork.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className={`${plusJakartaSans.variable} ${inter.variable} bg-white min-h-screen`}>
        <main className="bg-white">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
