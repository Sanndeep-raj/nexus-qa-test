import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'

import { validateSlug } from '../../utils/validateSlug'
import { careerGroup } from '../../constants'

export const careersType = defineField({
  name: 'careers',
  title: 'Careers Apply',
  type: 'document',
  icon: CubeIcon,
  groups: careerGroup,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: "Eg: Senior Python Developer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      description: "Use career apply page as https://valoriz.com/careers-apply/{{slug}} - Replace {{slug}}",
      validation: validateSlug,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: "Eg: Development / Growth & Partnership",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      type: 'string',
      description: "Eg: 4+ Years",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: "Eg: Kochi/Trivandrum",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobDescription',
      title: 'Job Description',
      type: 'richTextEditor',
      validation: Rule => Rule.required()
    }),
  ],
})
