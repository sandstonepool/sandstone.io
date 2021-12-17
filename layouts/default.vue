<style>
@import "assets/css/fonts.css";
@import "assets/css/sandstone.css";
@import "assets/css/tailwind.css";
</style>

<template>
  <div>
    <Html lang="en">
    <Head>
      <Title>Sandstone Stake Pool</Title>
      <Meta charset="UTF-8"></Meta>
      <Meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"></Meta>
      <Meta name="description" content="The most trusted and reliable stake pool on the Cardano blockchain"></Meta>
      <Meta name="theme-color" content="#0437ffff"></Meta>
      <Link rel="shortcut icon" type="image/x-icon" href="/images/sandstone-64x64.png"/>
      <Link rel="apple-touch-icon" type="image/x-icon" href="/images/sandstone-64x64.png"/>
    </Head>
    </Html>
    <NavBar :navigation="navigation"/>
    <slot/>
    <Footer/>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const navigation = ref([])
provide('navigation', navigation)
</script>
