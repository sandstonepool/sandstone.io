<style scoped>
.box-border {
  position: relative;
  height: 100%;
  display: block;
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  border-color: #1df4f4;
}

.box-border.mod {
  top: 5px;
  border-color: #0437ff;
  background-color: rgba(255, 255, 255, 0.7);
}

</style>

<template>
  <div class="box">
    <div class="box-border">
      <div class="box-border mod">
        <div class="box-inner" v-bind:style="{ padding: this.padding }">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    padding: String
  }
}
</script>