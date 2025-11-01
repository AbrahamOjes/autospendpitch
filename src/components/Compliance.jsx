import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Compliance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const current = [
    'US MSB',
    'Utila Custody',
    'Persona KYC',
    'Nigeria VASP (in progress)'
  ]

  const timeline = [
    {
      period: 'Next 6 months',
      items: [
        'Nigeria PSP license',
        'Banking partner',
        'Ghana + Kenya applications'
      ]
    },
    {
      period: '18 months',
      items: [
        'Multi-country licensed operations'
      ]
    }
  ]

  const risks = [
    {
      title: 'Multi-jurisdiction',
      description: 'If Nigeria delays, Ghana/Kenya become primary'
    },
    {
      title: 'User protection',
      description: 'Funds in US custody (Utila), not Nigerian entity'
    },
    {
      title: 'Timeline buffer',
      description: '18-month runway includes 6-month regulatory contingency'
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
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-white">
            Compliance is our moat
          </h2>
          <p className="text-2xl text-center text-gray-400 mb-16">
            (and our contingency)
          </p>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Current Status:</h3>
            <div className="flex flex-wrap gap-4">
              {current.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 border border-gray-700 px-4 py-2"
                >
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="border border-gray-800 p-6"
              >
                <h4 className="text-xl font-bold text-white mb-4">{phase.period}:</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-white mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Risk Mitigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="border border-gray-800 p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Risk mitigation:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {risks.map((risk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <h5 className="text-white font-bold mb-2">{risk.title}:</h5>
                  <p className="text-gray-400 text-sm">{risk.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.7 }}
            className="text-center text-2xl font-semibold text-white"
          >
            Every license = 12-month barrier to competitors.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
