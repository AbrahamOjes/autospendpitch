import { motion } from 'framer-motion'

export default function TitlePage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Left USDC coin */}
      <motion.div
        initial={{ x: -200, opacity: 0, rotate: -45 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-8 md:left-20 top-1/3 md:top-1/2 transform -translate-y-1/2"
      >
        <motion.img
          src="/images/usdc-logo.svg"
          alt="USDC"
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ filter: 'drop-shadow(0 0 20px rgba(39, 117, 202, 0.3))' }}
        />
      </motion.div>

      {/* Right USDC coin */}
      <motion.div
        initial={{ x: 200, opacity: 0, rotate: 45 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-8 md:right-20 top-2/3 md:top-1/2 transform -translate-y-1/2"
      >
        <motion.img
          src="/images/usdc-logo.svg"
          alt="USDC"
          className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          style={{ filter: 'drop-shadow(0 0 20px rgba(39, 117, 202, 0.3))' }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1,
              scale: 1
            }}
            transition={{ 
              opacity: { delay: 0.8, duration: 0.5 },
              scale: { delay: 0.8, duration: 0.5 }
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="/images/autospend-logo.svg" 
                alt="Autospend Logo" 
                className="h-16 md:h-20 lg:h-24 w-auto"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white">
              Autospend
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="text-2xl md:text-4xl text-white font-bold">
              The Stablecoin Bank for the Global South
            </p>
            <p className="text-xl md:text-2xl text-gray-400">
              Starting in Nigeria, scaling across emerging markets
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500 text-sm"
          >
            <div className="text-2xl mb-2">↓</div>
            <div>Scroll to explore</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
