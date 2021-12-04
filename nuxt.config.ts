import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    loading: {
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
