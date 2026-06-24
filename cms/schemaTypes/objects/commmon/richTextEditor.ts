import { ColorWheelIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export const richTextEditor = defineType({
  name: 'richTextEditor',
  title: 'Rich Text Editor',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          // Text Color annotation
          {
            name: 'textColor',
            type: 'object',
            title: 'Text Color',
            icon: ColorWheelIcon,
            fields: [
              defineField({
                name: 'color',
                title: 'Color',
                type: 'color',
                options: {
                  disableAlpha: true,
                },
              }),
            ],
          },
          // Link annotation
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'string',
              }),
              defineField({
                name: 'openInNewTab',
                title: 'Open in new tab',
                type: 'boolean',
                initialValue: true,
              }),
            ],
          },
        ],
      },
    },
  ],
})
