# Year Planning Platform

An interactive web-based planning platform that guides users through a structured annual planning process. This MVP provides a guided journaling experience - walking users step-by-step through reflection, goal-setting, and habit design based on proven productivity frameworks.

## Features

- **Guided Wizard Flow**: Step-by-step progression through 8 parts and 23 sections
- **Auto-Save**: All progress automatically saved to local storage
- **Progress Tracking**: Visual progress bar showing completion status
- **Interactive Dashboard**: Summary view of your complete plan
- **Export Options**: Download as Markdown or copy to clipboard
- **Edit Anytime**: Go back and edit any section at any time

## Planning Framework

### Part 1: Reflection
- Regret Review
- Premortem Analysis

### Part 2: Vision & Theme
- One Word Theme
- 90-Day Seasons (Quarterly Planning)

### Part 3: Daily Habits & Systems
- Protect Your First Hour
- Two-Minute Rule
- Weekly Shutdown Ritual
- Weekly Reset
- Mise en Place
- Movement Break

### Part 4: Goal Design
- The 85% Rule
- Reframe Discomfort

### Part 5: Friction Design
- Design Friction Wisely

### Part 6: Accountability
- Public Promise
- Track Small Wins
- Feedback Fridays

### Part 7: Your Circle
- Curate Your Circle (Cheerleader, Coach, Challenger)

### Part 8: Subtraction & Rest
- To-Don't List
- Micro Sabbath
- Gratitude Practice (26 Thank You Notes)

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Local Storage** - Data persistence

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx       # Final summary view
│   ├── Fields.jsx           # Input field components
│   ├── ProgressBar.jsx      # Progress indicator
│   ├── SectionRenderer.jsx  # Renders individual sections
│   └── WizardFlow.jsx       # Main wizard controller
├── data/
│   └── sections.js          # All section definitions
├── hooks/
│   └── useLocalStorage.js   # Local storage hook
├── App.jsx                  # Root component
└── index.css                # Tailwind styles
```

## How It Works

1. Users progress through sections one at a time
2. Each section has specific prompts and input fields
3. Data is automatically saved to local storage after each change
4. Users can go back to edit previous sections
5. Final dashboard shows a comprehensive summary
6. Plans can be exported as Markdown or copied to clipboard

## Future Enhancements

- PDF export with professional formatting
- Email reminders for weekly/quarterly reviews
- Progress tracking over time
- Mobile-optimized version
- Data sync across devices
- Printable worksheet version

## License

MIT
