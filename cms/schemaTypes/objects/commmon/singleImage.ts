import { defineType, defineField } from 'sanity'
import { imageRequired } from '../../../utils/commonValidations'

export const singleImage = defineType({
  name: 'singleImage',
  title: 'Image',
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
  ],
  preview: {
    select: {
      image: 'image',
      alt: 'image.alt',
    },
    prepare(selection) {
      const { image, alt } = selection;
      return {
        title: alt || 'Untitled image',
        media: image,
      };
    },
  },
})
