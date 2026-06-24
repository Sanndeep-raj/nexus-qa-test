import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { productsGroup } from '../../../constants';
import { uniqueKeyInArray } from '../../../utils/commonValidations';

export const ourProductsSection = defineField({
  name: 'ourProductsSection',
  type: 'object',
  title: "Our Products",
  icon: CubeIcon,
  groups: productsGroup,
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
      group: "key",
      options: {
        list: [
          { title: 'Streak.Js', value: 'Streak.Js' },
          { title: 'ShopSphere', value: 'ShopSphere ' },
          { title: 'Knitrix', value: 'Knitrix' },
          { title: 'VbrandX', value: 'VbrandX' },
        ],
        layout: 'dropdown'
      },
      validation: uniqueKeyInArray('key', 'ourProducts')
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
