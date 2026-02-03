import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography scale
        'h1-mobile': ['32px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-desktop': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-mobile': ['26px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2-desktop': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3-mobile': ['22px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3-desktop': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['18px', { lineHeight: '1.6' }],
        'body-sm': ['16px', { lineHeight: '1.6' }],
      },
      spacing: {
        // Section spacing
        'section-mobile': '40px',
        'section-desktop': '80px',
        'section-gap': '60px',
      },
      maxWidth: {
        'content': '1200px',
      },
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          800: '#102a43',
          900: '#0a192f', // Deep navy for primary headings/bg
        },
        blue: {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        brand: {
          primary: '#0a192f', // Map to navy-900
          accent: '#2563eb',  // Map to a strong blue
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b', // Gold for accents/buttons
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
