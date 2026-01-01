import { useState } from 'react'

export function TextField({ field, value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block text-slate-700 font-medium mb-2">
        {field.label}
      </label>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
      />
      {field.suggestions && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-sm text-slate-500">Suggestions:</span>
          {field.suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onChange(suggestion)}
              className="px-3 py-1 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function TextareaField({ field, value, onChange }) {
  const rows = field.rows || 4

  return (
    <div className="mb-6">
      <label className="block text-slate-700 font-medium mb-2">
        {field.label}
      </label>
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        rows={rows}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
      />
    </div>
  )
}

export function ListField({ field, value, onChange }) {
  const [newItem, setNewItem] = useState('')
  const items = value || []

  const addItem = () => {
    if (newItem.trim()) {
      onChange([...items, newItem.trim()])
      setNewItem('')
    }
  }

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index))
  }

  return (
    <div className="mb-6">
      <label className="block text-slate-700 font-medium mb-2">
        {field.label}
      </label>

      <div className="space-y-2 mb-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
            <span className="flex-1 text-slate-700">{item}</span>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItem())}
          placeholder={field.placeholder}
          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
        <button
          type="button"
          onClick={addItem}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export function SelectField({ field, value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block text-slate-700 font-medium mb-2">
        {field.label}
      </label>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
      >
        <option value="">Select an option...</option>
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export function QuarterField({ field, value, onChange }) {
  const quarterData = value || {
    theme: '',
    objectives: [],
    connection: ''
  }

  const updateQuarter = (key, val) => {
    onChange({
      ...quarterData,
      [key]: val
    })
  }

  return (
    <div className="mb-6 p-6 bg-slate-50 rounded-lg border border-slate-200">
      <h4 className="font-semibold text-slate-800 mb-4">{field.label}</h4>

      {field.subfields.map((subfield) => {
        if (subfield.type === 'text') {
          return (
            <div key={subfield.id} className="mb-4">
              <label className="block text-slate-700 text-sm font-medium mb-2">
                {subfield.label}
              </label>
              <input
                type="text"
                value={quarterData[subfield.id] || ''}
                onChange={(e) => updateQuarter(subfield.id, e.target.value)}
                placeholder={subfield.placeholder}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
          )
        } else if (subfield.type === 'textarea') {
          return (
            <div key={subfield.id} className="mb-4">
              <label className="block text-slate-700 text-sm font-medium mb-2">
                {subfield.label}
              </label>
              <textarea
                value={quarterData[subfield.id] || ''}
                onChange={(e) => updateQuarter(subfield.id, e.target.value)}
                placeholder={subfield.placeholder}
                rows={subfield.rows || 3}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>
          )
        } else if (subfield.type === 'list') {
          const [newObjective, setNewObjective] = useState('')
          const objectives = quarterData[subfield.id] || []

          const addObjective = () => {
            if (newObjective.trim()) {
              updateQuarter(subfield.id, [...objectives, newObjective.trim()])
              setNewObjective('')
            }
          }

          const removeObjective = (index) => {
            updateQuarter(subfield.id, objectives.filter((_, i) => i !== index))
          }

          return (
            <div key={subfield.id} className="mb-4">
              <label className="block text-slate-700 text-sm font-medium mb-2">
                {subfield.label}
              </label>

              <div className="space-y-2 mb-2">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
                    <span className="flex-1 text-sm text-slate-700">{objective}</span>
                    <button
                      type="button"
                      onClick={() => removeObjective(index)}
                      className="text-red-500 hover:text-red-700 text-xs font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newObjective}
                  onChange={(e) => setNewObjective(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addObjective())}
                  placeholder={subfield.placeholder}
                  className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
                <button
                  type="button"
                  onClick={addObjective}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition"
                >
                  Add
                </button>
              </div>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
