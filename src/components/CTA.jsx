import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-6" style={{ backgroundColor: '#0F0E0E' }}>
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Anton',sans-serif] mb-12 text-white uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>
            Why we win:<br/>No one else will have both
          </h2>

          <div className="space-y-10 mb-20">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
              Emerging markets need dollars that <span className="text-white font-bold">grow</span> (DeFi) + <span className="text-white font-bold">work globally</span> (cards).
            </p>

            <div className="border border-gray-800 p-10 text-left rounded-[32px]">
              <h3 className="text-2xl font-bold text-white mb-6">Our strategy:</h3>
              <div className="space-y-4 text-xl text-gray-300 leading-relaxed">
                <div>1. <span className="text-white font-semibold">DeFi yields</span> (live now) → 8-12% APY attracts users, Grey = 0%</div>
                <div>2. <span className="text-white font-semibold">Cards</span> (Q1 2026) → Mass market unlock</div>
                <div>3. <span className="text-white font-semibold">Together</span> → Unbeatable moat</div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-lg text-gray-500 mb-5 leading-relaxed">
                <span className="font-semibold text-white">Why they can't copy:</span> Grey built on fiat rails → 18-24 month rebuild to access DeFi. By then we have cards + network effects + multi-country.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Nigeria → Ghana/Kenya → LatAm → SEA (anywhere fiat fails)
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <p className="text-2xl text-gray-400 mb-5">Contact:</p>
            <p className="text-3xl font-bold text-white mb-3">Abraham Ojes, CEO</p>
            <p className="text-xl text-gray-400">abraham@autospend.ai</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
