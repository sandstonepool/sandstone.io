import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
    modules: ['@nuxtjs/sitemap'],
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