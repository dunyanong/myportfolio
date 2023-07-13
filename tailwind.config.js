/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'uniqueGray': '#191919',
  },
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
    },
  },
  plugins: [require("daisyui")],
}