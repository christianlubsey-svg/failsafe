import { useState } from 'react'

export default function Dashboard({ data, sections, onEdit, onStartOver }) {
  const [exportFormat, setExportFormat] = useState(null)

  const exportAsMarkdown = () => {
    let markdown = '# My Year Plan\n\n'
    markdown += `Generated on: ${new Date().toLocaleDateString()}\n\n`
    markdown += '---\n\n'

    sections.forEach((section) => {
      const sectionData = data[section.id] || {}

      markdown += `## ${section.title}\n\n`
      markdown += `*${section.description}*\n\n`

      section.fields.forEach((field) => {
        const value = sectionData[field.id]

        if (!value || (Array.isArray(value) && value.length === 0)) {
          return
        }

        markdown += `**${field.label}**\n\n`

        if (Array.isArray(value)) {
          value.forEach((item) => {
            markdown += `- ${item}\n`
          })
          markdown += '\n'
        } else if (typeof value === 'object') {
          // Quarter field
          if (value.theme) markdown += `Theme: ${value.theme}\n\n`
          if (value.objectives && value.objectives.length > 0) {
            markdown += 'Objectives:\n'
            value.objectives.forEach((obj) => {
              markdown += `- ${obj}\n`
            })
            markdown += '\n'
          }
          if (value.connection) markdown += `Connection: ${value.connection}\n\n`
        } else {
          markdown += `${value}\n\n`
        }
      })

      markdown += '---\n\n'
    })

    // Create download
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-year-plan.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setExportFormat('markdown')
    setTimeout(() => setExportFormat(null), 2000)
  }

  const copyToClipboard = () => {
    let text = 'MY YEAR PLAN\n\n'
    text += `Generated on: ${new Date().toLocaleDateString()}\n\n`

    sections.forEach((section) => {
      const sectionData = data[section.id] || {}

      text += `\n${section.title.toUpperCase()}\n`
      text += `${section.description}\n\n`

      section.fields.forEach((field) => {
        const value = sectionData[field.id]

        if (!value || (Array.isArray(value) && value.length === 0)) {
          return
        }

        text += `${field.label}\n`

        if (Array.isArray(value)) {
          value.forEach((item) => {
            text += `  - ${item}\n`
          })
        } else if (typeof value === 'object') {
          if (value.theme) text += `  Theme: ${value.theme}\n`
          if (value.objectives && value.objectives.length > 0) {
            text += '  Objectives:\n'
            value.objectives.forEach((obj) => {
              text += `    - ${obj}\n`
            })
          }
          if (value.connection) text += `  Connection: ${value.connection}\n`
        } else {
          text += `  ${value}\n`
        }
        text += '\n'
      })
    })

    navigator.clipboard.writeText(text)
    setExportFormat('clipboard')
    setTimeout(() => setExportFormat(null), 2000)
  }

  // Get key data for quick view
  const oneWord = data['one-word']?.['theme-word'] || ''
  const goal85 = data['eighty-five-percent']?.['goal'] || ''
  const cheerleader = data['your-circle']?.['cheerleader'] || ''
  const coach = data['your-circle']?.['coach'] || ''
  const challenger = data['your-circle']?.['challenger'] || ''

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-2">
            Your Year Plan
          </h2>
          <p className="text-slate-600">
            Your roadmap for an intentional year
          </p>
        </div>

        {oneWord && (
          <div className="text-center mb-12 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
            <div className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-2">
              Your One Word
            </div>
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {oneWord}
            </div>
          </div>
        )}

        {/* Quick Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {goal85 && (
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-blue-900 mb-2">Your 85% Goal</h3>
              <p className="text-blue-800">{goal85}</p>
            </div>
          )}

          {(cheerleader || coach || challenger) && (
            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-green-900 mb-3">Your Circle</h3>
              <div className="space-y-2 text-sm">
                {cheerleader && (
                  <div>
                    <span className="font-medium text-green-800">Cheerleader:</span>{' '}
                    <span className="text-green-700">{cheerleader}</span>
                  </div>
                )}
                {coach && (
                  <div>
                    <span className="font-medium text-green-800">Coach:</span>{' '}
                    <span className="text-green-700">{coach}</span>
                  </div>
                )}
                {challenger && (
                  <div>
                    <span className="font-medium text-green-800">Challenger:</span>{' '}
                    <span className="text-green-700">{challenger}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={exportAsMarkdown}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg"
          >
            {exportFormat === 'markdown' ? 'Downloaded!' : 'Download as Markdown'}
          </button>
          <button
            onClick={copyToClipboard}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg"
          >
            {exportFormat === 'clipboard' ? 'Copied!' : 'Copy to Clipboard'}
          </button>
          <button
            onClick={onStartOver}
            className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg transition"
          >
            Start Over
          </button>
        </div>

        {/* All Sections */}
        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">All Sections</h3>

          <div className="space-y-6">
            {sections.map((section, index) => {
              const sectionData = data[section.id] || {}
              const hasData = Object.values(sectionData).some((val) => {
                if (Array.isArray(val)) return val.length > 0
                if (typeof val === 'object') return Object.keys(val).length > 0
                return val && val.toString().trim().length > 0
              })

              return (
                <div
                  key={section.id}
                  className={`p-6 rounded-xl border-2 transition ${
                    hasData
                      ? 'bg-slate-50 border-slate-200'
                      : 'bg-white border-slate-200 border-dashed'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="text-xs font-medium text-slate-500 mb-1">
                        Part {section.part}: {section.partName}
                      </div>
                      <h4 className="text-xl font-semibold text-slate-800">
                        {section.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => onEdit(index)}
                      className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition"
                    >
                      {hasData ? 'Edit' : 'Fill Out'}
                    </button>
                  </div>

                  {hasData ? (
                    <div className="space-y-3 text-sm">
                      {section.fields.map((field) => {
                        const value = sectionData[field.id]
                        if (!value || (Array.isArray(value) && value.length === 0)) {
                          return null
                        }

                        return (
                          <div key={field.id} className="bg-white p-3 rounded-lg">
                            <div className="font-medium text-slate-700 mb-1">
                              {field.label}
                            </div>
                            <div className="text-slate-600">
                              {Array.isArray(value) ? (
                                <ul className="list-disc list-inside">
                                  {value.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              ) : typeof value === 'object' ? (
                                <div className="space-y-1">
                                  {value.theme && <div>Theme: {value.theme}</div>}
                                  {value.objectives && value.objectives.length > 0 && (
                                    <div>
                                      Objectives:
                                      <ul className="list-disc list-inside ml-4">
                                        {value.objectives.map((obj, i) => (
                                          <li key={i}>{obj}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                  {value.connection && <div>Connection: {value.connection}</div>}
                                </div>
                              ) : (
                                value
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-sm italic">Not filled out yet</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
