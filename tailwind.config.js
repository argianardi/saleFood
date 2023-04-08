/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      fontFamily: {
        inter: ['Inter'],
        quicksand: ['Quicksand'],
      },
      colors: {
        'gray-light': '#98949E',
        'red-dark': '#8F0A13',
        'black-lighter': '#110D17',
        'gray-medium': '#6D6D6D',
        'gray-lighter': '#D1D0D3',
        'blue-dark': '#5D5FEF',
        snow: '#EBFFFE',
        'gray-lightest': '#F2F2F2',
        orange: '#F46B45',
        yellow: '#EEA849',
        'purple-dark': '#7879F1',
        'purple-light': '#A5A6F6',
        'white-smoke': '#FAFAFA',
      },
    },
  },
  plugins: [require('daisyui')],
};
