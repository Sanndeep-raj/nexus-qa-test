import { accordionGroupType } from './objects/module/accordionGroupType'
import { accordionType } from './objects/module/accordionType'
import { calloutType } from './objects/module/calloutType'
import { callToActionType } from './objects/module/callToActionType'
import { collectionGroupType } from './objects/collection/collectionGroupType'
import { collectionLinksType } from './objects/collection/collectionLinksType'
import { collectionReferenceType } from './objects/module/collectionReferenceType'
import { collectionRuleType } from './objects/shopify/collectionRuleType'
import { customProductOptionColorObjectType } from './objects/customProductOption/customProductOptionColorObjectType'
import { customProductOptionColorType } from './objects/customProductOption/customProductOptionColorType'
import { customProductOptionSizeObjectType } from './objects/customProductOption/customProductOptionSizeObjectType'
import { customProductOptionSizeType } from './objects/customProductOption/customProductOptionSizeType'
import { footerType } from './objects/global/footerType'
import { gridItemType } from './objects/module/gridItemType'
import { gridType } from './objects/module/gridType'
import { heroType } from './objects/module/heroType'
import { imageCallToActionType } from './objects/module/imageCallToActionType'
import { imageFeaturesType } from './objects/module/imageFeaturesType'
import { imageFeatureType } from './objects/module/imageFeatureType'
import { imageWithProductHotspotsType } from './objects/hotspot/imageWithProductHotspotsType'
import { instagramType } from './objects/module/instagramType'
import { inventoryType } from './objects/shopify/inventoryType'
import { linkEmailType } from './objects/link/linkEmailType'
import { linkExternalType } from './objects/link/linkExternalType'
import { linkInternalType } from './objects/link/linkInternalType'
import { linkProductType } from './objects/link/linkProductType'
import { menuLinksType } from './objects/global/menuLinksType'
import { menuType } from './objects/global/menuType'
import { notFoundPageType } from './objects/global/notFoundPageType'
import { optionType } from './objects/shopify/optionType'
import { placeholderStringType } from './objects/shopify/placeholderStringType'
import { priceRangeType } from './objects/shopify/priceRangeType'
import { productFeaturesType } from './objects/module/productFeaturesType'
import { productHotspotsType } from './objects/hotspot/productHotspotsType'
import { productReferenceType } from './objects/module/productReferenceType'
import { productWithVariantType } from './objects/shopify/productWithVariantType'
import { proxyStringType } from './objects/shopify/proxyStringType'
import { seoType } from './objects/seoType'
import { shopifyCollectionType } from './objects/shopify/shopifyCollectionType'
import { shopifyProductType } from './objects/shopify/shopifyProductType'
import { shopifyProductVariantType } from './objects/shopify/shopifyProductVariantType'
import { spotType } from './objects/hotspot/spotType'
import { blogDetailsSections } from './objects/blogDetails/blogDetailsSections'
import { imageWithText } from './objects/blogDetails/imageWithText'
import { textSection } from './objects/blogDetails/textSection'
import { responsiveImage } from './objects/commmon/responsiveImage'
import { blogFeatures } from './objects/blogDetails/blogFeatures'
import { richTextEditor } from './objects/commmon/richTextEditor'
import { blogCard } from './objects/blogListing/blogCard'
import { similarBlogs } from './objects/blogDetails/similarBlogs'
import { caseStudyCard } from './objects/caseStudyListing/caseStudyCard'
import { caseStudySolutions } from './objects/caseStudyDetails/caseStudySolutions'
import { csCommonObject } from './objects/caseStudyDetails/csCommonObject'
import { similarCaseStudies } from './objects/caseStudyDetails/similarCaseStudies'
import { titleAndDescription } from './objects/caseStudyDetails/titleAndDescription'
import { csCommonObjAndResponsive } from './objects/caseStudyDetails/csCommonObjAndResponsive'
import { goodHands } from './objects/home/goodHands'
import { subServiceSection } from './objects/services/subServiceSection'
import { ourProductsSection } from './objects/products/ourProductsSection'
import { awardCard } from './objects/awards/awardCard'
import { singleImage } from './objects/commmon/singleImage'
import { voiceOfValorians } from './objects/lifeAtValoriz/voiceOfValorians'
import { valorizEvents } from './objects/lifeAtValoriz/valorizEvents'
import { wellnessInitiatives } from './objects/lifeAtValoriz/wellnessInitiatives'

