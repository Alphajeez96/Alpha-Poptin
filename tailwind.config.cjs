/** @type {import('tailwindcss').Config} */
const {borderRadius, spacing} = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        20: "1.25rem",
        ...borderRadius,
      },

      colors: {
        primary: {
          main: "#6956E5",
          black: "#23262F",
          grey: "#f9f9f9",
          dark: "#878787",
        },
      },

      spacing: {
        30: "30%",
        31: "32%",
        ...spacing,
      },
    },
  },
  plugins: [],
};
