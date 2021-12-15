<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  rootMargin: String | undefined,
  threshold: Array[Number] | Number | undefined
})

const emit = defineEmits(['intersected'])

var observer = undefined

onMounted(() => {
  observer = new IntersectionObserver((entries, _) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        emit('intersected')
      }
    })
  }, props)
  observer.observe(getCurrentInstance().vnode.el)
})

onBeforeUnmount(() => {
  observer.unobserve(getCurrentInstance().vnode.el)
})
</script>