<style scoped>
@import "assets/css/sandstone.css";

button {
  display: flex;
  overflow: hidden;
  padding: 10px 10px;
  align-items: center;
  border-radius: 12px;
  background: var(--gradient);
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-style: none;
  box-shadow: var(--depth-shadow);
  transition: box-shadow ease 0.2s;
}

button:hover {
  background: var(--gradient-radial);
  box-shadow: var(--highlight-shadow);
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