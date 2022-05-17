module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      screens: {

        'max-header600': { 'max': '600px' },
        'max-header800': { 'max': '900px' },
        'header1024': '1024px',
        'header1280': '1280px',
        'header1440': '1440px',
        'header2560': '2560px',
      },
      fontFamily: {
        display: 'Radio Canada',
      },
      colors: {
        background: {
          900: '#292C34',
          400: '#5B5E67'
        },
        ownYellow: {
          900: '#F0C800',
          200: "#FFE358"
        },
        ownOrange: {
          900: '#F07800'
        }
      },
      boxShadow: {
        cardBigEffect: '0px 10px 15px rgba(0, 0, 0, 1), inset 0px 0px 50px #000000',
        bodyInnerShadow: 'inset 0px 50px 9999px 300px #12151f',
        mainInnerShadow: 'inset 0px 0px 9999px 50px #12151f',
        descriptionInnerShadow: 'inset 0px -150px 9999px 150px #12151f',
        responsiveDescriptionInnerShadow: 'inset 0px -150px 9999px 80px #12151f'
      },
      width: {
        'title-card': ''
      },
      height: {

      },
      maxWidth: {
        '9/10': '90%'
      },
      padding: {
        '0.5/10': '5%'
      },

    },

  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
