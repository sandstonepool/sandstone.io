<style>
main {
  background-position: 180px 100px;
  height: 900px;
  @apply ml-auto pl-10 pr-10;
  @apply bg-hero-lg bg-no-repeat;
}

@media screen and (max-width: 768px) {
  main {
    @apply bg-hero-md;
    background-position: 50% 320px;
    height: 900px;
  }
}

</style>
<template>
  <main id="intro" class="max-w-7xl">
    <div class="text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 text-center sm:text-5xl md:text-6xl md:text-left">
        <span>Professional Staking</span><br/>
        {{ ' ' }}
        <span class="text-blue-dark">Maximum Rewards</span>
      </h1>
      <div class="hero-content bg-no-repeat">
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 text-center sm:text-lg sm:max-w-xl md:mt-5 md:text-xl md:text-left lg:mx-0">
          The most trusted and reliable Stake Pool operating on the Cardano blockchain.
        </p>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 text-center sm:text-lg sm:max-w-xl md:mt-5 md:text-xl md:text-left lg:mx-0">
          Start your journey with Sandstone today.
        </p>
        <div class="mt-5 sm:mt-8 flex justify-center md:justify-start lg:justify-start">
          <a class="btn" :href="props.link">
            Learn More
            <svg class="h-6 w-6 stroke-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 width="2em" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>
