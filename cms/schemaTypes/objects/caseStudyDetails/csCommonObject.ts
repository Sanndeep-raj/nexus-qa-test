import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const csCommonObject = defineType({
  name: 'csCommonObject',
  title: 'Content',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
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
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
