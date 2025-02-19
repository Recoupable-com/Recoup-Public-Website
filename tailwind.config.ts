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
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DBFF',
          300: '#8AC2FF',
          400: '#5CA8FF',
          500: '#2E84A5',  // Primary brand color
          600: '#1E6C8F',
          700: '#124C71',
          800: '#0A3655',
          900: '#042338',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        }
      },
      fontFamily: {
        'plus-jakarta': ['var(--font-plus-jakarta)'],
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
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 30px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 45px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
