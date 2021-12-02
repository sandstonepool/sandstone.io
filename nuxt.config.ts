import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    nitro: {
        preset: 'lambda'
    },
    modules: [
        ['@nuxtjs/sitemap']
    ],
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
    },
})
