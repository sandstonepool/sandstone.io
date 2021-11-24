<style lang="scss" scoped>
@import "assets/styles/sandstone";

button {
  display: flex;
  overflow: hidden;
  padding: 10px 10px;
  align-items: center;
  border-radius: 12px;
  background: $gradient;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-style: none;
  box-shadow: 3px 3px 10px lighten($rich-black-fogra-39, 70%);
  transition: all ease 0.2s;
}

button:hover {
  background: $gradient-radial;
  box-shadow: 1px 1px 10px $carolina-blue;
}

.icon {
  color: white;
  transition: color 0.5s ease;
  padding-left: 10px;
}
</style>

<template>
  <button>
    <slot/>
    <span class="icon">
      <slot name="icon"/>
    </span>
  </button>
</template>

<script>

</script>