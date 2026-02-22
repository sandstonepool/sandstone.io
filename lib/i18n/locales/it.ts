export const it = {
  common: {
    skipToContent: "Salta al contenuto principale",
  },
  nav: {
    whySandstone: "Perché Sandstone?",
    gettingStarted: "Iniziare",
    security: "Sicurezza",
    faq: "Domande Frequenti",
    stakePool: "Stake Pool",
    blog: "Blog",
  },
  hero: {
    badge: "✨ Fidato dai Delegatori",
    rotatingPhrases: ["Guadagna Più ADA", "Delega con Fiducia", "Delega & Guadagna"],
    staticLine: "con Sandstone",
    description: "Una pool di staking pioniera di Cardano che offre ricompense costanti fin dai primi giorni della rete.",
    stats: {
      marginFee: "Commissione di Margine",
      stake: "Stake",
      pledge: "Impegno",
      lifetimeBlocks: "Blocchi Totali",
      lifetimeRewards: "Ricompense Totali",
      loading: "Caricamento",
    },
    delegateButton: "Delega a [SAND]",
    scroll: "Scorri per esplorare",
  },
  whySandstone: {
    title: "Perché delegare con Sandstone?",
    intro1: "Gestiamo una pool affidabile fin dai primi giorni di Cardano. La nostra infrastruttura è progettata per il massimo tempo di attività e produzione di blocchi costante, il che significa ricompense migliori per te.",
    intro2: "Abbiamo investito oltre {amount} nel nostro impegno di pool e infrastruttura. Questo impegno dimostra la nostra dedizione a lungo termine sia ai nostri delegatori che alla rete Cardano.",
    benefits: {
      security: {
        title: "Sicurezza",
        description: "Infrastruttura ospitata nel cloud monitorata 24/7 con failover automatico tra più data center. Il nostro design tollerante ai guasti garantisce il massimo tempo di attività e ricompense costanti.",
      },
      community: {
        title: "Comunità",
        description: "Attivo nella comunità Cardano fin dalla Incentivized Test Network (ITN). Abbiamo costruito una solida reputazione attraverso anni di funzionamento affidabile e coinvolgimento della comunità.",
      },
      strongPledge: {
        title: "Impegno Forte",
        description: "Il nostro impegno sostanziale dimostra un vero impegno per il successo della pool. Siamo investiti a lungo termine: quando tu guadagni, noi guadagniamo.",
      },
      lowFees: {
        title: "Commissioni Basse",
        description: "Solo 1% di commissione di margine (più il minimo di rete di 170 ₳ per epoca). Più delle tue ricompense rimangono nel tuo portafoglio.",
      },
    },
  },
  gettingStarted: {
    title: "Iniziare",
    steps: {
      step1: "Ottieni un portafoglio. Raccomandiamo {lace} per la sua interfaccia pulita e funzionalità di staking.",
      step2: "Trovaci. Cerca {ticker} nella lista delle pool del tuo portafoglio, o usa il nostro ID della Pool:{poolId}",
      step3: "Delega il tuo ADA. Scegli quanto delegare e conferma: il tuo ADA non lascia mai il tuo portafoglio.",
      step4: "Inizia a guadagnare. Le ricompense arrivano automaticamente ogni epoca (circa ogni 5 giorni).",
    },
    copied: "Copiato negli Appunti",
  },
  security: {
    title: "Rimani al Sicuro",
    description: "Proteggiti dalle truffe. Segui queste regole di sicurezza essenziali.",
    rules: {
      rule1: "Non condividere mai la tua frase seme. Nessuna pool legittima te la chiederà mai.",
      rule2: "Non inviare mai ADA per delegare. Le tue monete rimangono nel tuo portafoglio quando deleghi.",
      rule3: "Sposta ADA dagli exchange. Usa un portafoglio non custodial per il pieno controllo e ricompense migliori.",
      rule4: "Scarica solo portafogli da fonti ufficiali.",
    },
  },
  faq: {
    title: "Domande Frequenti",
    sidebarText: "Non trovi quello che cerchi? Siamo qui per aiutarti.",
    contactUs: "Contattaci",
    items: [
      {
        question: "Lo staking è sicuro?",
        answer: "Sì. Quando deleghi ADA, i tuoi token non lasciano mai il tuo portafoglio: mantieni la custodia completa in ogni momento. Non c\'è periodo di blocco, quindi puoi accedere o spostare il tuo ADA quando vuoi."
      },
      {
        question: "Quale infrastruttura utilizzate?",
        answer: "Operiamo su Amazon Web Services nella regione Asia-Pacifico con più nodi relay distribuiti su data center separati. Il nostro produttore di blocchi passa automaticamente tra i data center se necessario, e possiamo ripristinare in un\'altra regione entro un\'ora se necessario."
      },
      {
        question: "Quando riceverò le ricompense?",
        answer: "Le tue prime ricompense arrivano dopo circa 15-20 giorni a causa di come Cardano calcola le ricompense (2-3 epoche indietro). Dopo di che, riceverai ricompense automaticamente ogni epoca (ogni 5 giorni)."
      },
      {
        question: "Devo richiedere le ricompense?",
        answer: "No. Le ricompense si compongono automaticamente con la tua delegazione e aumentano i guadagni futuri. Devi richiedere solo quando vuoi spenderle o trasferirle."
      },
      {
        question: "Cosa dovrei cercare in una pool di staking?",
        answer: "Cerca produzione di blocchi costante, commissioni basse e impegno elevato (mostra l\'impegno dell\'operatore). Verifica un sito web pubblico con informazioni chiare, evidenza di buona infrastruttura e modi per contattare l\'operatore. Chiedi raccomandazioni alla comunità Cardano."
      },
      {
        question: "Le pool singole sono migliori degli operatori multi-pool?",
        answer: "Gli operatori di pool singole come Sandstone concentrano tutte le risorse su una pool e supportano la decentralizzazione della rete. Gli operatori multi-pool spesso distribuiscono il loro impegno su molte pool, il che può ridurre l\'allocazione dei blocchi e diminuire le ricompense dei delegatori. Manteniamo un impegno sostanziale come operatore di pool singola."
      },
      {
        question: "Come vengono allocati i blocchi?",
        answer: "Le pool con stake totale più alto (impegno + delegazione) ottengono più blocchi. Tuttavia, le ricompense sono divise tra tutti i delegatori. Una pool che produce molti blocchi non è necessariamente più redditizia per delegatore: le pool più piccole con produzione costante spesso offrono rendimenti migliori."
      },
      {
        question: "Dovrei delegare su un exchange?",
        answer: "No. Gli exchange applicano commissioni molto più alte (a volte 20%+) e non controlli i tuoi fondi (staking custodial). Se l\'exchange viene hackerato o fallisce, potresti perdere tutto. Delegare dal tuo portafoglio è più sicuro e più redditizio."
      },
      {
        question: "Dove avete sede?",
        answer: "Sandstone è un\'azienda australiana di proprietà e gestione (ACN {companyAcn})."
      },
      {
        question: "Pagate le tasse?",
        answer: "Sì. Come azienda registrata in Australia, rispettiamo tutte le leggi locali e paghiamo le tasse come richiesto dall\'Australian Tax Office (ATO) e dall\'Australian Securities and Investments Commission (ASIC)."
      }
    ],
  },
  footer: {
    resources: "Risorse",
    information: "Informazioni",
    socialLinks: "Link Sociali",
    contactUs: "Contattaci",
    privacyPolicy: "Informativa sulla Privacy",
    copyright: "© {year} {company}. Tutti i diritti riservati.",
  },
} as const
