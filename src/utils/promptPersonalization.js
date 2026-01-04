// Personalize section descriptions and field labels based on user's life stage profile

export function getPersonalizedDescription(sectionId, profile) {
  if (!profile || profile.skipped) {
    return null // Use default description
  }

  const personalizations = {
    'regret-review': () => {
      if (profile.planningExperience === 'first-time') {
        return 'Reflection can feel uncomfortable, but it\'s one of the most valuable parts of planning. There\'s no wrong answer here—just be honest with yourself.'
      }
      if (profile.planningExperience === 'tried-struggled') {
        return 'You\'ve been here before. Think about what didn\'t work last year—not to beat yourself up, but to understand the patterns.'
      }
      return null
    },

    'premortem': () => {
      if (profile.planningChallenges.includes('unexpected-events')) {
        return 'You know life throws curveballs. The premortem helps you plan for them instead of being blindsided. What could derail you, and how will you prepare?'
      }
      if (profile.planningChallenges.includes('lose-motivation')) {
        return 'Motivation fades for everyone. Imagining failure helps us build systems that work even when we don\'t feel like it.'
      }
      return null
    },

    'one-word': () => {
      if (profile.changeAppetite === 'maintain') {
        return 'Your word can be about protection and stability, not just growth. What quality do you want to preserve and strengthen this year?'
      }
      if (profile.changeAppetite === 'complete-reset') {
        return 'You\'re ready for transformation. Your word should reflect this new chapter. What defines the person you\'re becoming?'
      }
      return null
    },

    'quarterly-seasons': () => {
      if (profile.timeAvailability === 'stretched-thin' || profile.timeAvailability === 'survival-mode') {
        return 'With limited time, quarters help you focus on just one thing at a time. What can you realistically accomplish in 90 days without overwhelming yourself?'
      }
      if (profile.focusAreas.length > 0) {
        return 'Break your year into focused chapters. Each quarter can tackle a different priority from your focus areas.'
      }
      return null
    },

    'first-hour': () => {
      if (profile.familySituation === 'parent-young-children' &&
          (profile.timeAvailability === 'stretched-thin' || profile.timeAvailability === 'survival-mode')) {
        return 'With young kids, "first hour" might mean before they wake up or during nap time. Even 15-20 minutes of protected time counts. What\'s the most realistic window you could protect?'
      }
      if (profile.familySituation === 'parent-young-children') {
        return 'Your first hour might start before the kids wake up, or after school drop-off. What window works best for protected focus time?'
      }
      if (profile.timeAvailability === 'significant-free-time') {
        return 'You have space to build a substantial morning routine. Think beyond just one activity—what would your ideal first hour look like if you designed it intentionally?'
      }
      if (profile.focusAreas.includes('career-income')) {
        return 'Your first hour can be a competitive advantage. Top performers protect this time fiercely. What high-value work would you do before the day\'s distractions begin?'
      }
      if (profile.timeAvailability === 'stretched-thin' || profile.timeAvailability === 'survival-mode') {
        return 'Even 20 minutes of protected time can make a difference. What\'s the smallest morning block you could realistically protect?'
      }
      return null
    },

    'two-minute-rule': () => {
      if (profile.timeAvailability === 'stretched-thin' || profile.timeAvailability === 'survival-mode') {
        return 'When you\'re overwhelmed, small tasks pile up fast. The two-minute rule prevents that snowball.'
      }
      return null
    },

    'weekly-shutdown': () => {
      if (profile.careerStage === 'mid-career' || profile.careerStage === 'early-career') {
        return 'A Friday shutdown ritual helps you actually enjoy your weekend instead of thinking about Monday. Take 5 minutes to close out the week properly.'
      }
      if (profile.familySituation === 'parent-young-children' || profile.familySituation === 'parent-teens') {
        return 'Family weekends are precious. A quick shutdown on Friday means you can be fully present without work stress lingering.'
      }
      return null
    },

    'eighty-five-percent': () => {
      if (profile.changeAppetite === 'small-improvements') {
        return 'You\'re looking for sustainable progress, not dramatic overhauls. What\'s one goal that feels achievable but still requires real effort—something you\'d succeed at about 85% of the time?'
      }
      if (profile.changeAppetite === 'significant-transformation' || profile.changeAppetite === 'complete-reset') {
        return 'You\'re ready for significant change. That\'s exciting—but even transformation works best with achievable milestones. What\'s an ambitious-but-realistic goal you can commit to?'
      }
      if (profile.planningChallenges.includes('too-many-goals')) {
        return 'Here\'s the challenge: pick just ONE goal. Not three, not five. The 85% rule only works with focus. What single goal matters most right now?'
      }
      if (profile.timeAvailability === 'stretched-thin' || profile.timeAvailability === 'survival-mode') {
        return 'With limited bandwidth, your 85% goal needs to be realistic. What can you commit to even on your hardest days?'
      }
      return null
    },

    'reframe-discomfort': () => {
      if (profile.planningExperience === 'tried-struggled') {
        return 'Past struggles don\'t mean future failure. They mean you\'re learning. What discomfort are you ready to lean into this time, knowing it\'s part of growth?'
      }
      if (profile.planningChallenges.includes('lose-motivation')) {
        return 'Motivation fades, but commitment to growth doesn\'t. What struggle will you embrace as evidence you\'re getting stronger?'
      }
      return null
    },

    'friction-design': () => {
      if (profile.focusAreas.includes('health')) {
        return 'Make healthy choices easier and unhealthy ones harder. Small environmental changes compound over time.'
      }
      if (profile.focusAreas.includes('work-life-balance')) {
        return 'Design friction to protect your boundaries. Make it harder to check work email at night, easier to unplug and recharge.'
      }
      return null
    },

    'public-promise': () => {
      if (profile.planningChallenges.includes('struggle-accountability')) {
        return 'You identified accountability as a challenge. This is your solution. Sharing a goal publicly is uncomfortable but powerful—that\'s why it works.'
      }
      return null
    },

    'track-wins': () => {
      if (profile.planningChallenges.includes('lose-motivation')) {
        return 'Tracking daily wins is the antidote to lost motivation. Small progress becomes visible proof you\'re moving forward.'
      }
      if (profile.planningChallenges.includes('dont-review')) {
        return 'Daily tracking creates a natural review habit. Just 2 minutes a day keeps your goals visible and alive.'
      }
      return null
    },

    'your-circle': () => {
      if (profile.careerStage === 'student' || profile.careerStage === 'early-career') {
        return 'Early in your career, these relationships are especially important. Your circle shapes your trajectory. Choose people who represent where you want to go.'
      }
      if (profile.careerStage === 'career-transition') {
        return 'During a transition, you need all three: someone to believe in you (cheerleader), someone who\'s been there (coach), and someone to push you forward (challenger).'
      }
      return null
    },

    'to-dont-list': () => {
      if (profile.timeAvailability === 'stretched-thin' || profile.timeAvailability === 'survival-mode') {
        return 'You\'re already overwhelmed. Subtraction matters more than addition. What can you remove to create breathing room?'
      }
      if (profile.focusAreas.includes('work-life-balance')) {
        return 'Balance comes from saying no, not from doing more efficiently. What drains your energy without adding real value?'
      }
      return null
    },

    'micro-sabbath': () => {
      if (profile.timeAvailability === 'stretched-thin' || profile.timeAvailability === 'survival-mode') {
        return 'When you\'re running on empty, rest isn\'t optional—it\'s strategic. Even 15 minutes of true rest can reset your system.'
      }
      if (profile.focusAreas.includes('work-life-balance')) {
        return 'Rest is part of balance, not a reward for finishing everything. Schedule nothingness like you schedule meetings.'
      }
      return null
    }
  }

  const personalizer = personalizations[sectionId]
  return personalizer ? personalizer() : null
}

