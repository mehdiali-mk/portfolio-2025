/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#D69667",
        light: "#fff",
        dark: "#2B2B2B",
        secondaryDark: "#232323",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
