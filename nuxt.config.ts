import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
  components: true,
  build: {
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
