/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerActive: "#D22020",
        greyText: "#C2C2C2",
        backgroundColor: "#090909",
        customRed: "#FF0000",
        bgGrey: "#2B2B2B",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        scaleIn: "scaleIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};