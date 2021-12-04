<template>
  <div v-animated v-html="formattedValue"></div>
</template>
<script setup>
import anime from 'animejs'

const animatedValue = ref(0)
const formattedValue = computed(() => props.fmt(Number(animatedValue.value)))

const props = defineProps({
  value: {
    type: [Array, Number, String],
    default: [0, 0],
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  fmt: {
    type: Function,
    default: value => value,
  },
  easing: {
    type: String,
    default: 'linear',
  },
  duration: {
    type: Number,
    default: 1000,
  },
  update: Function,
  begin: Function,
  complete: Function,
  run: Function,
  delay: {
    type: Number,
    default: 0,
  },
  round: {
    default: null,
  }
})

const vAnimated = {
  mounted: () => {
      const { value, begin, easing, duration, complete, update, run, delay, round, autoplay } = props
      anime({
        targets: animatedValue,
        value,
        duration,
        easing,
        update,
        begin,
        complete,
        run,
        delay,
        round,
        autoplay
      })
  }
}
</script>