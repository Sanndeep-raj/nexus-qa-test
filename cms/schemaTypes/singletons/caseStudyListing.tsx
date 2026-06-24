import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { caseStudyListingGroup } from '../../constants'

export const caseStudyListingType = defineField({
  name: 'caseStudyListing',
  type: 'document',
  icon: CubeIcon,
  groups: caseStudyListingGroup,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caseStudyListings',
      title: 'Case Study',
      type: 'array',
      group: "case-studies",
      of: [{ type: 'caseStudyCard' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Case Study Listing',
      };
    },
  },
})
