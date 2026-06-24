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

const Manufacturing = () => {
  return (
    <>
      <div className="xl:mt-8 xl:pt-6 pb-24 xl:pb-8">
        <div className="grid xl:grid-cols-3 gap-x-19 gap-y-8 pb-8 xl:pb-12">
          <div className="col-span-1">
            <img className="w-full" src="/images/industry/manufacturing.webp" alt=" " />
            <h4 className="text-xxl xl:text-h4 mt-6 xl:mt-8">
              The manufacturing industry is entering a new era of customer
              centric innovation, where personalization takes the spotlight.
            </h4>
          </div>
          <div className="xl:col-span-2">
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">AI-Driven Smart Production</p>
              <p className="text-md xl:text-xxl mt-4">
                Production is changing due to advanced technology and AI-driven
                automation, which makes customized solutions and smooth
                interactions possible.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Connected Data Networks</p>
              <p className="text-md xl:text-xxl mt-4">
                Customers can participate more actively in the process thanks to
                improved data integration provided by interconnected production
                networks.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">
                Next-Gen Manufacturing Solutions
              </p>
              <p className="text-md xl:text-xxl mt-4">
                This change redefines industry standards by placing a higher
                priority on efficiency, openness, and trust. Join Us to support
                the expansion of your brand with carefully thought-out IT
                solutions made for the dynamic manufacturing industry.
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

export default Manufacturing;