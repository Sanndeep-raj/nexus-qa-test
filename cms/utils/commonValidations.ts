import type { ImageRule } from 'sanity'
import type { StringRule } from 'sanity'
import type { Rule } from 'sanity'

export const imageRequired = (Rule: ImageRule) =>
  Rule.custom((value) => {
    if (!value || !value.asset?._ref) {
      return 'Image is required'
    }
    return true
  })

export const uniqueKeyInArray = (
  field: string,
  arrayPath: string
) => (Rule: StringRule) =>
    Rule.required().custom((keyValue: string | undefined, context: any) => {
      if (!keyValue) return true

      const siblings = context?.document?.[arrayPath] || []

      if (!Array.isArray(siblings)) return true

      const duplicate = siblings.filter((item: any) => item?.[field] === keyValue)

      if (duplicate.length > 1) {
        return `Each ${field} must be unique in this array.`
      }

      return true
    })

export const noEmptyString = (Rule: Rule) =>
  Rule.custom((value: unknown) => {
    if (typeof value === 'string' && value.trim() === '') {
      return 'Empty strings are not allowed'
    }
    return true
  })