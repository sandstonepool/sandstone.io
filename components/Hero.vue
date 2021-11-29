<style>
#hero {
  @apply bg-no-repeat;
  background-position: 280px 20px;
  padding-left: 120px;
  margin-left: -120px;
  padding-right: 120px;
  margin-right: -120px;
}

@media screen and (min-width: 768px) {
  #hero {
    @apply md:bg-hero-md;
    height: 570px;
  }
}

@media screen and (min-width: 1024px) {
  #hero {
    @apply bg-hero-lg;
    height: 750px;
  }
}

</style>
<template>
  <main class="hero mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div class="text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 text-center sm:text-5xl md:text-6xl md:text-left">
        <span class="">Professional Staking for</span>
        {{ ' ' }}
        <span class="text-blue-dark">Maximum Rewards</span>
      </h1>
      <div id="hero">
      <p class="mt-3 text-base text-gray-500 sm:mt-5 text-center sm:text-lg sm:max-w-xl md:mt-5 md:text-xl md:text-left lg:mx-0">
        Sandstone is a professionally operated stake pool on the Cardano
        blockchain. Engineered with bank-grade infrastructure to secure
        consistently high rewards for our community.
      </p>
      <p class="mt-3 text-base text-gray-500 sm:mt-5 text-center sm:text-lg sm:max-w-xl md:mt-5 md:text-xl md:text-left lg:mx-0">
        Put simply, we make blocks.
      </p>
      <div class="mt-5 sm:mt-8 flex justify-center md:justify-start lg:justify-start">
          <a href="#" class="btn">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="2em">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
            </svg>
          </a>
      </div>
      </div>
    </div>
  </main>
</template>