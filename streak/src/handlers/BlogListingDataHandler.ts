/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Minna Ancy Mathew
 */
import { getBlogListingPageContents } from "services/SanityServices";

export const getBlogListingData = async () => {
  const response = await getBlogListingPageContents(0, 10, []);

  return {
    status: 200,
    AppHead: {
      seo: response?.seo,
      pathName: "/blogs",
    },
    BlogListing: {
      allDomains: response?.allDomains ?? [],
      ourBlogs: response?.ourBlogs ?? [],
      totalCount: response?.totalCount ?? 0,
    },
  };
};

export default getBlogListingData;
