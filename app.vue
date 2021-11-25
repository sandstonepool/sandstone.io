<style lang="scss">
@import "assets/styles/sandstone";
@import "assets/styles/normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

html body {
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Poppins, sans-serif;
  color: $rich-black-fogra-39;
  font-size: 12pt;
  line-height: 22px;
  max-width: 100vw;
  overflow-x: hidden;
  object-fit: fill;
  margin: 0;
}

h1 {
  font-weight: 700;
  font-size: 45px;
  line-height: 50px;
  margin-bottom: 20px;
}

h2 {
  color: #0437ff;
  font-size: 35px;
  line-height: 50px;
}

h3 {
  font-size: 25px;
}
</style>

<template>
  <div>
    <NuxtPage />
    <Footer/>
  </div>
</template>