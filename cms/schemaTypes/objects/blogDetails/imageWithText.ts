import { defineField, defineType } from "sanity";
import { imageRequired } from "../../../utils/commonValidations";

// imageWithText.ts
export const imageWithText = defineType({
  name: 'imageWithText',
  title: 'Text & Image section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'banner',
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
      name: 'subtitle',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'richTextEditor',
      validation: Rule => Rule.required()
    }),
  ]
});
