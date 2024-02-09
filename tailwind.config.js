/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        neue: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sarina: ["Sarina", "cursive"],
      },
      spacing: {
        22: "5.25rem",
      },
    },
  },
  plugins: [],
};
