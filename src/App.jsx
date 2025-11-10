import TitlePage from './components/TitlePage'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import TAM from './components/TAM'
import Competitive from './components/Competitive'
import UnitEconomics from './components/UnitEconomics'
import Growth from './components/Growth'
import Team from './components/Team'
import Fundraise from './components/Fundraise'
import Appendix from './components/Appendix'
import CTA from './components/CTA'
import PDFExport from './components/PDFExport'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F0E0E' }}>
      <TitlePage />
      <Hero />
      <Problem />
      <Solution />
      <TAM />
      <Competitive />
      <UnitEconomics />
      <Growth />
      <Team />
      <Fundraise />
      <Appendix />
      <CTA />
      <PDFExport />
    </div>
  )
}

export default App
