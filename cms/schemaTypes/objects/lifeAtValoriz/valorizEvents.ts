import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const valorizEvents = defineType({
  name: 'valorizEvents',
  title: 'Events',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
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
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ],
})
