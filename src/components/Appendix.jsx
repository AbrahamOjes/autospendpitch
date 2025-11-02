import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Appendix() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  const sections = [
    {
      id: 'faqs',
      title: 'Honest FAQs',
      content: (
        <div className="space-y-6">
          {[
            {
              q: '"40% APY sounds too good to be true"',
              a: "It's DeFi. Katana vaults on Ronin/Polygon. Audited protocols. Users can choose safe 4% or optimized 40%. Real yield, already live."
            },
            {
              q: '"What if cards slip past Q1?"',
              a: "We're still growing on yield alone (already at 250 users). Just slower. Cards are the accelerant, not the only path."
            },
            {
              q: '"Is 3% P2P volume enough to claim network effects?"',
              a: "No. It's a signal, not a moat yet. We need 20%+ to call it real. That's 12-18 months away."
            },
            {
              q: '"Can you keep CAC at $15-20?"',
              a: "Maybe not. If it goes to $25-30, we're still viable (15:1 LTV/CAC). But won't know until we test paid at scale."
            },
            {
              q: '"Why can\'t Grey just add DeFi?"',
              a: "They'd need to rebuild their entire infrastructure on crypto rails. 18-24 months minimum. By then we have cards + users."
            },
            {
              q: '"What\'s your actual edge?"',
              a: "Today: Only one with 40% yield (competitors at 0%). Q1 2026: Only one with yield + cards. Moat: Can't be copied without complete rebuild."
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
                  <td className="py-3 text-white">250</td>
                  <td className="py-3 text-white">5,000</td>
                  <td className="py-3 text-white font-bold">50,000</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 text-gray-300">Monthly Revenue</td>
                  <td className="py-3 text-white">$3K</td>
                  <td className="py-3 text-white">$63K</td>
                  <td className="py-3 text-white font-bold">$633K</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 text-gray-300">Annual Revenue</td>
                  <td className="py-3 text-white">$36K</td>
                  <td className="py-3 text-gray-500">-</td>
                  <td className="py-3 text-green-500 font-bold text-xl">$7.6M</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-300">Monthly Profit</td>
                  <td className="py-3 text-red-400">-$5K</td>
                  <td className="py-3 text-green-500">+$13K</td>
                  <td className="py-3 text-green-500 font-bold">+$513K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-gray-800 p-6">
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-white">Assumptions:</span> Cards launch Q1 drives 3x growth. Revenue/user jumps from $80-368 → $152-440 with cards. Break-even Month 6, profitable onwards.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Conservative case (30K users):</span> $4.5M ARR, still profitable, still Series A-ready.
            </p>
            <p className="text-white font-bold mt-4">
              Cards are critical. Without them, timeline extends but doesn't break.
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
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
            Deep dive into FAQs and numbers
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
