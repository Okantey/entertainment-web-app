/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A4AF4",
        secondary: "#1EA5FC",
        tertiary: "#B66DFF",
        success: "#05CE91",
        error: "#FF6161",
        warning: "#FFAD49",
        gray: "#e3e3e3",
        black: "#000",
        white: "#fff"
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}