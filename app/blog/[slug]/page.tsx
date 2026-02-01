import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import { BlogPost } from '@/components/sections/BlogPost'

interface Props {
  params: Promise<{ slug: string }>
}

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

  return {
    title: `${post.title} - Sandstone Stake Pool`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-indigo-50/30 to-purple-50/30 -z-10" />

      <div className="relative mx-auto max-w-7xl px-8 py-16">
        <BlogPost post={post} />
      </div>
    </div>
  )
}
