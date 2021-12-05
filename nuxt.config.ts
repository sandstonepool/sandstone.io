import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    nitro: {},
    target: "server",
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
