import { useState } from 'react'
import { questionnaireQuestions, welcomeText } from '../data/questionnaireQuestions'

export default function LifeStageQuestionnaire({ onComplete, onSkip }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showWelcome, setShowWelcome] = useState(true)

  const question = questionnaireQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / questionnaireQuestions.length) * 100

  const handleAnswer = (questionId, value) => {
    const question = questionnaireQuestions.find(q => q.id === questionId)

    if (question.type === 'multi') {
      const currentAnswers = answers[questionId] || []
      let newAnswers

      if (currentAnswers.includes(value)) {
        newAnswers = currentAnswers.filter(v => v !== value)
      } else {
        newAnswers = [...currentAnswers, value]
        // Enforce max selections if specified
        if (question.maxSelections && newAnswers.length > question.maxSelections) {
          newAnswers = newAnswers.slice(-question.maxSelections)
        }
      }

      setAnswers(prev => ({
        ...prev,
        [questionId]: newAnswers
      }))
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value
      }))
    }
  }

  const handleNext = () => {
    if (currentQuestion < questionnaireQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      handleComplete()
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleComplete = () => {
    const profile = {
      careerStage: answers.careerStage || null,
      familySituation: answers.familySituation || null,
      timeAvailability: answers.timeAvailability || null,
      focusAreas: answers.focusAreas || [],
      changeAppetite: answers.changeAppetite || null,
      planningExperience: answers.planningExperience || null,
      planningChallenges: answers.planningChallenges || [],
      completedAt: new Date().toISOString(),
      skipped: false
    }
    onComplete(profile)
  }

  const handleSkipQuestionnaire = () => {
    const profile = {
      careerStage: null,
      familySituation: null,
      timeAvailability: null,
      focusAreas: [],
      changeAppetite: null,
      planningExperience: null,
      planningChallenges: [],
      completedAt: new Date().toISOString(),
      skipped: true
    }
    onSkip(profile)
  }

  const isAnswered = () => {
    const answer = answers[question.id]
    if (question.optional) return true
    if (question.type === 'multi') {
      return answer && answer.length > 0
    }
    return answer !== undefined && answer !== null
  }

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              {welcomeText.title}
            </h1>
            <p className="text-xl text-slate-600 mb-4">
              {welcomeText.subtitle}
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">
              {welcomeText.description}
            </p>
            <p className="text-sm text-slate-500 italic">
              {welcomeText.skipNote}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowWelcome(false)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              Get Started
            </button>
            <button
              onClick={handleSkipQuestionnaire}
              className="px-8 py-4 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg transition"
            >
              Skip for Now
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Question {currentQuestion + 1} of {questionnaireQuestions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            {question.question}
          </h2>
          {question.subtitle && (
            <p className="text-slate-600 mb-6">
              {question.subtitle}
            </p>
          )}
          {question.optional && (
            <p className="text-sm text-slate-500 italic mb-6">
              Optional - you can skip this question
            </p>
          )}

          <div className="space-y-3 mb-8">
            {question.options.map((option) => {
              const isSelected = question.type === 'multi'
                ? (answers[question.id] || []).includes(option.value)
                : answers[question.id] === option.value

              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300'
                    }`}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`font-medium ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                      {option.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-slate-200">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 font-medium rounded-lg transition ${
                currentQuestion === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              }`}
            >
              Back
            </button>

            <button
              onClick={handleSkipQuestionnaire}
              className="text-sm text-slate-500 hover:text-slate-700 underline"
            >
              Skip questionnaire
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered()}
              className={`px-8 py-3 font-medium rounded-lg shadow-md transition ${
                isAnswered()
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white hover:shadow-lg transform hover:scale-105'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questionnaireQuestions.length - 1 ? 'Complete' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
