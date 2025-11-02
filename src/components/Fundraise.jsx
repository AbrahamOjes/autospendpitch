import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Fundraise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative">
      <motion.div 
        className="absolute bottom-10 right-10"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-white">
            The Ask: $1.5M Pre-Seed
          </h2>

          {/* Use of funds */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {[
              { pct: '40%', amount: '$600K', label: 'Cards', desc: 'Signify integration, compliance, virtual + physical' },
              { pct: '25%', amount: '$375K', label: 'Regulatory', desc: 'Nigeria PSP license, Ghana/Kenya prep' },
              { pct: '20%', amount: '$300K', label: 'Growth', desc: 'Paid acquisition to 50K users' },
              { pct: '15%', amount: '$225K', label: 'Team', desc: 'Country manager, compliance, 2 engineers' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="border border-gray-800 p-6"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-4xl font-black text-white">{item.pct}</span>
                  <span className="text-2xl text-gray-400">{item.amount}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.label}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Milestones:</h3>
            <div className="space-y-4 text-xl">
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold min-w-[120px]">Month 6:</span>
                <span className="text-gray-300">Cards launch, 5K users, break-even</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold min-w-[120px]">Month 12:</span>
                <span className="text-gray-300">15K users, $1.8M ARR</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold min-w-[120px]">Month 18:</span>
                <span className="text-gray-300">50K users, $7.6M ARR → Series A ready</span>
              </div>
            </div>
          </motion.div>

          {/* What we're proving */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-white">
              What we're proving: DeFi yields + cards = retention moat no one else has.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
