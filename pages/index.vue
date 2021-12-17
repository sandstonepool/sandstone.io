<template>
  <div>
    <hero class="mx-auto max-w-7xl mt-20 mb-0 px-8" link="#why-sandstone"/>

    <section id="why-sandstone" class="mx-auto max-w-7xl mt-20 mb-20 px-8" data-name="Why Sandstone?">
      <h2>Why stake with Sandstone?</h2>
      <div class="half">
        <div>
          <p>
            Sandstone is one of the very first Cardano Stake Pools to have established itself on the Cardano blockchain.
            Our infrastructure is expertly designed and operated to ensure that we deliver the most reliable service
            possible. Our foremost priorities are to maintaining the security of the Cardano blockchain and maximising
            rewards to our delegators.
          </p>
          <p>
            Success to us means being recognised as one of the most trusted players in the Cardano ecosystem. To
            establish that trust, Sandstone has committed investments of approximately <strong
            class="underline decoration-2 decoration-blue-dark">1 Million ₳</strong>
            towards the cost of infrastructure, pool pledge, and other operating overheads.
          </p>
          <p>
            By delegating to Sandstone, you will be helping to support us play a very important role in the Cardano
            ecosystem. In return, our promise is to be relentless in the pursuit of rewards for our delegators and the
            continued success for Cardano.
          </p>
        </div>
      </div>
      <box class="mt-20 mb-24">
        <stats :confetti="false" :poolId="poolId"/>
      </box>
      <div class="grid sm:grid-rows-1 sm:grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-6">
        <div class="flex items-start gap-6">
          <img alt="" class="relative" src="~/assets/images/grid-security.svg"/>
          <div>
            <h3>Security</h3>
            <div>
              Sandstone servers are cloud hosted and monitored 24/7. Our
              system is designed to be fault-tolerant and highly-available.
              This makes us incredibly reliable and means greater rewards
              earning potential for our delegators.
            </div>
          </div>
        </div>
        <div class="flex items-start gap-6">
          <img alt="" src="~/assets/images/grid-community.svg"/>
          <div>
            <h3>Community</h3>
            <div>
              As a long-standing member of the Cardano community, we've contributed
              significantly towards the development of Cardano, particularly during
              the early stages of the Incentivised Test Network (ITN). But don't take
              our word for it. Ask around. Our reputation speaks volumes.
            </div>
          </div>
        </div>
        <div class="flex items-start gap-6">
          <img alt="" src="~/assets/images/grid-skin-in-the-game.svg"/>
          <div>
            <h3>Skin in the Game</h3>
            <div>
              We pride ourselves on running a highly rewarding pool dedicated to
              supporting the decentralisation of Cardano. We’ve maintained a
              very high pledge as proof of our long term investment in our pool
              and the community.
            </div>
          </div>
        </div>
        <div class="flex items-start gap-6">
          <img alt="" src="~/assets/images/grid-fees.svg"/>
          <div>
            <h3>Fees</h3>
            <div>
              To support the community, we keep our fees very low at Sandstone,
              less than <strong class="underline decoration-2 decoration-blue-dark">2%</strong> in fact. This ensures
              <strong class="underline decoration-2 decoration-blue-dark">98%</strong> of all rewards go to you,
              the delegator.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="getting-started" class="mx-auto max-w-7xl mt-20 mb-20 px-8" data-name="Getting Started">
      <h2>Getting Started</h2>
      <div class="grid sm:grid-rows-1 sm:grid-cols-1 md:grid-rows-2 md:grid-cols-2 auto-cols-auto auto-rows-max mt-8">
        <div class="separated inline-flex p-4 align-baseline">
          <div class="text-blue-light text-7xl font-bold pr-8 text-shadow">1.</div>
          <p>
            Ensure that your ADA is securely stored using a reputable wallet. We
            recommend
            <a class="link" href="https://yoroi-wallet.com/#/">Yoroi</a> wallet
            for a good user experience.
          </p>
        </div>
        <div class="separated inline-flex p-4 align-baseline">
          <div class="text-blue-light text-7xl font-bold pr-8 text-shadow">2.</div>
          <p>
            Search for the <strong>SAND</strong> ticker using the wallet pool delegation
            list. Alternatively, copy and paste our unique Pool ID: <strong
            class="bg-blue-subtle text-blue-dark rounded-md px-2 cursor-pointer text-sm font-mono" @click="toClipboard">
            40183423c226189d508db4b21bf94b790cf4d096134a9afbc2bd5318
          </strong>
          </p>
        </div>
        <div class="separated inline-flex p-4 align-baseline">
          <div class="text-blue-light text-7xl font-bold pr-8 text-shadow">3.</div>
          <p>
            Select the amount of ADA you wish to delegate with Sandstone and tap
            "Delegate".
          </p>
        </div>
        <div class="separated inline-flex p-4 align-baseline">
          <div class="text-blue-light text-7xl font-bold pr-8 text-shadow">4.</div>
          <p>
            You're done! Staking rewards are paid every two epoch, which is
            approximately every ten days.
          </p>
        </div>
      </div>
    </section>

    <section id="about-us" class="mx-auto max-w-7xl mt-20 mb-20 px-8 grid md:grid-cols-2 md:grid-rows-1 gap-24"
             data-name="About Us">
      <div>
        <h2>About Us</h2>
        <p>
          The team behind Sandstone have over 14 years professional experience designing, implementing, and delivering
          complex IT systems. We’ve worked on some of the most sophisticated system architectures across a number of
          industries and have been involved with Cardano since 2017. We’re confident we’ll be able to provide maximum
          returns on your staked tokens.
        </p>
        <p>
          Sandstone is an exceptionally operated Stake Pool. We're committed to supporting Cardano’s decentralisation
          and are actively building out solutions that run on the Cardano blockchain. We're determined to be recognised
          globally as the most professionally run, reliable, and trustworthy pools on the Cardano blockchain.
        </p>
      </div>
      <div>
        <h2>Mission</h2>
        <p>
          Our mission is to provide the most reliable stake pool on the Cardano blockchain that consistently make blocks
          every epoch and delivers the best staking rewards possible for our delegators. Sandstone's architecture is
          incredibly sophisticated with no expense spared when it comes to ensuring the best security and reliability
          possible.
        </p>
        <p>
          We’re committed to being a force for good in the world, pledging support to the causes we believe in, while
          providing our knowledge to enhance the wider Cardano ecosystem. We stand for a professional, reliable service,
          delivered with integrity.
        </p>
      </div>
    </section>

    <div class="w-full mx-auto mt-12 mb-12 pt-8 pb-8 bg-blue-subtle">
      <section id="security" class="mx-auto max-w-7xl px-8" data-name="Security">
        <h2>Watch Out!</h2>
        <p>
          Please be careful of scammers. Follow these simple rules at all times.
        </p>
        <div
          class="grid sm:grid-rows-1 sm:grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 auto-cols-auto auto-rows-max gap-4 mt-8">
          <box>
            <div class="text-center p-6">
              <h3 class="text-blue-dark text-6xl">1</h3>
              <p>
                Never give out your wallet seed phrase, ever. You don’t need to
                share it for staking.
              </p>
            </div>
          </box>
          <box class="text-center">
            <div class="text-center p-6">
              <h3 class="text-blue-dark text-6xl">2</h3>
              <p>
                Never send you coins to a stake pool – coins remain in your
                wallet when you stake.
              </p>
            </div>
          </box>
          <box class="text-center">
            <div class="text-center p-6">
              <h3 class="text-blue-dark text-6xl">3</h3>
              <p>
                Get your $ADA off the exchange and onto a wallet before you
                stake.
              </p>
            </div>
          </box>
          <box class="text-center">
            <div class="text-center p-6">
              <h3 class="text-blue-dark text-6xl">4</h3>
              <p>Only download wallets from official sites.</p>
              <p>
                <a class="underline decoration-2 decoration-blue-dark cursor-pointer" href="https://yoroi-wallet.com/#/"
                   target="_blank">Yoroi</a> |
                <a class="underline decoration-2 decoration-blue-dark cursor-pointer" href="https://adalite.io/"
                   target="_blank">ADA Lite</a> |
                <a class="underline decoration-2 decoration-blue-dark cursor-pointer" href="https://atomicwallet.io/"
                   target="_blank">Atomic</a>
              </p>
            </div>
          </box>
        </div>
      </section>
    </div>

    <section id="faq" class="mx-auto max-w-7xl mt-20 mb-20 px-8" data-name="F.A.Q">
      <h2>Frequently Asked Questions</h2>
      <div class="grid sm:grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-16">
        <div class="grid gap-6 md:col-span-2">
          <reveal summary="Is staking safe?">
            Yes. Staking ADA tokens is very safe. Cardano is one of the few Proof of Stake blockchains that allows you
            to keep total custody of your tokens while staking them. They’re yours and you can access them whenever you
            need to. There is no lock up period when you stake on the network.
          </reveal>
          <reveal summary="What kind of infrastructure do you run on?">
            Our core infrastructure is cloud hosted with Amazon Web Services and primarily operates from the AWS
            Asia Pacific (Sydney) region. We operate at least three relays at any one point in time. Relays are
            distributed across three physically separate datacenters to ensure maximum availability. In the event of an
            isolated failure, our core block producer is configured to instantly and automatically fail-over between
            datacenters within the region. Should we experience a regional outage, the entire stake pool can be
            recovered to another region (even internationally) within one hour.
          </reveal>
          <reveal summary="When will I receive rewards?">
            Time on the Cardano blockchain is measured in epochs (120hrs or 5 days). While there is no lock up period
            for staking, you won’t see your first rewards for 2 epochs. This is because rewards are calculated
            retrospectively about 2 epoch in the past.
          </reveal>
          <reveal summary="Do I need to claim rewards each time they're awarded?">
            No, your rewards are compounded automatically in your total delegation, and included in the calculation of
            future rewards. The only time you need to claim your rewards is when transferring them back to your
            spending wallet.
          </reveal>
          <reveal summary="What should I look for when choosing a stake pool to delegate to?">
            Here are a few things to look out for, assuming your objective is to maximise rewards earning
            potential. Select a for pool that consistently mints blocks every epoch, has a low tax rate, and also has a
            reasonable amount if their own funds delegated to their pool (i.e. pool pledge). Avoid pools that do not
            have a public website that describes their operation. Look for evidence that the pool has considered the
            security, reliability, and performance of their setup. Make sure that the pool provides a way for you to
            contact them in-case you have any questions or concerns. Ask for recommendations from other reputable
            members of the Cardano community.
          </reveal>
          <reveal
            summary="Are single pool better than larger multi-pool operators (e.g. Binance, Kraken, Atomic, etc)?">
            Single Pool Operators focus on operating one single pool and contribute directly to the
            decentralisation of the Cardano network because of this. This doesn't automatically mean that large
            multi-pool operators are bad. However, one thing to look out for is how much pledge those pool operators
            have allocated to each of their individual pools. By operating multiple pools, they might be spreading their
            resources too thinly. Consequently, operators who manage multiple pools tend to have a lower average pledge,
            which reduces the chances of being allocated blocks relative to the number of total delegators. Generally
            this results in overall lower rewards earning potential for delegators. Sandstone is a Single Pool Operator
            with a fairly significant pledge.
          </reveal>
          <reveal summary="How are blocks allocated to stake pools per epoch?">
            The number of blocks assigned to each stake pool is proportional to the total amount of pledge and
            delegation staked with the pool. Hence, pools with higher total delegation and pledge are more likely to be
            allocated blocks. However, one must also consider that rewards are shared by delegators proportional to each
            individually staked amount. Hence, it is not correct to say that pools that produce a larger number of
            blocks each epoch are more profitable. In fact, often times the opposite is true.
          </reveal>
          <reveal summary="I use an exchange that offers Staking. Should I just do that?">
            We don't think so. Exchanges often charge a much higher fee for using their staking services (we've
            seen as high as 20%!). Furthermore, this type of staking is known as 'custodial' staking, which means the
            exchange is in total control of your funds. If the exchange were to be compromised by hackers or become
            insolvent for any reason then all of your funds could be permanently lost. Storing your digital assets with
            a reputable wallet and delegating directly to a stake pool is much safer and often far more profitable.
          </reveal>
          <reveal summary="Where is your base of operation?">
            Sandstone is an Australian owned and operated company (ACN 655223591).
          </reveal>
          <reveal summary="Do you pay government tax?">
            Yes! As an Australian registered company we are bound by local laws, including those regarding taxation. As
            such, Sandstone pays company taxes in-line with requirements set by the Australian Tax Office (ATO)
            and the Australian Securities & Investments Commission (ASIC).
          </reveal>
        </div>

        <div class="sticky w-full top-14 sm:h-18 sm:block sm:top-14 md:h-0">
          <img class="hidden md:block md:block w-1/2" src="~/assets/images/sandstone-element-large.svg" alt=""/>
          <p>The most common questions should be in this list. If you have any others, drop us a line.</p>
          <a class="btn mt-10" href="mailto:info@sandstone.io?subject=General Enquiry">
            Contact Us
            <svg class="h-6 w-6 stroke-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 width="2em" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '~/components/Hero'
import Box from "~/components/Box"
import Stats from "~/components/Stats"
import Reveal from "../components/Reveal";

const navigation = inject('navigation')
navigation.value = [
  {name: 'Why Sandstone?', anchor: '#why-sandstone'},
  {name: 'Getting Started', anchor: '#getting-started'},
  {name: 'About Us', anchor: "#about-us"},
  {name: 'Security', anchor: '#security'},
  {name: 'F.A.Q', anchor: '#faq'},
]

const poolId = '40183423c226189d508db4b21bf94b790cf4d096134a9afbc2bd5318'

const toClipboard = (event) => {
  const clipboardData =
    event.clipboardData ||
    window.clipboardData ||
    event.originalEvent?.clipboardData ||
    navigator.clipboard;

  clipboardData.writeText(poolId);
}
</script>
