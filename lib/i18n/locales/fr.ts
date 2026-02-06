export const fr = {
  common: {
    skipToContent: "Aller au contenu principal",
  },
  nav: {
    whySandstone: "Pourquoi Sandstone?",
    gettingStarted: "Commencer",
    security: "Sécurité",
    faq: "FAQ",
  },
  hero: {
    badge: "✨ Approuvé par les Délégateurs",
    title: "Gagnez Plus d\'ADA",
    subtitle: "Déléguez en Confiance",
    description: "Une pool de staking pionnière Cardano offrant des récompenses cohérentes depuis les débuts du réseau.",
    stats: {
      marginFee: "Frais de Marge",
      stake: "Mise",
      pledge: "Engagement",
      lifetimeBlocks: "Blocs Totaux",
      lifetimeRewards: "Récompenses Totales",
      loading: "Chargement",
    },
    scroll: "Faites défiler pour explorer",
  },
  whySandstone: {
    title: "Pourquoi déléguer avec Sandstone?",
    intro1: "Nous gérons une pool fiable depuis les premiers jours de Cardano. Notre infrastructure est conçue pour un temps de disponibilité maximal et une production de blocs cohérente, ce qui signifie de meilleures récompenses pour vous.",
    intro2: "Nous avons investi plus de {amount} dans notre engagement de pool et notre infrastructure. Cet engagement démontre notre dévouement à long terme envers nos délégateurs et le réseau Cardano.",
    benefits: {
      security: {
        title: "Sécurité",
        description: "Infrastructure hébergée dans le cloud surveillée 24h/24 et 7j/7 avec basculement automatique entre plusieurs centres de données. Notre conception tolérante aux pannes garantit un temps de disponibilité maximal et des récompenses cohérentes.",
      },
      community: {
        title: "Communauté",
        description: "Actif dans la communauté Cardano depuis le Réseau de Test Incitatif (ITN). Nous avons construit une solide réputation grâce à des années de fonctionnement fiable et d\'engagement communautaire.",
      },
      strongPledge: {
        title: "Engagement Fort",
        description: "Notre engagement substantiel démontre un véritable engagement envers le succès de la pool. Nous sommes investis à long terme : quand vous gagnez, nous gagnons.",
      },
      lowFees: {
        title: "Frais Bas",
        description: "Seulement 1% de frais de marge (plus le minimum réseau de 170 ₳ par époque). Plus de vos récompenses restent dans votre portefeuille.",
      },
    },
  },
  gettingStarted: {
    title: "Commencer",
    steps: {
      step1: "Obtenez un portefeuille. Nous recommandons {lace} pour son interface épurée et ses fonctionnalités de staking.",
      step2: "Trouvez-nous. Recherchez {ticker} dans la liste des pools de votre portefeuille, ou utilisez notre ID de Pool:{poolId}",
      step3: "Déléguez votre ADA. Choisissez combien déléguer et confirmez : votre ADA ne quitte jamais votre portefeuille.",
      step4: "Commencez à gagner. Les récompenses arrivent automatiquement à chaque époque (environ tous les 5 jours).",
    },
    poolId: "",
    copied: "Copié dans le Presse-papiers",
  },
  security: {
    title: "Restez en Sécurité",
    description: "Protégez-vous des arnaques. Suivez ces règles de sécurité essentielles.",
    rules: {
      rule1: "Ne partagez jamais votre phrase de récupération. Aucune pool légitime ne vous la demandera.",
      rule2: "N\'envoyez jamais d\'ADA pour déléguer. Vos pièces restent dans votre portefeuille lorsque vous déléguez.",
      rule3: "Retirez votre ADA des exchanges. Utilisez un portefeuille non-custodial pour un contrôle total et de meilleures récompenses.",
      rule4: "Téléchargez uniquement des portefeuilles depuis des sources officielles.",
    },
  },
  faq: {
    title: "Questions Fréquemment Posées",
    sidebarText: "Vous ne trouvez pas ce que vous cherchez? Nous sommes là pour vous aider.",
    contactUs: "Contactez-nous",
    items: [
      {
        question: "Le staking est-il sûr?",
        answer: "Oui. Lorsque vous déléguez de l\'ADA, vos tokens ne quittent jamais votre portefeuille : vous conservez la garde complète à tout moment. Il n\'y a pas de période de verrouillage, vous pouvez donc accéder ou déplacer votre ADA quand vous le souhaitez."
      },
      {
        question: "Quelle infrastructure utilisez-vous?",
        answer: "Nous fonctionnons sur Amazon Web Services dans la région Asie-Pacifique avec plusieurs nœuds relais répartis sur des centres de données séparés. Notre producteur de blocs bascule automatiquement entre les centres de données si nécessaire, et nous pouvons récupérer vers une autre région en une heure si nécessaire."
      },
      {
        question: "Quand recevrai-je des récompenses?",
        answer: "Vos premières récompenses arrivent après environ 15-20 jours en raison de la façon dont Cardano calcule les récompenses (2-3 époques en arrière). Après cela, vous recevrez des récompenses automatiquement à chaque époque (tous les 5 jours)."
      },
      {
        question: "Dois-je réclamer les récompenses?",
        answer: "Non. Les récompenses se composent automatiquement avec votre délégation et augmentent les gains futurs. Vous n\'avez besoin de les réclamer que lorsque vous souhaitez les dépenser ou les transférer."
      },
      {
        question: "Que dois-je rechercher dans une pool de staking?",
        answer: "Recherchez une production de blocs cohérente, des frais bas et un engagement élevé (montre l\'engagement de l\'opérateur). Vérifiez qu\'il y a un site web public avec des informations claires, des preuves de bonne infrastructure et des moyens de contacter l\'opérateur. Demandez des recommandations à la communauté Cardano."
      },
      {
        question: "Les pools individuelles sont-elles meilleures que les opérateurs multi-pools?",
        answer: "Les opérateurs de pools individuelles comme Sandstone concentrent toutes les ressources sur une seule pool et soutiennent la décentralisation du réseau. Les opérateurs multi-pools répartissent souvent leur engagement sur de nombreuses pools, ce qui peut réduire l\'allocation de blocs et diminuer les récompenses des délégateurs. Nous maintenons un engagement substantiel en tant qu\'opérateur de pool individuelle."
      },
      {
        question: "Comment les blocs sont-ils alloués?",
        answer: "Les pools avec une mise totale plus élevée (engagement + délégation) obtiennent plus de blocs. Cependant, les récompenses sont réparties entre tous les délégateurs. Une pool produisant de nombreux blocs n\'est pas nécessairement plus rentable par délégateur : les pools plus petites avec une production cohérente offrent souvent de meilleurs rendements."
      },
      {
        question: "Dois-je déléguer sur un exchange?",
        answer: "Non. Les exchanges facturent des frais beaucoup plus élevés (parfois 20%+) et vous ne contrôlez pas vos fonds (staking custodial). Si l\'exchange est piraté ou fait faillite, vous pourriez tout perdre. Déléguer depuis votre propre portefeuille est plus sûr et plus rentable."
      },
      {
        question: "Où êtes-vous basés?",
        answer: "Sandstone est une entreprise australienne détenue et exploitée (ACN {companyAcn})."
      },
      {
        question: "Payez-vous des impôts?",
        answer: "Oui. En tant qu\'entreprise enregistrée en Australie, nous respectons toutes les lois locales et payons des impôts conformément aux exigences de l\'Australian Tax Office (ATO) et de l\'Australian Securities and Investments Commission (ASIC)."
      }
    ],
  },
  footer: {
    resources: "Ressources",
    information: "Information",
    socialLinks: "Liens Sociaux",
    contactUs: "Contactez-nous",
    privacyPolicy: "Politique de Confidentialité",
    copyright: "© {year} {company}. Tous droits réservés.",
  },
} as const
