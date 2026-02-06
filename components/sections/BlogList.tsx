'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { BlogPostMeta } from '@/lib/types/blog'

interface BlogListProps {
  posts: BlogPostMeta[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-6">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {post.title}
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">{post.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}
