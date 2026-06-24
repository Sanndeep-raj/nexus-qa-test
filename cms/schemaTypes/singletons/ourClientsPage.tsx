import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { GROUPS } from '../../constants'

export const ourClientsPageType = defineField({
  name: 'ourClientsPage',
  type: 'document',
  icon: CubeIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Clients',
      };
    },
  },
})
