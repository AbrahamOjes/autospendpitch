import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    { name: 'Abraham Ojes', role: 'Founder & CEO', background: 'Ex-Collect (SME payments infrastructure)' },
    { name: 'Adewale Martins', role: 'Co-founder & CTO', background: 'Ex-Collect, Ex-OPay (millions of users)' },
    { name: 'Blessing Makaraba', role: 'Founding Engineer', background: 'Ex-Flutterwave/GTBank' },
    { name: 'Babajide Apata', role: 'Founding Engineer', background: 'Ex-Bitso/Interswitch' }
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6 relative" style={{ backgroundColor: '#0F0E0E' }}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Anton',sans-serif] mb-20 text-center text-white uppercase" style={{ fontSize: '72px', fontWeight: 400, lineHeight: '100%' }}>Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="border border-gray-800 hover:border-gray-700 transition-all p-8 rounded-[32px]"
              >
                <div className="mx-auto mb-5 flex justify-center">
                  <div className="w-20 h-20 flex items-center justify-center border-2 rounded-lg" style={{ backgroundColor: '#1A1A1A', borderColor: 'rgba(209, 213, 219, 0.2)' }}>
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                <div className="text-gray-400 text-center font-semibold mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm text-center leading-relaxed">{member.background}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
