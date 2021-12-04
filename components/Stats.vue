<style scoped>
.stats {
  @apply grid justify-around items-center grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-none;
}

.stat {
  @apply flex overflow-hidden flex-col justify-center gap-x-8 gap-y-0;
  height: 200px;
}

.stat :first-child {
  @apply font-bold text-center whitespace-nowrap text-blue-dark p-0;
}

.stat :last-child {
  @apply font-medium text-center whitespace-nowrap text-black p-0;
}
</style>

<template>
  <div class="stats" v-confetti>
    <div class="stat">
        <animated-number v-resize-text="{ ratio: 0.65 }" :value="[ 0.0, stats?.tax_ratio ]" :duration="duration"
                         :easing="easing" :fmt="formatTax"/>
      <div v-resize-text="{ ratio: 1.2 }">Tax</div>
    </div>
    <div class="stat">
        <animated-number v-resize-text="{ ratio: 0.65 }" :value="[1000000000000, stats?.total_stake]" :duration="duration"
                         :easing="easing" :fmt="formatTotalStake"/>
      <div v-resize-text="{ ratio: 1.2 }">Stake</div>
    </div>
    <div class="stat">
        <animated-number v-resize-text="{ ratio: 0.65 }" :value="[1000000000, stats?.pledge ]" :duration="duration"
                         :easing="easing" :fmt="formatPledge"/>
      <div v-resize-text="{ ratio: 1.2 }">Pledge</div>
    </div>
    <div class="stat">
        <animated-number v-resize-text="{ ratio: 0.65 }" :value="[0, stats?.delegators ]" :duration="duration"
                         :easing="easing" :round="1"/>
      <div v-resize-text="{ ratio: 1.2 }">Delegators</div>
    </div>
  </div>
</template>

<script setup>
import AnimatedNumber from './AnimatedNumber'
import confetti from 'canvas-confetti'
import numeral from 'numeral'
import { debounce } from 'lodash'

const poolId = '40183423c226189d508db4b21bf94b790cf4d096134a9afbc2bd5318'
const url = `https://js.adapools.org/pools/${poolId}/summary.json`
const duration = 3000
const easing = 'easeOutCubic'

const formatTax = (value) => numeral(value).format('0.00%')
const formatTotalStake = (value) => `${numeral(value).divide(1000000).format('0.00a').toUpperCase()} ₳`
const formatPledge = (value) => `${numeral(value).divide(1000000).format('0a').toUpperCase()} ₳`

const { data: stats } = await useFetch(url, {
  transform: payload => payload.data,
  pick: ['total_stake', 'tax_ratio', 'pledge', 'delegators']
})

const vConfetti = {
  beforeMount(el) {
    const handler = debounce(() => {
      const { top, bottom } = el.getBoundingClientRect()
      const centerLine = window.innerHeight / 2
      if(top < centerLine && bottom > centerLine) {

        // Remove the listener (this is a one shot event)
        window.removeEventListener('scroll', handler)

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
    }, 200)

    window.addEventListener('scroll', handler)
  }
}
</script>

<script>
import VueResizeText from 'vue3-resize-text'

export default {
  directives: {
    ResizeText: VueResizeText.ResizeText
  }
}
</script>