import sanityClient from "utils/sanityClient";

import {
  aboutPageQuery,
  careerDetailsPageQuery,
  careerListPageQuery,
  careerListsQuery,
  contactPageQuery,
  homePageQuery,
  productPageQuery,
  servicePageQuery,
  ourPartnersPageQuery,
  caseStudyDetailsPageQuery,
  caseStudyLisingPageQuery,
  industryPageQuery,
  lifeAtStaticPageQuery,
  lifeAtPaginationQuery,
  subServicesQuery,
  ourClientsPageQuery,
  subProductsQuery,
  blogListingPageQuery,
  blogDetailsPageQuery,
  awardsPaginationQuery,
  awardsStaticPageQuery,
  sitemapQuery,
  privacyQuery,
} from "./sanityQueries";

export const getHomePageContents = async () => {
  try {
    return (await sanityClient.fetch(homePageQuery)) || {};
  } catch (error) {
    console.error("[getHomePageContents]", error);
    return {};
  }
};

export const getCaseStudyListingPageContents = async () => {
  try {
    return await sanityClient.fetch(caseStudyLisingPageQuery);
  } catch (error) {
    console.error("[getCaseStudyListingPageContents]", error);
  }
};

export const getAboutPageContents = async () => {
  try {
    return (await sanityClient.fetch(aboutPageQuery)) || null;
  } catch (error) {
    console.error("[getAboutPageContents]", error);
    return {};
  }
};

export const getCaseStudyDetailsPageContents = async (slug: string) => {
  try {
    console.log("🔍 Fetching from Sanity with slug:", slug);

    if (!slug || typeof slug !== "string") {
      console.error("[Sanity] Invalid slug:", slug);
      return null;
    }

    const data = await sanityClient.fetch(caseStudyDetailsPageQuery, { slug }) || null;
    if (!data) console.warn("[Sanity] No case study found for slug:", slug);

    return data;
  } catch (error) {
    console.error("[getCaseStudyDetailsPageContents] Error:", error);
    return null;
  }
};

export const getServicePageContents = async () => {
  try {
    return (await sanityClient.fetch(servicePageQuery)) || null;
  } catch (error) {
    console.error("[getServicePageContents]", error);
    return {};
  }
};

export const getProductsPageContents = async () => {
  try {
    return (await sanityClient.fetch(productPageQuery)) || null;
  } catch (error) {
    console.error("[getProductsPageContents]", error);
    return {};
  }
};

export const getCareerPageContentBySlug = async (slug: string) => {
  try {
    return (await sanityClient.fetch(careerDetailsPageQuery, { slug })) || null;
  } catch (error) {
    console.error("[getCareerPageContentBySlug]", error);
    return null;
  }
};

export const getCareerLists = async () => {
  try {
    return (await sanityClient.fetch(careerListsQuery)) || null;
  } catch (error) {
    console.error("[getCareerLists]", error);
    return null;
  }
};

export const getCareerListPageContents = async () => {
  try {
    return (await sanityClient.fetch(careerListPageQuery)) || null;
  } catch (error) {
    console.error("[getCareerListPageContents]", error);
    return {};
  }
};

export const getContactPageContents = async () => {
  try {
    return (await sanityClient.fetch(contactPageQuery)) || null;
  } catch (error) {
    console.error("[getContactPageContents]", error);
    return {};
  }
};

export const getOurPartnersPageContents = async () => {
  try {
    return (await sanityClient.fetch(ourPartnersPageQuery)) || null;
  } catch (error) {
    console.error("[getOurPartnersPageContents]", error);
    return {};
  }
};

export const getIndustryPageContents = async () => {
  try {
    return (await sanityClient.fetch(industryPageQuery)) || null;
  } catch (error) {
    console.error("[getIndustryPageContents]", error);
    return {};
  }
};

export const getSubServicesContent = async (key: any) => {
  try {
    return (await sanityClient.fetch(subServicesQuery, { key })) || null;
  } catch (error) {
    console.error("[getSubServicesContent]", error);
    return {};
  }
};


export const getLifeAtInitialContent = async (start: number, end: number) => {
  try {
    return (
      (await sanityClient.fetch(lifeAtStaticPageQuery, { start, end })) || null
    );
  } catch (error) {
    console.error("[getLifeAtInitialContent]", error);
    return null;
  }
};

export const getLifeAtByPagination = async (start: number, end: number) => {
  try {
    return (
      (await sanityClient.fetch(lifeAtPaginationQuery, { start, end })) || null
    );
  } catch (error) {
    console.error("[getLifeAtByPagination]", error);
    return null;
  }
};

export const getOurClientsPageContents = async () => {
  try {
    return (await sanityClient.fetch(ourClientsPageQuery)) || null;
  } catch (error) {
    console.error("[getOurClientsPageContents]", error);
    return {};
  }
};

export const getSubProductsContent = async (key: any) => {
  try {
    return (await sanityClient.fetch(subProductsQuery, { key })) || null;
  } catch (error) {
    console.error("[getSubProductsContent]", error);
    return {};
  }
};

export const getBlogListingPageContents = async (start: number, end: number, domainFilters: string[]) => {
  try {
    const { query, params } = blogListingPageQuery(start, end, domainFilters);
    return await sanityClient.fetch(query, params);
  } catch (error) {
    console.error("[getBlogListingPageContents]", error);
    return {};
  }
};

export const getBlogDetailsPageContents = async (slug: any) => {
  try {
    return (await sanityClient.fetch(blogDetailsPageQuery, { slug })) || null;
  } catch (error) {
    console.error("[getBlogDetailsPageContents]", error);
    return null;
  }
};

export const getAwardsContent = async (start: number, end: number) => {
  try {
    return (
      (await sanityClient.fetch(awardsStaticPageQuery, { start, end })) || null
    );
  } catch (error) {
    console.error("[getAwardsContent]", error);
    return {};
  }
};

export const getAwardsByPagination = async (start: number, end: number) => {
  try {
    return (
      (await sanityClient.fetch(awardsPaginationQuery, { start, end })) || null
    );
  } catch (error) {
    console.error("[getAwardsByPagination]", error);
    return {};
  }
};


export const getSitemapContents = async () => {
  try {
    return (await sanityClient.fetch(sitemapQuery)) || {};
  } catch (error) {
    console.error("[getSitemapContents]", error);
    return {};
  }
};

export const getPrivacyContents = async () => {
  try {
    return (await sanityClient.fetch(privacyQuery)) || {};
  } catch (error) {
    console.error("[getPrivacyContents]", error);
    return {};
  }
};