import TitlePage from './components/TitlePage'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import TAM from './components/TAM'
import Traction from './components/Traction'
import Competitive from './components/Competitive'
import Team from './components/Team'
import Fundraise from './components/Fundraise'
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
      <Team />
      <Fundraise />
      <CTA />
      <PDFExport />
    </div>
  )
}

export default App
