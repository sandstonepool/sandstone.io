import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, BlogPostMeta, Author } from './types/blog'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

const DEFAULT_AUTHOR: Author = {
  name: 'Sandstone Team',
  url: 'https://x.com/sandstonepool',
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'))

  const posts = files.map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const filePath = path.join(BLOG_DIR, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      lastUpdated: data.lastUpdated,
      description: data.description || '',
      readingTime: calculateReadingTime(content),
      featuredImage: data.featuredImage,
      featuredImageAlt: data.featuredImageAlt,
      tags: data.tags || [],
      author: data.author || DEFAULT_AUTHOR,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    lastUpdated: data.lastUpdated,
    description: data.description || '',
    content,
    readingTime: calculateReadingTime(content),
    featuredImage: data.featuredImage,
    featuredImageAlt: data.featuredImageAlt,
    tags: data.tags || [],
    author: data.author || DEFAULT_AUTHOR,
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagsSet = new Set<string>()
  posts.forEach(post => {
    post.tags?.forEach(tag => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post => post.tags?.includes(tag))
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPostMeta[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost || !currentPost.tags?.length) {
    return getAllPosts().filter(p => p.slug !== currentSlug).slice(0, limit)
  }

  const allPosts = getAllPosts().filter(p => p.slug !== currentSlug)

  const scoredPosts = allPosts.map(post => {
    const sharedTags = post.tags?.filter(tag => currentPost.tags?.includes(tag)).length || 0
    return { post, score: sharedTags }
  })

  scoredPosts.sort((a, b) => b.score - a.score)
  return scoredPosts.slice(0, limit).map(sp => sp.post)
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  return fs.readdirSync(BLOG_DIR)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}
