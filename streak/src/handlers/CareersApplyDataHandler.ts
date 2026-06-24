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
import { getCareerPageContentBySlug } from "services/SanityServices";

export const getCareerApplyPageData = async (props: { slug: string }) => {
  const { slug } = props;
  const decodedSlug = slug ? decodeURIComponent(slug) : null;

  const careerDetails = decodedSlug
    ? await getCareerPageContentBySlug(decodedSlug)
    : null;

  const notFound = !decodedSlug || !careerDetails;

  return {
    status: notFound ? 404 : 200,
    AppHead: {
      seo: careerDetails?.seo ?? {},
      pathName: decodedSlug
        ? `/careers-apply/${decodedSlug}`
        : "/careers-apply",
    },
    CareersApply: careerDetails ?? {},
    JoinUsCarousel: {
      title: "Life At Valoriz",
      link: "/life-at-valoriz",
      isWhiteBg: false,
    },
  };
};

export default getCareerApplyPageData;
