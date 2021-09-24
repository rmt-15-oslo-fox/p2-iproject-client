module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('/images/auditorium-2584269_1920.jpg')"
       }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focus', 'hover', 'active']
    },
  },
  plugins: [],
};
