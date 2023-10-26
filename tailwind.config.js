/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: "#E5E5E5",
        darkBlue: "#022147",
        lightBlue: "#C3D7EF",
        red: "#BA2928",
      }
    },
  },
  plugins: [],
}