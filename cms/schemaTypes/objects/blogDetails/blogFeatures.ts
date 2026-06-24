import { defineType, defineField } from 'sanity'
import { noEmptyString } from '../../../utils/commonValidations'

export const blogFeatures = defineType({
  name: 'blogFeatures',
  title: 'Blog Features',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'priorToPurchase',
      title: 'Prior to Purchase',
      description: "Eg: Website Interaction: Jane searches for a summer dress on an online fashion retailer.",
      type: 'array',
      of: [
        {
          type: 'string',
          validation: noEmptyString
        }
      ],
    }),
    defineField({
      name: 'experienceInStore',
      title: 'Experience in-store',
      description: "Eg: Mobile Assistant: Jane makes the decision to go into the actual store.",
      type: 'array',
      of: [
        {
          type: 'string',
          validation: noEmptyString
        }
      ],
    }),
    defineField({
      name: 'purchaseExperience',
      title: 'Purchase Experience',
      description: "Eg: Smooth Checkout: After selecting her outfit, Jane goes to the self-service checkout",
      type: 'array',
      of: [
        {
          type: 'string',
          validation: noEmptyString
        }
      ],
    }),
    defineField({
      name: 'postExperience',
      title: 'Post Experience',
      description: "Eg: Order tracking: Through the mobile app and an email follow-up",
      type: 'array',
      of: [
        {
          type: 'string',
          validation: noEmptyString
        }
      ],
    }),
    defineField({
      name: 'benefitsRealised',
      title: 'Benefits Realised',
      description: "Eg: Consistent Experience: Jane's interactions with businesses in-person",
      type: 'array',
      of: [
        {
          type: 'string',
          validation: noEmptyString
        }
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string'
    })
  ]
})
