import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    nitro: {
        preset: "netlify"
    },
    ssr: true,
    target: "static",
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
