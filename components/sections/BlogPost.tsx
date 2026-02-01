import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { BlogPost as BlogPostType } from '@/lib/types/blog'

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
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
        Back to blog
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {post.title}
          </span>
        </h1>
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
      </header>

      <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-8 sm:p-12 shadow-lg prose prose-lg prose-gray max-w-none prose-blog
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-li:text-gray-700
        prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8 prose-pre:overflow-x-auto
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
        prose-hr:my-12 prose-hr:border-gray-200
      ">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
