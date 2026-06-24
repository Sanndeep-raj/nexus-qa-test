/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Anagha Chandrababu
 */
import { getCaseStudyListingPageContents } from "services/SanityServices";
import { constructDropDownOptions } from "utils/commonUtils";

export const getCaseStudyListPageData = async () => {
  const response = await getCaseStudyListingPageContents();
  const allCapabilityOptions = constructDropDownOptions(
    response?.caseStudyListings,
    "capabilities",
  );

  const allIndustryOptions = constructDropDownOptions(
    response?.caseStudyListings,
    "industries",
  );

  return {
    status: 200,
    AppHead: { seo: response?.seo, pathName: "/case-studies"},
    CaseStudyList : {
      CaseStudyList : response?.caseStudyListings,
      industryOptions: allIndustryOptions,
      capabilityOptions: allCapabilityOptions
    },
  }
};
export default getCaseStudyListPageData;