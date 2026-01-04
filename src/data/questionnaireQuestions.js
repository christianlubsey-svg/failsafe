export const questionnaireQuestions = [
  {
    id: 'careerStage',
    question: 'Where are you in your career journey?',
    type: 'single',
    options: [
      { value: 'student', label: 'Student or recent graduate' },
      { value: 'early-career', label: 'Early career (0-5 years in workforce)' },
      { value: 'mid-career', label: 'Mid-career (established in my field)' },
      { value: 'career-transition', label: 'Career transition or pivot' },
      { value: 'approaching-retirement', label: 'Approaching retirement or retired' },
      { value: 'not-working', label: 'Not currently working / Caregiver / Other' }
    ]
  },
  {
    id: 'familySituation',
    question: 'What does your household look like?',
    type: 'single',
    options: [
      { value: 'alone', label: 'Living alone' },
      { value: 'roommates', label: 'Living with roommates or family (no dependents)' },
      { value: 'partnership-no-kids', label: 'In a partnership, no children' },
      { value: 'parent-young-children', label: 'Parent of young children (under 12)' },
      { value: 'parent-teens', label: 'Parent of teenagers or adult children' },
      { value: 'caregiver', label: 'Caregiver for aging parents or relatives' }
    ]
  },
  {
    id: 'timeAvailability',
    question: 'How would you describe your current time situation?',
    type: 'single',
    options: [
      { value: 'significant-free-time', label: 'I have significant free time to invest in goals' },
      { value: 'moderate-free-time', label: 'I have moderate free time with some flexibility' },
      { value: 'busy-manageable', label: 'My schedule is busy but manageable' },
      { value: 'stretched-thin', label: "I'm stretched thin with very limited free time" },
      { value: 'survival-mode', label: "I'm in survival mode right now" }
    ]
  },
  {
    id: 'focusAreas',
    question: 'What area of life needs the most attention right now?',
    subtitle: 'Select up to 2',
    type: 'multi',
    maxSelections: 2,
    options: [
      { value: 'career-income', label: 'Career growth or income' },
      { value: 'health', label: 'Health and fitness' },
      { value: 'relationships', label: 'Relationships and social life' },
      { value: 'personal-development', label: 'Personal development and learning' },
      { value: 'financial-stability', label: 'Financial stability or goals' },
      { value: 'work-life-balance', label: 'Work-life balance and rest' },
      { value: 'major-project', label: 'A specific major project or goal' },
      { value: 'life-organization', label: 'General life organization' }
    ]
  },
  {
    id: 'changeAppetite',
    question: 'How much change are you ready for?',
    type: 'single',
    options: [
      { value: 'maintain', label: 'I want to maintain and protect what\'s working' },
      { value: 'small-improvements', label: 'Small, steady improvements' },
      { value: 'moderate-changes', label: 'Ready for moderate changes in specific areas' },
      { value: 'significant-transformation', label: 'Open to significant transformation' },
      { value: 'complete-reset', label: 'I need a complete reset' }
    ]
  },
  {
    id: 'planningExperience',
    question: 'Have you done annual planning before?',
    type: 'single',
    options: [
      { value: 'first-time', label: 'This is my first time' },
      { value: 'tried-struggled', label: "I've tried but struggled to follow through" },
      { value: 'occasional-mixed', label: 'I plan occasionally with mixed results' },
      { value: 'regular-helpful', label: 'I plan regularly and find it helpful' }
    ]
  },
  {
    id: 'planningChallenges',
    question: 'What typically gets in the way of your plans?',
    subtitle: 'Select all that apply',
    type: 'multi',
    optional: true,
    options: [
      { value: 'too-many-goals', label: 'I set too many goals' },
      { value: 'lose-motivation', label: 'I lose motivation after a few weeks' },
      { value: 'unexpected-events', label: 'Unexpected life events derail me' },
      { value: 'dont-review', label: "I don't review my plans regularly" },
      { value: 'not-sure-what-want', label: "I'm not sure what I actually want" },
      { value: 'struggle-accountability', label: 'I struggle with accountability' },
      { value: 'underestimate-time', label: 'I underestimate how long things take' }
    ]
  }
]

export const welcomeText = {
  title: 'Before we begin...',
  subtitle: "Let's learn a bit about where you are in life right now.",
  description: 'This takes about 2 minutes and helps us personalize your planning experience. Your answers stay private—stored only on your device.',
  skipNote: 'You can skip this and come back to it later if you prefer.'
}
