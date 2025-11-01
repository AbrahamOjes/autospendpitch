import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function NetworkEffect() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-center text-white">
            The network effect is measurable
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="border border-gray-800 p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Referral Mechanics</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">42%</span>
                  <p>of users referred by existing users (105 of 250)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">2.5</span>
                  <p>new users per referrer on average</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">2wk</span>
                  <p>Referrals happen within 2 weeks of first transaction</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="border border-gray-800 p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">P2P Creates Lock-In</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="mb-2">Users with 3+ P2P connections:</p>
                  <div className="text-4xl font-bold text-white">98% retention</div>
                </div>
                <div>
                  <p className="mb-2">Users with 0 P2P connections:</p>
                  <div className="text-4xl font-bold text-gray-400">89% retention</div>
                </div>
                <div>
                  <p className="mb-2">Avg balance after 5 P2P transactions:</p>
                  <div className="text-4xl font-bold text-white">$1,200</div>
                  <p className="text-sm text-gray-500">(vs $650 average)</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="border border-gray-800 p-8"
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-white">The Flywheel</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
              {[
                'User saves in USDC',
                'Refers friend who needs dollars',
                'Friend signs up',
                'Both do P2P transfer (free)',
                'Both users now have higher balance',
                'Lower churn',
                'They refer their networks',
                'Cycle repeats'
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="border border-gray-700 px-4 py-2 text-center min-w-[200px]">
                    {step}
                  </div>
                  {index < 7 && (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                      className="text-white text-2xl hidden md:block"
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2 }}
            className="text-center text-2xl font-semibold text-gray-400 mt-12 mb-16"
          >
            At 10K users, we project <span className="text-white">35% of transactions</span> will be P2P
            <br />
            <span className="text-gray-400 text-lg">(zero marginal cost, maximum retention)</span>
          </motion.p>

          {/* GTM Strategy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2.2 }}
            className="border-t-2 border-gray-800 pt-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-center text-white">
              Growth Strategy: Virality to Scale
            </h2>

            <div className="border border-gray-800 p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Phase 1: Content-First Acquisition</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-700 p-6">
                  <div className="text-xl font-bold text-white mb-2">1. Viral Content</div>
                  <p className="text-gray-400 text-sm mb-3">$0-3 CAC</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Short-form video daily</li>
                    <li>• Multi-language content</li>
                    <li>• TikTok, Reels, Shorts</li>
                  </ul>
                  <p className="text-white font-semibold mt-3 text-sm">Target: 40% of growth</p>
                </div>

                <div className="border border-gray-700 p-6">
                  <div className="text-xl font-bold text-white mb-2">2. Influencers</div>
                  <p className="text-gray-400 text-sm mb-3">$8-12 CAC</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 10K-200K creators</li>
                    <li>• Performance-based</li>
                    <li>• Authentic stories</li>
                  </ul>
                  <p className="text-white font-semibold mt-3 text-sm">Target: 35% of growth</p>
                </div>

                <div className="border border-gray-700 p-6">
                  <div className="text-xl font-bold text-white mb-2">3. SEO Authority</div>
                  <p className="text-gray-400 text-sm mb-3">$0 CAC</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Educational content</li>
                    <li>• Long-tail keywords</li>
                    <li>• Organic search</li>
                  </ul>
                  <p className="text-white font-semibold mt-3 text-sm">Target: 15% of growth</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-bold text-white mb-3">Phase 2: Paid Scaling (Month 6+)</h4>
                <p className="text-gray-400">ONLY after organic proof - Ads at $15-20 CAC (Target: 10% of growth)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-800 p-6">
                <h4 className="text-lg font-bold text-white mb-2">Fallback Plan:</h4>
                <p className="text-gray-400 text-sm">
                  If no viral hits by Month 3, pivot to paid diaspora targeting ($20-25 CAC, still works at 8:1 LTV/CAC)
                </p>
              </div>
              <div className="border border-gray-800 p-6">
                <h4 className="text-lg font-bold text-white mb-2">Budget Allocation:</h4>
                <p className="text-gray-400 text-sm">
                  $15K content testing (Month 1-3) + $45K growth (Month 4-6)
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
