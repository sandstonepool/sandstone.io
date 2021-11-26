<style scoped>
@import "assets/css/sandstone.css";

header {
  position: sticky;
  width: 100vw;
  top: 0;
  padding-top: 25px;;
  padding-bottom: 15px;
  background-color: white;
  z-index: 1000;
}

header:after {
  position: absolute;
  bottom: -40px;
  content: '';
  height: 40px;
  width: 100vw;
  background-image: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
}

header .header-content {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1300px;
  padding-left: 60px;
  padding-right: 60px;
}

header nav {
  display: flex;
  gap: 20px;
}

header nav a {
  text-decoration: none;
  font-weight: bolder;
  color: var(--blue-ryb);
}

header .logo {
  width: 250px;
}
</style>

<template>
  <header>
    <div class="header-content">
      <a href="#intro" v-smooth-scroll="{ duration: 1000, offset: -160 }">
        <img class="logo" src="assets/images/sandstone-logo.svg" alt="Sandstone Stake Pool">
      </a>
      <nav>
        <a v-for="link in links" :href=link.location v-smooth-scroll="{ duration: 1000, offset: -160 }">{{ link.message }}</a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
class Link {
  location: String
  message: String
}

export default {
  props: {
    links: Array
  }
}
</script>