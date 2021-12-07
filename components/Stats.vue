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
  <intersect threshold="1.0" @intersected="animate">
    <div class="stats" :key="refreshKey">
      <div class="stat">
        <animated-number v-resize-text="resizeLarge" :value="[0, poolStats?.tax_ratio]" :duration="duration"
                         :easing="easing"
                         :fmt="formatTax"/>
        <div v-resize-text="resizeSmall">Tax</div>
      </div>
      <div class="stat">
        <animated-number v-resize-text="resizeLarge" :value="[1000000000, poolStats?.total_stake]"
                         :duration="duration"
                         :easing="easing"
                         :fmt="formatTotalStake"/>
        <div v-resize-text="resizeSmall">Stake</div>
      </div>
      <div class="stat">
        <animated-number v-resize-text="resizeLarge" :value="[1000000000, poolStats?.pledge]" :duration="duration"
                         :easing="easing"
                         :fmt="formatPledge"/>
        <div v-resize-text="resizeSmall">Pledge</div>
      </div>
      <div class="stat">
        <animated-number v-resize-text="resizeLarge" :value="poolStats?.delegators" :duration="duration"
                         :easing="easing"
                         :round="1"/>
        <div v-resize-text="resizeSmall">Delegators</div>
      </div>
    </div>
  </intersect>
</template>

<script setup>
import numeral from 'numeral'
import VueResizeText from 'vue3-resize-text'
import AnimatedNumber from './AnimatedNumber'
import Intersect from './Intersect'
import confetti from 'canvas-confetti'

const vResizeText = VueResizeText.ResizeText

const resizeLarge = {ratio: 0.65}
const resizeSmall = {ratio: 1.2}
const duration = 3000
const easing = 'easeOutCubic'

const formatTax = (value) => numeral(value).format('0.00%')
const formatTotalStake = (value) => `${numeral(value).divide(1000000).format('0.00a').toUpperCase()} ₳`
const formatPledge = (value) => `${numeral(value).divide(1000000).format('0a').toUpperCase()} ₳`

const props = defineProps({
  poolId: {
    type: String,
    required: true
  }
})

const response = await fetch(`https://js.adapools.org/pools/${props.poolId}/summary.json`)
const poolStats = ref((await response.json()).data)

const refreshKey = ref(0)
const lockout = ref(false)

const animate = () => {
  if (!lockout.value) {
    lockout.value = true
    setTimeout(() => lockout.value = false, 60000)
    refreshKey.value += 1
  }
}

watch(refreshKey, (newValue, oldValue) => {
  if (newValue > oldValue) {
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
})
</script>
