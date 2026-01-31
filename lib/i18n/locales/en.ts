export const en = {
  common: {
    skipToContent: "Skip to main content",
  },
  nav: {
    whySandstone: "Why Sandstone?",
    gettingStarted: "Getting Started",
    security: "Security",
    faq: "FAQ",
  },
  hero: {
    badge: "✨ Trusted by Delegators",
    title: "Earn More ADA",
    subtitle: "Stake with Confidence",
    description: "A pioneer Cardano stake pool delivering consistent rewards since the early days of the network.",
    stats: {
      marginFee: "Margin Fee",
      stake: "Stake",
      pledge: "Pledge",
      lifetimeBlocks: "Lifetime Blocks",
      lifetimeRewards: "Lifetime Rewards",
      loading: "Loading",
    },
    scroll: "Scroll to explore",
  },
  whySandstone: {
    title: "Why stake with Sandstone?",
    intro1: "We've been running a reliable stake pool since Cardano's earliest days. Our infrastructure is designed for maximum uptime and consistent block production—which means better rewards for you.",
    intro2: "We've invested over {amount} in our pool pledge and infrastructure. This commitment demonstrates our long-term dedication to both our delegators and the Cardano network.",
    benefits: {
      security: {
        title: "Security",
        description: "Cloud-hosted infrastructure monitored 24/7 with automatic failover across multiple datacenters. Our fault-tolerant design ensures maximum uptime and consistent rewards.",
      },
      community: {
        title: "Community",
        description: "Active in the Cardano community since the Incentivized Test Network (ITN). We've built a solid reputation through years of reliable operation and community engagement.",
      },
      strongPledge: {
        title: "Strong Pledge",
        description: "Our substantial pledge demonstrates real commitment to the pool's success. We're invested in the long-term—when you earn, we earn.",
      },
      lowFees: {
        title: "Low Fees",
        description: "Just 1% margin fee (plus the network minimum of 170 ₳ per epoch). More of your rewards stay in your wallet.",
      },
    },
  },
  gettingStarted: {
    title: "Getting Started",
    steps: {
      step1: "Get a wallet. We recommend {lace} for its clean interface and staking features.",
      step2: "Find us. Search for {ticker} in your wallet's stake pool list, or use our {poolId}.",
      step3: "Delegate your ADA. Choose how much to stake and confirm—your ADA never leaves your wallet.",
      step4: "Start earning. Rewards arrive automatically every epoch (approximately every 5 days).",
    },
    poolId: "Pool ID",
    copied: "Copied to Clipboard",
  },
  security: {
    title: "Stay Safe",
    description: "Protect yourself from scams. Follow these essential security rules.",
    rules: {
      rule1: "Never share your seed phrase. No legitimate stake pool will ever ask for it.",
      rule2: "Never send ADA to stake. Your coins stay in your wallet when you delegate.",
      rule3: "Move ADA off exchanges. Use a non-custodial wallet for full control and better rewards.",
      rule4: "Only download wallets from official sources.",
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    sidebarText: "Can't find what you're looking for? We're here to help.",
    contactUs: "Contact Us",
    items: [
      {
        question: "Is staking safe?",
        answer: "Yes. When you stake ADA, your tokens never leave your wallet—you maintain full custody at all times. There's no lock-up period, so you can access or move your ADA whenever you want."
      },
      {
        question: "What infrastructure do you use?",
        answer: "We run on Amazon Web Services in the Asia Pacific region with multiple relay nodes distributed across separate datacenters. Our block producer automatically fails over between datacenters if needed, and we can recover to another region within an hour if necessary."
      },
      {
        question: "When will I receive rewards?",
        answer: "Your first rewards arrive after about 15-20 days due to how Cardano calculates rewards (2-3 epochs back). After that, you'll receive rewards automatically every epoch (every 5 days)."
      },
      {
        question: "Do I need to claim rewards?",
        answer: "No. Rewards compound automatically with your delegation and increase future earnings. You only need to claim them when you want to spend or transfer them."
      },
      {
        question: "What should I look for in a stake pool?",
        answer: "Look for consistent block production, low fees, and high pledge (shows operator commitment). Check for a public website with clear information, evidence of good infrastructure, and ways to contact the operator. Ask the Cardano community for recommendations."
      },
      {
        question: "Are single pools better than multi-pool operators?",
        answer: "Single pool operators like Sandstone focus all resources on one pool and support network decentralization. Multi-pool operators often spread their pledge thin across many pools, which can reduce block allocation and lower delegator rewards. We maintain a substantial pledge as a single pool operator."
      },
      {
        question: "How are blocks allocated?",
        answer: "Pools with higher total stake (pledge + delegation) get more blocks. However, rewards are split among all delegators. A pool producing many blocks isn't necessarily more profitable per delegator—smaller pools with consistent production often deliver better returns."
      },
      {
        question: "Should I stake on an exchange?",
        answer: "No. Exchanges charge much higher fees (sometimes 20%+) and you don't control your funds (custodial staking). If the exchange is hacked or goes bankrupt, you could lose everything. Staking from your own wallet is safer and more profitable."
      },
      {
        question: "Where are you based?",
        answer: "Sandstone is an Australian owned and operated company (ACN {companyAcn})."
      },
      {
        question: "Do you pay taxes?",
        answer: "Yes. As an Australian registered company, we comply with all local laws and pay taxes as required by the Australian Tax Office (ATO) and Australian Securities and Investments Commission (ASIC)."
      }
    ],
  },
  footer: {
    resources: "Resources",
    information: "Information",
    socialLinks: "Social Links",
    contactUs: "Contact Us",
    privacyPolicy: "Privacy Policy",
    copyright: "© {year} {company}. All rights reserved.",
  },
} as const
