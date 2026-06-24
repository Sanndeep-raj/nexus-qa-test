import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'

import { validateSlug } from '../../utils/validateSlug'
import { blogDetailsGroups } from '../../constants'
import { imageRequired, noEmptyString } from '../../utils/commonValidations'

export const blogDetailsType = defineField({
  name: 'blogDetails',
  title: 'Blog Details',
  type: 'document',
  icon: CubeIcon,
  groups: blogDetailsGroups,
  fields: [
    defineField({
      name: 'title',
      group: 'first-section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      group: 'slug',
      type: 'slug',
      options: { source: 'title' },
      description: "Use blog details page as https://valoriz.com/blog/{{slug}} - Replace {{slug}}",
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
      name: 'badge',
      group: 'first-section',
      type: 'string',
    }),
    defineField({
      name: 'domains',
      group: 'first-section',
      type: 'array',
      validation: Rule => Rule.required().max(3).error('You can specify up to 3 domains'),
      of: [
        {
          type: 'string',
          validation: noEmptyString
        }
      ],
    }),
    defineField({
      name: 'description',
      group: 'first-section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'document',
      group: 'first-section',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
          description: 'E.g., "AI Product Manager"',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'authorImage',
          title: 'Author Image',
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
      ]
    }),
    defineField({
      name: 'responsiveBanner',
      title: 'Responsive Banner',
      type: 'responsiveImage',
      group: 'second-section',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'blogDetailsSections',
      title: 'Sections',
      group: 'third-section',
      type: 'blogDetailsSections',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'similarBlogs',
      title: 'Similar Blogs',
      type: 'array',
      of: [{ type: 'similarBlogs' }],
      group: 'similar-blogs',
    }),
  ],
})
