import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Traction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    { value: '250', label: 'users (100% organic)' },
    { value: '$500K', label: 'processed' },
    { value: '42%', label: 'referral rate', highlight: true },
    { value: '85%', label: 'retention', highlight: true },
    { value: '$820', label: 'average balance' }
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black relative">
      {/* Subtle arrow guide */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
            250 users, 85% retention,<br/>$0 spent
          </h2>

          <p className="text-2xl text-center text-gray-400 mb-16">3 months live:</p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`text-center p-6 border ${metric.highlight ? 'border-green-500 bg-green-500/5' : 'border-gray-800'}`}
              >
                <div className={`text-4xl md:text-5xl font-black mb-2 ${metric.highlight ? 'text-green-500' : 'text-white'}`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* What proves PMF */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">What proves PMF:</h3>
            <div className="space-y-4 text-xl text-gray-300">
              <div>• Users trust us with <span className="text-white font-semibold">$820</span> (savings behavior)</div>
              <div>• <span className="text-white font-semibold">42% refer friends</span> (product spreads)</div>
              <div>• <span className="text-white font-semibold">85% retention</span> (they stay)</div>
              <div className="italic text-gray-400">"Fastest way to get dollars I've ever used"</div>
            </div>
          </motion.div>

          {/* Reality check */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center border-t border-gray-800 pt-8"
          >
            <p className="text-2xl text-gray-400">
              <span className="font-bold text-white">Reality check:</span> Need cards for mass market. Coming Q1 2026.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
