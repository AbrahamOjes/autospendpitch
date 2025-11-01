import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Moats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const moats = [
    {
      number: '1',
      title: 'Virtual Account Infrastructure',
      timeBarrier: '6-12 month build time',
      points: [
        'Built custom banking integration layer',
        'Real-time FX rate engine',
        'Instant naira → USDC settlement',
        'Competitors must rebuild from scratch'
      ]
    },
    {
      number: '2',
      title: 'Network Lock-In',
      timeBarrier: 'Compounds with users',
      points: [
        'Free P2P only works if friends on platform',
        'After 5 transactions: 98% retention, $1,200 avg balance',
        'Virtual accounts create "digital domiciliary" switching cost'
      ]
    },
    {
      number: '3',
      title: 'Compliance Head Start',
      timeBarrier: '12-18 month barrier',
      points: [
        'VASP + PSP licenses in progress',
        'Virtual account structure approved by regulators',
        'Banking partnerships take 6+ months to establish'
      ]
    }
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-white">
            Three defensible moats
          </h2>

          <div className="space-y-8 mb-16">
            {moats.map((moat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="border border-gray-800 hover:border-gray-700 transition-all p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-3xl font-bold flex-shrink-0">
                    {moat.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{moat.title}</h3>
                    <div className="text-gray-400 font-semibold mb-4">— {moat.timeBarrier}</div>
                    <ul className="space-y-2">
                      {moat.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-white mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="text-center space-y-6"
          >
            <p className="text-2xl text-white font-semibold">
              Real moat = Speed of infrastructure + Network effects + Regulatory clarity
            </p>
            <p className="text-xl text-gray-400">
              Binance has users. Banks have trust. <span className="text-white font-bold">We have both.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
