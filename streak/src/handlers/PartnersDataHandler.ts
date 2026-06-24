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
import { getOurPartnersPageContents } from "services/SanityServices";

export const getPartnersData = async () => {
  const response = await getOurPartnersPageContents();
  
  return {
    status: 200,
    AppHead: { seo: response?.seo, pathName: "/partners" },
    Partners: response
  };
};

export default getPartnersData;
