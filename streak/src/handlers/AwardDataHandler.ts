/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Anagha Chandrababu
 */

import { getAwardsContent, getAwardsByPagination } from "services/SanityServices";

export const getAwardListPageData = async (start: any, end: any) => {
  const cleanStart = Number.isInteger(start) ? start : parseInt(start) || 0;
  const cleanEnd = Number.isInteger(end) ? end : parseInt(end) || 6;

  const [initialContent, paginatedContent] = await Promise.all([
    getAwardsContent(cleanStart, cleanEnd),
    getAwardsByPagination(cleanStart, cleanEnd),
  ]);
  return {
    status: 200,

    AppHead: {
      seo: initialContent?.seo || null,
      pathName: "/awards",
    },

    AwardsBanner: {
      heading: ` Awards & Recognitions`,
      description:
        "Our recognition reflects our dedication to industry leadership, employee well-being, and commitment to social responsibility.",
    },
    AwardsList: {
      awards: paginatedContent?.awards || [],
      totalAwards: initialContent?.totalAwards || 0,
    },
  };
}
export default getAwardListPageData;


 