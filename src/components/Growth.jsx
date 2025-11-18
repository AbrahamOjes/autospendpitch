import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Growth() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases = [
    { period: 'Now → Q1 2026', title: 'Prove yields drive retention', details: 'Scale to 5K users. Signify integration.' },
    { period: 'Q1 2026', title: 'Cards launch', details: 'Mass market unlocked → 15K users', highlight: true },
    { period: 'Q2-Q3 2026', title: 'Physical cards + paid scale', details: '→ 50K users' },
    { period: 'Q4 2026+', title: 'Network effects + multi-country', details: 'P2P 20-35% + expansion' }
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 relative" style={{ backgroundColor: '#0F0E0E' }}>
      {/* Light themed container */}
      <div 
        className="w-full py-24 px-16"
        style={{ 
          margin: '0 40px',
          borderRadius: '80px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Growth Section */}
            <h2 className="font-['Anton',sans-serif] mb-20 text-center text-black uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
              Paid acquisition,<br/>not viral gambling
            </h2>

            {/* What's working */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="border border-gray-300 p-10 mb-16 rounded-[32px]"
            >
              <h3 className="text-2xl font-bold text-black mb-4">What's working (0 → 1,000):</h3>
              <p className="text-xl text-gray-700 leading-relaxed">42% referrals, 85% retention</p>
            </motion.div>

            {/* How we scale */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-black mb-10">How we scale (1,000 → 50K):</h3>
              
              <div className="space-y-8">
                {[
                  { pct: '60%', channel: 'Paid ads', cac: '$18-25 CAC', desc: 'Facebook/Instagram → diaspora, Google → "dollar account Nigeria"' },
                  { pct: '30%', channel: 'Content + influencers', cac: '$5-10 CAC', desc: 'SEO, micro-influencers' },
                  { pct: '10%', channel: 'Referrals', cac: '$0 CAC', desc: 'Built-in, free P2P amplifies' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.15 }}
                    className="flex items-start gap-8 border border-gray-300 p-8 rounded-[32px]"
                  >
                    <div className="text-4xl font-black text-black min-w-[4rem]">{item.pct}</div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-black mb-3">{item.channel}</h4>
                      <p className="text-lg text-gray-600 mb-3">{item.cac}</p>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="border-t border-gray-300 pt-10 space-y-5 mb-20"
            >
              <div className="flex justify-between items-center text-xl">
                <span className="text-gray-600">Blended CAC:</span>
                <span className="text-black font-bold text-2xl">$15-20</span>
              </div>
              <div className="flex justify-between items-center text-xl">
                <span className="text-gray-600">Budget:</span>
                <span className="text-black font-bold text-2xl">$300K over 18 months</span>
              </div>
              <p className="text-center text-xl text-gray-600 pt-8 leading-relaxed">
                Standard fintech playbook. Our edge is product (yields + cards), not GTM.
              </p>
            </motion.div>

            {/* Roadmap Section */}
            <h2 className="font-['Anton',sans-serif] mb-20 text-center text-black uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
              DeFi today,<br/>cards unlock scale
            </h2>

            {/* Timeline */}
            <div className="space-y-10 mb-20">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.8 + index * 0.15 }}
                  className="relative"
                >
                  <div className={`border rounded-[32px] ${phase.highlight ? 'border-gray-300' : 'border-gray-300'} p-10`}
                    style={phase.highlight ? { borderColor: '#6080DB', backgroundColor: 'rgba(96, 128, 219, 0.05)' } : { borderColor: '#E5E7EB' }}
                  >
                    <div className="flex items-start gap-8">
                      <div className={`text-3xl font-black min-w-[180px]`} style={phase.highlight ? { color: '#6080DB' } : { color: 'black' }}>
                        {phase.period}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-3`} style={phase.highlight ? { color: '#6080DB' } : { color: 'black' }}>
                          {phase.title}
                        </h3>
                        <p className="text-xl text-gray-700 leading-relaxed">{phase.details}</p>
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
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              transition={{ delay: 2.5 }}
              className="border-t border-gray-300 pt-10 text-center"
            >
              <p className="text-2xl text-gray-700 leading-relaxed">
                <span className="font-bold text-black">Critical:</span> Cards in Q1.
              </p>
              <p className="text-xl text-gray-600 mt-3 leading-relaxed">
                If slip → yield alone scales slower but still works.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
