/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': [ 'DM Sans', 'sans-serif'],
    },
    fontSize: {
      "39":"39px",
      "49":"49px",
    },
    maxWidth: {
      'container': '1604px',
    },
    width: {
      '3/8': '48%',
    },
    colors:{
    'offwhite':'#F0F0F0',
    'ash':'#F5F5F3',
    'grey':'#6D6D6D',
    'grey-white':'#767676',
    }
  },
  plugins: [],
}
}
