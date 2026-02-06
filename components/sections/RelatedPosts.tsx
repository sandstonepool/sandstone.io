'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { BlogPostMeta } from '@/lib/types/blog'

interface RelatedPostsProps {
  posts: BlogPostMeta[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">
        <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Related Posts
        </span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2">
                  <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {post.title}
                  </span>
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {post.description}
                </p>
                <div className="text-xs text-gray-500">
                  {post.readingTime} min read
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
