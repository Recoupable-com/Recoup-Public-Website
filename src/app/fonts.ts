import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],  // Including various weights including bold (700)
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
}); 