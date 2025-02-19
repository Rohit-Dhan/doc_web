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
        text: "#2c2c2c", // Text color "#2c2c2c
        bg: "#ffffff", // Background color
      },
      fontFamily: {
        roboto: ["Roboto", "Helvetica Neue", "sans-serif"], // Roboto as the primary font
      },
      fontSize:{
        'text-tiny':'12px',
        'text-small':'14px',
      }
    },
  },
  plugins: [],
};
