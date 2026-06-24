import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { serviceGroup } from '../../constants'

export const servicePageType = defineField({
  name: 'servicePage',
  type: 'document',
  icon: CubeIcon,
  groups: serviceGroup,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subServices',
      title: "Our Services",
      type: 'array',
      group: "sub-services",
      options: {
        sortable: false,
      },
      of: [
        { type: 'subServiceSection' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Services',
      };
    },
  },
})
