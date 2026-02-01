import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogList } from '@/components/sections/BlogList'

export const metadata: Metadata = {
  title: 'Blog - Sandstone Stake Pool',
  description: 'News, updates, and insights from Sandstone Stake Pool on Cardano.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-indigo-50/30 to-purple-50/30 -z-10" />

      <div className="relative mx-auto max-w-7xl px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
          <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet. Check back soon!</p>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>
    </div>
  )
}
