import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Fundraise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const allocation = [
    { category: 'Product & Engineering', percent: 40, color: 'bg-white' },
    { category: 'Regulatory & Compliance', percent: 25, color: 'bg-gray-400' },
    { category: 'Growth & Expansion', percent: 20, color: 'bg-gray-500' },
    { category: 'Team & Operations', percent: 15, color: 'bg-gray-600' },
  ]

  const unlocks = [
    '10K users',
    '$30M volume',
    'Nigeria + Ghana licenses',
    'Card launch + P2P network'
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-white">
            $1.5M to reach 10K users
          </h2>
          <p className="text-2xl text-center text-gray-300 mb-16">
            18-month runway to Series A readiness
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Allocation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="border border-gray-800 p-8"
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Allocation</h3>
              <div className="space-y-6">
                {allocation.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg text-white font-semibold">{item.category}</span>
                      <span className="text-2xl font-bold text-white">{item.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                      <motion.div
                        className={`h-full ${item.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.percent}%` } : {}}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Unlocks */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="border border-gray-800 p-8"
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Unlocks</h3>
              <div className="space-y-4">
                {unlocks.map((unlock, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-4 border border-gray-700 p-4"
                  >
                    <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">✓</span>
                    </div>
                    <span className="text-lg text-white">{unlock}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
                className="mt-8 p-4 border border-gray-700"
              >
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Unit Economics</div>
                  <div className="text-3xl font-bold text-white mb-2">
                    $98 / user / year
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">CAC</div>
                      <div className="text-white font-bold">$15</div>
                    </div>
                    <div>
                      <div className="text-gray-400">LTV</div>
                      <div className="text-white font-bold">$210</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Ratio</div>
                      <div className="text-white font-bold">14:1</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
