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

import { Script } from "streak/components";

interface SanityQueryParams {
  query: string;
  [key: string]: string | number | string[] | number[];
}

interface SanityResponse {
  result?: unknown;
}

interface SanityClient {
  getSanityContentByQuery?: (
    params: SanityQueryParams
  ) => Promise<SanityResponse>;
}

interface ServerClientOptions {
  PROJECT_ID: string;
  DATASET: string;
}

const ServerClient = () => {
  return (
    <Script<ServerClientOptions>
      id="SanityServerClient"
      options={{
        PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET!,
      }}
    >
      {(gDom: SanityClient, options: ServerClientOptions) => {
        const { PROJECT_ID, DATASET } = options;

        gDom.getSanityContentByQuery = async (
          queryParams: SanityQueryParams
        ): Promise<SanityResponse> => {
          const baseUrl = `https://${PROJECT_ID}.apicdn.sanity.io/v2025-06-13/data/query/${DATASET}`;
          const url = new URL(baseUrl);

          Object.entries(queryParams).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              // JSON encode arrays so Sanity understands them
              url.searchParams.append(key, JSON.stringify(value));
            } else {
              url.searchParams.append(key, String(value));
            }
          });
          const response = await fetch(url.toString());
          if (!response.ok) {
            throw new Error("Sanity fetch failed");
          }
          return response.json();
        };
      }}
    </Script>
  );
};

export default ServerClient;
