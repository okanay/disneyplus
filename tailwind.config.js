/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({opacityValue}) => {

    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    } else {
      return `rgba(var(${variableName}))`
    }
  }
}


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smPhone': "330px",
        'basePhone': "380px",
        'lgPhone': "410px",
        'xlPhone': "440px",
        'tablet': '770px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
      scale: {
        '10' : '0.10',
        '20' : '0.20',
        '30' : '0.30',
        '40' : '0.40',
        '50' : '0.50',
        '60' : '0.60',
        '70' : '0.70',
        '80' : '0.80',
        '90' : '0.90',
        '95' : '0.95',
        '105': '1.05',
        '110': '1.10',

      },
      colors : {
        skin : {
          '50' : withOpacity('--theme-50'),
          '100' : withOpacity('--theme-100'),
          '200' : withOpacity('--theme-200'),
          '300' : withOpacity('--theme-300'),
          '400' : withOpacity('--theme-400'),
          '500' : withOpacity('--theme-500'),
          '600' : withOpacity('--theme-600'),
          '700' : withOpacity('--theme-700'),
          '800' : withOpacity('--theme-800'),
          '900' : withOpacity('--theme-900'),

          'body-50' : withOpacity('--theme-body-50'),
          'body-100' : withOpacity('--theme-body-100'),
          'body-200' : withOpacity('--theme-body-200'),
          'body-300' : withOpacity('--theme-body-300'),
          'body-400' : withOpacity('--theme-body-400'),
          'body-500' : withOpacity('--theme-body-500'),
          'body-600' : withOpacity('--theme-body-600'),
          'body-700' : withOpacity('--theme-body-700'),
          'body-800' : withOpacity('--theme-body-800'),
          'body-900' : withOpacity('--theme-body-900'),
          'body-1000' : withOpacity('--theme-body-1000'),


          'font-50' : withOpacity('--theme-font-50'),
          'font-100' : withOpacity('--theme-font-100'),
          'font-200' : withOpacity('--theme-font-200'),
          'font-300' : withOpacity('--theme-font-300'),
          'font-400' : withOpacity('--theme-font-400'),
          'font-500' : withOpacity('--theme-font-500'),
          'font-600' : withOpacity('--theme-font-600'),
          'font-700' : withOpacity('--theme-font-700'),
          'font-800' : withOpacity('--theme-font-800'),
          'font-900' : withOpacity('--theme-font-900'),
          'font-1000' : withOpacity('--theme-font-1000'),
        }
      },
    },
    fontFamily: {
      roboto: ['Roboto Flex', "sans-serif"],
      montserrat : ['Montserrat', "sans-serif"],
    },
  },
  plugins: [],
}
