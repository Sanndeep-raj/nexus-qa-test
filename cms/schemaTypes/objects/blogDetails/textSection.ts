import { defineField, defineType } from "sanity";

export const textSection = defineType({
  name: 'textSection',
  title: 'Only text section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'richTextEditor',
      validation: Rule => Rule.required()
    }),
  ]
});
