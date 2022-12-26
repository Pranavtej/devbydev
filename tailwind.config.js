const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/App.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins'],
        'body': ['"Poppins"'],
      },
    },
  },
  // ...
}