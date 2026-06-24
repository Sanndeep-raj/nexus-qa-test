import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { productsGroup } from '../../constants'

export const productPageType = defineField({
  name: 'productPage',
  type: 'document',
  icon: CubeIcon,
  groups: productsGroup,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ourProducts',
      title: "Our Products",
      type: 'array',
      group: "our-products",
      options: {
        sortable: false,
      },
      of: [
        { type: 'ourProductsSection' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Products',
      };
    },
  },
})
