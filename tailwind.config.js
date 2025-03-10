/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // primary:'#103a65',
        primary:'#00807f',
        bg: "#F4F4F4", // Background color
        header:'#35b6b4',
        textcolor:"#000000",
        tealcolor:'#00f3f0'
      },
      boxShadow: {
        'primary-sm': '0 2px 4px rgba(0,128,127,0.3)', // Using primary color with opacity
      },
      fontFamily: {
        roboto: ["Roboto", "Helvetica Neue", "sans-serif"], // Roboto as the primary font
      },
      fontSize:{
        'text-tiny':'12px',
        'text-small':'14px',
        'text-md':'16px',
        'text-xmd':'18px',
        'text-lg':'20px'
      }
    },
  },
  plugins: [],
};
