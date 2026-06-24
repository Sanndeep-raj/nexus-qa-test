import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { lifeAtGroups } from '../../constants'

export const lifeAtValoriz = defineField({
  name: 'lifeAtValoriz',
  type: 'document',
  icon: CubeIcon,
  groups: lifeAtGroups,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'insideValoriz',
      title: 'Inside Valoriz',
      type: 'array',
      of: [{ type: 'singleImage' }],
      group: 'medias',
    }),
    defineField({
      name: 'voiceOfValorians',
      title: 'Voice Of Valorians',
      type: 'array',
      of: [{ type: 'voiceOfValorians' }],
      group: 'voiceOfValorians',
    }),
    defineField({
      name: 'valorizEvents',
      title: 'Events',
      type: 'array',
      of: [{ type: 'valorizEvents' }],
      group: 'valorizEvents',
    }),
    defineField({
      name: 'wellnessInitiatives',
      title: 'Employee Wellness Initiatives',
      type: 'array',
      of: [{ type: 'wellnessInitiatives' }],
      group: 'wellnessInitiatives',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Life At Valoriz',
      };
    },
  },
})

