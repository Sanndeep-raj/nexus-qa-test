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

const Brands = () => {
  return (
    <>
      <div className="xl:mt-8 xl:pt-6 pb-24 xl:pb-8">
        <div className="grid xl:grid-cols-3 gap-x-19 gap-y-8 pb-8 xl:pb-12">
          <div className="col-span-1">
            <img className="w-full" src="/images/industry/brands.webp" alt=" " />
            <h4 className="text-xxl xl:text-h4 mt-6 xl:mt-8">
              We believe a brand is more than simply a name; it&apos;s a
              promise, an promise, an experience, and a path of constant
              development.
            </h4>
          </div>
          <div className="xl:col-span-2">
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Adaptive Digital Branding</p>
              <p className="text-md xl:text-xxl mt-4">
                We provide digital solutions that enable brands to differentiate
                themselves, adjust, and prosper in a market that is constantly
                evolving.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">
                Strategy-Led Brand Innovation
              </p>
              <p className="text-md xl:text-xxl mt-4">
                Our experience drives innovation from strategy to execution,
                assisting companies in creating distinctive brands, cultivating
                client loyalty, and achieving sustained success.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Memorable Brand Experiences</p>
              <p className="text-md xl:text-xxl mt-4">
                With Valoriz, people remember your brand instead of just seeing
                it.
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

export default Brands;