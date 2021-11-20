<template>
  <button>
    <div class="text">
      <slot/>
    </div>
    <div class="icon">
      <slot name="icon"/>
    </div>
  </button>
</template>

<style scoped>

button {
  display: flex;
  column-gap: 10px;
  overflow: hidden;
  padding: 10px 10px;
  align-items: center;
  border-radius: 12px;
  background-color: #0437ff;
  transition: background-color 0.5s ease;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-style: none;
}

button .text {
  transition: color 0.5s ease;
}

button .icon {
  color: white;
  transition: color 0.5s ease;
}

</style>