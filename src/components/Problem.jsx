import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 relative" style={{ backgroundColor: '#0F0E0E' }}>
      {/* Light themed container */}
      <div 
        className="w-full py-24 px-16"
        style={{ 
          margin: '0 40px',
          borderRadius: '80px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Anton',sans-serif] mb-20 text-black uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
              Savings evaporate.<br/>No one can help.
            </h2>

            {/* Table */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-5 text-2xl font-bold text-black">Problem</th>
                    <th className="py-5 text-2xl font-bold text-black">Impact</th>
                  </tr>
                </thead>
                <tbody className="text-xl">
                  <motion.tr 
                    className="border-b border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <td className="py-7 text-gray-700">Naira inflation</td>
                    <td className="py-7 text-black font-semibold">Lose 40%/year</td>
                  </motion.tr>
                  <motion.tr 
                    className="border-b border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <td className="py-7 text-gray-700">Bank dollar accounts</td>
                    <td className="py-7 text-black font-semibold">0% yield, can't spend</td>
                  </motion.tr>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    <td className="py-7 text-gray-700">Workarounds</td>
                    <td className="py-7 text-black font-semibold">8-25% fees, unsafe</td>
                  </motion.tr>
                </tbody>
              </table>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="border-l-4 border-black pl-8 mb-16"
            >
              <p className="text-2xl md:text-3xl italic text-gray-800 mb-4 leading-relaxed">
                "I lose ₦85,000 every time I convert $1,000"
              </p>
              <p className="text-lg text-gray-600">— Lagos entrepreneur</p>
            </motion.div>

            {/* Conclusion */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="text-2xl md:text-3xl font-bold text-black text-center leading-relaxed"
            >
              People need dollars that grow + work globally.<br/>
              <span className="text-gray-600">Banks can't deliver.</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
