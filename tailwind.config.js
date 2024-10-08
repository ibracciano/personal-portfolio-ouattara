/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        'pattern': "url('./src/assets/effect.jpg')"
      }
    },
  },
  plugins: [],
}