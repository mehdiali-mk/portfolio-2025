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
        primary: "#0F172A",
        secondary: "#1E293B",
        light: "#fff",
        txt: "#8B9BAF",
        tertiary: "#0EA5E9",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
