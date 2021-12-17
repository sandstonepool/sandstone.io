import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
  components: true,
  buildModules: [
    ['nuxt-compress', {
      gzip: {
        threshold: 8192,
      },
      brotli: {
        threshold: 8192,
      },
    }]
  ],
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
