import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    nitro: {},
    target: "server",
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
