/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'heigher-green': '#4B574D',
        'heavy-green': '#606A61',
        'darker-green': '#697b6b',
        'deeper-green': '#6C7C6F',
        'normal-green': '#bcd3c3',
        'smooth-green': '#dbebe5',
        'lower-green': '#f1f8f6',
        'smooth-white': '#fefefe',
        'deeper-gray': '#909090',
        'smooth-gray': '#838383'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  plugins: []
}
