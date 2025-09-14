/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        text: {
          DEFAULT: '#FFFFFF',
          dark: '#1A1A1A', // Example dark text color
        },
        background: {
          DEFAULT: '#0E0E0E',
          dark: '#FFFFFF', // Example dark background color
        },
        textSecondary: '#BFBFBF',
        accent: {
          DEFAULT: '#6C63FF',
          secondary: '#A259FF'
        }
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6C63FF, #A259FF)'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};