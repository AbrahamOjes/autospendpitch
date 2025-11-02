import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-900 relative">
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

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-white">
            Savings evaporate.<br/>No one can help.
          </h2>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="py-4 text-2xl font-bold text-white">Problem</th>
                  <th className="py-4 text-2xl font-bold text-white">Impact</th>
                </tr>
              </thead>
              <tbody className="text-xl">
                <motion.tr 
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <td className="py-6 text-gray-300">Naira inflation</td>
                  <td className="py-6 text-white font-semibold">Lose 40%/year</td>
                </motion.tr>
                <motion.tr 
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <td className="py-6 text-gray-300">Bank dollar accounts</td>
                  <td className="py-6 text-white font-semibold">0% yield, can't spend</td>
                </motion.tr>
                <motion.tr 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <td className="py-6 text-gray-300">Workarounds</td>
                  <td className="py-6 text-white font-semibold">8-25% fees, unsafe</td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="border-l-4 border-white pl-6 mb-12"
          >
            <p className="text-2xl md:text-3xl italic text-gray-300 mb-4">
              "I lose ₦85,000 every time I convert $1,000"
            </p>
            <p className="text-lg text-gray-500">— Lagos entrepreneur</p>
          </motion.div>

          {/* Conclusion */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="text-2xl md:text-3xl font-bold text-white text-center"
          >
            People need dollars that grow + work globally.<br/>
            <span className="text-gray-400">Banks can't deliver.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
