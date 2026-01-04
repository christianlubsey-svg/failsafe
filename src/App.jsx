import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import LifeStageQuestionnaire from './components/LifeStageQuestionnaire'
import WizardFlow from './components/WizardFlow'

function App() {
  const [lifeStageProfile, setLifeStageProfile] = useLocalStorage('life-stage-profile', null)
  const [showQuestionnaire, setShowQuestionnaire] = useState(false)

  useEffect(() => {
    // Show questionnaire if profile doesn't exist
    if (!lifeStageProfile) {
      setShowQuestionnaire(true)
    }
  }, [lifeStageProfile])

  const handleQuestionnaireComplete = (profile) => {
    setLifeStageProfile(profile)
    setShowQuestionnaire(false)
  }

  const handleRetakeQuestionnaire = () => {
    setShowQuestionnaire(true)
  }

  if (showQuestionnaire) {
    return (
      <LifeStageQuestionnaire
        onComplete={handleQuestionnaireComplete}
        onSkip={handleQuestionnaireComplete}
      />
    )
  }

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

        <WizardFlow
          lifeStageProfile={lifeStageProfile}
          onRetakeQuestionnaire={handleRetakeQuestionnaire}
        />
      </div>
    </div>
  )
}

export default App
