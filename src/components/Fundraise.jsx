import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Fundraise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6 relative" style={{ backgroundColor: '#0F0E0E' }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Anton',sans-serif] mb-20 text-center text-white uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
            The Ask: $1.5M Pre-Seed
          </h2>

          {/* Use of funds */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-20"
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
                className="border border-gray-800 p-8 rounded-[32px]"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-black text-white">{item.pct}</span>
                  <span className="text-2xl text-gray-400">{item.amount}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.label}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="border border-gray-800 p-10 mb-16 rounded-[32px]"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Milestones:</h3>
            <div className="space-y-5 text-xl">
              <div className="flex items-start gap-4">
                <span className="font-bold min-w-[120px]" style={{ color: '#6080DB' }}>Month 6:</span>
                <span className="text-gray-300 leading-relaxed">Cards launch, 5K users, break-even</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-bold min-w-[120px]" style={{ color: '#6080DB' }}>Month 12:</span>
                <span className="text-gray-300 leading-relaxed">15K users, $2.7M ARR</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-bold min-w-[120px]" style={{ color: '#6080DB' }}>Month 18:</span>
                <span className="text-gray-300 leading-relaxed">50K users, $8.8M ARR → Series A ready</span>
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
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              What we're proving: DeFi yields + cards = retention moat no one else has.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
