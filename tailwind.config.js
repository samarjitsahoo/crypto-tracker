/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },

    colors: {
      gray: { 100: "#7f7f7f", 200: "#cdcdcd", 300: "#dedede" },
      black: "#000000",
      blue: "#00008B",
      red: "#d6436e",
      green: "#25da72",
    },

    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
