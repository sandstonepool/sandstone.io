export const de = {
  common: {
    skipToContent: "Zum Hauptinhalt springen",
  },
  nav: {
    whySandstone: "Warum Sandstone?",
    gettingStarted: "Erste Schritte",
    security: "Sicherheit",
    faq: "Häufige Fragen",
  },
  hero: {
    badge: "✨ Vertraut von Delegatoren",
    title: "Mehr ADA Verdienen",
    subtitle: "Mit Vertrauen Staken",
    description: "Ein Pionier-Cardano-Stakepool, der seit den Anfängen des Netzwerks konsistente Belohnungen bietet.",
    stats: {
      marginFee: "Margengebühr",
      stake: "Stake",
      pledge: "Zusage",
      lifetimeBlocks: "Gesamt-Blöcke",
      lifetimeRewards: "Gesamt-Belohnungen",
      loading: "Lädt",
    },
    scroll: "Scrollen zum Erkunden",
  },
  whySandstone: {
    title: "Warum mit Sandstone staken?",
    intro1: "Wir betreiben seit den frühesten Tagen von Cardano einen zuverlässigen Stakepool. Unsere Infrastruktur ist für maximale Verfügbarkeit und konsistente Blockproduktion ausgelegt, was bessere Belohnungen für Sie bedeutet.",
    intro2: "Wir haben über {amount} in unsere Pool-Zusage und Infrastruktur investiert. Dieses Engagement zeigt unser langfristiges Engagement sowohl für unsere Delegatoren als auch für das Cardano-Netzwerk.",
    benefits: {
      security: {
        title: "Sicherheit",
        description: "Cloud-gehostete Infrastruktur, die rund um die Uhr überwacht wird, mit automatischem Failover über mehrere Rechenzentren. Unser fehlertolerantes Design gewährleistet maximale Verfügbarkeit und konsistente Belohnungen.",
      },
      community: {
        title: "Gemeinschaft",
        description: "Seit dem Incentivized Test Network (ITN) in der Cardano-Community aktiv. Wir haben durch Jahre zuverlässigen Betriebs und Community-Engagements einen soliden Ruf aufgebaut.",
      },
      strongPledge: {
        title: "Starke Zusage",
        description: "Unsere substanzielle Zusage zeigt echtes Engagement für den Erfolg des Pools. Wir sind langfristig investiert: Wenn Sie verdienen, verdienen wir.",
      },
      lowFees: {
        title: "Niedrige Gebühren",
        description: "Nur 1% Margengebühr (plus dem Netzwerkminimum von 170 ₳ pro Epoche). Mehr von Ihren Belohnungen bleiben in Ihrer Wallet.",
      },
    },
  },
  gettingStarted: {
    title: "Erste Schritte",
    steps: {
      step1: "Holen Sie sich eine Wallet. Wir empfehlen {lace} für seine klare Benutzeroberfläche und Staking-Funktionen.",
      step2: "Finden Sie uns. Suchen Sie nach {ticker} in der Stakepool-Liste Ihrer Wallet oder verwenden Sie unsere Pool-ID:{poolId}",
      step3: "Delegieren Sie Ihr ADA. Wählen Sie, wie viel Sie staken möchten und bestätigen Sie: Ihr ADA verlässt nie Ihre Wallet.",
      step4: "Beginnen Sie zu verdienen. Belohnungen kommen automatisch jede Epoche (ungefähr alle 5 Tage).",
    },
    poolId: "",
    copied: "In Zwischenablage kopiert",
  },
  security: {
    title: "Bleiben Sie Sicher",
    description: "Schützen Sie sich vor Betrug. Befolgen Sie diese wesentlichen Sicherheitsregeln.",
    rules: {
      rule1: "Teilen Sie niemals Ihre Seed-Phrase. Kein legitimer Stakepool wird Sie jemals danach fragen.",
      rule2: "Senden Sie niemals ADA zum Staken. Ihre Coins bleiben in Ihrer Wallet, wenn Sie delegieren.",
      rule3: "Bewegen Sie ADA von Börsen weg. Verwenden Sie eine nicht-verwahrlichte Wallet für volle Kontrolle und bessere Belohnungen.",
      rule4: "Laden Sie Wallets nur von offiziellen Quellen herunter.",
    },
  },
  faq: {
    title: "Häufig Gestellte Fragen",
    sidebarText: "Können Sie nicht finden, wonach Sie suchen? Wir sind hier, um zu helfen.",
    contactUs: "Kontaktieren Sie uns",
    items: [
      {
        question: "Ist Staking sicher?",
        answer: "Ja. Wenn Sie ADA staken, verlassen Ihre Token niemals Ihre Wallet: Sie behalten jederzeit die volle Kontrolle. Es gibt keine Sperrfrist, sodass Sie jederzeit auf Ihr ADA zugreifen oder es verschieben können."
      },
      {
        question: "Welche Infrastruktur verwenden Sie?",
        answer: "Wir laufen auf Amazon Web Services in der Region Asien-Pazifik mit mehreren Relay-Knoten, die über separate Rechenzentren verteilt sind. Unser Block-Produzent schaltet bei Bedarf automatisch zwischen Rechenzentren um, und wir können bei Bedarf innerhalb einer Stunde auf eine andere Region wiederherstellen."
      },
      {
        question: "Wann erhalte ich Belohnungen?",
        answer: "Ihre ersten Belohnungen kommen nach etwa 15-20 Tagen an, da Cardano Belohnungen berechnet (2-3 Epochen zurück). Danach erhalten Sie automatisch jede Epoche Belohnungen (alle 5 Tage)."
      },
      {
        question: "Muss ich Belohnungen einfordern?",
        answer: "Nein. Belohnungen werden automatisch mit Ihrer Delegation zusammengesetzt und erhöhen zukünftige Erträge. Sie müssen sie nur einfordern, wenn Sie sie ausgeben oder übertragen möchten."
      },
      {
        question: "Worauf sollte ich bei einem Stakepool achten?",
        answer: "Suchen Sie nach konsistenter Blockproduktion, niedrigen Gebühren und hoher Zusage (zeigt Engagement des Betreibers). Überprüfen Sie eine öffentliche Website mit klaren Informationen, Nachweis guter Infrastruktur und Kontaktmöglichkeiten zum Betreiber. Fragen Sie die Cardano-Community nach Empfehlungen."
      },
      {
        question: "Sind Einzel-Pools besser als Multi-Pool-Betreiber?",
        answer: "Einzel-Pool-Betreiber wie Sandstone konzentrieren alle Ressourcen auf einen Pool und unterstützen die Netzwerkdezentralisierung. Multi-Pool-Betreiber verteilen ihre Zusage oft dünn über viele Pools, was die Blockzuteilung reduzieren und die Belohnungen der Delegatoren senken kann. Wir halten eine substanzielle Zusage als Einzel-Pool-Betreiber."
      },
      {
        question: "Wie werden Blöcke zugeteilt?",
        answer: "Pools mit höherem Gesamtstake (Zusage + Delegation) erhalten mehr Blöcke. Die Belohnungen werden jedoch unter allen Delegatoren aufgeteilt. Ein Pool, der viele Blöcke produziert, ist nicht unbedingt profitabler pro Delegator: kleinere Pools mit konsistenter Produktion liefern oft bessere Renditen."
      },
      {
        question: "Sollte ich auf einer Börse staken?",
        answer: "Nein. Börsen verlangen viel höhere Gebühren (manchmal 20%+) und Sie kontrollieren Ihre Gelder nicht (verwahrtes Staking). Wenn die Börse gehackt wird oder bankrott geht, könnten Sie alles verlieren. Staking von Ihrer eigenen Wallet ist sicherer und profitabler."
      },
      {
        question: "Wo haben Sie Ihren Sitz?",
        answer: "Sandstone ist ein in australischem Besitz befindliches und betriebenes Unternehmen (ACN {companyAcn})."
      },
      {
        question: "Zahlen Sie Steuern?",
        answer: "Ja. Als in Australien registriertes Unternehmen halten wir uns an alle lokalen Gesetze und zahlen Steuern gemäß den Anforderungen des Australian Tax Office (ATO) und der Australian Securities and Investments Commission (ASIC)."
      }
    ],
  },
  footer: {
    resources: "Ressourcen",
    information: "Information",
    socialLinks: "Soziale Links",
    contactUs: "Kontaktieren Sie uns",
    privacyPolicy: "Datenschutzrichtlinie",
    copyright: "© {year} {company}. Alle Rechte vorbehalten.",
  },
} as const
