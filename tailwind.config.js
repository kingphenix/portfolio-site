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
        background: '#0A0A0A',
        text: '#FFFFFF',
        textSecondary: '#BFBFBF',
        'neon-magenta': '#FF00FF',
        'electric-cyan': '#00FFFF',
        'void-black': '#0A0A0A',
        'neon-magenta-rgb': '255, 0, 255',
        'electric-cyan-rgb': '0, 255, 255',
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
  darkMode: 'class',
}