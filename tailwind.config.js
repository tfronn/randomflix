module.exports = {
  darkMode: 'class',
  content: [
    "./**/*.tsx",
    "./src/**/*.tsx",
    "./index.html"
    ],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Poppins']
    }
  },
  plugins: [require('tailwind-scrollbar')],
}
