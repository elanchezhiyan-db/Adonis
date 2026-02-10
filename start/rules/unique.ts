import vine from '@vinejs/vine'
import { VineString, VineNumber } from '@vinejs/vine'
import db from '@adonisjs/lucid/services/db'
import { FieldContext } from '@vinejs/vine/types'

/**
 * Options accepted by the rule
 */
type Options = {
  table: string
  column: string
}

/**
 * The implementation of the "isUnique" validation rule
 */
async function isUnique(value: unknown, options: Options, field: FieldContext) {
  /**
   * Only handle string or number values; ignore others so
   * standard validators (like vine.string()) can handle them
   */
  if (typeof value !== 'string' && typeof value !== 'number') {
    return
  }

  /**
   * Check the database to see if a record already exists
   */
  const result = await db
    .from(options.table)
    .select(options.column)
    .where(options.column, value)
    .first()

  /**
   * If a result is found, report the validation error
   */
  if (result) {
    field.report('The {{ field }} is already taken', 'isUnique', field)
  }
}

export const isUniqueRule = vine.createRule(isUnique)

declare module '@vinejs/vine' {
  interface VineString {
    isUnique(options: Options): this
  }
  interface VineNumber {
    isUnique(options: Options): this
  }
}
/**
 * Register the macro for VineString
 */
VineString.macro('isUnique', function (this: VineString, options: Options) {
  return this.use(isUniqueRule(options))
})

/**
 * Register the macro for VineNumber
 */
VineNumber.macro('isUnique', function (this: VineNumber, options: Options) {
  return this.use(isUniqueRule(options))
})
