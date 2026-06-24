import { hasArrayElements } from "utils/commonUtils";

export const homePageQuery = `*[_type == "homePage"][0] {
  seo,
  whyValoriz,
  goodHands
}`;
export const caseStudyLisingPageQuery = `*[_type == "caseStudyListing"][0] {
  seo,
  caseStudyListings,
}`;

export const caseStudyDetailsPageQuery = `
  *[_type == "caseStudyDetails" && slug.current == $slug][0] {
    title,
    seo,
    banner,
    overview,
    goals,
    challenges,
    process,
    solution,
    imageReel,
    technology,
    impact,
    conclusion,
    similarCaseStudies
  }
`;

export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  seo,
}`;

export const servicePageQuery = `*[_type == "servicePage"][0] {
  seo,
}`;

export const productPageQuery = `*[_type == "productPage"][0] {
  seo,
}`;

export const careerDetailsPageQuery = `*[_type == "careers" && slug.current == $slug][0] {
  title,
  seo,
  role,
  experience,
  location,
  jobDescription,
}`;

export const careerListPageQuery = `*[_type == "careersListing"][0] {
  seo,
}`;

export const careerListsQuery = `*[_type == "careers"] {
  title,
  role,
  experience,
  location,
  "slug": slug.current,
}`;

export const contactPageQuery = `*[_type == "contactPage"][0] {
  seo,
}`;

export const ourPartnersPageQuery = `*[_type == "ourPartnersPage"][0] {
  seo,
  partnersInfo
}`;

export const industryPageQuery = `*[_type == "industryPage"][0] {
  seo,
}`;


export const lifeAtStaticPageQuery = `
  *[_type == "lifeAtValoriz"][0] {
    seo,
    voiceOfValorians,
    valorizEvents,
    wellnessInitiatives,
    "insideValoriz": insideValoriz[$start...$end],
    "totalMedias": count(insideValoriz),
  }
`;

export const lifeAtPaginationQuery = `
  *[_type == "lifeAtValoriz"][0] {
    "insideValoriz": insideValoriz[$start...$end],
    "totalMedias": count(insideValoriz)
  }
`;

export const subServicesQuery = `*[_type == "servicePage"][0] {
  "subService": subServices[key == $key][0]
}`;

export const ourClientsPageQuery = `*[_type == "ourClientsPage"][0] {
  seo,
}`;

export const subProductsQuery = `*[_type == "productPage"][0] {
  "product": ourProducts[key == $key][0]
}`;


export const blogListingPageQuery = (start: number, end: number, domainFilters: string[]) => {
  const hasFilters = hasArrayElements(domainFilters);

  // Only include filter clause if there are domain filters
  const filteredQuery = `
    *[_type == "blogListing"][0] {
      "seo": seo,
      "ourBlogs": ourBlogs[defined(domains) && count(domains[@ in $domainFilters]) > 0][${start}...${end}],
      "totalCount": count(ourBlogs[defined(domains) && count(domains[@ in $domainFilters]) > 0]),
      "allDomains": array::unique(ourBlogs[].domains[])
    }
  `;

  const unfilteredQuery = `
    *[_type == "blogListing"][0] {
      "seo": seo,
      "ourBlogs": ourBlogs[${start}...${end}],
      "totalCount": count(ourBlogs),
      "allDomains": array::unique(ourBlogs[].domains[])
    }
  `;

  return {
    query: hasFilters ? filteredQuery : unfilteredQuery,
    params: hasFilters ? { domainFilters } : {},
  };
};


export const blogDetailsPageQuery = `*[_type == "blogDetails" && slug.current == $slug][0] {
  title,
  seo,
  schemaMarkup,
  badge,
  domains,
  description,
  author,
  responsiveBanner,
  blogDetailsSections,
  similarBlogs
}`;

export const awardsStaticPageQuery = `
  *[_type == "awards"][0] {
    seo,
    "awards": awards[$start...$end],
    "totalAwards": count(awards)
  }
`;

export const awardsPaginationQuery = `
  *[_type == "awards"][0] {
    "awards": awards[$start...$end],
  }
`;

export const sitemapQuery = `*[_type == "sitemap"][0] {
  urls,
}`;

export const privacyQuery = `*[_type == "privacyPolicy"][0] {
  seo,
  policySections
}`;

