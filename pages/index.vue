<style lang="scss">
@import "assets/styles/sandstone";

section {
  margin-bottom: 150px;
}

.content {
  padding-top: 60px;
  padding-left: 60px;
  padding-right: 60px;
  margin: auto;
  max-width: 1300px;
}

.half {
  max-width: 50%;
}

section .inner {
  margin: auto;
  max-width: 1300px;
  padding-left: 60px;
  padding-right: 60px;
}

section.breakout {
  background-color: rgba(29, 244, 244, 0.1);
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  margin-top: 100px;
  padding-bottom: 60px;
  padding-top: 60px;
  left: 50%;
}

.grid {
  display: flex;
  row-gap: 60px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
}

.grid > * {
  display: flex;
  column-gap: 40px;
  width: 50%;
  flex-direction: row;
  align-items: flex-start;
}

.grid h3 {
  margin-top: 0;
}

.grid-image {
  width: 80px;
}

.grid-text {
  padding-right: 30px;
}

@media screen and (max-width: 768px) {
  .half {
    max-width: 100%;
  }

  .grid > * {
    width: 100%;
    flex-direction: column;
  }

  .grid h3 {
    margin-top: 25px;
  }
}

/* INTRODUCTION SECTION */

#intro {
  background-image: url("assets/images/hero-1080.png");
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: 200px 100px;
  height: 850px;
  padding-right: -60px;
  margin-right: -60px;
}

/* WHY SANDSTONE? */

#why-sandstone .statistics {
  margin-top: 100px;
  margin-bottom: 100px;
}

/* GETTING STARTED */

.separated {
  border-bottom: 2px solid $fluorescent-blue;
  position: relative;
  margin: 0 auto;
  padding-bottom: 20px;
}

.separated:before {
  background: none;
  border-bottom: 2px solid $blue-ryb;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 2px;
  pointer-events: none;
}

.grid-number {
  color: $fluorescent-blue;
  font-size: 80px;
  line-height: 100%;
  font-weight: 800;
  text-shadow: $depth-shadow;
}

/* ABOUT US */

#about-us {
  display: flex;
  column-gap: 40px;
  min-width: 100%;
}

@media screen and (max-width: 768px) {
  #about-us {
    flex-direction: column;
  }
}

/* SECURITY */

#security .tips {
  display: grid;
  grid-template-columns: repeat(auto-fill, 25%);
  grid-template-rows: max-content;
}

#security .tips > * {
  margin: 1em;
}

#security .tip {
  height: 180px;
  padding: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
}

#security .tip h3 {
  color: #0437ff;
  font-size: 30pt;
  margin: 15pt;
}

@media screen and (max-width: 1366px) {
  #security .tips {
    grid-template-columns: repeat(auto-fill, 50%);
  }
}

@media screen and (max-width: 768px) {
  #security .tips {
    grid-template-columns: repeat(auto-fill, 100%);
  }
}

/* FAQ */
#faq {
  display: grid;
  grid-area: span;
  grid-gap: 4em;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: max-content;
}

#faq h2 {
  grid-column: 1 / span 4;
}

#faq .questions {
  display: flex;
  flex-direction: column;
  gap: 2em;
  grid-column: 1 / span 3;
}

#faq .squiggle {
  position: sticky;
  top: 0;
  grid-column: 4 / span 1;
  width: 100%;
  height: 0;
}

#faq .squiggle img {
  width: 200px;
}

@media screen and (max-width: 1366px) {
  #faq .questions {
    grid-column: 1 / span 4;
  }

  #faq .squiggle {
    visibility: hidden;
  }
}

</style>

