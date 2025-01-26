/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff9800", // Primary color
        secondary: "#212121", // Secondary color
        text: "#ffffff", // Text color "#2c2c2c
        bg: "#2c2c2c", // Background color
      },
      fontFamily: {
        roboto: ["Roboto", "Helvetica Neue", "sans-serif"], // Roboto as the primary font
      },
    },
  },
  plugins: [],
};
