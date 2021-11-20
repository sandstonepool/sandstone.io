<style scoped>
.questions {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
<template>
  <div>
    <h2>Frequently Asked Questions</h2>
    <div class="questions">
      <expandable title="Is staking safe?">
        <p>
          Yes. Staking on your $ADA tokens on is very safe. Cardano is one of
          the few Proof of Stake blockchains that allows you to keep your
          coins in your wallet when you stake. They’re yours and you can
          access them whenever you need to. There is no lock up period when
          you stake on the network.
        </p>
      </expandable>
      <expandable title="When will I see my rewards?">
        <p>
          Time on the Cardano blockchain is measured in epochs (120hrs or 5
          days). While there is no lock up period for staking, you won’t see
          your first rewards for 5 epochs. This is because rewards are
          calculated retrospectively about 2 epoch in the past.
        </p>
      </expandable>
      <expandable title="Do I need to claim rewards each time they're awarded?">
        <p>
          No, your rewards are compounded automatically in your total
          delegation, and included in the calculation of future rewards. The
          only time you need to claim your rewards is to bring them back on to
          your wallet. We recommend doing this roughly every quarter.
        </p>
      </expandable>
      <expandable title="What should I look for when choosing a stake pool to delegate to?">
        <p>
          Cardano strives to be the most decentralised blockchain out there, so
          choosing a Single Pool Operator (SPO) will contribute to that aim.
          Consider SPOs that are active in the Cardano community, minting blocks
          every epoch and have several ways to communicate with, so you can
          reach them if you have any questions.
        </p>
      </expandable>
      <expandable title="Are single pool better than larger operators (e.g. Binance, Kraken, Atomic, etc)?">
        <p>
          Yes they are. Single Pool Operators (SPO) are focussed on one single
          pool, and contribute directly to the decentralisation of the Cardano
          network. They also tend to work harder for their pools. Larger pool
          operators run like factories and trim costs to maximize profits.
        </p>
      </expandable>
      <expandable title="How are blocks allocated to stake pools per epoch?">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora unde
          alias sapiente iste voluptate dolore error odit suscipit similique
          illo necessitatibus amet, reprehenderit nihil accusamus sed
          perferendis quibusdam! Iste, quae!
        </p>
      </expandable>
      <expandable title="Do you take your 2% fee from the interest rate?">
        <p>
          NO. The pool’s reward rate – the % interest you earn - is calculated
          on the total rewards paid out. The two 2% fee is taken from the
          rewards, not the percentage profits. Meaning 98% of all tokens paid
          out go to you, the delegators.
        </p>
      </expandable>
      <expandable title="Do I need to stake each time I add coins to my wallet?">
        <p>
          NO. Once you’ve linked your wallet to a stake pool the balance is
          automatically adjusted when you add or remove tokens from that wallet.
        </p>
      </expandable>
      <expandable title="My exchange offers staking, should I just do that?">
        <p>
          We don’t think so. Exchanges can keep up to 20% of staking rewards.
          Also contributing your delegation to the very large pool operators
          gives them more power in swaying the direction of the Cardano
          ecosystem. SPOs lead to greater decentralisation.
        </p>
      </expandable>
      <expandable title="How do I unstake?">
        <p>
          To unstake from a pool, simply choose another pool to delegate to.
        </p>
      </expandable>
    </div>
  </div>
</template>

<script>
import Expandable from '../Expandable.vue'

export default {
  components: {Expandable},

}
</script>
