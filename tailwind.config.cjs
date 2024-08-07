/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        exo2: "Exo \\2",
      },
      colors: {
        primary: "#EBE322",
        "primary-100": "#858013",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        dark: "#2D2D2D",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
