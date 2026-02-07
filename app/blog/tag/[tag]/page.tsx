import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllTags, getPostsByTag } from '@/lib/blog'
import { BlogList } from '@/components/sections/BlogList'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import Link from 'next/link'

interface Props {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map(tag => ({ tag: tag.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const allTags = getAllTags()
  const matchedTag = allTags.find(t => t.toLowerCase() === decodedTag.toLowerCase())

  if (!matchedTag) {
    return { title: 'Tag Not Found' }
  }

  return {
    title: `Posts tagged "${matchedTag}" - Sandstone Stake Pool`,
    description: `Browse all blog posts tagged with "${matchedTag}" from Sandstone Stake Pool.`,
    alternates: {
      canonical: `https://sandstone.io/blog/tag/${decodedTag}`,
    },
  }
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const allTags = getAllTags()
  const matchedTag = allTags.find(t => t.toLowerCase() === decodedTag.toLowerCase())

  if (!matchedTag) {
    notFound()
  }

  const posts = getPostsByTag(matchedTag)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: matchedTag },
  ]

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-indigo-50/30 to-purple-50/30 -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              All posts
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {matchedTag}
              </span>
            </h1>
            <p className="text-gray-600 mt-2">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} tagged with "{matchedTag}"
            </p>
          </div>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts found with this tag.</p>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>
    </div>
  )
}
