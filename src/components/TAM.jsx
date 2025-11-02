import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TAM() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Subtle arrow guide */}
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
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-center text-white">
            $3.8B → $185B+ across<br/>Global South
          </h2>

          {/* Phase 1 Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-16 overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="py-4 text-xl font-bold text-white">Segment</th>
                  <th className="py-4 text-xl font-bold text-white">Users (NG/GH/KE)</th>
                  <th className="py-4 text-xl font-bold text-white">Our TAM</th>
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
                    className="border-b border-gray-800"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <td className="py-4 text-gray-300">{row.segment}</td>
                    <td className="py-4 text-white">{row.users}</td>
                    <td className="py-4 text-white font-semibold">{row.tam}</td>
                  </motion.tr>
                ))}
                <motion.tr
                  className="border-t-2 border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  <td className="py-4 text-white font-bold">Phase 1 Total</td>
                  <td className="py-4 text-white font-bold">55M</td>
                  <td className="py-4 text-white font-bold text-2xl">$3.8B</td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>

          {/* Global expansion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="border border-gray-800 p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Global South expansion:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-xl text-gray-300 mb-6">
              <div>• +10 African markets: <span className="text-white font-semibold">$8.7B</span></div>
              <div>• +LatAm (Argentina, Brazil, Mexico): <span className="text-white font-semibold">+$45B</span></div>
              <div>• +SEA (Philippines, Indonesia, Vietnam): <span className="text-white font-semibold">+$80B</span></div>
            </div>
            <p className="text-3xl font-black text-white">
              Total: $185B+ wherever fiat fails
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
