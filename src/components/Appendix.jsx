import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Appendix() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  const sections = [
    {
      id: 'infrastructure',
      title: 'Virtual Account Infrastructure',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-3">How it works technically:</h4>
            <div className="space-y-4 text-gray-300">
              <div className="border-l-2 border-gray-700 pl-4">
                <p className="font-semibold text-white">Step 1: Account Creation (2 minutes)</p>
                <p className="text-sm">User signs up → KYC via Persona → System generates unique virtual ₦ account → Account linked to USDC wallet</p>
              </div>
              <div className="border-l-2 border-gray-700 pl-4">
                <p className="font-semibold text-white">Step 2: Funding (Instant)</p>
                <p className="text-sm">User transfers ₦ → Banking partner detects transfer → Webhook notifies system (&lt; 5s) → ₦ credited</p>
              </div>
              <div className="border-l-2 border-gray-700 pl-4">
                <p className="font-semibold text-white">Step 3: Conversion (&lt; 30 seconds)</p>
                <p className="text-sm">User initiates conversion → Real-time FX rate → ₦ debited, USDC credited → Ready to spend</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Why This Is Hard to Replicate</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Banking Relationships: 6-12 months (most banks won't work with crypto)</li>
              <li>• Technical Integration: 3-6 months (custom webhook + FX engine)</li>
              <li>• Regulatory Approval: 6-12 months (VASP + PSP licenses)</li>
              <li className="text-white font-semibold">Total barrier to entry: 12-18 months minimum</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'numbers',
      title: 'Numbers & Projections',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 text-gray-400">Metric</th>
                <th className="py-2 text-gray-400">Now</th>
                <th className="py-2 text-gray-400">6 months</th>
                <th className="py-2 text-gray-400">18 months</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-b border-gray-800">
                <td className="py-2">Users</td>
                <td>250+</td>
                <td>1K</td>
                <td>10K</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2">Volume</td>
                <td>$500K+</td>
                <td>$2.5M</td>
                <td>$30M</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2">CAC</td>
                <td>$0</td>
                <td>$15</td>
                <td>$18</td>
              </tr>
              <tr>
                <td className="py-2">LTV/CAC</td>
                <td>∞</td>
                <td>14:1</td>
                <td>11:1</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: 'faqs',
      title: 'FAQs',
      content: (
        <div className="space-y-4">
          {[
            {
              q: 'Just another crypto exchange?',
              a: 'No. Exchanges are for traders. We\'re a savings + spending platform. 85% of our volume is people converting to USDC to preserve value, not to trade.'
            },
            {
              q: 'What stops banks from copying you?',
              a: 'Banks can\'t pivot to stablecoins without rebuilding infrastructure. Nigerian banks tried for 3 years—still no USDC product. We have 12-18 month regulatory head start.'
            },
            {
              q: 'How do you beat Binance P2P or Chipper Cash?',
              a: 'vs Binance: They\'re crypto-native UX. We\'re mobile banking UX. Different audience. vs Chipper/Grey: They\'re unlicensed. We have VASP + PSP licenses = lower shut-down risk.'
            },
            {
              q: 'What if naira stabilizes?',
              a: 'Demand is structural: Import businesses need USD, freelancers get paid in USD, remittances from diaspora. Even if inflation stops, cross-border commerce continues.'
            },
            {
              q: 'Why give away P2P for free?',
              a: 'Free P2P grows float income (our highest-margin stream at 33% of revenue). Users keep more money on platform = more yield for us. It\'s a retention strategy, not charity.'
            }
          ].map((faq, index) => (
            <div key={index} className="border-l-2 border-gray-700 pl-4">
              <p className="font-semibold text-white mb-1">{faq.q}</p>
              <p className="text-gray-300 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      )
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-center text-white">
            Appendix
          </h2>
          <p className="text-xl text-center text-gray-400 mb-12">
            Deep dive into infrastructure, numbers, and FAQs
          </p>

          {!isOpen ? (
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto block px-8 py-4 border-2 border-gray-700 hover:border-white text-white font-bold text-lg transition-all"
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
                  <div key={section.id} className="border border-gray-800">
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
