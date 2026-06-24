import { defineType, defineField } from 'sanity'
import { imageRequired, noEmptyString } from '../../../utils/commonValidations'

export const blogCard = defineType({
  name: 'blogCard',
  title: 'Blog',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Blog Image',
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
      name: 'domains',
      title: 'Domains',
      type: 'array',
      of: [{ type: 'string', validation: noEmptyString }],
      validation: Rule => Rule.required().max(3).error('You can specify up to 3 domains'),
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
      name: 'badge',
      title: 'Badge',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})
