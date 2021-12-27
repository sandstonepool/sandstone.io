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
  modules: [
    ['@nuxtjs/sitemap', {
      hostname: 'https://sandstone.io',
      gzip: true,
      routes: [
        '/#why-sandstone',
        '/#getting-started',
        '/#about-us',
        '/#security',
        '/#faq'
      ]
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
