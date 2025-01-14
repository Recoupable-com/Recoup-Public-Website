import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jakarta: ['var(--font-plus-jakarta)'],
        inter: ['var(--font-inter-tight)'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' }
        }
      },
      animation: {
        scroll: 'scroll 15s linear infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
