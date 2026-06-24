import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { awardGroups } from '../../constants'

export const awardsType = defineField({
  name: 'awards',
  type: 'document',
  icon: CubeIcon,
  groups: awardGroups,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'awardCard' }],
      group: 'awards',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Awards and Recognitions',
      };
    },
  },
})
