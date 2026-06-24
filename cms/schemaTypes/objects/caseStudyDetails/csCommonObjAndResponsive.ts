import { defineType, defineField } from 'sanity'

export const csCommonObjAndResponsive = defineType({
  name: 'csCommonObjAndResponsive',
  title: 'Content',
  type: 'object',
  fields: [

    defineField({
      name: 'media',
      type: 'responsiveImage',
      validation: Rule => Rule.required()
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
