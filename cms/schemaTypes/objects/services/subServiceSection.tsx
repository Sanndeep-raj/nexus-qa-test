import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { serviceGroup } from '../../../constants'
import { uniqueKeyInArray } from '../../../utils/commonValidations'

export const subServiceSection = defineField({
  name: 'subServiceSection',
  type: 'object',
  title: "Our Services",
  icon: CubeIcon,
  groups: serviceGroup,
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
      group: "key",
      options: {
        list: [
          { title: 'AI/ML', value: 'AI/ML' },
          { title: 'Data Analytics', value: 'Data Analytics' },
          { title: 'Cloud Modernization', value: 'Cloud Modernization' },
          { title: 'Digital Commerce', value: 'Digital Commerce' },
          { title: 'Digital Experience', value: 'Digital Experience' },
          { title: 'Digtal Process Automation', value: 'Digtal Process Automation' },
          { title: 'Enterprise Software', value: 'Enterprise Software' },
          { title: 'Mobile App', value: 'Mobile App' },
          { title: 'Product Engineering', value: 'Product Engineering' },
          { title: 'QA Testing', value: 'QA Testing' },
        ],
        layout: 'dropdown'
      },
      validation: uniqueKeyInArray('key', 'subServices')
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faqs',
      type: 'array',
      group: "faqs",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          name: 'faq',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              type: 'richTextEditor',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
