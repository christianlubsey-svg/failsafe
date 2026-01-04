import { getProfileSummary } from '../utils/promptPersonalization'

function TitlePage({ oneWord, lifeStageProfile }) {
  const currentYear = new Date().getFullYear()
  const date = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  const profileSummary = getProfileSummary(lifeStageProfile)

  return (
    <div className="pdf-title-page">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-slate-800 mb-4">
          My {currentYear} Year Plan
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
      </div>

      {oneWord && (
        <div className="my-12">
          <div className="text-lg font-medium text-slate-600 uppercase tracking-wider mb-3">
            My One Word Theme
          </div>
          <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent py-4">
            {oneWord}
          </div>
        </div>
      )}

      <div className="mt-12 text-slate-600">
        <p className="text-lg mb-2">Generated: {date}</p>
        {profileSummary && !lifeStageProfile.skipped && (
          <div className="mt-6 text-sm">
            <p className="font-medium text-slate-700 mb-2">Life Stage Profile:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {profileSummary.careerStage && (
                <span>{profileSummary.careerStage}</span>
              )}
              {profileSummary.familySituation && (
                <span>• {profileSummary.familySituation}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function PartSection({ part, partName, sections, data }) {
  const partSections = sections.filter(s => s.part === part)

  if (partSections.length === 0) return null

  return (
    <div className="pdf-part-section">
      <div className="pdf-part-header">
        <h2 className="text-2xl font-bold">
          PART {part}: {partName.toUpperCase()}
        </h2>
      </div>

      {partSections.map(section => (
        <SectionContent key={section.id} section={section} data={data[section.id] || {}} />
      ))}
    </div>
  )
}

function SectionContent({ section, data }) {
  const hasData = Object.values(data).some((val) => {
    if (Array.isArray(val)) return val.length > 0
    if (typeof val === 'object') return Object.keys(val).length > 0
    return val && val.toString().trim().length > 0
  })

  if (!hasData) return null

  return (
    <div className="pdf-section">
      <h3 className="pdf-section-title">{section.title}</h3>
      <p className="pdf-section-description">{section.description}</p>

      <div className="pdf-fields">
        {section.fields.map(field => {
          const value = data[field.id]
          if (!value || (Array.isArray(value) && value.length === 0)) {
            return null
          }

          return (
            <div key={field.id} className="pdf-field">
              <div className="pdf-field-label">{field.label}</div>
              <div className="pdf-field-value">
                {Array.isArray(value) ? (
                  <ul className="pdf-list">
                    {value.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : typeof value === 'object' ? (
                  <div className="pdf-quarter-content">
                    {value.theme && (
                      <div className="mb-2">
                        <span className="font-semibold">Theme:</span> {value.theme}
                      </div>
                    )}
                    {value.objectives && value.objectives.length > 0 && (
                      <div className="mb-2">
                        <span className="font-semibold">Objectives:</span>
                        <ul className="pdf-list ml-4 mt-1">
                          {value.objectives.map((obj, i) => (
                            <li key={i}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {value.connection && (
                      <div>
                        <span className="font-semibold">Connection:</span> {value.connection}
                      </div>
                    )}
                  </div>
                ) : (
                  value
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function QuarterlyOverview({ data }) {
  const quarters = ['q1', 'q2', 'q3', 'q4']
  const quarterLabels = {
    q1: 'Q1 (Jan-Mar)',
    q2: 'Q2 (Apr-Jun)',
    q3: 'Q3 (Jul-Sep)',
    q4: 'Q4 (Oct-Dec)'
  }

  const hasQuarterlyData = quarters.some(q => data[q] && data[q].theme)

  if (!hasQuarterlyData) return null

  return (
    <div className="pdf-quarterly-overview">
      <div className="pdf-part-header mb-6">
        <h2 className="text-2xl font-bold">QUARTERLY OVERVIEW</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {quarters.map(quarter => {
          const quarterData = data[quarter]
          if (!quarterData || !quarterData.theme) return null

          return (
            <div key={quarter} className="pdf-quarter-box">
              <h4 className="text-lg font-bold text-blue-700 mb-3">
                {quarterLabels[quarter]}
              </h4>
              <div className="text-sm">
                <div className="mb-2">
                  <span className="font-semibold text-slate-700">Theme:</span>{' '}
                  <span className="text-slate-600">{quarterData.theme}</span>
                </div>
                {quarterData.objectives && quarterData.objectives.length > 0 && (
                  <div>
                    <span className="font-semibold text-slate-700">Objectives:</span>
                    <ul className="pdf-list ml-4 mt-1">
                      {quarterData.objectives.map((obj, i) => (
                        <li key={i} className="text-slate-600">{obj}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SupportCircle({ data }) {
  const { cheerleader, coach, challenger } = data

  if (!cheerleader && !coach && !challenger) return null

  return (
    <div className="pdf-support-section">
      <div className="pdf-part-header mb-6">
        <h2 className="text-2xl font-bold">YOUR SUPPORT CIRCLE</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {cheerleader && (
          <div className="pdf-circle-card">
            <div className="text-lg font-bold text-green-700 mb-2">Cheerleader</div>
            <div className="text-sm text-slate-600 mb-3 italic">Celebrates your wins</div>
            <div className="text-base font-medium text-slate-800">{cheerleader}</div>
          </div>
        )}
        {coach && (
          <div className="pdf-circle-card">
            <div className="text-lg font-bold text-blue-700 mb-2">Coach</div>
            <div className="text-sm text-slate-600 mb-3 italic">Guides and advises</div>
            <div className="text-base font-medium text-slate-800">{coach}</div>
          </div>
        )}
        {challenger && (
          <div className="pdf-circle-card">
            <div className="text-lg font-bold text-purple-700 mb-2">Challenger</div>
            <div className="text-sm text-slate-600 mb-3 italic">Pushes you to grow</div>
            <div className="text-base font-medium text-slate-800">{challenger}</div>
          </div>
        )}
      </div>
    </div>
  )
}

function ClosingSection() {
  return (
    <div className="pdf-closing">
      <div className="text-center py-12">
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
        <p className="text-xl text-slate-700 font-medium mb-4">
          This is your roadmap to an intentional year.
        </p>
        <p className="text-lg text-slate-600 mb-8">
          Review it regularly. Adjust as needed. Make it your own.
        </p>
        <div className="text-sm text-slate-500 italic">
          "The best time to plant a tree was 20 years ago. The second best time is now."
        </div>
      </div>
    </div>
  )
}

export default function PrintableDashboard({ data, sections, lifeStageProfile }) {
  // Group sections by part
  const parts = [
    { id: 1, name: 'Reflection' },
    { id: 2, name: 'Vision & Theme' },
    { id: 3, name: 'Daily Habits' },
    { id: 4, name: 'Goal Design' },
    { id: 5, name: 'Friction Design' },
    { id: 6, name: 'Accountability' },
    { id: 7, name: 'Your Circle' },
    { id: 8, name: 'Subtraction & Rest' }
  ]

  // Get key data
  const oneWord = data['one-word']?.['theme-word'] || ''
  const quarterlyData = data['quarterly-seasons'] || {}
  const circleData = data['your-circle'] || {}

  return (
    <div className="pdf-container">
      {/* Title Page */}
      <TitlePage
        oneWord={oneWord}
        lifeStageProfile={lifeStageProfile}
      />

      {/* Quarterly Overview (special placement after title) */}
      {quarterlyData && Object.keys(quarterlyData).length > 0 && (
        <QuarterlyOverview data={quarterlyData} />
      )}

      {/* All Parts */}
      {parts.map(part => (
        <PartSection
          key={part.id}
          part={part.id}
          partName={part.name}
          sections={sections}
          data={data}
        />
      ))}

      {/* Support Circle (special layout) */}
      <SupportCircle data={circleData} />

      {/* Closing */}
      <ClosingSection />
    </div>
  )
}
