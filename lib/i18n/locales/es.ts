export const es = {
  common: {
    skipToContent: "Saltar al contenido principal",
  },
  nav: {
    whySandstone: "¿Por qué Sandstone?",
    gettingStarted: "Comenzar",
    security: "Seguridad",
    faq: "Preguntas Frecuentes",
    blog: "Blog",
  },
  hero: {
    badge: "✨ Confiado por Delegadores",
    title: "Gana Más ADA",
    subtitle: "Delega con Confianza",
    description: "Un pool de participación pionero de Cardano que ofrece recompensas consistentes desde los primeros días de la red.",
    stats: {
      marginFee: "Tarifa de Margen",
      stake: "Participación",
      pledge: "Compromiso",
      lifetimeBlocks: "Bloques Totales",
      lifetimeRewards: "Recompensas Totales",
      loading: "Cargando",
    },
    scroll: "Desplázate para explorar",
  },
  whySandstone: {
    title: "¿Por qué delegar con Sandstone?",
    intro1: "Hemos estado operando un pool confiable desde los primeros días de Cardano. Nuestra infraestructura está diseñada para el máximo tiempo de actividad y producción de bloques consistente, lo que significa mejores recompensas para ti.",
    intro2: "Hemos invertido más de {amount} en nuestro compromiso de pool e infraestructura. Este compromiso demuestra nuestra dedicación a largo plazo tanto a nuestros delegadores como a la red Cardano.",
    benefits: {
      security: {
        title: "Seguridad",
        description: "Infraestructura alojada en la nube monitoreada 24/7 con conmutación automática por error entre múltiples centros de datos. Nuestro diseño tolerante a fallos garantiza el máximo tiempo de actividad y recompensas consistentes.",
      },
      community: {
        title: "Comunidad",
        description: "Activo en la comunidad de Cardano desde la Red de Prueba Incentivada (ITN). Hemos construido una sólida reputación a través de años de operación confiable y compromiso comunitario.",
      },
      strongPledge: {
        title: "Compromiso Sólido",
        description: "Nuestro compromiso sustancial demuestra un verdadero compromiso con el éxito del pool. Estamos invertidos a largo plazo: cuando tú ganas, nosotros ganamos.",
      },
      lowFees: {
        title: "Tarifas Bajas",
        description: "Solo 1% de tarifa de margen (más el mínimo de red de 170 ₳ por época). Más de tus recompensas permanecen en tu billetera.",
      },
    },
  },
  gettingStarted: {
    title: "Comenzar",
    steps: {
      step1: "Obtén una billetera. Recomendamos {lace} por su interfaz limpia y características de participación.",
      step2: "Encuéntranos. Busca {ticker} en la lista de pools de tu billetera, o usa nuestro ID del Pool:{poolId}",
      step3: "Delega tu ADA. Elige cuánto delegar y confirma: tu ADA nunca sale de tu billetera.",
      step4: "Comienza a ganar. Las recompensas llegan automáticamente cada época (aproximadamente cada 5 días).",
    },
    copied: "Copiado al Portapapeles",
  },
  security: {
    title: "Mantente Seguro",
    description: "Protégete de las estafas. Sigue estas reglas de seguridad esenciales.",
    rules: {
      rule1: "Nunca compartas tu frase semilla. Ningún pool legítimo te la pedirá.",
      rule2: "Nunca envíes ADA para delegar. Tus monedas permanecen en tu billetera cuando delegas.",
      rule3: "Saca tu ADA de los exchanges. Usa una billetera sin custodia para control total y mejores recompensas.",
      rule4: "Solo descarga billeteras de fuentes oficiales.",
    },
  },
  faq: {
    title: "Preguntas Frecuentes",
    sidebarText: "¿No encuentras lo que buscas? Estamos aquí para ayudar.",
    contactUs: "Contáctanos",
    items: [
      {
        question: "¿Es seguro delegar?",
        answer: "Sí. Cuando delegas ADA, tus tokens nunca salen de tu billetera: mantienes la custodia completa en todo momento. No hay período de bloqueo, por lo que puedes acceder o mover tu ADA cuando quieras."
      },
      {
        question: "¿Qué infraestructura utilizan?",
        answer: "Operamos en Amazon Web Services en la región de Asia Pacífico con múltiples nodos de retransmisión distribuidos en centros de datos separados. Nuestro productor de bloques falla automáticamente entre centros de datos si es necesario, y podemos recuperarnos a otra región en una hora si es necesario."
      },
      {
        question: "¿Cuándo recibiré recompensas?",
        answer: "Tus primeras recompensas llegan después de aproximadamente 15-20 días debido a cómo Cardano calcula las recompensas (2-3 épocas atrás). Después de eso, recibirás recompensas automáticamente cada época (cada 5 días)."
      },
      {
        question: "¿Necesito reclamar las recompensas?",
        answer: "No. Las recompensas se componen automáticamente con tu delegación y aumentan las ganancias futuras. Solo necesitas reclamarlas cuando quieras gastarlas o transferirlas."
      },
      {
        question: "¿Qué debo buscar en un pool de participación?",
        answer: "Busca producción de bloques consistente, tarifas bajas y compromiso alto (muestra el compromiso del operador). Verifica que haya un sitio web público con información clara, evidencia de buena infraestructura y formas de contactar al operador. Pregunta a la comunidad de Cardano por recomendaciones."
      },
      {
        question: "¿Son mejores los pools individuales que los operadores de múltiples pools?",
        answer: "Los operadores de pools individuales como Sandstone concentran todos los recursos en un pool y apoyan la descentralización de la red. Los operadores de múltiples pools a menudo distribuyen su compromiso entre muchos pools, lo que puede reducir la asignación de bloques y disminuir las recompensas de los delegadores. Mantenemos un compromiso sustancial como operador de pool individual."
      },
      {
        question: "¿Cómo se asignan los bloques?",
        answer: "Los pools con mayor participación total (compromiso + delegación) obtienen más bloques. Sin embargo, las recompensas se dividen entre todos los delegadores. Un pool que produce muchos bloques no es necesariamente más rentable por delegador: los pools más pequeños con producción consistente a menudo ofrecen mejores rendimientos."
      },
      {
        question: "¿Debería delegar en un exchange?",
        answer: "No. Los exchanges cobran tarifas mucho más altas (a veces 20%+) y no controlas tus fondos (delegación custodial). Si el exchange es hackeado o quiebra, podrías perderlo todo. Delegar desde tu propia billetera es más seguro y más rentable."
      },
      {
        question: "¿Dónde están ubicados?",
        answer: "Sandstone es una empresa australiana de propiedad y operación (ACN {companyAcn})."
      },
      {
        question: "¿Pagan impuestos?",
        answer: "Sí. Como empresa registrada en Australia, cumplimos con todas las leyes locales y pagamos impuestos según lo requerido por la Oficina de Impuestos de Australia (ATO) y la Comisión Australiana de Valores e Inversiones (ASIC)."
      }
    ],
  },
  footer: {
    resources: "Recursos",
    information: "Información",
    socialLinks: "Enlaces Sociales",
    contactUs: "Contáctanos",
    privacyPolicy: "Política de Privacidad",
    copyright: "© {year} {company}. Todos los derechos reservados.",
  },
} as const
