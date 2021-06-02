module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '350': '350px'
      },
      textColor: {
        'brown': '#decfb3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
