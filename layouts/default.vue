<style>
@import "assets/css/fonts.css";
@import "assets/css/sandstone.css";
@import "assets/css/tailwind.css";
</style>

<template>
  <div>
    <NavBar />
    <slot />
    <Footer/>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
</script>