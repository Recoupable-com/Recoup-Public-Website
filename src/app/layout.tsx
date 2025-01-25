import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans, Inter_Tight, Rampart_One } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const rampartOne = Rampart_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart",
});

export const metadata: Metadata = {
  title: "Recoup - AI Agents for the Music Industry",
  description: "Grow like a major label—no team required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${interTight.variable} ${rampartOne.variable} font-inter`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
