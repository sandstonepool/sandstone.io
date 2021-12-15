<style>
@import "assets/css/fonts.css";
@import "assets/css/sandstone.css";
@import "assets/css/tailwind.css";
</style>

<template>
  <div>
    <NavBar :navigation="navigation"/>
    <slot />
    <Footer/>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const navigation = ref([])
provide('navigation', navigation)
</script>