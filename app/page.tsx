import { Hero } from '@/components/sections/Hero'
import { WhySandstone } from '@/components/sections/WhySandstone'
import { GettingStarted } from '@/components/sections/GettingStarted'
import { Security } from '@/components/sections/Security'
import { FAQ } from '@/components/sections/FAQ'
import { LatestBlogPost } from '@/components/sections/LatestBlogPost'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const latestPost = getAllPosts()[0]

  return (
    <div className="relative min-h-screen">
      <Hero />
      <WhySandstone />
      <GettingStarted />
      <Security />
      <FAQ />
      {latestPost && <LatestBlogPost post={latestPost} />}
    </div>
  )
}
