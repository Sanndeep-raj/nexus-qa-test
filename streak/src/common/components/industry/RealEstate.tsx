/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Valoriz UI Team
 */

import CaseStudies from "../CaseStudies";

const RealEstate = () => {
  return (
    <>
      <div className="xl:mt-8 xl:pt-6 pb-24 xl:pb-8">
        <div className="grid xl:grid-cols-3 gap-x-19 gap-y-8 pb-8 xl:pb-12">
          <div className="col-span-1">
            <img className="w-full" src="/images/industry/real-estate.webp" alt=" " />
            <h4 className="text-xxl xl:text-h4 mt-6 xl:mt-8">
              Innovation and technology are driving a revolutionary change in
              the real estate sector.
            </h4>
          </div>
          <div className="xl:col-span-2">
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">AI Market Revolution</p>
              <p className="text-md xl:text-xxl mt-4">
                The way individuals purchase, sell, and invest is changing
                quickly thanks to AI-driven market analytics and realistic
                virtual property tours.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Data-Driven Pricing</p>
              <p className="text-md xl:text-xxl mt-4">
                While data analytics transforms pricing tactics and market
                projections, augmented reality improves property discovery.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Future of Real Estate</p>
              <p className="text-md xl:text-xxl mt-4">
                The future is being shaped by hyper-personalized experiences,
                digital transactions, and smart homes, so the possibilities are
                endless. With our innovative strategy, which is intended to take
                your brand to new heights, you can usher in a new era of real
                estate.
              </p>
            </div>
          </div>
        </div>
        <CaseStudies />
      </div>
      <hr className="border-gray-dark" />
    </>
  );
};

export default RealEstate;