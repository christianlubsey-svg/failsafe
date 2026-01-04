import { TextField, TextareaField, ListField, SelectField, QuarterField } from './Fields'
import { getPersonalizedDescription, getPersonalizedFieldLabel, getPersonalizedPlaceholder } from '../utils/promptPersonalization'

export default function SectionRenderer({ section, data, onChange, lifeStageProfile }) {
  const sectionData = data[section.id] || {}

  const updateField = (fieldId, value) => {
    onChange({
      ...sectionData,
      [fieldId]: value
    })
  }

  // Get personalized description for this section
  const personalizedDescription = getPersonalizedDescription(section.id, lifeStageProfile)
  const description = personalizedDescription || section.description

  const renderField = (field) => {
    const value = sectionData[field.id]

    // Get personalized label and placeholder if available
    const personalizedLabel = getPersonalizedFieldLabel(section.id, field.id, lifeStageProfile)
    const personalizedPlaceholder = getPersonalizedPlaceholder(section.id, field.id, lifeStageProfile)

    const enhancedField = {
      ...field,
      label: personalizedLabel || field.label,
      placeholder: personalizedPlaceholder || field.placeholder
    }

    switch (field.type) {
      case 'text':
        return (
          <TextField
            key={field.id}
            field={enhancedField}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      case 'textarea':
        return (
          <TextareaField
            key={field.id}
            field={enhancedField}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      case 'list':
        return (
          <ListField
            key={field.id}
            field={enhancedField}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      case 'select':
        return (
          <SelectField
            key={field.id}
            field={enhancedField}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      case 'quarter':
        return (
          <QuarterField
            key={field.id}
            field={enhancedField}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="text-sm font-medium text-blue-600 mb-1">
          Part {section.part}: {section.partName}
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          {section.title}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
        {personalizedDescription && (
          <div className="mt-2 text-xs text-blue-600 italic">
            Personalized for your situation
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 pt-6">
        {section.fields.map(renderField)}
      </div>
    </div>
  )
}
