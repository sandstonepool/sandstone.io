import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { BlogPost as BlogPostType } from '@/lib/types/blog'
import { ReadingProgress } from '@/components/ui/ReadingProgress'
import { ShareButtons } from '@/components/ui/ShareButtons'
import { TweetCard } from '@/components/ui/TweetCard'

interface BlogPostProps {
  post: BlogPostType
}

const mdxComponents = {
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http') || href?.startsWith('//')
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    }
    return <a href={href} {...props}>{children}</a>
  },
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string'
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : ''
    return <h2 id={id} {...props}>{children}</h2>
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string'
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : ''
    return <h3 id={id} {...props}>{children}</h3>
  },
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string'
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : ''
    return <h4 id={id} {...props}>{children}</h4>
  },
  TweetCard,
}

export function BlogPost({ post }: BlogPostProps) {
  const postUrl = `https://sandstone.io/blog/${post.slug}`

  return (
    <article>
      <ReadingProgress />

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

      {post.featuredImage && (
        <div className="relative w-full h-64 sm:h-96 mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <header className="mb-8">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {post.title}
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <span>By</span>
            {post.author.url ? (
              <a
                href={post.author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {post.author.name}
              </a>
            ) : (
              <span className="font-medium text-gray-700">{post.author.name}</span>
            )}
          </div>
          <span className="hidden sm:inline">•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.lastUpdated && post.lastUpdated !== post.date && (
            <>
              <span className="hidden sm:inline">•</span>
              <span className="text-gray-400">
                Updated{' '}
                {new Date(post.lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </>
          )}
          <span className="hidden sm:inline">•</span>
          <span>{post.readingTime} min read</span>
        </div>

        <ShareButtons url={postUrl} title={post.title} description={post.description} />
      </header>

      <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 sm:p-8 md:p-12 shadow-lg prose prose-lg prose-gray max-w-none prose-blog
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-li:text-gray-700
        prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8 prose-pre:overflow-x-auto
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
        prose-hr:my-12 prose-hr:border-gray-200
      ">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <ShareButtons url={postUrl} title={post.title} description={post.description} />
      </div>
    </article>
  )
}
