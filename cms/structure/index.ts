import { ListItemBuilder, StructureResolver } from 'sanity/structure';
// import collections from './collectionStructure'
// import colorThemes from './colorThemeStructure'
// import home from './homeStructure'
// import pages from './pageStructure'
// import products from './productStructure'
// import settings from './settingStructure'
import blogDetails from './blogDetails';
import blogListing from './blogListing';
import careers from './careers';
import caseStudyListing from './caseStudyListing';
import caseStudyDetails from './caseStudyDetails';
import homePage from './homePage';
import aboutPage from './aboutPage';
import careersListing from './careersListing';
import contactPage from './contactPage';
import industryPage from './industryPage';
import ourClientsPage from './ourClientsPage';
import ourPartnersPage from './ourPartnersPage';
import productPage from './productPage';
import servicePage from './servicePage';
import awards from './awards';
import lifeAtValoriz from './lifeAtValoriz';

/**
 * Structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schema types progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'collection',
    'colorTheme',
    "blogDetails",
    "blogListing",
    "careers",
    "caseStudyListing",
    "caseStudyDetails",
    "homePage",
    "aboutPage",
    "careersListing",
    "contactPage",
    "industryPage",
    "ourClientsPage",
    "ourPartnersPage",
    "productPage",
    "servicePage",
    'home',
    'media.tag',
    'page',
    'product',
    'productVariant',
    'settings',
    "awards",
    "lifeAtValoriz",
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      // home(S, context),
      // pages(S, context),
      // S.divider(),
      // collections(S, context),
      // products(S, context),
      // S.divider(),
      // colorThemes(S, context),
      // S.divider(),
      // settings(S, context),
      // S.divider(),
      homePage(S, context),
      S.divider(),
      aboutPage(S, context),
      S.divider(),
      servicePage(S, context),
      S.divider(),
      productPage(S, context),
      S.divider(),
      industryPage(S, context),
      S.divider(),
      ourClientsPage(S, context),
      S.divider(),
      ourPartnersPage(S, context),
      S.divider(),
      contactPage(S, context),
      S.divider(),
      careers(S, context),
      S.divider(),
      careersListing(S, context),
      S.divider(),
      blogListing(S, context),
      S.divider(),
      blogDetails(S, context),
      S.divider(),
      caseStudyListing(S, context),
      S.divider(),
      caseStudyDetails(S, context),
      S.divider(),
      lifeAtValoriz(S, context),
      S.divider(),
      awards(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
