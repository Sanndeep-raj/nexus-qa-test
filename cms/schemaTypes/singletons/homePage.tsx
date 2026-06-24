import { HomeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { homePageGroup } from '../../constants'
import { imageRequired } from '../../utils/commonValidations'

export const homePageType = defineField({
  name: 'homePage',
  type: 'document',
  icon: HomeIcon,
  groups: homePageGroup,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whyValoriz',
      title: 'Why Valoriz',
      group: 'why-valoriz',
      type: 'document',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'media',
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
        defineField({
          name: 'contents',
          type: 'array',
          of: [{ type: 'csCommonObject' }],
        }),
      ],
    }),
    defineField({
      name: 'goodHands',
      title: 'Good Hands',
      group: 'good-hands',
      type: 'array',
      of: [{ type: 'goodHands' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      };
    },
  },
})
