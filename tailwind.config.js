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
      },
      spacing: {
        '108': '27rem',
        '120': '30rem',
        '144': '36rem',
        '156': '39rem',
        '168': '42rem',
        '180': '45rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
