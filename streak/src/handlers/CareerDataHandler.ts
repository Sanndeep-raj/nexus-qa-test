/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Vishakh B S
 */
import {
  getCareerListPageContents,
  getCareerLists,
} from "services/SanityServices";
import { hasArrayElements } from "utils/commonUtils";

export const getCareerListPageData = async () => {
  const [careerListPageContents, careerList] = await Promise.all([
    getCareerListPageContents(),
    getCareerLists(),
  ]);

  let groupedJobsByRole: Record<string, any[]> = {};

  if (hasArrayElements(careerList)) {
    groupedJobsByRole = Object.entries(
      careerList.reduce((acc: Record<string, any[]>, job: any) => {
        (acc[job.role] ||= []).push(job);
        return acc;
      }, {})
    )
      .sort(([roleA], [roleB]) => roleA.localeCompare(roleB))
      .reduce((acc: Record<string, any[]>, [role, jobs]) => {
        acc[role] = jobs;
        return acc;
      }, {});
  }

  return {
    status: 200,
    AppHead: { seo: careerListPageContents?.seo ?? {}, pathName: "/careers" },
    OpeningList: groupedJobsByRole,
    JoinUsCarousel: {
      title: "Life At Valoriz",
      link: "/life-at-valoriz",
      isWhiteBg: false,
    },
  };
};

export default getCareerListPageData;
