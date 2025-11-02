import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Competitive() {
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
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-white">
            Cards + DeFi = Unbeatable
          </h2>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-16 overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="py-4 text-xl font-bold text-white">Feature</th>
                  <th className="py-4 text-xl font-bold text-green-500">Autospend</th>
                  <th className="py-4 text-xl font-bold text-gray-400">Grey</th>
                  <th className="py-4 text-xl font-bold text-gray-400">Cleva</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <motion.tr
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <td className="py-4 text-gray-300 font-semibold">Yield</td>
                  <td className="py-4 text-green-500 font-bold text-xl">8-12% APY</td>
                  <td className="py-4 text-gray-500">0%</td>
                  <td className="py-4 text-gray-500">0%</td>
                </motion.tr>
                <motion.tr
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <td className="py-4 text-gray-300 font-semibold">Cards</td>
                  <td className="py-4 text-green-500 font-bold">Q1 2026</td>
                  <td className="py-4 text-white">✅ Live</td>
                  <td className="py-4 text-gray-500">Coming</td>
                </motion.tr>
                <motion.tr
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <td className="py-4 text-gray-300 font-semibold">P2P</td>
                  <td className="py-4 text-green-500 font-bold">Free</td>
                  <td className="py-4 text-gray-500">Paid</td>
                  <td className="py-4 text-gray-500">Limited</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <td className="py-4 text-gray-300 font-semibold">Users</td>
                  <td className="py-4 text-green-500">250</td>
                  <td className="py-4 text-gray-500">12,000+</td>
                  <td className="py-4 text-gray-500">Thousands</td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>

          {/* Our dual edge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our dual edge:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-500 bg-green-500/5 p-6">
                <h4 className="text-2xl font-bold text-green-500 mb-3">1. DeFi Yields (Live Now)</h4>
                <p className="text-gray-300">
                  8-12% APY. Grey = 0%. Defensible: 18-24 month rebuild.
                </p>
              </div>

              <div className="border border-blue-500 bg-blue-500/5 p-6">
                <h4 className="text-2xl font-bold text-blue-500 mb-3">2. Cards (Q1 2026)</h4>
                <p className="text-gray-300">
                  Virtual + physical via Signify. Mass market unlock.
                </p>
              </div>
            </div>

            <div className="border border-gray-800 p-8 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                Together: Grey has cards but 0% yield.<br/>
                We'll have both = unbeatable.
              </p>
              <p className="text-xl text-gray-400 mb-4">
                <span className="font-semibold">Positioning:</span> Today = best yields. Q1 = best yields + cards. No one else will have both.
              </p>
              <p className="text-lg text-gray-500">
                <span className="font-semibold">Note:</span> Built on protocols powering Coinbase, Société Générale. Not experimental.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
