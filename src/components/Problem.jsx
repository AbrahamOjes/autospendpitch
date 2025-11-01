import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function AnimatedNumber({ value, duration = 2 }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    
    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setDisplayValue(Math.floor(progress * value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{displayValue.toLocaleString()}</span>
}

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const markets = [
    { name: 'Nigeria', spread: '10.8%', loss: '₦170K' },
    { name: 'Ghana', spread: '11.7%', loss: '₵1,700' },
    { name: 'Kenya', spread: '7%', loss: 'KES 9K' },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-center text-white">
            Their savings evaporated
          </h2>

          {/* Animated savings loss */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-8 text-4xl md:text-6xl font-bold">
              <span className="text-white">₦10M</span>
              <span className="text-gray-500">→</span>
              <span className="text-gray-400">₦6M</span>
            </div>
            <p className="text-gray-400 mt-4 text-xl">in 18 months</p>
          </motion.div>

          {/* Market data table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="border border-gray-800 rounded-none p-8"
          >
            <div className="grid grid-cols-3 gap-4 mb-6 text-gray-500 font-semibold text-sm uppercase tracking-wider">
              <div>Market</div>
              <div className="text-center">Spread</div>
              <div className="text-right">Annual Loss</div>
            </div>
            
            {markets.map((market, index) => (
              <motion.div
                key={market.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800 text-lg"
              >
                <div className="font-semibold text-white">{market.name}</div>
                <div className="text-center text-white font-bold">{market.spread}</div>
                <div className="text-right text-white font-bold">{market.loss}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-12 text-center text-xl md:text-2xl italic text-gray-400 max-w-3xl mx-auto"
          >
            <p>"I lose ₦85,000 every time I need $1,000"</p>
            <footer className="text-gray-500 mt-4 not-italic text-lg">— Lagos entrepreneur</footer>
          </motion.blockquote>

          {/* Next section: Demand never left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-20 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              They didn't stop needing dollars
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-2xl md:text-3xl font-semibold">
              {['Amazon', 'Tuition', 'Inventory'].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.7 + i * 0.1 }}
                  className="px-6 py-3 border border-gray-700 rounded-none"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="space-y-4 text-xl text-gray-300 mb-8">
              <p className="font-light">They found workarounds:</p>
              <ul className="space-y-2">
                {['Telegram traders', 'Parallel markets', 'Informal crypto swaps'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 2 + i * 0.1 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <span className="text-gray-500">✗</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2.5 }}
              className="text-3xl md:text-4xl font-bold text-white mt-12"
            >
              Demand never left. Infrastructure did.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
