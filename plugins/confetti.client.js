import {defineNuxtPlugin} from "#app";
import {debounce} from "lodash";
import confetti from "canvas-confetti";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('confetti', (el) => {
        const scroll = debounce(() => {
                const { top } = el.getBoundingClientRect()
                const centerLine = window.innerHeight / 2
                if (top < centerLine) {

                    // Remove the listener (this is a one shot event)
                    window.removeEventListener('scroll', scroll)

                    confetti({
                        particleCount: 400,
                        spread: 80,
                        angle: 70,
                        startVelocity: 100,
                        origin: {
                            x: -0.1,
                            y: 0.8
                        }
                    })

                    confetti({
                        particleCount: 400,
                        spread: 80,
                        angle: 110,
                        startVelocity: 100,
                        origin: {
                            x: 1.1,
                            y: 0.8
                        }
                    })

                    confetti({
                        particleCount: 400,
                        spread: 180,
                        angle: 90,
                        startVelocity: 80,
                        origin: {
                            x: 0.5,
                            y: 1.2
                        }
                    })
                }
            }, 50)

        window.addEventListener('scroll', scroll)
    })
})