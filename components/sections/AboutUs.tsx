'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

export function AboutUs() {
  return (
    <section id="about-us" className="relative mx-auto max-w-7xl mt-20 mb-20 px-8 py-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 via-blue-50/50 to-cyan-50/50 rounded-3xl -z-10" />

      <Container>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-8 hover:bg-white/50 hover:shadow-xl transition-all"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The team behind Sandstone have over 14 years professional experience designing, implementing, and delivering
              complex IT systems. We&apos;ve worked on some of the most sophisticated system architectures across a number of
              industries and have been involved with Cardano since 2017. We&apos;re confident we&apos;ll be able to provide maximum
              returns on your staked tokens.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sandstone is an exceptionally operated Stake Pool. We&apos;re committed to supporting Cardano&apos;s decentralisation
              and are actively building out solutions that run on the Cardano blockchain. We&apos;re determined to be recognised
              globally as the most professionally run, reliable, and trustworthy pools on the Cardano blockchain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-8 hover:bg-white/50 hover:shadow-xl transition-all"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Our mission is to provide the most reliable stake pool on the Cardano blockchain that consistently make blocks
              every epoch and delivers the best staking rewards possible for our delegators. Sandstone&apos;s architecture is
              incredibly sophisticated with no expense spared when it comes to ensuring the best security and reliability
              possible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We&apos;re committed to being a force for good in the world, pledging support to the causes we believe in, while
              providing our knowledge to enhance the wider Cardano ecosystem. We stand for a professional, reliable service,
              delivered with integrity.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
