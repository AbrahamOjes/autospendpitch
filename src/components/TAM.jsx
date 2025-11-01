import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TAM() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const milestones = [
    { year: 'Now', users: '250', penetration: '0.001%', gmv: '$0.5M' },
    { year: 'Year 1', users: '10K', penetration: '0.05%', gmv: '$6.4M' },
    { year: 'Year 3', users: '185K', penetration: '1%', gmv: '$128M' },
    { year: 'Year 5', users: '925K', penetration: '5%', gmv: '$641M' },
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
            $641M TAM
          </h2>
          <p className="text-2xl text-center text-gray-400 mb-16">
            Capturing 1% = <span className="text-white font-bold">$6.4M</span>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="border border-gray-800 p-8 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-black text-white mb-2">18.5M</div>
                <div className="text-gray-400">People need dollars today</div>
                <div className="text-sm text-gray-500 mt-1">Nigeria, Ghana, Kenya</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">$1,200</div>
                <div className="text-gray-400">Average user per year</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">2.5%</div>
                <div className="text-gray-400">Our take</div>
              </div>
            </div>
          </motion.div>

          <h3 className="text-3xl font-bold text-center mb-8 text-white">Realistic penetration:</h3>

          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.15 }}
                className="border border-gray-800 hover:border-gray-700 transition-all p-6"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Timeline</div>
                    <div className="text-xl font-bold text-white">{milestone.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Users</div>
                    <div className="text-xl font-bold text-white">{milestone.users}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Market Share</div>
                    <div className="text-xl font-bold text-white">{milestone.penetration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">GMV</div>
                    <div className="text-xl font-bold text-white">{milestone.gmv}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="text-center text-2xl font-semibold text-gray-400 mt-12"
          >
            Path to <span className="text-white">$12B+</span> as we expand to 10 more African markets
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
