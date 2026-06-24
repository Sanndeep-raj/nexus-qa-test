import { defineType, defineField } from 'sanity'

export const wellnessInitiatives = defineType({
  name: 'wellnessInitiatives',
  title: 'Employee Wellness Initiatives',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'singleImage' }],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Use <br/> for split the title",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})
