import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const awardCard = defineType({
  name: 'awardCard',
  title: 'Award',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Award Image',
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
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: Rule => Rule.required(),
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
  ],
})
