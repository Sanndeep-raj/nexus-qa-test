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

import { getLifeAtInitialContent, getLifeAtByPagination } from "services/SanityServices";

export const getLifeAtValorizData = async (start: any, end: any) => {
  const cleanStart = Number.isInteger(start) ? start : parseInt(start) || 0;
  const cleanEnd = Number.isInteger(end) ? end : parseInt(end) || 6;

  const [initialContent, paginatedContent] = await Promise.all([
    getLifeAtInitialContent(cleanStart, cleanEnd),
    getLifeAtByPagination(cleanStart, cleanEnd),
  ]);

  return {
    status: 200,
    AppHead: {
      seo: initialContent?.seo || null,
      pathName: "/life-at-valoriz",
    },
    LifeInside: {
      insideValoriz: paginatedContent?.insideValoriz || [],
      totalMedias: paginatedContent?.totalMedias || 0,
    },
    LifeVoice: {
      voiceOfValorians: initialContent?.voiceOfValorians || [],
      totalVoices: initialContent?.totalVoices || 0,
    },
    LifeEvents: {
      valorizEvents: initialContent?.valorizEvents || [],
      totalEvents: initialContent?.totalEvents || 0,
    },
    WellnessInitiatives: {
      wellnessInitiatives: initialContent?.wellnessInitiatives || [],
      totalWellnessInitiatives: initialContent?.totalWellnessInitiatives || 0,
    },
    JoinUsCarousel: {
      title: "Join Our Team",
      link: "/careers",
      isWhiteBg: true,
    },
  };

};

export default getLifeAtValorizData;
