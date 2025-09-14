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
        background: '#0E0E0E',
        text: '#FFFFFF',
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
        sans: ['var(--font-open-sans)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}