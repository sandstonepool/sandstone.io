<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 20px;
  justify-content: space-around;
  align-items: center;
}

.stat {
  display: flex;
  height: 180px;
  padding-right: 0;
  padding-left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.big-number {
  color: #0437ff;
  font-size: 55px;
  line-height: 100%;
  font-weight: 700;
  text-align: center;
}

.number-label {
  margin-top: 10px;
  font-size: 25px;
  font-weight: 700;
}

.ada-icon-wrap {
  display: flex;
  min-width: 100px;
}

@media screen and (max-width: 768px) {
  .stats {
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, max-content);
  }
  /*.big-number { font-size: 55px; }*/
  /*.number-label { font-size: 28px }*/
}
</style>

<template>
  <div class="stats">
    <div class="stat">
      <div class="big-number">2%</div>
      <div class="number-label">Tax</div>
    </div>
    <div class="stat">
      <div class="ada-icon-wrap">
        <div class="big-number">8M</div>
        <img src="~/assets/images/ada-icon.svg" loading="lazy" alt="ADA"/>
      </div>
      <div class="number-label">Stake</div>
    </div>
    <div class="stat">
      <div class="ada-icon-wrap">
        <div class="big-number">810K</div>
        <img src="~/assets/images/ada-icon.svg" loading="lazy" alt="ADA"/>
      </div>
      <div class="number-label">Pledge</div>
    </div>
    <div class="stat">
      <div class="big-number">147</div>
      <div class="number-label">Delegators</div>
    </div>
  </div>
</template>