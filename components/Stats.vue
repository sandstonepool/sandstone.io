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
  <client-only>
    <intersect threshold="1.0" @intersected="animate">
      <div :key="refreshKey" class="stats">
        <div class="stat">
          <animated-number v-resize-text="resizeLarge" :duration="duration" :easing="easing"
                           :fmt="formatTax"
                           :value="[0, poolStats?.tax_ratio]"/>
          <div v-resize-text="resizeSmall">Tax</div>
        </div>
        <div class="stat">
          <animated-number v-resize-text="resizeLarge" :duration="duration"
                           :easing="easing"
                           :fmt="formatTotalStake"
                           :value="[1000000000, poolStats?.stake_active]"/>
          <div v-resize-text="resizeSmall">Stake</div>
        </div>
        <div class="stat">
          <animated-number v-resize-text="resizeLarge" :duration="duration" :easing="easing"
                           :fmt="formatPledge"
                           :value="[1000000000, poolStats?.pledge]"/>
          <div v-resize-text="resizeSmall">Pledge</div>
        </div>
        <div class="stat">
          <animated-number v-resize-text="resizeLarge" :duration="duration" :easing="easing"
                           :round="1"
                           :value="poolStats?.delegators"/>
          <div v-resize-text="resizeSmall">Delegators</div>
        </div>
      </div>
    </intersect>
    <template #placeholder>
      <!-- Skeleton Placeholder -->
      <div class="stats animate-pulse">
        <div v-for="i in 4" :key="i" class="flex flex-col items-center justify-center align-middle gap-6 p-4">
          <div class="rounded-full bg-gray-100 border border-gray-200 h-20 w-20"></div>
          <div class="h-4 bg-gray-100 border border-gray-200 rounded w-2/3"></div>
          <div class="h-4 bg-gray-100 border border-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </template>
  </client-only>
</template>

<script setup>
import numeral from 'numeral'
import VueResizeText from 'vue3-resize-text'
import AnimatedNumber from './AnimatedNumber'
import Intersect from './Intersect'
import confetti from 'canvas-confetti'

const vResizeText = VueResizeText.ResizeText

const resizeLarge = {ratio: 0.6}
const resizeSmall = {ratio: 1.2}
const duration = 3000
const easing = 'easeOutCubic'

const formatTax = (value) => numeral(value / 100).format('0.00%')
const formatTotalStake = (value) => `${numeral(value).divide(1000000).format('0.00a').toUpperCase()} ₳`
const formatPledge = (value) => `${numeral(value).divide(1000000).format('0a').toUpperCase()} ₳`

const props = defineProps({
  poolId: {
    type: String,
    required: true
  },
  confetti: {
    type: Boolean,
    required: false,
    default: false
  }
})

const response = await fetch(`https://js.cexplorer.io/api-static/pool/${props.poolId}.json`)
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
  if (props.confetti && (newValue > oldValue)) {
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
