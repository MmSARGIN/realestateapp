/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      height: {
        'a': '84vh',
        'b': '7vh',
        'c': '100vh'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
