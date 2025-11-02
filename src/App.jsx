import TitlePage from './components/TitlePage'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import TAM from './components/TAM'
import Traction from './components/Traction'
import Competitive from './components/Competitive'
import UnitEconomics from './components/UnitEconomics'
import GTM from './components/GTM'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Fundraise from './components/Fundraise'
import Appendix from './components/Appendix'
import CTA from './components/CTA'
import PDFExport from './components/PDFExport'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <TitlePage />
      <Hero />
      <Problem />
      <Solution />
      <TAM />
      <Traction />
      <Competitive />
      <UnitEconomics />
      <GTM />
      <Roadmap />
      <Team />
      <Fundraise />
      <Appendix />
      <CTA />
      <PDFExport />
    </div>
  )
}

export default App
