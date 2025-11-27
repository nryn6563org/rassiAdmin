/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      boxShadow: {
        dashbox: '4px 4px 20px 0px rgba(20, 20, 20, 0.08)'
      }
    }
  },
  plugins: []
}
