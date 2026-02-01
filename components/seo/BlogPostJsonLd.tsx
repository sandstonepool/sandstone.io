import { BlogPost } from '@/lib/types/blog'

interface BlogPostJsonLdProps {
  post: BlogPost
  url: string
}

export function BlogPostJsonLd({ post, url }: BlogPostJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.featuredImage || 'https://sandstone.io/images/og-default.png',
    datePublished: post.date,
    dateModified: post.lastUpdated || post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sandstone Stake Pool',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sandstone.io/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
    keywords: post.tags?.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
