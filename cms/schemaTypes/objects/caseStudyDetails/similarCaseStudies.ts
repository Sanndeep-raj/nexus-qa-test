import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const similarCaseStudies = defineType({
  name: 'similarCaseStudies',
  title: 'Similar Case Studies',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Case Study Image',
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
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})
