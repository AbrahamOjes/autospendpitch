import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [count, setCount] = useState(200000000)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev - Math.floor(Math.random() * 1000))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-12 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">
              {count.toLocaleString()}
            </span>
            <br />
            <span className="text-white">people woke up</span>
            <br />
            <span className="text-white">locked out</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="space-y-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            <p>Nigeria, 2021.</p>
            <p>The central bank banned international card spending.</p>
            <p>Not fraud. Not crime.</p>
            <p className="text-2xl md:text-3xl text-white mt-8">
              They ran out of dollars.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-4xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
