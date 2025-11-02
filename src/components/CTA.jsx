import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
            Why we win:<br/>No one else will have both
          </h2>

          <div className="space-y-8 mb-16">
            <p className="text-2xl md:text-3xl text-gray-300">
              Emerging markets need dollars that <span className="text-white font-bold">grow</span> (DeFi) + <span className="text-white font-bold">work globally</span> (cards).
            </p>

            <div className="border border-gray-800 p-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Our strategy:</h3>
              <div className="space-y-3 text-xl text-gray-300">
                <div>1. <span className="text-white font-semibold">DeFi yields</span> (live now) → 40% APY attracts users, Grey = 0%</div>
                <div>2. <span className="text-white font-semibold">Cards</span> (Q1 2026) → Mass market unlock</div>
                <div>3. <span className="text-white font-semibold">Together</span> → Unbeatable moat</div>
              </div>
            </div>

            <p className="text-xl text-gray-400">
              Nigeria → Ghana/Kenya → LatAm → SEA (anywhere fiat fails)
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <p className="text-2xl text-gray-400 mb-4">Contact:</p>
            <p className="text-3xl font-bold text-white mb-2">Abraham Ojes, CEO</p>
            <p className="text-xl text-gray-400">abraham@autospend.ai</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
