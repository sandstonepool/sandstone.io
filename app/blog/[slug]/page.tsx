import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { BlogPost } from '@/components/sections/BlogPost'
import { RelatedPosts } from '@/components/sections/RelatedPosts'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BlogPostJsonLd } from '@/components/seo/BlogPostJsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

const BASE_URL = 'https://sandstone.io'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const ogImage = post.featuredImage || '/images/og-default.png'
  const url = `${BASE_URL}/blog/${slug}`

  return {
    title: `${post.title} - Sandstone Stake Pool`,
    description: post.description,
    authors: [{ name: post.author.name, url: post.author.url }],
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.date,
      modifiedTime: post.lastUpdated || post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt || post.title,
        },
      ],
      siteName: 'Sandstone Stake Pool',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
      creator: '@sandstonepool',
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ]

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-indigo-50/30 to-purple-50/30 -z-10" />

      <BlogPostJsonLd post={post} url={`${BASE_URL}/blog/${slug}`} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <BlogPost post={post} />
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
      </div>
    </div>
  )
}
