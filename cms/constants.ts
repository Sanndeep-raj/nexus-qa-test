// Currency code (ISO 4217) to use when displaying prices in the studio

import ShopifyIcon from "./components/icons/Shopify"
import { CodeBlockIcon, ColorWheelIcon, ComposeIcon, SearchIcon } from '@sanity/icons'

// https://en.wikipedia.org/wiki/ISO_4217
export const DEFAULT_CURRENCY_CODE = 'USD'

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = [
  'settings',
  'home',
  'media.tag',
  "blogListing",
  "caseStudyListing",
  "colorTheme",
  "page",
  "homePage",
  "aboutPage",
  "careersListing",
  "contactPage",
  "industryPage",
  "ourClientsPage",
  "ourPartnersPage",
  "productPage",
  "servicePage",
  "subServiceSection",
  "ourProductsSection",
  "awards",
  "lifeAtValoriz"
]

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
// - are from the Sanity Connect Shopify app - and can be linked to on Shopify
export const SHOPIFY_DOCUMENT_TYPES = ['product', 'productVariant', 'collection']

// References to include in 'internal' links
export const PAGE_REFERENCES = [
  { type: 'collection' },
  { type: 'home' },
  { type: 'page' },
  { type: 'product' },
]

// API version to use when using the Sanity client within the studio
// https://www.sanity.io/help/studio-client-specify-api-version
export const SANITY_API_VERSION = '2022-10-25'

// Your Shopify store ID.
// This is the ID in your Shopify admin URL (e.g. 'my-store-name' in https://admin.shopify.com/store/my-store-name).
// You only need to provide the ID, not the full URL.
// Set this to enable helper links in document status banners and shortcut links on products and collections.
export const SHOPIFY_STORE_ID = ''

// Field groups used through schema types
export const GROUPS = [
  {
    name: 'theme',
    title: 'Theme',
    icon: ColorWheelIcon,
  },
  {
    default: true,
    name: 'editorial',
    title: 'Editorial',
    icon: ComposeIcon
  },
  {
    name: 'shopifySync',
    title: 'Shopify sync',
    icon: ShopifyIcon,
  },
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
]

export const blogDetailsGroups = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'slug',
    title: 'Slug',
    icon: CodeBlockIcon,
  },
  {
    name: 'first-section',
    title: 'First section',
    icon: ComposeIcon
  },
  {
    name: 'second-section',
    title: 'Second section',
    icon: ComposeIcon
  },
  {
    name: 'third-section',
    title: 'Third section',
    icon: ComposeIcon
  },
  {
    name: 'similar-blogs',
    title: 'Similar blogs',
    icon: ComposeIcon
  },
]

export const blogListingGroups = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'our-blogs',
    title: 'Our Blogs',
    icon: ComposeIcon
  },
]

export const caseStudyDetailsGroups = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'slug',
    title: 'Slug',
    icon: CodeBlockIcon,
  },
  {
    name: 'first-banner-section',
    title: 'First banner section',
    icon: ComposeIcon
  },
  {
    name: 'overview-section',
    title: 'Overview section',
    icon: ComposeIcon
  },
  {
    name: 'goal-section',
    title: 'Goal section',
    icon: ComposeIcon
  },
  {
    name: 'challenges-section',
    title: 'Challenges section',
    icon: ComposeIcon
  },
  {
    name: 'process-section',
    title: 'Process section',
    icon: ComposeIcon
  },
  {
    name: 'solution-section',
    title: 'Solution section',
    icon: ComposeIcon
  },
  {
    name: 'image-reel-section',
    title: 'Image Reel section',
    icon: ComposeIcon
  },
  {
    name: 'technology-section',
    title: 'Technology section',
    icon: ComposeIcon
  },
  {
    name: 'impact-section',
    title: 'Impact section',
    icon: ComposeIcon
  },
  {
    name: 'conclusion',
    title: 'Conclusion',
    icon: ComposeIcon
  },
  {
    name: "similar-case-studies",
    title: "Similar Case Studies",
    icon: ComposeIcon
  }
]

export const careerGroup = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
]

export const caseStudyListingGroup = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'case-studies',
    title: 'Case Studies',
    icon: ComposeIcon
  },
]

export const homePageGroup = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'why-valoriz',
    title: 'Why Valoriz',
    icon: ComposeIcon
  },
  {
    name: 'good-hands',
    title: 'Good Hands',
    icon: ComposeIcon
  },
]

export const partnersGroup = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'our-partners',
    title: 'Our Partners',
    icon: ComposeIcon
  },
]

export const serviceGroup = [
  {
    name: 'key',
    title: 'Key',
    icon: CodeBlockIcon,
  },
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'faqs',
    title: 'FAQs',
    icon: ComposeIcon
  },
  {
    name: 'sub-services',
    title: 'Our Services',
    icon: ComposeIcon
  },
]

export const productsGroup = [
  {
    name: 'key',
    title: 'Key',
    icon: CodeBlockIcon,
  },
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'our-products',
    title: 'Our Products',
    icon: ComposeIcon
  },
]

export const awardGroups = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'awards',
    title: 'Awards',
    icon: ComposeIcon
  },
]

export const lifeAtGroups = [
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
  {
    name: 'medias',
    title: 'Inside Valoriz',
    icon: ComposeIcon
  },
  {
    name: 'voiceOfValorians',
    title: 'Voice of Valorians',
    icon: ComposeIcon
  },
  {
    name: 'valorizEvents',
    title: 'Events',
    icon: ComposeIcon
  },
  {
    name: 'wellnessInitiatives',
    title: 'Wellness Initiatives',
    icon: ComposeIcon
  },
]