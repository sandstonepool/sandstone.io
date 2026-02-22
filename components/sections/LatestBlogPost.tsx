'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { BlogPostMeta } from '@/lib/types/blog'
import { ArrowRightIcon, ClockIcon } from '@heroicons/react/24/outline'

export function LatestBlogPost({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section className="relative mx-auto max-w-7xl mt-12 sm:mt-20 mb-12 sm:mb-20 px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="absolute inset-0 bg-linear-to-br from-amber-50/50 via-orange-50/50 to-rose-50/50 rounded-3xl -z-10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 sm:mb-8">
            <span className="bg-linear-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              Latest from the Blog
            </span>
          </h2>

          <Link href={`/blog/${post.slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-5 sm:p-8 hover:bg-white/50 hover:shadow-xl transition-all sm:hover:scale-[1.01] group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <time dateTime={post.date}>{formattedDate}</time>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {post.readingTime} min read
                    </span>
                    {post.tags?.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-orange-100/80 text-orange-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 self-center">
                  <span className="inline-flex items-center gap-1 text-orange-600 font-semibold group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
