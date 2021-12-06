<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    rootMargin: String | undefined,
    threshold: Array[Number] | Number | undefined
  },
  emits: ['intersected'],
  setup(props, context) {
    var observer = undefined

    onMounted(() => {
      observer = new IntersectionObserver((entries, _) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            context.emit('intersected')
          }
        })
      }, props)
      observer.observe(getCurrentInstance().vnode.el)
    })

    onBeforeUnmount(() => {
      observer.unobserve(getCurrentInstance().vnode.el)
    })
  }
})
</script>