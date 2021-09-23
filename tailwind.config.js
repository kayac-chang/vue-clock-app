// const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          darker: "#31456A",
          DEFAULT: "#E3EDF7",
          gray: "#B7C5D3",
        },
        red: {
          DEFAULT: "#F7455C",
        },
        gray: {
          dark: "#828282",
        },
      },
    },
  },
  plugins: [],
};
