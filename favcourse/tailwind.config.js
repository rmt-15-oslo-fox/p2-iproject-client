module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      purple: {
        dark: "#5A189A",
        light: "#9D4EDD",
        mid: "#3c096c",
      },
      "black-primary": "#10002B",
      white: "#ffffff",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
};
