import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    { num: '1', text: 'Virtual ₦ account → Fund with naira → USDC in 30 seconds' },
    { num: '2', text: 'Earn 40% APY via Katana DeFi vaults (auto-staked)', highlight: true },
    { num: '3', text: 'Send free to friends (P2P)' },
    { num: '4', text: '[Q1 2026] Spend with cards (Signify partnership)', badge: 'Coming' }
  ]

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
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-white">
            Autospend = Virtual dollar<br/>accounts + DeFi yields
          </h2>

          <p className="text-2xl text-center text-gray-400 mb-16">How it works:</p>

          {/* Steps */}
          <div className="space-y-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                className={`flex items-start gap-6 p-6 border ${step.highlight ? 'border-green-500 bg-green-500/5' : 'border-gray-800'}`}
              >
                <div className={`text-4xl font-black ${step.highlight ? 'text-green-500' : 'text-white'} min-w-[3rem]`}>
                  {step.num}
                </div>
                <div className="flex-1">
                  <p className={`text-xl md:text-2xl ${step.highlight ? 'text-white font-bold' : 'text-gray-300'}`}>
                    {step.text}
                  </p>
                  {step.badge && (
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-sm font-semibold">
                      {step.badge}
                    </span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    className="text-gray-600 text-2xl hidden md:block"
                  >
                    ↓
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Innovation points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="border-t border-gray-800 pt-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">The innovation:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-300">
              <div>• No bank, no paperwork, 2 minutes to start</div>
              <div>• Works with any Nigerian bank (GTBank, Zenith, Access)</div>
              <div className="md:col-span-2">
                <span className="text-white font-bold">Real yield:</span> $1,000 saved = earn $400/year (vs $0 on Grey)
              </div>
            </div>
          </motion.div>

          {/* User quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-12 text-center"
          >
            <p className="text-2xl italic text-gray-400">
              "Fastest way to get dollars I've ever used"
            </p>
            <p className="text-gray-600 mt-2">— User</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
