import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Appendix() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  const sections = [
    {
      id: 'competition',
      title: 'Competitive Deep Dive',
      content: (
        <div className="space-y-8">
          <div className="border border-gray-800 p-6 rounded-[32px]">
            <h4 className="text-2xl font-bold text-white mb-4">Two Types of Competitors:</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-bold text-gray-300 mb-3">Fiat Fintech (Grey, Raenest)</h5>
                <div className="grid md:grid-cols-2 gap-4 text-lg">
                  <div>
                    <p className="font-semibold mb-2" style={{ color: '#6080DB' }}>Strong:</p>
                    <ul className="text-gray-300 space-y-1 list-disc list-inside">
                      <li>Cards live, massive scale</li>
                      <li>Grey: 2M users</li>
                      <li>Raenest: 1M users ($11M Series A)</li>
                      <li>Deep fiat access</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold mb-2">Weak:</p>
                    <ul className="text-gray-300 space-y-1 list-disc list-inside">
                      <li>0% yield</li>
                      <li>Fiat rails = 18-24 months to access DeFi</li>
                      <li>Would need complete rebuild on crypto rails</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xl font-bold text-gray-300 mb-3">Stablecoin-Native (Cenoa, Onboard)</h5>
                <div className="grid md:grid-cols-2 gap-4 text-lg">
                  <div>
                    <p className="font-semibold mb-2" style={{ color: '#6080DB' }}>Strong:</p>
                    <ul className="text-gray-300 space-y-1 list-disc list-inside">
                      <li>Cards + some yield</li>
                      <li>Cenoa: 400K users, 5% APY</li>
                      <li>Onboard: 50K users</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold mb-2">Weak:</p>
                    <ul className="text-gray-300 space-y-1 list-disc list-inside">
                      <li>Shallow Nigeria fiat access</li>
                      <li>No virtual naira accounts</li>
                      <li>Onboard: 0% yield</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-[32px]">
            <h4 className="text-2xl font-bold text-white mb-4">Our Dual Moat:</h4>
            <div className="space-y-4 text-lg text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">1. DeFi Yields (LIVE NOW)</p>
                <ul className="space-y-1 list-disc list-inside ml-4">
                  <li>8-12% APY vs their 0-5%</li>
                  <li>Built on $670B+ institutional protocols</li>
                  <li>To replicate: Fiat players need 18-24 month rebuild</li>
                  <li>By then we have 50K users + network effects</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">2. Cards + Deep Fiat (Q1 2026)</p>
                <ul className="space-y-1 list-disc list-inside ml-4">
                  <li>Virtual naira accounts (30-sec onboarding)</li>
                  <li>Signify cards partnership</li>
                  <li>PSP license in progress</li>
                  <li>To replicate: Stablecoin players need 12-18 months</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-[32px]">
            <h4 className="text-2xl font-bold text-white mb-4">The Honest Math:</h4>
            <div className="space-y-3 text-lg text-gray-300">
              <p><span className="font-semibold text-white">Scale disadvantage:</span> 3,650x (3.65M vs 1,000 users)</p>
              <p><span className="font-semibold text-white">Yield advantage:</span> 8-12% vs their 0-5%</p>
              <p><span className="font-semibold text-white">Target:</span> 50K users = 1.4% of their combined base</p>
              <p><span className="font-semibold text-white">Time advantage:</span> 18-24 months before they can match our yields</p>
              <p className="text-xl font-bold text-white pt-4">
                The bet: Yield differential + cards (Q1) = enough to capture 1.4% of their base before they can respond.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-[32px]">
            <h4 className="text-2xl font-bold text-white mb-4">What It Takes to Beat Us:</h4>
            <div className="space-y-3 text-lg text-gray-300">
              <p><span className="font-semibold text-white">Raenest/Grey:</span> 18-24 months to rebuild on crypto rails for real DeFi</p>
              <p><span className="font-semibold text-white">Cenoa:</span> Boost from 5% to 8-12% + build Nigeria depth</p>
              <p><span className="font-semibold text-white">Onboard:</span> Add Nigeria fiat depth + add any yield</p>
              <p className="text-xl font-bold text-white pt-4">
                What we'll have by then: Cards (Q1 2026), 50K users, PSP license, Ghana/Kenya expansion, 85% retention locking them in.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faqs',
      title: 'Honest FAQs',
      content: (
        <div className="space-y-6">
          {[
            {
              q: '"8-12% APY sounds too good to be true"',
              a: "Industry benchmark: 5-6% average (Visa 2025 Report). We optimize across Morpho/Aave/Credit Coop for 8-12%. Users choose conservative (5-6%) or optimized (10-12%). Protocols have $670B+ originated, $14.8B active loans. Used by Coinbase, Société Générale. Not experimental."
            },
            {
              q: '"What if cards slip past Q1?"',
              a: "We're growing on yield alone (1,000 users, 85% retention). Just slower. Yield differential (8-12% vs Grey's 0%) is compelling."
            },
            {
              q: '"Is 3% P2P volume enough to claim network effects?"',
              a: "No. It's a signal, not a moat yet. We need 20%+ to call it real. That's 12-18 months away."
            },
            {
              q: '"Can you keep CAC at $15-20?"',
              a: "Maybe not. If it goes to $25-30, we're still viable (18:1 LTV/CAC). Won't know until we test paid."
            },
            {
              q: '"Why can\'t Grey just add DeFi?"',
              a: "They'd need to rebuild on crypto rails. 18-24 months minimum. By then we have cards + users."
            },
            {
              q: '"What\'s your actual edge?"',
              a: "Today: Only one with 8-12% yield (competitors at 0%). Q1 2026: Only one with yield + cards. Moat: Built on $670B+ infrastructure competitors can't access without 18-24 month rebuild."
            },
            {
              q: '"How is this different from Aave directly?"',
              a: "1. Nigerians fund with naira (we handle crypto complexity). 2. We optimize across protocols for best rates. 3. Cards coming Q1 2026. Most Nigerians don't know what Aave is. We make it invisible."
            },
            {
              q: '"What are the DeFi risks?"',
              a: "Smart contract risk: All protocols audited. $670B+ originated without major hacks. Rate volatility: 4-16% historical range. We model conservatively at 7% midpoint. Regulatory: Protocols already institutional (Coinbase, Société Générale). We maintain proper licensing."
            }
          ].map((faq, index) => (
            <div key={index} className="border-l-2 border-gray-700 pl-6">
              <p className="font-bold text-white text-lg mb-2">{faq.q}</p>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'numbers',
      title: 'The Numbers',
      content: (
        <div className="space-y-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="py-3 text-lg font-bold text-white">Metric</th>
                  <th className="py-3 text-lg font-bold text-white">Now</th>
                  <th className="py-3 text-lg font-bold text-white">Q1 '26</th>
                  <th className="py-3 text-lg font-bold text-white">Month 18</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="border-b border-gray-800">
                  <td className="py-3 text-gray-300">Users</td>
                  <td className="py-3 text-white">1,000</td>
                  <td className="py-3 text-white">5,000</td>
                  <td className="py-3 text-white font-bold">50,000</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 text-gray-300">Revenue/User/Year</td>
                  <td className="py-3 text-white">$105</td>
                  <td className="py-3 text-white">$177</td>
                  <td className="py-3 text-white font-bold">$177</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 text-gray-300">Annual Revenue</td>
                  <td className="py-3 text-white">$26K</td>
                  <td className="py-3 text-gray-500">-</td>
                  <td className="py-3 font-bold text-xl" style={{ color: '#6080DB' }}>$8.8M</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-300">Monthly Profit</td>
                  <td className="py-3 text-red-400">-$5K</td>
                  <td className="py-3" style={{ color: '#6080DB' }}>+$10K</td>
                  <td className="py-3 font-bold" style={{ color: '#6080DB' }}>+$620K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-gray-800 p-6 rounded-[32px]">
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-white">Conservative modeling:</span> 7% APY midpoint, $177/user with cards, break-even Month 6.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">If 30K users:</span> $5.3M ARR, still profitable, still Series A-ready.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'institutional',
      title: 'Institutional Validation',
      content: (
        <div className="space-y-8">
          <div className="border border-gray-800 p-6 rounded-[32px]">
            <h4 className="text-2xl font-bold text-white mb-4">Visa 2025 Onchain Lending Report:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-gray-300">
              <div>• $670B+ total loans originated</div>
              <div>• $14.8B active loans (84% utilization)</div>
              <div>• Average rates: 5.1% APY (lend), 6.4% APR (borrow)</div>
              <div>• 427K monthly loans</div>
            </div>
          </div>

          <div className="border border-gray-800 p-6 rounded-[32px]">
            <h4 className="text-2xl font-bold text-white mb-4">Protocols:</h4>
            <div className="space-y-3 text-lg text-gray-300">
              <div>
                <span className="font-semibold text-white">Morpho:</span> $1.9B active, Coinbase + Société Générale
              </div>
              <div>
                <span className="font-semibold text-white">Credit Coop:</span> Powers Rain card, $175M+ processed
              </div>
              <div>
                <span className="font-semibold text-white">Aave/Compound:</span> $14.8B active, 89% market share
              </div>
            </div>
          </div>

          <p className="text-xl text-white font-semibold">
            We're connecting Nigerians to institutional-grade infrastructure that already processes billions.
          </p>

          <p className="text-sm text-gray-500 italic">
            Reference: Visa (2025). Stablecoins Beyond Payments: The Onchain Lending Opportunity.
          </p>
        </div>
      )
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-6" style={{ backgroundColor: '#0F0E0E' }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-10 text-center text-white">
            Appendix
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16 leading-relaxed">
            Deep dive into FAQs, numbers, and institutional validation
          </p>

          {!isOpen ? (
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto block px-8 py-4 border-2 border-gray-700 hover:border-white text-white font-bold text-lg transition-all rounded-[32px]"
            >
              View Appendix →
            </motion.button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                {sections.map((section) => (
                  <div key={section.id} className="border border-gray-800 rounded-[32px]">
                    <button
                      onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-900 transition-colors"
                    >
                      <span className="text-xl font-bold text-white">{section.title}</span>
                      <span className="text-2xl text-gray-400">
                        {openSection === section.id ? '−' : '+'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openSection === section.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-gray-800 p-6"
                        >
                          {section.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <button
                  onClick={() => setIsOpen(false)}
                  className="mx-auto block mt-8 px-8 py-4 border-2 border-gray-700 hover:border-white text-white font-bold text-lg transition-all"
                >
                  Close Appendix
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  )
}
