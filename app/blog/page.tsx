import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { BlogList } from '@/components/sections/BlogList'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog - Sandstone Stake Pool',
  description: 'News, updates, and insights from Sandstone Stake Pool on Cardano.',
  alternates: {
    canonical: 'https://sandstone.io/blog',
    types: {
      'application/rss+xml': 'https://sandstone.io/feed.xml',
    },
  },
  openGraph: {
    title: 'Blog - Sandstone Stake Pool',
    description: 'News, updates, and insights from Sandstone Stake Pool on Cardano.',
    type: 'website',
    url: 'https://sandstone.io/blog',
    siteName: 'Sandstone Stake Pool',
  },
  twitter: {
    card: 'summary',
    title: 'Blog - Sandstone Stake Pool',
    description: 'News, updates, and insights from Sandstone Stake Pool on Cardano.',
    creator: '@sandstonepool',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog' },
  ]

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-indigo-50/30 to-purple-50/30 -z-10" />

      <div className="relative mx-auto max-w-7xl px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <Link
            href="/feed.xml"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
            target="_blank"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS Feed
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet. Check back soon!</p>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>
    </div>
  )
}
