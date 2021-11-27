module.exports = {
  purge: [],
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#1df4f4ff',
          DEFAULT: '#009ffdff',
          dark: '#0437ffff',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
