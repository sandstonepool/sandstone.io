import { Hero } from '@/components/sections/Hero'
import { WhySandstone } from '@/components/sections/WhySandstone'
import { GettingStarted } from '@/components/sections/GettingStarted'
import { Security } from '@/components/sections/Security'
import { FAQ } from '@/components/sections/FAQ'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <WhySandstone />
      <GettingStarted />
      <Security />
      <FAQ />
    </div>
  )
}