export function getPersonalizedFieldLabel(sectionId, fieldId, profile) {
  if (!profile || profile.skipped) {
    return null // Use default label
  }

  const key = `${sectionId}.${fieldId}`

  const personalizations = {
    'regret-review.biggest-regret': () => {
      if (profile.planningExperience === 'first-time') {
        return 'What\'s one thing from this past year you wish had gone differently? (There\'s no wrong answer here—just be honest.)'
      }
      if (profile.planningExperience === 'tried-struggled') {
        return 'Looking at last year, what\'s a regret you want to make sure you learn from this time?'
      }
      return null
    },

    'first-hour.first-hour-do': () => {
      if (profile.familySituation === 'parent-young-children') {
        return 'What will you do in your protected morning window (before kids wake up, during nap time, or after drop-off)?'
      }
      if (profile.timeAvailability === 'stretched-thin' || profile.timeAvailability === 'survival-mode') {
        return 'What will you do in your first 20-30 minutes each day?'
      }
      return null
    },

    'eighty-five-percent.goal': () => {
      if (profile.planningChallenges.includes('too-many-goals')) {
        return 'What is your ONE 85% goal? (Just one—you can add more later if this one sticks.)'
      }
      return null
    }
  }

  const personalizer = personalizations[key]
  return personalizer ? personalizer() : null
}

