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

const TravelTourism = () => {
  return (
    <>
      <div className="xl:mt-8 xl:pt-6 pb-24 xl:pb-8">
        <div className="grid xl:grid-cols-3 gap-x-19 gap-y-8 pb-8 xl:pb-12">
          <div className="col-span-1">
            <img className="w-full" src="/images/industry/travel-tourism.webp" alt=" " />
            <h4 className="text-xxl xl:text-h4 mt-6 xl:mt-8">
              With an emphasis on creating customized experiences, the travel
              and tourism sector is poised for a customer-centric transformation
              in the near future.
            </h4>
          </div>
          <div className="xl:col-span-2">
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">
                Personalized AI-Powered Travel
              </p>
              <p className="text-md xl:text-xxl mt-4">
                The way travelers interact will change as a result of the
                channeling of technological improvements to provide personalized
                journeys and AI-enhanced support.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Connected Travel Ecosystems</p>
              <p className="text-md xl:text-xxl mt-4">
                Data will be effortlessly integrated via interconnected travel
                ecosystems, enabling travelers to take an active role. Improved
                consumer experiences are crucial in this day and age, as they
                foster efficiency, transparency, and trust.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">
                Enhanced Traveler Experiences
              </p>
              <p className="text-md xl:text-xxl mt-4">
                Get in touch with us right now to propel your business forward
                in the constantly changing travel and tourism landscape.
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

export default TravelTourism;