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
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6 relative" style={{ backgroundColor: '#0F0E0E' }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Anton',sans-serif] mb-20 text-center text-white uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
            DeFi today,<br/>cards unlock scale
          </h2>

          {/* Timeline */}
          <div className="space-y-10 mb-20">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="relative"
              >
                <div className={`border rounded-[32px] ${phase.highlight ? 'border-gray-800' : 'border-gray-800'} p-10`}
                  style={phase.highlight ? { borderColor: '#6080DB', backgroundColor: 'rgba(96, 128, 219, 0.05)' } : {}}
                >
                  <div className="flex items-start gap-8">
                    <div className={`text-3xl font-black min-w-[180px]`} style={phase.highlight ? { color: '#6080DB' } : { color: 'white' }}>
                      {phase.period}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-3`} style={phase.highlight ? { color: '#6080DB' } : { color: 'white' }}>
                        {phase.title}
                      </h3>
                      <p className="text-xl text-gray-300 leading-relaxed">{phase.details}</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow between phases */}
                {index < phases.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    className="flex justify-center my-6"
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
            className="border-t border-gray-800 pt-10 text-center"
          >
            <p className="text-2xl text-gray-300 leading-relaxed">
              <span className="font-bold text-white">Critical:</span> Cards in Q1.
            </p>
            <p className="text-xl text-gray-400 mt-3 leading-relaxed">
              If slip → yield alone scales slower but still works.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
