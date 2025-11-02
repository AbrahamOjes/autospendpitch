import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function UnitEconomics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black relative">
      {/* Subtle arrow guide */}
      <motion.div 
        className="absolute bottom-10 left-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-white">
            $177/user with cards
          </h2>

          {/* Pre-cards vs With cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Pre-cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="border border-gray-800 p-8"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Pre-cards (now):</h3>
              <div className="space-y-4 text-xl text-gray-300">
                <div className="flex justify-between">
                  <span>FX spread:</span>
                  <span className="text-white font-semibold">$48/year</span>
                </div>
                <div className="flex justify-between">
                  <span>DeFi yield margin:</span>
                  <span className="text-white font-semibold">$57/year</span>
                </div>
                <div className="text-sm text-gray-500">(7% APY midpoint)</div>
                <div className="border-t border-gray-700 pt-4 flex justify-between text-2xl font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-white">$105/year</span>
                </div>
              </div>
            </motion.div>

            {/* With cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="border-2 border-green-500 bg-green-500/5 p-8"
            >
              <h3 className="text-3xl font-bold text-green-500 mb-6">With cards (Q1 2026):</h3>
              <div className="space-y-4 text-xl text-gray-300">
                <div className="flex justify-between">
                  <span>FX spread:</span>
                  <span className="text-white font-semibold">$48/year</span>
                </div>
                <div className="flex justify-between">
                  <span>DeFi yield margin:</span>
                  <span className="text-white font-semibold">$57/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-500">Card interchange:</span>
                  <span className="text-green-500 font-semibold">$72/year</span>
                </div>
                <div className="border-t border-green-700 pt-4 flex justify-between text-2xl font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-green-500">$177/year</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Economics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Economics:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-xl">
              <div className="text-center">
                <div className="text-gray-400 mb-2">CAC</div>
                <div className="text-3xl font-bold text-white">$15-20</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 mb-2">LTV (3yr)</div>
                <div className="text-3xl font-bold text-white">$531</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 mb-2">LTV/CAC</div>
                <div className="text-4xl font-bold text-green-500">27:1</div>
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-3 gap-6 text-center text-xl"
          >
            <div>
              <div className="text-gray-400 mb-2">Break-even:</div>
              <div className="text-white font-semibold">5K users (Month 6 post-cards)</div>
            </div>
            <div>
              <div className="text-gray-400 mb-2">Target:</div>
              <div className="text-white font-semibold">50K users</div>
            </div>
            <div>
              <div className="text-gray-400 mb-2">ARR at 50K:</div>
              <div className="text-green-500 font-bold text-2xl">$8.8M</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
