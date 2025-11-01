import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases = [
    {
      phase: 'Phase 1 (Now)',
      title: 'Dollar Access',
      features: [
        'Virtual account created in 2 minutes',
        'Transfer naira from any bank',
        'Instant conversion to USDC (< 30 seconds)',
        'Earn 4% yield on balance'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      phase: 'Phase 2 (6mo)',
      title: 'P2P Network',
      features: [
        'Send USDC to anyone, instantly',
        'Free on-network transfers',
        'Bill splitting, family remittances'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      phase: 'Phase 3 (12mo)',
      title: 'Global Spending',
      features: [
        'Stablecoin-backed cards',
        'Works at 50M merchants worldwide',
        'No forex fees, real-time settlement'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ]

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
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-white">
            Autospend brings it back
          </h2>

          <p className="text-2xl md:text-3xl text-center text-gray-400 mb-12">
            The Innovation: Virtual Dollar Accounts
          </p>

          {/* Simple flow */}
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

          {/* Phases */}
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="border border-gray-800 hover:border-gray-700 transition-all p-8 h-full">
                  <div className="inline-block px-4 py-2 border border-gray-700 text-white text-sm font-bold mb-4">
                    {phase.phase}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="text-white mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
            className="text-center text-2xl font-semibold text-gray-400 mt-16"
          >
            Each phase builds lock-in. Each phase compounds the last.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