// Objects used as annotations must be imported first
const annotations = [linkEmailType, linkExternalType, linkInternalType, linkProductType]

const objects = [
  accordionGroupType,
  accordionType,
  calloutType,
  callToActionType,
  collectionGroupType,
  collectionLinksType,
  collectionReferenceType,
  collectionRuleType,
  customProductOptionColorObjectType,
  customProductOptionColorType,
  customProductOptionSizeObjectType,
  customProductOptionSizeType,
  footerType,
  gridItemType,
  gridType,
  heroType,
  imageCallToActionType,
  imageFeaturesType,
  imageFeatureType,
  imageWithProductHotspotsType,
  instagramType,
  inventoryType,
  menuLinksType,
  menuType,
  notFoundPageType,
  optionType,
  placeholderStringType,
  priceRangeType,
  productFeaturesType,
  productHotspotsType,
  productReferenceType,
  productWithVariantType,
  proxyStringType,
  seoType,
  shopifyCollectionType,
  shopifyProductType,
  shopifyProductVariantType,
  spotType,
  blogDetailsSections,
  imageWithText,
  textSection,
  responsiveImage,
  blogFeatures,
  richTextEditor,
  blogCard,
  similarBlogs,
  caseStudyCard,
  caseStudySolutions,
  similarCaseStudies,
  titleAndDescription,
  csCommonObject,
  csCommonObjAndResponsive,
  goodHands,
  subServiceSection,
  ourProductsSection,
  awardCard,
  singleImage,
  voiceOfValorians,
  valorizEvents,
  wellnessInitiatives,
]

import { portableTextType } from './portableText/portableTextType'
import { portableTextSimpleType } from './portableText/portableTextSimpleType'

const blocks = [portableTextType, portableTextSimpleType]

import { collectionType } from './documents/collection'
import { colorThemeType } from './documents/colorTheme'
import { pageType } from './documents/page'
import { productType } from './documents/product'
import { productVariantType } from './documents/productVariant'
import { blogDetailsType } from './documents/blogDetails'
import { careersType } from './documents/careers'
import { caseStudyDetailsType } from './documents/caseStudyDetails'

const documents = [collectionType, colorThemeType, pageType, productType, productVariantType, blogDetailsType, careersType, caseStudyDetailsType]

import { homeType } from './singletons/homeType'
import { settingsType } from './singletons/settingsType'
import { blogListingType } from './singletons/blogListing'
import { caseStudyListingType } from './singletons/caseStudyListing'
import { homePageType } from './singletons/homePage'
import { aboutPageType } from './singletons/aboutPage'
import { careersListingType } from './singletons/careersListing'
import { contactPageType } from './singletons/contactPage'
import { industryPageType } from './singletons/industryPage'
import { ourClientsPageType } from './singletons/ourClientsPage'
import { ourPartnersPageType } from './singletons/ourPartnersPage'
import { productPageType } from './singletons/productPage'
import { servicePageType } from './singletons/servicePage'
import { awardsType } from './singletons/awards'
import { lifeAtValoriz } from './singletons/lifeAtValoriz'

const singletons = [
  homeType,
  settingsType,
  blogListingType,
  caseStudyListingType,
  homePageType,
  aboutPageType,
  careersListingType,
  contactPageType,
  industryPageType,
  ourClientsPageType,
  ourPartnersPageType,
  productPageType,
  servicePageType,
  awardsType,
  lifeAtValoriz,
]

export const schemaTypes = [...annotations, ...objects, ...singletons, ...blocks, ...documents]
