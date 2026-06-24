/* eslint-disable import/no-extraneous-dependencies */
/*
 * Copyright(c) 2025 Valoriz.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 *
 * @author Neeraj
 */

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { sanityDataSet, sanityProjectId } from "utils/config";

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataSet,
  useCdn: true,
  apiVersion: "2025-06-13",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export default sanityClient;
