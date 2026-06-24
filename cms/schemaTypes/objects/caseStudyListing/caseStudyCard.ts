import { defineType, defineField } from 'sanity'
import { imageRequired, noEmptyString } from '../../../utils/commonValidations'

export const caseStudyCard = defineType({
  name: 'caseStudyCard',
  title: 'Case Study',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Case study Image',
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
      name: 'capabilities',
      title: 'Capabilities',
      type: 'array',
      of: [{ type: 'string', validation: noEmptyString }],
      validation: Rule => Rule.required().max(3).error('You can specify up to 3 capabilities'),
    }),
    defineField({
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [{ type: 'string', validation: noEmptyString }],
      validation: Rule => Rule.required().max(3).error('You can specify up to 3 industries'),
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
