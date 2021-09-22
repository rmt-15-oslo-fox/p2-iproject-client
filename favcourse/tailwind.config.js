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
        "light-2": "#E0AAFF",
      },
      "black-primary": "#10002B",
      white: "#ffffff",
      transparent: "transparent",
      gray: "#e5e5e5",
      gold: "#ffc300",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
};
