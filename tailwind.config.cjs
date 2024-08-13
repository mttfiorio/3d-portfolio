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
        "primary-100": "#C0BC3B",
        "primary-200": "#969347",
        "primary-300": "#6B6A45",
        "primary-400": "#414034",
        secondary: "#B421EB",
        tertiary: "#3021EB",
        dark: "#000000",
        light: "#EEEEEE",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
};
