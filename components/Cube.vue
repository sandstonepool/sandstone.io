<style scoped>
.scene {
  width: 100px;
  height: 100px;
  perspective: 200px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;
}

.cube__face {
  position: absolute;
  width: 100px;
  height: 100px;
  text-align: center;
  border: solid 1px black;
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(50px);
  background-color: rgb(8, 189, 189, 0.5);
}

.cube__face--right {
  transform: rotateY(90deg) translateZ(50px);
  background-color: rgb(195, 247, 58, 0.5);
}

.cube__face--back {
  transform: rotateY(180deg) translateZ(50px);
  background-color: rgb(244, 172, 50, 0.5);
}

.cube__face--left {
  transform: rotateY(-90deg) translateZ(50px);
  background-color: rgb(19, 64, 116, 0.5);
}

.cube__face--top {
  transform: rotateX(90deg) translateZ(50px);
  background-color: rgb(255, 67, 101, 0.5);
}

.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(50px);
  background-color: rgb(254, 98, 29, 0.5);
}

.cube.show-front {
  transform: translateZ(-100px) rotateY(0deg);
}

.cube.show-right {
  transform: translateZ(-100px) rotateY(-90deg);
}

.cube.show-back {
  transform: translateZ(-100px) rotateY(-180deg);
}

.cube.show-left {
  transform: translateZ(-100px) rotateY(90deg);
}

.cube.show-top {
  transform: translateZ(-100px) rotateX(-90deg);
}

.cube.show-bottom {
  transform: translateZ(-100px) rotateX(90deg);
}

.cube {
  transition: transform 1s;
}

</style>

<template>
  <div class="scene">
    <div class="cube" v-bind:class="side" @click="next">
      <div class="cube__face cube__face--front"></div>
      <div class="cube__face cube__face--back"></div>
      <div class="cube__face cube__face--right"></div>
      <div class="cube__face cube__face--left"></div>
      <div class="cube__face cube__face--top"></div>
      <div class="cube__face cube__face--bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      side: "show-front"
    }
  },
  methods: {
    next() {
      this.count += 1;
      this.side = ["show-front", "show-bottom", "show-right", "show-left", "show-back", "show-top"][this.count % 5];
    }
  }
}
</script>