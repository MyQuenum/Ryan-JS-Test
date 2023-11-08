/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marko: ['Marko One', 'serif'],
      },
      transform: ['will-change'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline-white': {
          '-webkit-text-stroke': '2px white',
          'text-stroke': '2px white',
        },
        '.text-outline-green': {
          '-webkit-text-stroke': '2px rgb(74 222 128)',
          'text-stroke': '2px rgb(74 222 128)',
        },
        '.text-outline-black': {
          '-webkit-text-stroke': '2px gray',
          'text-stroke': '2px gray',
        },

      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}