module.exports = {
  mode: 'jit',
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  content: {},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'hero-lg': "url('assets/images/hero-1080.png')",
        'hero-md': "url('assets/images/hero-800.png')",
        'hero-sm': "url('assets/images/hero-500.png')",
      },
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
