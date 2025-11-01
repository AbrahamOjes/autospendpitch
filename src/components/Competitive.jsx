import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Competitive() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCompetitor, setHoveredCompetitor] = useState(null)

  const competitors = [
    { name: 'Autospend', time: '2 min', cost: 200, x: 20, y: 10, color: 'bg-green-500', highlight: true },
    { name: 'Crypto Exchanges', time: '30 min', cost: 300, x: 40, y: 35, color: 'bg-gray-400' },
    { name: 'Dom Account', time: '2 hours', cost: 400, x: 15, y: 55, color: 'bg-gray-500' },
    { name: 'Binance P2P', time: '1 hour', cost: 350, x: 60, y: 55, color: 'bg-gray-500' },
    { name: 'Parallel Market', time: 'Same day', cost: 800, x: 75, y: 70, color: 'bg-gray-600' },
    { name: 'Bank Wire', time: '3-5 days', cost: 600, x: 30, y: 85, color: 'bg-gray-600' },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-white">
            Why we win: Speed + Cost
          </h2>
          <p className="text-2xl text-center text-gray-300 mb-16">
            Onboarding Speed vs Total Cost
          </p>

          {/* Competitive positioning chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <div className="relative h-96 w-full">
              {/* Axes */}
              <div className="absolute bottom-0 left-0 w-full h-full border-l-2 border-b-2 border-gray-600">
                {/* Y-axis label */}
                <div className="absolute -left-20 top-0 text-gray-400 text-sm transform -rotate-90 origin-left">
                  Fast (2 min)
                </div>
                <div className="absolute -left-20 bottom-0 text-gray-400 text-sm transform -rotate-90 origin-left">
                  Slow (5 days)
                </div>
                
                {/* X-axis label */}
                <div className="absolute -bottom-8 left-0 text-gray-400 text-sm">
                  Low Cost (&lt; 300 bps)
                </div>
                <div className="absolute -bottom-8 right-0 text-gray-400 text-sm">
                  High Cost (800+ bps)
                </div>

                {/* Competitors */}
                {competitors.map((comp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onMouseEnter={() => setHoveredCompetitor(comp.name)}
                    onMouseLeave={() => setHoveredCompetitor(null)}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${comp.x}%`,
                      bottom: `${comp.y}%`,
                      transform: 'translate(-50%, 50%)'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`${comp.color} ${comp.highlight ? 'ring-4 ring-green-400 shadow-lg shadow-green-500/50' : ''} p-3`}
                    >
                      <div className={`text-xs font-bold whitespace-nowrap ${comp.highlight ? 'text-black' : 'text-white'}`}>{comp.name}</div>
                      {(hoveredCompetitor === comp.name || comp.highlight) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={`text-xs mt-1 ${comp.highlight ? 'text-black' : 'text-white'}`}
                        >
                          <div>{comp.time}</div>
                          <div>{comp.cost} bps</div>
                        </motion.div>
                      )}
                    </motion.div>
                    {comp.highlight && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl"
                      >
                        ⭐
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="border border-gray-800 p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-center text-white">How Autospend's Virtual Account Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Create Account', desc: 'Gets virtual ₦ account (2 minutes)' },
                { step: '2', title: 'Fund with Naira', desc: 'Transfer from any Nigerian bank' },
                { step: '3', title: 'Instant Conversion', desc: 'Naira → USDC (< 30 seconds)' },
                { step: '4', title: 'Hold or Spend', desc: 'Keep in wallet, send P2P, or use card' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-white text-black flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.8 }}
            className="text-center text-2xl font-semibold text-gray-400 mt-12"
          >
            Bank-like simplicity + Crypto speed + Licensed trust
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
