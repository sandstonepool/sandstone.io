import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://sandstone.io'

export async function GET() {
  const posts = getAllPosts()

  const rssItems = posts
    .map(
      post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>noreply@sandstone.io (${post.author.name})</author>
      ${post.tags?.map(tag => `<category>${tag}</category>`).join('\n      ') || ''}
    </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Sandstone Stake Pool Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>News, updates, and insights from Sandstone Stake Pool on Cardano.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/images/logo.png</url>
      <title>Sandstone Stake Pool Blog</title>
      <link>${BASE_URL}/blog</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
