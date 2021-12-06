<template>
  <div v-html="formattedValue"></div>
</template>
<script setup>
import anime from 'animejs'

const animationRef = ref()
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

const initialize = () => {
  animationRef.value = anime({
    targets: animatedValue,
    value: props.value,
    duration: props.duration,
    easing: props.easing,
    update: props.update,
    begin: props.begin,
    complete: props.complete,
    run: props.run,
    delay: props.delay,
    round: props.round,
    autoplay: props.autoplay
  })
}

onMounted(initialize)

defineExpose({
  animate: () => animationRef.value.restart()
})
</script>