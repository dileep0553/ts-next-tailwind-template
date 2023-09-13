const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: 'jit',
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-1000': '#050505',
        gray: colors.neutral,
      },
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
})
