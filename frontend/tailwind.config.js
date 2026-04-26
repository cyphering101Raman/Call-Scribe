/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#030014',
          secondary: '#080420',
        },
        brand: {
          primary: '#6366f1',
          secondary: '#a855f7',
          accent: '#38bdf8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      },
    },
  },
  plugins: [],
}