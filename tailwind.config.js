/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerActive: "#D22020",
        greyText: "#C2C2C2", 
      }
    },
  },
  plugins: [],
}

