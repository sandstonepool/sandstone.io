<style scoped>
.box-border {
  position: relative;
  height: 100%;
  width: 100%;
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
  <div class="box-border">
    <div class="box-border mod">
      <div class="box-inner">
        <slot/>
      </div>
    </div>
  </div>
</template>
