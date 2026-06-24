import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const goodHands = defineType({
  name: 'goodHands',
  title: 'Good Hands',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      validation: imageRequired,
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: Rule => Rule.required()
        }
      ]
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'backgroundGradient',
      type: 'document',
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'gradientStart',
          type: 'color',
          title: 'Gradient Start Color',
          validation: Rule => Rule.required(),
        },
        {
          name: 'gradientEnd',
          type: 'color',
          title: 'Gradient End Color',
          validation: Rule => Rule.required(),
        },
        {
          name: 'gradientAngle',
          type: 'number',
          title: 'Gradient Angle (degrees)',
          validation: (Rule) => Rule.min(0).max(360).required()
        },
      ],
    }),
  ],
})
