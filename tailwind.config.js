/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0A1A2F',   // Deep Navy
          secondary: '#1F2937', // Graphite
          accent: '#3B82F6',    // Electric Blue
          highlight: '#F8FAFC', // Off-white/Panel background
        },
        text: {
          main: '#6B7280', // Body text
          dark: '#111827', // Headings
          light: '#E5E7EB', // Light text/borders
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideInLeft: 'slideInLeft 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      scale: ['hover', 'focus'], // Not needed in "extend" if already handled elsewhere
    },
  },
  plugins: [],
};
