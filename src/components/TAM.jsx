import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TAM() {
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
            {/* TAM Section */}
            <h2 className="font-['Anton',sans-serif] mb-20 text-center text-black uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
              $3.8B → $185B+ across<br/>Global South
            </h2>

            {/* Phase 1 Table */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-20 overflow-x-auto"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-5 text-xl font-bold text-black">Segment</th>
                    <th className="py-5 text-xl font-bold text-black">Users (NG/GH/KE)</th>
                    <th className="py-5 text-xl font-bold text-black">Our TAM</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  {[
                    { segment: 'Online shoppers', users: '17M', tam: '$340M' },
                    { segment: 'Freelancers', users: '3.5M', tam: '$350M' },
                    { segment: 'E-commerce', users: '2.45M', tam: '$490M' },
                    { segment: 'Importers', users: '1.15M', tam: '$863M' },
                    { segment: 'Others', users: '31M', tam: '$1.8B' }
                  ].map((row, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <td className="py-6 text-gray-700">{row.segment}</td>
                      <td className="py-6 text-black">{row.users}</td>
                      <td className="py-6 text-black font-semibold">{row.tam}</td>
                    </motion.tr>
                  ))}
                  <motion.tr
                    className="border-t-2 border-gray-300"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                  >
                    <td className="py-6 text-black font-bold">Phase 1 Total</td>
                    <td className="py-6 text-black font-bold">55M</td>
                    <td className="py-6 text-black font-bold text-2xl">$3.8B</td>
                  </motion.tr>
                </tbody>
              </table>
            </motion.div>

            {/* Global expansion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="border border-gray-300 p-10 rounded-[32px]"
              style={{ marginBottom: '80px' }}
            >
              <h3 className="text-3xl font-bold text-black mb-8">Global South expansion:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-xl text-gray-700 mb-8 leading-relaxed">
                <div>• +10 African markets: <span className="text-black font-semibold">$8.7B</span></div>
                <div>• +LatAm (Argentina, Brazil, Mexico): <span className="text-black font-semibold">+$45B</span></div>
                <div>• +SEA (Philippines, Indonesia, Vietnam): <span className="text-black font-semibold">+$80B</span></div>
              </div>
              <p className="text-3xl font-black text-black leading-relaxed">
                Total: $185B+ wherever fiat fails
              </p>
            </motion.div>

            {/* Traction Section */}
            <h2 className="font-['Anton',sans-serif] mb-20 text-center text-black uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
              250 users, 85% retention,<br/>$0 spent
            </h2>

            <p className="text-2xl text-center text-gray-600 mb-20">3 months live:</p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  className={`text-center p-6 border rounded-[32px] ${metric.highlight ? 'border-gray-300' : 'border-gray-300'}`}
                  style={metric.highlight ? { borderColor: '#6080DB', backgroundColor: 'rgba(96, 128, 219, 0.05)' } : { borderColor: '#E5E7EB' }}
                >
                  <div className={`text-4xl md:text-5xl font-black mb-2`} style={metric.highlight ? { color: '#6080DB' } : { color: 'black' }}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* What proves PMF */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2.3 }}
              className="border border-gray-300 p-10 mb-20 rounded-[32px]"
            >
              <h3 className="text-3xl font-bold text-black mb-8">What proves PMF:</h3>
              <div className="space-y-5 text-xl text-gray-700 leading-relaxed">
                <div>• Users trust us with <span className="text-black font-semibold">$820</span> (savings behavior)</div>
                <div>• <span className="text-black font-semibold">42% refer friends</span> (product spreads)</div>
                <div>• <span className="text-black font-semibold">85% retention</span> (they stay)</div>
                <div className="italic text-gray-600">"Fastest way to get dollars I've ever used"</div>
              </div>
            </motion.div>

            {/* Reality check */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2.5 }}
              className="text-center border-t border-gray-300 pt-10"
            >
              <p className="text-2xl text-gray-600 leading-relaxed">
                <span className="font-bold text-black">Reality check:</span> Need cards for mass market. Coming Q1 2026.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
