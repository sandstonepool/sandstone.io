module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
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
          DEFAULT: '#0437ffff',
          dark: '#0437ffff',
          subtle: 'rgba(29, 244, 244, 0.1)'
        }
      }
    },
  },
  plugins: [],
}
