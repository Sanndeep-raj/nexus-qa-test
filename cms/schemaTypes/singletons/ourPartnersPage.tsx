import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { partnersGroup } from '../../constants'
import { imageRequired } from '../../utils/commonValidations'

export const ourPartnersPageType = defineField({
  name: 'ourPartnersPage',
  type: 'document',
  icon: CubeIcon,
  groups: partnersGroup,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partnersInfo',
      type: 'object',
      group: "our-partners",
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'description',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'ourPartners',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'partner',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  description: "Only for easily identifing the logo"
                }),
                defineField({
                  name: 'logo',
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
                })
              ],
            },
          ],
        }),
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Partners',
      };
    },
  },
})
