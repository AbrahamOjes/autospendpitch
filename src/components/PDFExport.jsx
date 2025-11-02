import { useState } from 'react'
import html2pdf from 'html2pdf.js'

export default function PDFExport() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)
    
    try {
      const element = document.body
      
      const opt = {
        margin: 0,
        filename: 'Autospend-Pitch-Deck-v8.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#000000'
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait' 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      }

      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('PDF generation failed:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className="bg-white text-black px-6 py-3 font-bold border-2 border-white hover:bg-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating PDF...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </>
        )}
      </button>
    </div>
  )
}
