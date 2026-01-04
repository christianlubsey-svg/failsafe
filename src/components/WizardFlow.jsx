import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { sections } from '../data/sections'
import ProgressBar from './ProgressBar'
import SectionRenderer from './SectionRenderer'
import Dashboard from './Dashboard'

export default function WizardFlow({ lifeStageProfile, onRetakeQuestionnaire }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [planData, setPlanData] = useLocalStorage('year-plan-data', {})
  const [showDashboard, setShowDashboard] = useState(false)

  const currentSection = sections[currentStep]
  const isLastSection = currentStep === sections.length - 1

  const handleNext = () => {
    if (isLastSection) {
      setShowDashboard(true)
    } else {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const updateSectionData = (sectionId, data) => {
    setPlanData((prev) => ({
      ...prev,
      [sectionId]: data
    }))
  }

  const handleEditSection = (sectionIndex) => {
    setShowDashboard(false)
    setCurrentStep(sectionIndex)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleStartOver = () => {
    if (window.confirm('Are you sure you want to start over? This will clear all your data.')) {
      setPlanData({})
      setCurrentStep(0)
      setShowDashboard(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (showDashboard) {
    return (
      <Dashboard
        data={planData}
        sections={sections}
        onEdit={handleEditSection}
        onStartOver={handleStartOver}
        lifeStageProfile={lifeStageProfile}
        onRetakeQuestionnaire={onRetakeQuestionnaire}
      />
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressBar currentStep={currentStep} totalSteps={sections.length} />

      <SectionRenderer
        section={currentSection}
        data={planData}
        onChange={(data) => updateSectionData(currentSection.id, data)}
        lifeStageProfile={lifeStageProfile}
      />

      <div className="flex justify-between items-center mt-8 max-w-3xl mx-auto">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-3 font-medium rounded-lg transition ${
            currentStep === 0
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
          }`}
        >
          Back
        </button>

        <div className="text-sm text-slate-500">
          Auto-saved
        </div>

        <button
          onClick={handleNext}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
        >
          {isLastSection ? 'View Your Plan' : 'Continue'}
        </button>
      </div>

      <div className="text-center mt-6 space-y-2">
        {currentStep > 0 && (
          <button
            onClick={() => setShowDashboard(true)}
            className="text-sm text-blue-600 hover:text-blue-700 underline block mx-auto"
          >
            Jump to dashboard
          </button>
        )}
        {lifeStageProfile && !lifeStageProfile.skipped && (
          <button
            onClick={onRetakeQuestionnaire}
            className="text-xs text-slate-500 hover:text-slate-700 underline block mx-auto"
          >
            Update my profile
          </button>
        )}
      </div>
    </div>
  )
}