<template>
  <div>
    <Header :links="links"/>
    <div class="content">
      <section id="intro">
        <div class="half">
          <hero/>
        </div>
      </section>

      <section id="why-sandstone">
        <h2>Why stake with Sandstone?</h2>
        <div class="half">
          <div>
            <p>
              Because this pool is run by professionals who have been involved in
              the Cardano ecosystem since 2017. We provide world-class technical
              infrastructure with ultra-safe protocols. Proudly part of the Single
              Pool Operator (SPO) group, we’re only focussed on this single stake
              pool, keeping the network as decentralised as possible.
            </p>
            <p>
              We’re in this for the long haul, having just secured a 3 year lease
              on our cloud based infrastructure. So you can safely collect your
              rewards with us, for the long term.
            </p>
          </div>
        </div>
        <div class="statistics">
          <box>
            <stats/>
          </box>
        </div>
        <div class="grid">
          <div>
            <img src="~/assets/images/grid-security.svg" class="grid-image" alt=""/>
            <div>
              <h3>Security</h3>
              <div class="grid-text">
                Sandstone servers are cloud hosted for maximum security. Our
                system is designed with built-in backups (redundancy). So we will
                never be offline. Which means you’ll always be collecting rewards,
                we mint blocks in
                <strong>every epoch</strong>.
              </div>
            </div>
          </div>
          <div>
            <img src="~/assets/images/grid-community.svg" class="grid-image" alt=""/>
            <div>
              <h3>Community</h3>
              <div class="grid-text">
                As a long-standing member of the Cardano community, we contributed
                to the Incentivised Tesnet (ITN) phase with additional software
                that became known as the ‘<em>Stable-Alpha</em>’ builds. We also
                assisted great projects like
                <a
                    href="https://github.com/AndrewWestberg/cncli"
                    target="_blank"
                    class="link"
                >Andrew Westberg&#x27;s cncli tool</a
                >. But don&#x27;t take our word for it. Ask around. Our reputation
                speaks volumes.
              </div>
            </div>
          </div>
          <div>
            <img src="~/assets/images/grid-skin-in-the-game.svg" class="grid-image" alt=""/>
            <div>
              <h3>Skin in the Game</h3>
              <div class="grid-text">
                We pride ourselves on running a highly rewarding pool dedicated to
                supporting the decentralisation of Cardano. We’ve maintained a
                very high pledge as proof of our long term investment in our pool
                and the community.
              </div>
            </div>
          </div>
          <div>
            <img src="~/assets/images/grid-fees.svg" class="grid-image" alt=""/>
            <div>
              <h3>Fees</h3>
              <div class="grid-text">
                To support the community, we keep our fees very low at Sandstone,
                less than 2% in fact. This ensures 98% of all staking rewards go
                to you, the delegator.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <div class="grid">
          <div class="separated">
            <div class="grid-number">1.</div>
            <p>
              Ensure that your ADA is securely stored using a reputable wallet. We
              recommend
              <a href="https://yoroi-wallet.com/#/" class="link">Yoroi</a> wallet
              for a good user experience.
            </p>
          </div>
          <div class="separated">
            <div class="grid-number">2.</div>
            <p>
              Search for the <b>SAND</b> ticker using the wallet pool delegation
              list. Alternatively, copy and paste our unique Pool Id.
            </p>
          </div>
          <div class="separated">
            <div class="grid-number">3.</div>
            <p>
              Select the amount of ADA you wish to delegate with Sandstone and tap
              "Delegate".
            </p>
          </div>
          <div class="separated">
            <div class="grid-number">4.</div>
            <p>
              You're done! Staking rewards are paid every two epoch, which is
              approximately every ten days.
            </p>
          </div>
        </div>
      </section>

      <section id="about-us">
        <div>
          <h2>About Us</h2>
          <p>
            The team behind Sandstone have over 14 years professional experience
            in: designing, implementing, and delivering complex IT systems. We’ve
            worked with some of the most sophisticated system architecture in
            Australia, and have been involved in Cardano for over 4 years (since
            2017) so we’re confided we’ll be able to provide maximum returns on
            your $ADA.
          </p>
          <p>
            Sandstone is an exceptionally high performing Single Pool Operator
            (SPO). Our commitment to supporting Cardano’s decentralisation has
            awarded our community with a 4.8+ score. We are here for the long
            term, our pool will be around for the next decade, and we’re excited
            about the decentralise future of finance!
          </p>
        </div>
        <div>
          <h2>Mission</h2>
          <p>
            Our mission is: To provide a reliable node in the ecosystem,
            consistently make blocks every epoch and deliver a staking rewards for
            our community. We maintain a top rate of return (over 4.8%) with
            institutional-grade hardware, bank-level security and human honesty.
          </p>
          <p>
            We’re committed to being a force for good in the world, pledging
            support to the causes we believe in, while providing our knowledge to
            enhance the wider Cardano ecosystem. We stand for a professional,
            reliable service, delivered with integrity.
          </p>
        </div>
      </section>

      <section id="security" class="breakout">
        <div class="inner">
          <h2>Watch Out!</h2>
          <p>
            Please be careful of scammers. Follow these simple rules at all times.
          </p>
          <div class="tips">
            <box>
              <div class="tip">
                <h3>1</h3>
                <p>
                  Never give out your wallet seed phrase, ever. You don’t need to
                  share it for staking.
                </p>
              </div>
            </box>
            <box>
              <div class="tip">
                <h3>2</h3>
                <p>
                  Never send you coins to a stake pool – coins remain in your
                  wallet when you stake.
                </p>
              </div>
            </box>
            <box>
              <div class="tip">
                <h3>3</h3>
                <p>
                  Get your $ADA off the exchange and onto a wallet before you
                  stake.
                </p>
              </div>
            </box>
            <box>
              <div class="tip">
                <h3>4</h3>
                <p>Only download wallets from official sites.</p>
                <p>
                  <a href="#" class="link">Yoroi</a> |
                  <a href="#" class="link">ADA Lite</a> |
                  <a href="#" class="link">Atomic</a>
                </p>
              </div>
            </box>
          </div>
        </div>
      </section>

      <section id="faq">
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
        <div class="squiggle">
          <img src="~/assets/images/sandstone-element-large.svg" alt=""/>
          <p>The most common questions should be in this list. If you have any others, drop us a line.</p>
          <Button onclick='location.href="mailto:info@sandstone.io?subject=General Enquiry"'>
            Contact Us
            <template v-slot:icon>
              <font-awesome-icon icon="chevron-circle-right" size="2x"/>
            </template>
          </Button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const links = [
  { location: "#why-sandstone", message: "Why Sandstone?" },
  { location: "#getting-started", message: "Getting Started" },
  { location: "#about-us", message: "About Us"},
  { location: "#security", message: "Security" },
  { location: "#faq", message: "F.A.Q" }
]
</script>