import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Growth() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Subtle arrow guide */}
      <motion.div 
        className="absolute bottom-10 right-10"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-center text-white">
            Paid acquisition,<br/>not viral gambling
          </h2>

          {/* What's working */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">What's working (0 → 250):</h3>
            <p className="text-xl text-gray-300">42% referrals, 85% retention</p>
          </motion.div>

          {/* How we scale */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8">How we scale (250 → 50K):</h3>
            
            <div className="space-y-6">
              {[
                { pct: '60%', channel: 'Paid ads', cac: '$18-25 CAC', desc: 'Facebook/Instagram → diaspora, Google → "dollar account Nigeria"' },
                { pct: '30%', channel: 'Content + influencers', cac: '$5-10 CAC', desc: 'SEO, micro-influencers' },
                { pct: '10%', channel: 'Referrals', cac: '$0 CAC', desc: 'Built-in, free P2P amplifies' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.15 }}
                  className="flex items-start gap-6 border border-gray-800 p-6"
                >
                  <div className="text-4xl font-black text-white min-w-[4rem]">{item.pct}</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2">{item.channel}</h4>
                    <p className="text-lg text-gray-400 mb-2">{item.cac}</p>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="border-t border-gray-800 pt-8 space-y-4"
          >
            <div className="flex justify-between items-center text-xl">
              <span className="text-gray-400">Blended CAC:</span>
              <span className="text-white font-bold text-2xl">$15-20</span>
            </div>
            <div className="flex justify-between items-center text-xl">
              <span className="text-gray-400">Budget:</span>
              <span className="text-white font-bold text-2xl">$300K over 18 months</span>
            </div>
            <p className="text-center text-xl text-gray-400 pt-6">
              Standard fintech playbook. Our edge is product (yields + cards), not GTM.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
