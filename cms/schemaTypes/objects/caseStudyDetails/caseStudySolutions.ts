import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const caseStudySolutions = defineType({
  name: 'caseStudySolutions',
  title: 'Details',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
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
      name: 'description',
      title: 'Description',
      type: 'richTextEditor',
      validation: Rule => Rule.required()
    }),
  ],
})
