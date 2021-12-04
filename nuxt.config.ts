import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    target: "server",
    nitro: {
        preset: "lambda"
    },
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
