import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Roadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases = [
    { period: 'Now → Q1 2026', title: 'Prove yields drive retention', details: 'Scale to 5K users. Signify integration.' },
    { period: 'Q1 2026', title: 'Cards launch', details: 'Mass market unlocked → 15K users', highlight: true },
    { period: 'Q2-Q3 2026', title: 'Physical cards + paid scale', details: '→ 50K users' },
    { period: 'Q4 2026+', title: 'Network effects + multi-country', details: 'P2P 20-35% + expansion' }
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

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-white">
            DeFi today,<br/>cards unlock scale
          </h2>

          {/* Timeline */}
          <div className="space-y-8 mb-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="relative"
              >
                <div className={`border ${phase.highlight ? 'border-green-500 bg-green-500/5' : 'border-gray-800'} p-8`}>
                  <div className="flex items-start gap-6">
                    <div className={`text-3xl font-black ${phase.highlight ? 'text-green-500' : 'text-white'} min-w-[180px]`}>
                      {phase.period}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${phase.highlight ? 'text-green-500' : 'text-white'}`}>
                        {phase.title}
                      </h3>
                      <p className="text-xl text-gray-300">{phase.details}</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow between phases */}
                {index < phases.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    className="flex justify-center my-4"
                  >
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Critical note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="border-t border-gray-800 pt-8 text-center"
          >
            <p className="text-2xl text-gray-300">
              <span className="font-bold text-white">Critical:</span> Cards in Q1.
            </p>
            <p className="text-xl text-gray-400 mt-2">
              If slip → yield alone scales slower but still works.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
