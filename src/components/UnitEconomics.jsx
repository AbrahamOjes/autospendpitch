import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function UnitEconomics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6 relative" style={{ backgroundColor: '#0F0E0E' }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Anton',sans-serif] mb-20 text-center text-white uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
            $177/user with cards
          </h2>

          {/* Pre-cards vs With cards */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Pre-cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="border border-gray-800 p-10 rounded-[32px]"
            >
              <h3 className="text-3xl font-bold text-white mb-8">Pre-cards (now):</h3>
              <div className="space-y-5 text-xl text-gray-300">
                <div className="flex justify-between">
                  <span>FX spread:</span>
                  <span className="text-white font-semibold">$48/year</span>
                </div>
                <div className="flex justify-between">
                  <span>DeFi yield margin:</span>
                  <span className="text-white font-semibold">$57/year</span>
                </div>
                <div className="text-sm text-gray-500">(7% APY midpoint)</div>
                <div className="border-t border-gray-700 pt-5 flex justify-between text-2xl font-bold">
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
              className="border-2 p-10 rounded-[32px]"
              style={{ borderColor: '#6080DB', backgroundColor: 'rgba(96, 128, 219, 0.05)' }}
            >
              <h3 className="text-3xl font-bold mb-8" style={{ color: '#6080DB' }}>With cards (Q1 2026):</h3>
              <div className="space-y-5 text-xl text-gray-300">
                <div className="flex justify-between">
                  <span>FX spread:</span>
                  <span className="text-white font-semibold">$48/year</span>
                </div>
                <div className="flex justify-between">
                  <span>DeFi yield margin:</span>
                  <span className="text-white font-semibold">$57/year</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#6080DB' }}>Card interchange:</span>
                  <span className="font-semibold" style={{ color: '#6080DB' }}>$72/year</span>
                </div>
                <div className="border-t pt-5 flex justify-between text-2xl font-bold" style={{ borderColor: '#6080DB' }}>
                  <span className="text-white">Total:</span>
                  <span style={{ color: '#6080DB' }}>$177/year</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Economics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="border border-gray-800 p-10 mb-16 rounded-[32px]"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Economics:</h3>
            <div className="grid md:grid-cols-3 gap-8 text-xl">
              <div className="text-center">
                <div className="text-gray-400 mb-3">CAC</div>
                <div className="text-3xl font-bold text-white">$15-20</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 mb-3">LTV (3yr)</div>
                <div className="text-3xl font-bold text-white">$531</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 mb-3">LTV/CAC</div>
                <div className="text-4xl font-bold" style={{ color: '#6080DB' }}>27:1</div>
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-3 gap-8 text-center text-xl"
          >
            <div>
              <div className="text-gray-400 mb-3">Break-even:</div>
              <div className="text-white font-semibold">5K users (Month 6 post-cards)</div>
            </div>
            <div>
              <div className="text-gray-400 mb-3">Target:</div>
              <div className="text-white font-semibold">50K users</div>
            </div>
            <div>
              <div className="text-gray-400 mb-3">ARR at 50K:</div>
              <div className="font-bold text-2xl" style={{ color: '#6080DB' }}>$8.8M</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
