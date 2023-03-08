/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      display:['SF Pro Display'],
      integral:['Integral CF']
    },
    extend: {
      colors: {
        textGray:'#323232',
        mainPurple:'#5F55D2',
      },
      fontSize:{
        '6.5': '3.5rem'
      }
    },
  },
  plugins: [],
}
