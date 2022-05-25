module.exports = {
  darkMode: 'class',
  content: [
    "./**/*.tsx",
    "./src/**/*.tsx",
    "./index.html"
    ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1980px'
      // => @media (min-width: 1980px) { ... }
    },
    extend: {},
    fontFamily: {
      'display': ['Poppins']
    }
  },
  plugins: [require('tailwind-scrollbar')],
}
