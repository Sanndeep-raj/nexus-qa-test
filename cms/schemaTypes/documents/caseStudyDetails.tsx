import { CubeIcon } from '@sanity/icons'
import { defineField } from 'sanity'

import { validateSlug } from '../../utils/validateSlug'
import { caseStudyDetailsGroups } from '../../constants'
import { imageRequired, noEmptyString } from '../../utils/commonValidations'

export const caseStudyDetailsType = defineField({
  name: 'caseStudyDetails',
  title: 'Case Study Details',
  type: 'document',
  icon: CubeIcon,
  groups: caseStudyDetailsGroups,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      group: 'slug',
      type: 'slug',
      options: { source: 'title' },
      description: "Use case study detail page as https://valoriz.com/case-study/{{slug}} - Replace {{slug}}",
      validation: validateSlug,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    //First widget
    defineField({
      name: 'banner',
      type: 'document',
      group: 'first-banner-section',
      fields: [
        defineField({
          name: 'subTitle',
          type: 'string',
        }),
        defineField({
          name: 'industryType',
          type: 'string',
        }),
        defineField({
          name: 'caseStudyBannerImage',
          type: 'responsiveImage',
          validation: Rule => Rule.required()
        }),
      ]
    }),
    //Second widget
    defineField({
      name: 'overview',
      type: 'document',
      group: 'overview-section',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'richTextEditor',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'responsiveBanner',
          title: 'Responsive Banner',
          type: 'responsiveImage',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'language',
          type: 'string',
        }),
        defineField({
          name: 'timeScale',
          type: 'string',
        }),
        defineField({
          name: 'launchDate',
          type: 'string',
        }),
        defineField({
          name: 'category',
          type: 'string',
        }),
        defineField({
          name: 'system',
          type: 'string',
        }),
        defineField({
          name: 'servicesProvided',
          type: 'array',
          of: [{ type: 'string', validation: noEmptyString }],
        }),
      ]
    }),
    //Third widget
    defineField({
      name: 'goals',
      type: 'document',
      group: 'goal-section',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'details',
          type: 'array',
          of: [{ type: 'titleAndDescription' }],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'features',
          type: 'array',
          of: [{ type: 'string', validation: noEmptyString }],
          validation: Rule => Rule.max(4).error('You can add up to 4 features only'),
        }),
      ]
    }),
    //Fourth widget
    defineField({
      name: 'challenges',
      type: 'document',
      group: 'challenges-section',
      fields: [
        defineField({
          name: 'details',
          type: 'array',
          of: [{ type: 'titleAndDescription' }],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'features',
          type: 'array',
          of: [{ type: 'string', validation: noEmptyString }],
          validation: Rule => Rule.max(4).error('You can add up to 4 features only'),
        }),
      ]
    }),
    //Fifth widget
    defineField({
      name: 'process',
      type: 'array',
      group: 'process-section',
      of: [{ type: 'csCommonObjAndResponsive' }],
      validation: Rule => Rule.required()
    }),
    //Sixth widget
    defineField({
      name: 'solution',
      type: 'document',
      group: 'solution-section',
      fields: [
        defineField({
          name: 'description',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'details',
          type: 'array',
          of: [{ type: 'caseStudySolutions' }],
        }),
      ]
    }),
    //Seventh widget
    defineField({
      name: 'imageReel',
      type: 'responsiveImage',
      group: 'image-reel-section',
      validation: Rule => Rule.required()
    }),
    //Eight widget
    defineField({
      name: 'technology',
      type: 'document',
      group: 'technology-section',
      fields: [
        defineField({
          name: 'contents',
          type: 'array',
          of: [{ type: 'csCommonObject' }],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'banner',
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
          name: 'benefits',
          description: "Eg: 45% + :Increase In Conversion",
          type: 'array',
          of: [{ type: 'string', validation: noEmptyString }],
          validation: Rule => Rule.required()
        }),
      ]
    }),
    //Nineth widget
    defineField({
      name: 'impact',
      type: 'array',
      group: 'impact-section',
      of: [{ type: 'csCommonObject' }],
    }),
    //Tenth widget
    defineField({
      name: 'conclusion',
      type: 'document',
      group: 'conclusion',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'details',
          type: 'array',
          of: [{ type: 'csCommonObject' }],
        }),
      ]
    }),
    //Eleventh widget
    defineField({
      name: 'similarCaseStudies',
      title: 'Similar Case Studies',
      type: 'array',
      of: [{ type: 'similarCaseStudies' }],
      group: 'similar-case-studies',
    }),
  ],
})