import vine from '@vinejs/vine'
import type { FieldContext } from '@vinejs/vine/types'

export const inArray = vine.createRule(
  (value: unknown, options: { values: string[] }, field: FieldContext) => {
    if (value === undefined || value === null) {
      return
    }

    if (typeof value !== 'string') {
      field.report('Invalid value', 'inArray', field)
      return
    }

    const valid = options.values.includes(value)

    if (!valid) {
      field.report(`The selected ${field.name} is invalid`, 'inArray', field)
    }
  }
)
