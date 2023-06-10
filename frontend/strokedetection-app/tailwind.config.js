/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue-1': '#19A7CE',
      'blue-2': '#EEFBFF',
      'white' : '#FFFFFF',
      'black' : '#000000',
      'green' : '#39A844',
      'brown' : '#A8A8A8',
      'red' : '#D71D1D',
      'yellow' : '#FFBB0B'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
