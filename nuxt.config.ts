import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
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