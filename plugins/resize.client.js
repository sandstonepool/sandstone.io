import { defineNuxtPlugin } from "#app"
import VueResizeText from "vue3-resize-text"

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueResizeText)
})