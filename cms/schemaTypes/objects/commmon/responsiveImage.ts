import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const responsiveImage = defineType({
  name: 'responsiveImage',
  title: 'Responsive Image',
  type: 'object',
  fields: [
    defineField({
      name: 'desktop',
      title: 'Desktop Image',
      type: 'image',
      validation: imageRequired,
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text (desktop)',
          validation: Rule => Rule.required()
        }
      ]
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile Image',
      type: 'image',
      validation: imageRequired,
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text (mobile)',
          validation: Rule => Rule.required()
        }
      ]
    })
  ]
})
