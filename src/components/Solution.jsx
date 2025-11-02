import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    { type: 'phone', text: 'Get a ₦ account' },
    { type: 'naira', text: 'Fund with naira' },
    { type: 'lightning', text: 'Instantly redeem USDC' }
  ]

  const renderIcon = (type) => {
    switch(type) {
      case 'phone':
        return (
          <svg viewBox="0 0 64 64" className="w-16 h-16">
            <rect x="16" y="8" width="32" height="48" rx="4" fill="none" stroke="#00ff00" strokeWidth="2"/>
            <rect x="20" y="14" width="24" height="34" fill="#001a00" stroke="#00ff00" strokeWidth="1"/>
            <circle cx="32" cy="52" r="2" fill="#00ff00"/>
            <line x1="24" y1="18" x2="40" y2="18" stroke="#00ff00" strokeWidth="1"/>
            <line x1="24" y1="22" x2="40" y2="22" stroke="#00ff00" strokeWidth="1"/>
            <line x1="24" y1="26" x2="36" y2="26" stroke="#00ff00" strokeWidth="1"/>
          </svg>
        )
      case 'naira':
        return (
          <svg viewBox="0 0 64 64" className="w-16 h-16">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#00ff00" strokeWidth="2"/>
            <circle cx="32" cy="32" r="24" fill="#001a00"/>
            <text x="32" y="42" fontSize="28" fontWeight="bold" fill="#00ff00" textAnchor="middle" fontFamily="monospace">₦</text>
            <circle cx="32" cy="32" r="20" fill="none" stroke="#00ff00" strokeWidth="1" strokeDasharray="4 4"/>
          </svg>
        )
      case 'lightning':
        return (
          <svg viewBox="0 0 64 64" className="w-16 h-16">
            <polygon points="32,8 24,32 32,32 28,56 48,28 36,28 40,8" fill="#00ff00" stroke="#00ff00" strokeWidth="2"/>
            <polygon points="32,8 24,32 32,32 28,56 48,28 36,28 40,8" fill="none" stroke="#00ff00" strokeWidth="1" opacity="0.5" transform="translate(2,2)"/>
          </svg>
        )
    }
  }

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

          <p className="text-2xl text-center text-gray-400 mb-16">The Innovation: Virtual Dollar Accounts</p>

          {/* Visual flow with icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 mb-20"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    {renderIcon(step.type)}
                  </div>
                  <div className="text-lg font-semibold text-white">{step.text}</div>
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-4xl text-blue-400 hidden md:block"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* How it works - numbered list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">How it works:</h3>
            <div className="space-y-4 text-xl text-gray-300">
              <div>1. Virtual ₦ account → Fund with naira → USDC in 30 seconds</div>
              <div className="text-green-500 font-bold">2. Earn 40% APY via Katana DeFi vaults (auto-staked)</div>
              <div>3. Send free to friends (P2P)</div>
              <div>4. <span className="text-blue-500">[Q1 2026]</span> Spend with cards (Signify partnership)</div>
            </div>
          </motion.div>

          {/* Innovation points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="border-t border-gray-800 pt-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">The innovation:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-gray-300">
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
            transition={{ delay: 1.4 }}
            className="text-center"
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
