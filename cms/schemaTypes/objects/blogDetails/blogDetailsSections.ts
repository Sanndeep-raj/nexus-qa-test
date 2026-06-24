import { defineType, defineField } from 'sanity'

export const blogDetailsSections = defineType({
  name: 'blogDetailsSections',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'widgets',
      title: 'Widgets',
      type: 'array',
      of: [
        { type: 'textSection' },
        { type: 'imageWithText' },
        { type: "blogFeatures" }
      ]
    })
  ]
})
