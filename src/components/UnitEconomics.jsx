import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function UnitEconomics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const revenueStreams = [
    { stream: 'FX conversion (0.5%)', amount: '$48' },
    { stream: 'Float income (4%)', amount: '$32' },
    { stream: 'Card interchange (1.8%)', amount: '$18' },
  ]

  const metrics = [
    { label: 'CAC', value: '$15' },
    { label: 'Opex', value: '$18' },
    { label: 'LTV', value: '$210' },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-white">
            $98 per user, per year
          </h2>
          
          <p className="text-xl text-center text-gray-400 mb-16">
            Average: $800 balance | 3 tx/month | $9,600 annual volume
          </p>

          {/* Revenue Streams Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <div className="grid grid-cols-2 gap-4 mb-6 text-gray-500 font-semibold text-sm uppercase tracking-wider">
              <div>Revenue Stream</div>
              <div className="text-right">$/user/year</div>
            </div>
            
            {revenueStreams.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="grid grid-cols-2 gap-4 py-4 border-t border-gray-800 text-lg"
              >
                <div className="text-gray-300">{item.stream}</div>
                <div className="text-right text-white font-bold">{item.amount}</div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 gap-4 py-4 border-t-2 border-white text-xl"
            >
              <div className="text-white font-bold">Total</div>
              <div className="text-right text-white font-bold">$98</div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center text-gray-400 italic mb-12"
          >
            *USDC-to-USDC transfers are free*
          </motion.p>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="border border-gray-800 p-6 text-center"
              >
                <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
                <div className="text-4xl font-bold text-white">{metric.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
            className="text-center space-y-4"
          >
            <div className="text-3xl font-bold text-white">
              LTV/CAC: <span className="text-green-500">14:1</span>
            </div>
            <div className="text-xl text-gray-400">
              Margin: <span className="text-white">82%</span>
            </div>
            <div className="text-xl text-gray-400">
              Break-even: <span className="text-white">4,200 users</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
