import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function GTM() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-white">
            Growth Strategy
          </h2>
          
          <p className="text-2xl text-center text-gray-400 mb-16">
            Virality to Trust to Authority to Scale
          </p>

          <div className="border border-gray-800 p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">What is already working:</h3>
            <div className="space-y-4 text-gray-300">
              <p>• 42% organic referral rate (proof of shareability)</p>
              <p>• WhatsApp/Telegram community-driven growth</p>
              <p>• 96% retention = users want to talk about it</p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Phase 1: Content-First Acquisition
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border border-gray-800 p-6">
              <div className="text-2xl font-bold mb-4 text-white">1</div>
              <h4 className="text-xl font-bold text-white mb-2">Viral Content</h4>
              <p className="text-gray-400 mb-4">$0-3 CAC</p>
              <p className="text-sm text-gray-400 mb-2">Short-form video daily</p>
              <p className="text-sm text-gray-400 mb-2">Multi-language content</p>
              <p className="text-white font-semibold mt-4">Target: 40% of growth</p>
            </div>

            <div className="border border-gray-800 p-6">
              <div className="text-2xl font-bold mb-4 text-white">2</div>
              <h4 className="text-xl font-bold text-white mb-2">Influencers</h4>
              <p className="text-gray-400 mb-4">$8-12 CAC</p>
              <p className="text-sm text-gray-400 mb-2">10K-200K creators</p>
              <p className="text-sm text-gray-400 mb-2">Performance-based</p>
              <p className="text-white font-semibold mt-4">Target: 35% of growth</p>
            </div>

            <div className="border border-gray-800 p-6">
              <div className="text-2xl font-bold mb-4 text-white">3</div>
              <h4 className="text-xl font-bold text-white mb-2">SEO Authority</h4>
              <p className="text-gray-400 mb-4">$0 CAC</p>
              <p className="text-sm text-gray-400 mb-2">Educational content</p>
              <p className="text-sm text-gray-400 mb-2">Long-tail keywords</p>
              <p className="text-white font-semibold mt-4">Target: 15% of growth</p>
            </div>
          </div>

          <div className="border border-gray-800 p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Phase 2: Paid Scaling (Month 6+)
            </h3>
            <p className="text-gray-300 mb-4">ONLY after organic proof</p>
            <p className="text-gray-400">Ads at $15-20 CAC - Target: 10% of growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-800 p-6">
              <h4 className="text-lg font-bold text-white mb-2">Fallback:</h4>
              <p className="text-gray-400 text-sm">
                Pivot to paid diaspora targeting if needed ($20-25 CAC, 8:1 LTV/CAC)
              </p>
            </div>
            <div className="border border-gray-800 p-6">
              <h4 className="text-lg font-bold text-white mb-2">Budget:</h4>
              <p className="text-gray-400 text-sm">
                $15K testing + $45K growth
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
