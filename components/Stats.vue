<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 20px;
  justify-content: space-around;
  align-items: center;
}

.stat {
  display: flex;
  height: 180px;
  min-width: 240px;
  max-width: 240px;
  overflow: hidden;
  padding-right: 0;
  padding-left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.big-number {
  color: #0437ff;
  font-size: 55px;
  line-height: 100%;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
}

.number-label {
  margin-top: 10px;
  font-size: 25px;
  font-weight: 700;
}

.ada-icon-wrap {
  display: flex;
  min-width: 100px;
}

@media screen and (max-width: 768px) {
  .stats {
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, max-content);
  }
}

.confetti {
  position: absolute;
  height: 300%;
  top: -100%;
  width: 100%;
  background: transparent;
  @apply z-50
}
</style>

<template>
  <canvas v-confetti class="confetti"></canvas>
  <div class="stats">
    <div class="stat">
      <div class="big-number">
        <animated-number :value="[ 0.0, stats.tax_ratio ]" :duration="duration" :easing="easing" :fmt="formatTax"/>
      </div>
      <div class="number-label">Tax</div>
    </div>
    <div class="stat">
      <div class="ada-icon-wrap">
        <div class="big-number">
          <animated-number :value="[1000000000000, stats.total_stake]" :duration="duration" :easing="easing" :fmt="formatTotalStake" />
        </div>
      </div>
      <div class="number-label">Stake</div>
    </div>
    <div class="stat">
      <div class="ada-icon-wrap">
        <div class="big-number">
          <animated-number :value="[1000000000, stats.pledge ]" :duration="duration" :easing="easing" :fmt="formatPledge"/>
        </div>
      </div>
      <div class="number-label">Pledge</div>
    </div>
    <div class="stat">
      <div class="big-number">
        <animated-number :value="[0, stats.delegators ]" :duration="duration" :easing="easing" :round="1" />
      </div>
      <div class="number-label">Delegators</div>
    </div>
  </div>
</template>

<script setup>
import AnimatedNumber from './AnimatedNumber'
import * as confetti from 'canvas-confetti'
import numeral from 'numeral'

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
  mounted(el) {
    const myConfetti = confetti.create(el, {
      resize: true,
      useWorker: true
    })

    myConfetti({
      particleCount: 400,
      spread: 150,
      origin: {
        x: 0.5,
        y: 0.6
      }
    })
  }
}

</script>