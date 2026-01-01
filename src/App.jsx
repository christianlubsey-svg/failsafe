import { useState } from 'react'
import WizardFlow from './components/WizardFlow'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Year Planning
          </h1>
          <p className="text-slate-600">
            Design your year with intention
          </p>
        </header>

        <WizardFlow />
      </div>
    </div>
  )
}

export default App
