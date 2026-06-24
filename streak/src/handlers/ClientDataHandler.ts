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
import { getOurClientsPageContents } from "services/SanityServices";

export const getClientData = async () => {
  const response = await getOurClientsPageContents();
  return {
    status: 200,
    AppHead: { seo: response?.seo, pathName: "/clients" }
  };
};

export default getClientData;
