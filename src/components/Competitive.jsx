import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Competitive() {
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
            Cards + DeFi = Unbeatable
          </h2>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-20 overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="py-5 text-xl font-bold text-white">Feature</th>
                  <th className="py-5 text-xl font-bold" style={{ color: '#6080DB' }}>Autospend</th>
                  <th className="py-5 text-xl font-bold text-gray-400">Grey</th>
                  <th className="py-5 text-xl font-bold text-gray-400">Raenest</th>
                  <th className="py-5 text-xl font-bold text-gray-400">Cenoa</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <motion.tr
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <td className="py-6 text-gray-300 font-semibold">Yield</td>
                  <td className="py-6 font-bold text-xl" style={{ color: '#6080DB' }}>8-12% APY</td>
                  <td className="py-6 text-gray-500">0%</td>
                  <td className="py-6 text-gray-500">0%</td>
                  <td className="py-6 text-gray-500">5%</td>
                </motion.tr>
                <motion.tr
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <td className="py-6 text-gray-300 font-semibold">Cards</td>
                  <td className="py-6 font-bold" style={{ color: '#6080DB' }}>Q1 2026</td>
                  <td className="py-6 text-white">
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="#22c55e" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Live
                    </span>
                  </td>
                  <td className="py-6 text-white">
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="#22c55e" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Live
                    </span>
                  </td>
                  <td className="py-6 text-white">
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="#22c55e" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Live
                    </span>
                  </td>
                </motion.tr>
                <motion.tr
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <td className="py-6 text-gray-300 font-semibold">Fiat Access</td>
                  <td className="py-6 font-bold" style={{ color: '#6080DB' }}>Deep</td>
                  <td className="py-6 text-white">Deep</td>
                  <td className="py-6 text-white">Deep</td>
                  <td className="py-6 text-gray-500">Basic</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <td className="py-6 text-gray-300 font-semibold">Users</td>
                  <td className="py-6" style={{ color: '#6080DB' }}>1,000</td>
                  <td className="py-6 text-gray-500">2M+</td>
                  <td className="py-6 text-gray-500">1M+</td>
                  <td className="py-6 text-gray-500">400K+</td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>

          {/* Our dual edge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Our dual edge:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border p-8 rounded-[32px]" style={{ borderColor: '#6080DB', backgroundColor: 'rgba(96, 128, 219, 0.05)' }}>
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#6080DB' }}>1. DeFi Yields (Live Now)</h4>
                <p className="text-gray-300 leading-relaxed">
                  8-12% APY. Grey = 0%. Defensible: 18-24 month rebuild.
                </p>
              </div>

              <div className="border p-8 rounded-[32px]" style={{ borderColor: '#A855F7', backgroundColor: 'rgba(168, 85, 247, 0.05)' }}>
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#A855F7' }}>2. Cards (Q1 2026)</h4>
                <p className="text-gray-300 leading-relaxed">
                  Virtual + physical via Signify. Mass market unlock.
                </p>
              </div>
            </div>

            <div className="border border-gray-800 p-10 rounded-[32px]">
              <p className="text-2xl md:text-3xl font-bold text-white mb-8 text-center leading-relaxed">
                Only player with highest yield (8-12%) + deep fiat + cards by Q1 2026
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border-l-4 border-gray-700 pl-6">
                  <p className="text-lg font-semibold text-gray-300 mb-3">The Reality:</p>
                  <p className="text-gray-400 leading-relaxed">3.65M+ combined users across competitors. We have 1,000.</p>
                </div>
                <div className="border-l-4 pl-6" style={{ borderColor: '#6080DB' }}>
                  <p className="text-lg font-semibold text-white mb-3">The Edge:</p>
                  <p className="text-gray-300 leading-relaxed">They offer 0-5% yield. We offer 8-12%. They need 18-24 months to match.</p>
                </div>
              </div>

              <p className="text-xl text-center text-gray-400 leading-relaxed">
                <span className="font-semibold text-white">The bet:</span> Yield differential + cards (Q1) = capture 1.4% of their base (50K users)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
