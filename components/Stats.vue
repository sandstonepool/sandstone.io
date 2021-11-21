<style scoped>
.stats {
  display: flex;
  row-gap: 60px;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.stat {
  display: flex;
  width: 100%;
  height: 180px;
  max-width: 200px;
  margin-right: 42px;
  margin-left: 42px;
  padding-right: 0;
  padding-left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.big-number {
  color: #0437ff;
  font-size: 55px;
  line-height: 55px;
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
}

@media screen and (max-width: 1265px) {
  .stat {
    max-width: 300px;
  }
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
        <img src="~/assets/images/ada-icon.svg" alt="ADA"/>
      </div>
      <div class="number-label">Pledge</div>
    </div>
    <div class="stat">
      <div class="big-number">147</div>
      <div class="number-label">Delegators</div>
    </div>
  </div>
</template>