export function getPersonalizedPlaceholder(sectionId, fieldId, profile) {
  if (!profile || profile.skipped) {
    return null // Use default placeholder
  }

  const key = `${sectionId}.${fieldId}`

  const personalizations = {
    'quarterly-seasons.q1.theme': () => {
      if (profile.focusAreas.length > 0) {
        const focusMap = {
          'career-income': 'Career Growth',
          'health': 'Health Foundation',
          'relationships': 'Relationship Building',
          'personal-development': 'Learning & Growth',
          'financial-stability': 'Financial Health',
          'work-life-balance': 'Balance & Rest',
          'major-project': 'Major Project',
          'life-organization': 'Life Systems'
        }
        return `e.g., ${focusMap[profile.focusAreas[0]] || 'Your focus area'}`
      }
      return null
    },

    'first-hour.first-hour-do': () => {
      if (profile.focusAreas.includes('health')) {
        return 'e.g., Exercise, healthy breakfast, meditation...'
      }
      if (profile.focusAreas.includes('personal-development')) {
        return 'e.g., Reading, learning, journaling...'
      }
      if (profile.focusAreas.includes('career-income')) {
        return 'e.g., Deep work, strategic planning, skill development...'
      }
      return null
    }
  }

  const personalizer = personalizations[key]
  return personalizer ? personalizer() : null
}

// Get a summary of the user's profile for display
export function getProfileSummary(profile) {
  if (!profile || profile.skipped) {
    return null
  }

  const labels = {
    careerStage: {
      'student': 'Student or Recent Graduate',
      'early-career': 'Early Career',
      'mid-career': 'Mid-Career',
      'career-transition': 'Career Transition',
      'approaching-retirement': 'Approaching Retirement',
      'not-working': 'Not Currently Working'
    },
    familySituation: {
      'alone': 'Living Alone',
      'roommates': 'Living with Roommates/Family',
      'partnership-no-kids': 'In Partnership, No Children',
      'parent-young-children': 'Parent of Young Children',
      'parent-teens': 'Parent of Teens/Adult Children',
      'caregiver': 'Caregiver'
    },
    timeAvailability: {
      'significant-free-time': 'Significant Free Time',
      'moderate-free-time': 'Moderate Free Time',
      'busy-manageable': 'Busy but Manageable',
      'stretched-thin': 'Stretched Thin',
      'survival-mode': 'Survival Mode'
    },
    changeAppetite: {
      'maintain': 'Maintain & Protect',
      'small-improvements': 'Small Improvements',
      'moderate-changes': 'Moderate Changes',
      'significant-transformation': 'Significant Transformation',
      'complete-reset': 'Complete Reset'
    },
    planningExperience: {
      'first-time': 'First-Time Planner',
      'tried-struggled': 'Tried Planning Before',
      'occasional-mixed': 'Occasional Planner',
      'regular-helpful': 'Regular Planner'
    }
  }

  return {
    careerStage: labels.careerStage[profile.careerStage] || null,
    familySituation: labels.familySituation[profile.familySituation] || null,
    timeAvailability: labels.timeAvailability[profile.timeAvailability] || null,
    focusAreas: profile.focusAreas || [],
    changeAppetite: labels.changeAppetite[profile.changeAppetite] || null,
    planningExperience: labels.planningExperience[profile.planningExperience] || null
  }
}
