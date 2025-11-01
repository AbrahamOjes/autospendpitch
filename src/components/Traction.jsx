import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Traction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    { value: '250+', label: 'Active Users', sublabel: '100% organic', color: 'text-white' },
    { value: '$500K+', label: 'Volume Processed', sublabel: '3 months live', color: 'text-white' },
    { value: '42%', label: 'Referral Rate', sublabel: 'Viral growth', color: 'text-white' },
    { value: '96%', label: 'Retention', sublabel: 'Product-market fit', color: 'text-white' },
  ]

  const usage = [
    { percent: 85, label: 'Local → USDC', description: 'Dollar access', color: 'bg-white' },
    { percent: 12, label: 'USDC → Local', description: 'Liquidity', color: 'bg-gray-400' },
    { percent: 3, label: 'P2P Transfers', description: 'Network effects', color: 'bg-gray-600' },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-center">
            250 users. $500K processed.
          </h2>
          <p className="text-3xl md:text-5xl font-black mb-16 text-center">
            <span className="text-white">$0 marketing.</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="border border-gray-800 p-6 text-center"
              >
                <motion.div
                  className={`text-5xl font-black mb-2 ${metric.color}`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="border border-gray-800 p-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-white">What they do:</h3>
            
            <div className="space-y-6">
              {usage.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.15 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-lg font-semibold text-white">{item.label}</span>
                      <span className="text-gray-400 ml-2">— {item.description}</span>
                    </div>
                    <span className="text-2xl font-bold text-white">{item.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percent}%` } : {}}
                      transition={{ duration: 1, delay: 1.2 + index * 0.15 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
              className="mt-8 text-center"
            >
              <p className="text-xl text-gray-400">
                Average user holds <span className="text-white font-bold text-2xl">$820</span> in USDC
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
