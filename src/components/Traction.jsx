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
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6 relative" style={{ backgroundColor: '#0F0E0E' }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Anton',sans-serif] mb-10 text-center text-white uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
            250 users, 85% retention,<br/>$0 spent
          </h2>

          <p className="text-2xl text-center text-gray-400 mb-20">3 months live:</p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`text-center p-6 border rounded-[32px] ${metric.highlight ? 'border-gray-800' : 'border-gray-800'}`}
                style={metric.highlight ? { borderColor: '#6080DB', backgroundColor: 'rgba(96, 128, 219, 0.05)' } : {}}
              >
                <div className={`text-4xl md:text-5xl font-black mb-2`} style={metric.highlight ? { color: '#6080DB' } : { color: 'white' }}>
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
            className="border border-gray-800 p-10 mb-16 rounded-[32px]"
          >
            <h3 className="text-3xl font-bold text-white mb-8">What proves PMF:</h3>
            <div className="space-y-5 text-xl text-gray-300 leading-relaxed">
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
            className="text-center border-t border-gray-800 pt-10"
          >
            <p className="text-2xl text-gray-400 leading-relaxed">
              <span className="font-bold text-white">Reality check:</span> Need cards for mass market. Coming Q1 2026.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
