/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Neeraj
 */
export const getNotFoundContent = async () => {
  return {
    status: 200,
    AppHead: { seo: { title: "Page Not Found", description: "The page you are looking for does not exist." }, pathName: "/404" },
  }
};


export default getNotFoundContent;
