import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const voiceOfValorians = defineType({
  name: 'voiceOfValorians',
  title: 'Voice Of Valorians',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Author Image',
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
    {
      name: 'authorName',
      type: 'string',
      title: 'Author Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'authorRole',
      type: 'string',
      title: 'Author Role',
      validation: Rule => Rule.required()
    },
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'richTextEditor',
      validation: Rule => Rule.required()
    }),
  ],
})
