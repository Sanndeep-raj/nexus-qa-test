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

const FinTech = () => {
  return (
    <>
      <div className="xl:mt-8 xl:pt-6 pb-24 xl:pb-8">
        <div className="grid xl:grid-cols-3 gap-x-19 gap-y-8 pb-8 xl:pb-12">
          <div className="col-span-1">
            <img className="w-full" src="/images/industry/fin-tech.webp" alt=" " />
            <h4 className="text-xxl xl:text-h4 mt-6 xl:mt-8">
              The FinTech specialists at Valoriz have a wealth of expertise
              developing cutting-edge financial solutions.
            </h4>
          </div>
          <div className="xl:col-span-2">
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Scalable FinTech Solutions</p>
              <p className="text-md xl:text-xxl mt-4">
                We create technology that promotes productivity and expansion,
                ranging from corporate lending platforms and smooth payment
                gateways to sophisticated financial management solutions.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Custom Financial Platforms</p>
              <p className="text-md xl:text-xxl mt-4">
                If you require a scalable, enterprise-grade financial platform
                or a basic digital payment app, our team can create innovative
                software to meet your demands.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">
                Shaping FinTech&apos;s Future
              </p>
              <p className="text-md xl:text-xxl mt-4">
                Collaborate with Valoriz to influence FinTech&apos;s direction.
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

export default FinTech;