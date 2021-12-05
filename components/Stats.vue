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
      <animated-number v-resize-text="resizeLarge" :value="[0, poolStats?.tax_ratio]" :duration="duration" :easing="easing"
                       :fmt="formatTax"/>
      <div v-resize-text="resizeSmall">Tax</div>
    </div>
    <div class="stat">
      <animated-number v-resize-text="resizeLarge" :value="[1000000000, poolStats?.total_stake]" :duration="duration" :easing="easing"
                       :fmt="formatTotalStake"/>
      <div v-resize-text="resizeSmall">Stake</div>
    </div>
    <div class="stat">
      <animated-number v-resize-text="resizeLarge" :value="[1000000000, poolStats?.pledge]" :duration="duration" :easing="easing"
                       :fmt="formatPledge"/>
      <div v-resize-text="resizeSmall">Pledge</div>
    </div>
    <div class="stat">
      <animated-number v-resize-text="resizeLarge" :value="[0, poolStats?.delegators]" :duration="duration" :easing="easing"
                       :round="1"/>
      <div v-resize-text="resizeSmall">Delegators</div>
    </div>
  </div>
</template>

<script setup>
import AnimatedNumber from './AnimatedNumber'
import numeral from 'numeral'
import useAdaStats from "../composables/useAdaStats"

const resizeLarge = { ratio: 0.65 }
const resizeSmall = { ratio: 1.2 }
const duration = 3000
const easing = 'easeOutCubic'

const formatTax = (value) => numeral(value).format('0.00%')
const formatTotalStake = (value) => `${numeral(value).divide(1000000).format('0.00a').toUpperCase()} ₳`
const formatPledge = (value) => `${numeral(value).divide(1000000).format('0a').toUpperCase()} ₳`

const { poolStats } = useAdaStats('40183423c226189d508db4b21bf94b790cf4d096134a9afbc2bd5318')
</script>