export const sections = [
  // PART 1: REFLECTION
  {
    id: 'regret-review',
    title: 'Regret Review',
    part: 1,
    partName: 'Reflection',
    description: 'Reflection helps us learn from the past and avoid repeating mistakes.',
    fields: [
      {
        id: 'biggest-regret',
        label: 'What is your biggest regret from this past year?',
        type: 'textarea',
        placeholder: 'Write about what you wish had gone differently...'
      },
      {
        id: 'lesson-learned',
        label: 'What lesson did you learn from this?',
        type: 'textarea',
        placeholder: 'What insight did this experience give you?'
      },
      {
        id: 'prevention-strategy',
        label: 'How will you avoid repeating this mistake?',
        type: 'textarea',
        placeholder: 'What specific actions will you take?'
      }
    ]
  },
  {
    id: 'premortem',
    title: 'Premortem Analysis',
    part: 1,
    partName: 'Reflection',
    description: 'Imagining failure helps us design systems to prevent it.',
    fields: [
      {
        id: 'failure-scenarios',
        label: "Imagine it's the end of next year and you DIDN'T achieve your goals. What went wrong? What caused the failure?",
        type: 'textarea',
        placeholder: 'List the ways things could go wrong...',
        rows: 6
      },
      {
        id: 'prevention-plan',
        label: 'Now, design your year to BLOCK those failures. What will you do differently?',
        type: 'textarea',
        placeholder: 'Your strategies to prevent these failures...',
        rows: 6
      }
    ]
  },

  // PART 2: VISION & THEME
  {
    id: 'one-word',
    title: 'One Word Theme',
    part: 2,
    partName: 'Vision & Theme',
    description: 'Your word becomes your filter for decisions throughout the year.',
    fields: [
      {
        id: 'theme-word',
        label: 'Choose a single word that will guide your entire year',
        type: 'text',
        placeholder: 'e.g., Growth, Focus, Balance, Courage...',
        suggestions: ['Growth', 'Focus', 'Balance', 'Courage', 'Create', 'Health', 'Connect', 'Build', 'Learn', 'Rest']
      }
    ]
  },
  {
    id: 'quarterly-seasons',
    title: '90-Day Seasons',
    part: 2,
    partName: 'Vision & Theme',
    description: 'Break your year into 4 chapters. Each quarter is long enough to see real progress, but short enough to stay motivated.',
    fields: [
      {
        id: 'q1',
        label: 'Q1 (Jan-Mar)',
        type: 'quarter',
        subfields: [
          { id: 'theme', label: 'Theme/Focus', type: 'text', placeholder: 'What will you focus on?' },
          { id: 'objectives', label: 'Key Objectives (1-3)', type: 'list', placeholder: 'Add an objective' },
          { id: 'connection', label: 'How this connects to your One Word', type: 'textarea', rows: 2 }
        ]
      },
      {
        id: 'q2',
        label: 'Q2 (Apr-Jun)',
        type: 'quarter',
        subfields: [
          { id: 'theme', label: 'Theme/Focus', type: 'text', placeholder: 'What will you focus on?' },
          { id: 'objectives', label: 'Key Objectives (1-3)', type: 'list', placeholder: 'Add an objective' },
          { id: 'connection', label: 'How this connects to your One Word', type: 'textarea', rows: 2 }
        ]
      },
      {
        id: 'q3',
        label: 'Q3 (Jul-Sep)',
        type: 'quarter',
        subfields: [
          { id: 'theme', label: 'Theme/Focus', type: 'text', placeholder: 'What will you focus on?' },
          { id: 'objectives', label: 'Key Objectives (1-3)', type: 'list', placeholder: 'Add an objective' },
          { id: 'connection', label: 'How this connects to your One Word', type: 'textarea', rows: 2 }
        ]
      },
      {
        id: 'q4',
        label: 'Q4 (Oct-Dec)',
        type: 'quarter',
        subfields: [
          { id: 'theme', label: 'Theme/Focus', type: 'text', placeholder: 'What will you focus on?' },
          { id: 'objectives', label: 'Key Objectives (1-3)', type: 'list', placeholder: 'Add an objective' },
          { id: 'connection', label: 'How this connects to your One Word', type: 'textarea', rows: 2 }
        ]
      }
    ]
  },

  // PART 3: DAILY HABITS & SYSTEMS
  {
    id: 'first-hour',
    title: 'Protect Your First Hour',
    part: 3,
    partName: 'Daily Habits',
    description: "Your first hour sets the tone. Don't hand it to your phone.",
    fields: [
      {
        id: 'first-hour-do',
        label: 'What will you do in your first hour each day?',
        type: 'textarea',
        placeholder: 'Morning routine, exercise, journaling...',
        rows: 4
      },
      {
        id: 'first-hour-avoid',
        label: 'What will you NOT do in your first hour?',
        type: 'textarea',
        placeholder: 'Email, social media, news...',
        rows: 3
      }
    ]
  },
  {
    id: 'two-minute-rule',
    title: 'Two-Minute Rule',
    part: 3,
    partName: 'Daily Habits',
    description: 'If a task takes 2 minutes or less, do it immediately.',
    fields: [
      {
        id: 'procrastination-tasks',
        label: 'List common 2-minute tasks you tend to procrastinate on',
        type: 'list',
        placeholder: 'Add a task (e.g., reply to email, wash dishes...)'
      }
    ]
  },
  {
    id: 'weekly-shutdown',
    title: 'Weekly Shutdown Ritual',
    part: 3,
    partName: 'Daily Habits',
    description: 'Take 5 minutes each week to plan ahead and note unfinished tasks.',
    fields: [
      {
        id: 'shutdown-time',
        label: 'When will you do your weekly shutdown? (Day and time)',
        type: 'text',
        placeholder: 'e.g., Friday at 4:00 PM'
      },
      {
        id: 'shutdown-checklist',
        label: 'What will your shutdown checklist include?',
        type: 'list',
        placeholder: 'Add a checklist item'
      }
    ]
  },
  {
    id: 'weekly-reset',
    title: 'Weekly Reset',
    part: 3,
    partName: 'Daily Habits',
    description: '15 minutes with your calendar and to-do list to reset for the week.',
    fields: [
      {
        id: 'reset-time',
        label: 'When will you do your weekly reset?',
        type: 'text',
        placeholder: 'e.g., Sunday evening at 7:00 PM'
      }
    ]
  },
  {
    id: 'mise-en-place',
    title: 'Mise en Place',
    part: 3,
    partName: 'Daily Habits',
    description: 'Set up your environment the night before so your first hour is frictionless.',
    fields: [
      {
        id: 'night-before-prep',
        label: 'What will you prepare the night before?',
        type: 'list',
        placeholder: 'Add a preparation task'
      }
    ]
  },
  {
    id: 'movement-break',
    title: 'Movement Break',
    part: 3,
    partName: 'Daily Habits',
    description: 'A 15-minute walk break boosts creativity and focus.',
    fields: [
      {
        id: 'walk-time',
        label: 'When will you take your daily walk break?',
        type: 'text',
        placeholder: 'e.g., 2:00 PM'
      }
    ]
  },

  // PART 4: GOAL DESIGN
  {
    id: 'eighty-five-percent',
    title: 'The 85% Rule',
    part: 4,
    partName: 'Goal Design',
    description: 'Pick one goal that\'s hard enough to challenge you, but achievable about 85% of the time.',
    fields: [
      {
        id: 'goal',
        label: 'What is your 85% goal?',
        type: 'text',
        placeholder: 'Your challenging but achievable goal...'
      },
      {
        id: 'measurement',
        label: 'How will you measure success?',
        type: 'text',
        placeholder: 'Specific metric or indicator...'
      },
      {
        id: 'challenging-enough',
        label: 'What does "just challenging enough" look like for this goal?',
        type: 'textarea',
        placeholder: 'Describe the sweet spot of difficulty...',
        rows: 3
      }
    ]
  },
  {
    id: 'reframe-discomfort',
    title: 'Reframe Discomfort',
    part: 4,
    partName: 'Goal Design',
    description: 'Discomfort isn\'t failure—it\'s what learning feels like.',
    fields: [
      {
        id: 'discomfort-embrace',
        label: 'What discomfort are you willing to embrace this year?',
        type: 'textarea',
        placeholder: 'The struggle you will welcome...',
        rows: 4
      },
      {
        id: 'growth-reminder',
        label: 'How will you remind yourself that struggle = growth?',
        type: 'textarea',
        placeholder: 'Your mantra or reminder system...',
        rows: 3
      }
    ]
  },

  // PART 5: FRICTION DESIGN
  {
    id: 'friction-design',
    title: 'Design Friction Wisely',
    part: 5,
    partName: 'Friction Design',
    description: 'Make good behaviors easier. Make bad behaviors harder.',
    fields: [
      {
        id: 'remove-friction-behavior',
        label: 'What behavior do you want to make EASIER?',
        type: 'text',
        placeholder: 'e.g., Exercise, reading, meal prep...'
      },
      {
        id: 'remove-friction-how',
        label: 'How will you remove friction for this?',
        type: 'textarea',
        placeholder: 'Specific ways to make it easier...',
        rows: 3
      },
      {
        id: 'add-friction-behavior',
        label: 'What behavior do you want to make HARDER?',
        type: 'text',
        placeholder: 'e.g., Social media, snacking, procrastination...'
      },
      {
        id: 'add-friction-how',
        label: 'How will you add friction to this?',
        type: 'textarea',
        placeholder: 'Specific barriers to add...',
        rows: 3
      },
      {
        id: 'delete-app',
        label: 'Delete one app from your phone. Which one?',
        type: 'text',
        placeholder: 'The app you will delete...'
      },
      {
        id: 'automation',
        label: 'Set up one auto-pay or automation. What?',
        type: 'text',
        placeholder: 'What will you automate?'
      }
    ]
  },

  // PART 6: ACCOUNTABILITY
  {
    id: 'public-promise',
    title: 'Public Promise',
    part: 6,
    partName: 'Accountability',
    description: 'Sharing a goal with someone increases follow-through.',
    fields: [
      {
        id: 'shared-goal',
        label: 'Pick ONE goal to share publicly',
        type: 'text',
        placeholder: 'The goal you will share...'
      },
      {
        id: 'share-with',
        label: 'Who will you share it with?',
        type: 'text',
        placeholder: 'Person or group...'
      },
      {
        id: 'check-in',
        label: 'Will they check in with you? How often?',
        type: 'text',
        placeholder: 'e.g., Weekly on Mondays'
      }
    ]
  },
  {
    id: 'track-wins',
    title: 'Track Small Wins',
    part: 6,
    partName: 'Accountability',
    description: 'Daily progress tracking builds momentum.',
    fields: [
      {
        id: 'tracking-method',
        label: 'How will you track your daily wins?',
        type: 'select',
        options: ['App', 'Journal', 'Spreadsheet', 'Other']
      },
      {
        id: 'review-time',
        label: 'When will you do your daily review?',
        type: 'text',
        placeholder: 'e.g., 9:00 PM'
      }
    ]
  },
  {
    id: 'feedback-fridays',
    title: 'Feedback Fridays',
    part: 6,
    partName: 'Accountability',
    description: 'Regular feedback accelerates improvement.',
    fields: [
      {
        id: 'feedback-person',
        label: 'Who will you ask for feedback?',
        type: 'text',
        placeholder: 'Name or role...'
      },
      {
        id: 'feedback-question',
        label: 'What question will you ask them?',
        type: 'text',
        placeholder: 'e.g., "What\'s one thing I could do better?"'
      }
    ]
  },

  // PART 7: YOUR CIRCLE
  {
    id: 'your-circle',
    title: 'Curate Your Circle',
    part: 7,
    partName: 'Your Circle',
    description: 'You need three types of people: someone who cheers you on, someone who coaches you, and someone who challenges you.',
    fields: [
      {
        id: 'cheerleader',
        label: 'Who is your CHEERLEADER? (celebrates your wins)',
        type: 'text',
        placeholder: 'Name...'
      },
      {
        id: 'coach',
        label: 'Who is your COACH? (guides and advises)',
        type: 'text',
        placeholder: 'Name...'
      },
      {
        id: 'challenger',
        label: 'Who is your CHALLENGER? (pushes you to grow)',
        type: 'text',
        placeholder: 'Name...'
      }
    ]
  },

  // PART 8: SUBTRACTION & REST
  {
    id: 'to-dont-list',
    title: 'To-Don\'t List',
    part: 8,
    partName: 'Subtraction & Rest',
    description: 'Success is as much about what you say NO to.',
    fields: [
      {
        id: 'stop-doing',
        label: 'What will you STOP doing this year?',
        type: 'list',
        placeholder: 'Add something to stop'
      },
      {
        id: 'not-worth-time',
        label: 'What\'s not worth your time anymore?',
        type: 'list',
        placeholder: 'Add a time-waster'
      }
    ]
  },
  {
    id: 'micro-sabbath',
    title: 'Micro Sabbath',
    part: 8,
    partName: 'Subtraction & Rest',
    description: 'Schedule short pauses with zero stimulation. 15 minutes of nothingness.',
    fields: [
      {
        id: 'sabbath-time',
        label: 'When will you take your micro sabbath?',
        type: 'text',
        placeholder: 'e.g., Daily at 3:00 PM'
      },
      {
        id: 'no-stimulation',
        label: 'What does "no stimulation" mean for you?',
        type: 'textarea',
        placeholder: 'Your definition of rest...',
        rows: 3
      }
    ]
  },
  {
    id: 'gratitude-practice',
    title: 'Gratitude Practice - 26 Thank You Notes',
    part: 8,
    partName: 'Subtraction & Rest',
    description: 'One thank-you note every two weeks = 26 people appreciated.',
    fields: [
      {
        id: 'thank-you-list',
        label: 'List people you want to thank this year (aim for 26)',
        type: 'list',
        placeholder: 'Add a person to thank'
      }
    ]
  }
]
