export interface Author {
  name: string
  url?: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  lastUpdated?: string
  description: string
  content: string
  readingTime: number
  featuredImage?: string
  featuredImageAlt?: string
  tags?: string[]
  author: Author
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  lastUpdated?: string
  description: string
  readingTime: number
  featuredImage?: string
  featuredImageAlt?: string
  tags?: string[]
  author: Author
}
