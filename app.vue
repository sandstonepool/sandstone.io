<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

html body {
  display: flex;
  overflow: visible;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Poppins, sans-serif;
  color: #000;
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

section {
  margin-bottom: 150px;
}

.content {
  padding-top: 150px;
  padding-left: 60px;
  padding-right: 60px;
  margin: auto;
  max-width: 1400px;
}

.half {
  max-width: 50%;
}

@media screen and (max-width: 768px) {
  .half {
    max-width: 100%;
  }
}

/* INTRODUCTION SECTION */

#intro {
  background-image: url("~/assets/images/hero-1080.png");
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: 200px 100px;
  height: 850px;
  padding-right: -60px;
  margin-right: -60px;
}

/* WHY SANDSTONE SECTION */

.statistics {
  margin-top: 100px;
  margin-bottom: 100px;
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
  margin-top: 0px;
}

.grid-image {
  width: 80px;
}

.grid-text {
  padding-right: 30px;
}

@media screen and (max-width: 768px) {
  .grid > * {
    width: 100%;
    flex-direction: column;
  }
  .grid h3 {
    margin-top: 25px;
  }
}

/* GETTING STARTED */

.separated {
  border-bottom: 2px solid #1df4f4;
  position: relative;
  margin: 0 auto;
  padding-bottom: 20px;
}

.separated:before {
  background: none;
  border-bottom: 2px solid #0437ff;
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 2px;
  pointer-events: none;
}

.grid-number {
  color: #1df4f4;
  font-size: 80px;
  line-height: 100%;
  font-weight: 800;
}

/* ABOUT US */

#about-us {
  display: flex;
  column-gap: 40px;
}

#about-us > * {
  width: 50%;
}

@media screen and (max-width: 768px) {
  #about-us {
    flex-direction: column;
  }
  #about-us > * {
    width: 100%;
  }
}

/* WATCH OUT */

#watch-out {
  background-color: rgba(29, 244, 244, 0.1);
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  margin-top: 100px;
  padding-bottom: 60px;
  padding-top: 60px;
  left: 50%;
}

#watch-out .inner {
  margin: auto;
  max-width: 1400px;
  padding-left: 60px;
  padding-right: 60px;

}

.tips {
  display: grid;
  grid-template-columns: repeat(auto-fill, 25%);
  grid-template-rows: max-content;
}

.tips > * {
  margin: 1em;
}

.tip {
  height: 180px;
  padding: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
}

.tip h3 {
  color: #0437ff;
  font-size: 30pt;
  margin: 15pt;
}

@media screen and (max-width: 1366px) {
  .tips {
    grid-template-columns: repeat(auto-fill, 50%);
  }
}

@media screen and (max-width: 768px) {
  .tips {
    grid-template-columns: repeat(auto-fill, 100%);
  }
}

</style>

<template>
  <Head>
    <Title>Sandstone Stake Pool</Title>
    <Link href="css/normalize.css" rel="stylesheet" type="text/css" />
    <Link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
    <Link href="images/webclip.jpg" rel="apple-touch-icon" />
  </Head>

  <div class="content">
    <section id="intro">
      <div class="half">
        <hero />
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
          <stats />
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

    <section>
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

    <section id="watch-out">
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
      <faq />
    </section>

    <footer />
  </div>

  <!-- Footer />
  <Script
    src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6164be4319dd6217a0d7b88a"
    type="text/javascript"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"
  ></Script>
  <Script src="js/sandstone.js" type="text/javascript"></Script> -->
</template>
