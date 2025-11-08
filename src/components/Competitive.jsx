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
                  <th className="py-4 text-xl font-bold text-gray-400">Raenest</th>
                  <th className="py-4 text-xl font-bold text-gray-400">Cenoa</th>
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
                  <td className="py-4 text-gray-500">5%</td>
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
                  <td className="py-4 text-white">✅ Live</td>
                  <td className="py-4 text-white">✅ Live</td>
                </motion.tr>
                <motion.tr
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <td className="py-4 text-gray-300 font-semibold">Fiat Access</td>
                  <td className="py-4 text-green-500 font-bold">Deep</td>
                  <td className="py-4 text-white">Deep</td>
                  <td className="py-4 text-white">Deep</td>
                  <td className="py-4 text-gray-500">Basic</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <td className="py-4 text-gray-300 font-semibold">Users</td>
                  <td className="py-4 text-green-500">250</td>
                  <td className="py-4 text-gray-500">2M+</td>
                  <td className="py-4 text-gray-500">1M+</td>
                  <td className="py-4 text-gray-500">400K+</td>
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

            <div className="border border-gray-800 p-8">
              <p className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Only player with highest yield (8-12%) + deep fiat + cards by Q1 2026
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-l-4 border-gray-700 pl-4">
                  <p className="text-lg font-semibold text-gray-300 mb-2">The Reality:</p>
                  <p className="text-gray-400">3.65M+ combined users across competitors. We have 250.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-lg font-semibold text-white mb-2">The Edge:</p>
                  <p className="text-gray-300">They offer 0-5% yield. We offer 8-12%. They need 18-24 months to match.</p>
                </div>
              </div>

              <p className="text-xl text-center text-gray-400">
                <span className="font-semibold text-white">The bet:</span> Yield differential + cards (Q1) = capture 1.4% of their base (50K users)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
