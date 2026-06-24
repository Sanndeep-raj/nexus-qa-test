import { defineType, defineField } from 'sanity'

export const titleAndDescription = defineType({
  name: 'titleAndDescription',
  title: 'Contents',
  type: 'object',
  fields: [
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
