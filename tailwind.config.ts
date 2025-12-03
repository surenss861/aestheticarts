import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbf5',
          100: '#fff8e7',
          200: '#f7e7ce',
          300: '#e8d5b7',
          400: '#d4c4a8',
          500: '#c9a961',
          600: '#b8860b',
          700: '#9a7209',
          800: '#7a5a07',
          900: '#5d4405',
        },
        champagne: {
          50: '#fffbf5',
          100: '#fff8e7',
          200: '#f7e7ce',
          300: '#e8d5b7',
          400: '#d4c4a8',
          500: '#c9a961',
          600: '#b8860b',
          700: '#9a7209',
        },
        gold: {
          50: '#fef9e7',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4af37',
          600: '#b8860b',
          700: '#9a7209',
        },
        neutral: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e5e0',
          300: '#d4d0c8',
          400: '#a8a399',
          500: '#7a7569',
          600: '#5d584d',
          700: '#454139',
          800: '#2e2b26',
          900: '#1a1815',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config

