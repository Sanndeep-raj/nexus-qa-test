import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { blogListingGroups } from '../../constants'

export const blogListingType = defineField({
  name: 'blogListing',
  type: 'document',
  icon: CubeIcon,
  groups: blogListingGroups,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ourBlogs',
      title: 'Our Blogs',
      type: 'array',
      of: [{ type: 'blogCard' }],
      group: 'our-blogs',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog Listing',
      };
    },
  },
})
