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

const HealthCare = () => {
  return (
    <>
      <div className="xl:mt-8 xl:pt-6 pb-24 xl:pb-8">
        <div className="grid xl:grid-cols-3 gap-x-19 gap-y-8 pb-8 xl:pb-12">
          <div className="col-span-1">
            <img className="w-full" src="/images/industry/health.webp" alt=" " />
            <h4 className="text-xxl xl:text-h4 mt-6 xl:mt-8">
              Healthcare is undergoing a transformation because of innovation,
              which is improving patient care and connecting it.
            </h4>
          </div>
          <div className="xl:col-span-2">
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Smart, Remote Healthcare</p>
              <p className="text-md xl:text-xxl mt-4">
                Mobile apps offer remote consultations, while AI-driven
                diagnostics boost accuracy and efficiency. ata analytics
                optimize treatment outcomes, and wearable devices bring
                real-time health monitoring to the forefront.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Real-Time Health Insights</p>
              <p className="text-md xl:text-xxl mt-4">
                The potential is endless as precision medicine transforms
                healthcare in the future.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">
                Future-Ready Precision Medicine
              </p>
              <p className="text-md xl:text-xxl mt-4">
                Connect with Valoriz to enhance your brand and handle this
                transition with state-of-the-art tools and knowledge.
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

export default HealthCare;