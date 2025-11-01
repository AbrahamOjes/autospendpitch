import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    {
      name: 'Abraham Ojes',
      role: 'Founder & CEO',
      background: 'Ex-Collect App',
      description: 'Built payments infrastructure for thousands'
    },
    {
      name: 'Adewale Martins',
      role: 'Co-founder & CTO',
      background: 'Ex-Collect App, Opay',
      description: 'Built payments infrastructure for millions of users'
    },
    {
      name: 'Blessing Makaraba',
      role: 'Founding Engineer',
      background: 'Ex-Flutterwave / GTBank',
      description: 'Fintech infrastructure specialist'
    },
    {
      name: 'Babajide Apata',
      role: 'Founding Engineer',
      background: 'Ex-Bitso / Interswitch',
      description: 'Crypto payments expert'
    },
    {
      name: 'Abdulfatai Aka',
      role: 'Agentic Systems Engineer',
      background: 'AI & DeFi',
      description: 'Building the future of autonomous finance'
    },
    {
      name: 'Evans Eburu',
      role: 'Blockchain Infra Engineer',
      background: 'DeFi specialist',
      description: 'Smart contract and infrastructure expert'
    }
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-white">
            Team that lived the problem
          </h2>
          <p className="text-2xl text-center text-gray-300 mb-16">
            Built payments infrastructure. Now building the future.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="border border-gray-800 hover:border-gray-700 transition-all p-6"
              >
                <div className="mx-auto mb-4 flex justify-center">
                  <svg viewBox="0 0 80 80" className="w-20 h-20">
                    <rect x="2" y="2" width="76" height="76" fill="white" stroke="#00ff00" strokeWidth="2"/>
                    <rect x="0" y="0" width="76" height="76" fill="none" stroke="#00ff00" strokeWidth="1" opacity="0.3"/>
                    <text x="40" y="52" fontSize="32" fontWeight="bold" fill="black" textAnchor="middle" fontFamily="monospace">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </text>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-1">{member.name}</h3>
                <div className="text-gray-400 text-center font-semibold mb-2">{member.role}</div>
                <div className="text-gray-400 text-sm text-center mb-3">{member.background}</div>
                <p className="text-gray-300 text-sm text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
