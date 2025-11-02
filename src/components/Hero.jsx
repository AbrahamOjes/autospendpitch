import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Subtle arrow guide */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-black mb-8 text-white"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            200M people lost<br/>dollar access overnight
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl text-gray-300">
              Nigeria, 2021. Central bank banned international cards.
            </p>
            
            <motion.p 
              className="text-4xl md:text-5xl font-bold text-white"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
              They ran out of dollars.
            </motion.p>

            <div className="border-t border-gray-700 pt-8 mt-8">
              <p className="text-xl md:text-2xl text-gray-400 mb-4">
                Today: 12M Nigerians use gift cards, P2P agents, workarounds to pay for Netflix or run Facebook ads.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-white">
                The demand never left.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
