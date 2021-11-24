import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/sitemap'
    ],
    sitemap: {
        hostname: "https://sandstone.io",
        routes: [
            '/',
            '/privacy',
            '/contact'
        ]
    }
})
