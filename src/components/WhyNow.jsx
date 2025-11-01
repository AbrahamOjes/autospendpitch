import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyNow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const curves = [
    {
      title: 'Currency Collapse',
      description: 'Naira down 40%, Cedi down 45%',
      impact: 'Permanent dollarization demand',
      type: 'collapse'
    },
    {
      title: 'Stablecoin Maturity',
      description: 'USDC settles $15T+ annually',
      impact: 'Now trusted + regulated',
      type: 'usdc'
    },
    {
      title: 'Infrastructure Ready',
      description: 'Polygon L2 + stablecoin cards',
      impact: 'Retail access instant',
      type: 'lightning'
    }
  ]

  const renderCurveIcon = (type) => {
    switch(type) {
      case 'collapse':
        return (
          <svg viewBox="0 0 64 64" className="w-16 h-16">
            <polyline points="8,20 20,32 32,24 44,40 56,48" stroke="#00ff00" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="48,48 56,48 56,40" stroke="#00ff00" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="32" r="2" fill="#00ff00"/>
            <circle cx="32" cy="24" r="2" fill="#00ff00"/>
            <circle cx="44" cy="40" r="2" fill="#00ff00"/>
          </svg>
        )
      case 'usdc':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            <circle cx="50" cy="50" r="50" fill="#2775CA"/>
            <path d="M20 35 A 30 30 0 0 1 35 20" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M65 20 A 30 30 0 0 1 80 35" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M80 65 A 30 30 0 0 1 65 80" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M35 80 A 30 30 0 0 1 20 65" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <text x="50" y="65" fontSize="45" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">$</text>
          </svg>
        )
      case 'lightning':
        return (
          <svg viewBox="0 0 64 64" className="w-16 h-16">
            <polygon points="32,8 24,32 32,32 28,56 48,28 36,28 40,8" fill="#FFD700" stroke="#FFD700" strokeWidth="2"/>
            <polygon points="32,8 24,32 32,32 28,56 48,28 36,28 40,8" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.5" transform="translate(2,2)"/>
          </svg>
        )
    }
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-white">
            Three curves colliding
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {curves.map((curve, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="border border-gray-800 hover:border-gray-700 transition-all p-8 h-full flex flex-col">
                  <div className="mb-6 text-center flex justify-center">
                    {renderCurveIcon(curve.type)}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">{curve.title}</h3>
                  <p className="text-gray-300 mb-4 text-center flex-grow">{curve.description}</p>
                  <div className="text-center font-semibold text-white">
                    → {curve.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              We're not early. We're exactly on time.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
