import { COMPANY_NAME, COMPANY_ACN, CONTACT_EMAIL, SOCIAL_LINKS } from '@/lib/utils/constants'

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    alternateName: 'Sandstone Stake Pool',
    url: 'https://sandstone.io',
    logo: 'https://sandstone.io/images/sandstone-logo.svg',
    description: 'A pioneer Cardano stake pool delivering consistent rewards since the early days of the network. Low fees, high pledge, and 24/7 monitored infrastructure.',
    email: CONTACT_EMAIL,
    sameAs: [
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.github
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressRegion: 'WA',
      postalCode: '6904',
      postOfficeBoxNumber: '2011',
      addressLocality: 'Subiaco'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_EMAIL,
      contactType: 'Customer Service',
      availableLanguage: ['en']
    },
    foundingDate: '2020',
    areaServed: 'Worldwide',
    serviceType: 'Cardano Blockchain Staking Services',
    knowsAbout: ['Cardano', 'Blockchain', 'Cryptocurrency', 'Proof of Stake', 'ADA Staking']
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
