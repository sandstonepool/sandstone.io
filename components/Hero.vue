<style scoped>
.hero .button-panel {
  margin-top: 60px;
}
</style>

<template>
  <div class="hero">
    <h1>
      Professional Staking for Maximum Rewards
    </h1>
    <div>
      Sandstone is a professionally operated stake pool on the Cardano
      blockchain. Engineered with bank-grade infrastructure to secure
      consistently high rewards for our community.
      <p/>
      Put simply, we make blocks.
    </div>
    <div class="button-panel">
      <Button>
        Stake with Sandstone
        <template v-slot:icon>
          <font-awesome-icon icon="chevron-circle-right" size="2x" />
        </template>
      </Button>
    </div>
  </div>
</template>
<script>
import Button from "./Button";
export default {
  components: {Button}
}
</script>