import vine from '@vinejs/vine'
import type { FieldContext } from '@vinejs/vine/types'
import db from '@adonisjs/lucid/services/db'

type ExistsOptions = {
  table: string
  column: string
}

export const exists = vine.createRule<ExistsOptions>(
  async (value: unknown, options, field: FieldContext) => {
    if (value === undefined || value === null) {
      return
    }

    // Narrow the type manually
    if (typeof value !== 'number' && typeof value !== 'string') {
      field.report('Invalid value type', 'exists', field)
      return
    }

    const record = await db.from(options.table).where(options.column, value).first()

    if (!record) {
      field.report(`The selected ${field.name} is invalid`, 'exists', field)
    }
  }
)
