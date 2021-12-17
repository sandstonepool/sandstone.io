import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
  components: true,
  build: {
    aggressiveCodeRemoval: true,
    optimizeCSS: true,
    transpile: [
      "@heroicons/vue"
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
  }
})
