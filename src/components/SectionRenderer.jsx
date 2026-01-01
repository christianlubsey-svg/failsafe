import { TextField, TextareaField, ListField, SelectField, QuarterField } from './Fields'

export default function SectionRenderer({ section, data, onChange }) {
  const sectionData = data[section.id] || {}

  const updateField = (fieldId, value) => {
    onChange({
      ...sectionData,
      [fieldId]: value
    })
  }

  const renderField = (field) => {
    const value = sectionData[field.id]

    switch (field.type) {
      case 'text':
        return (
          <TextField
            key={field.id}
            field={field}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      case 'textarea':
        return (
          <TextareaField
            key={field.id}
            field={field}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      case 'list':
        return (
          <ListField
            key={field.id}
            field={field}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      case 'select':
        return (
          <SelectField
            key={field.id}
            field={field}
            value={value}
            onChange={(val) => updateField(field.id, val)}
          />
        )

      case 'quarter':
        return (
          <QuarterField
            key={field.id}
            field={field}
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
          {section.description}
        </p>
      </div>

      <div className="border-t border-slate-200 pt-6">
        {section.fields.map(renderField)}
      </div>
    </div>
  )
}
