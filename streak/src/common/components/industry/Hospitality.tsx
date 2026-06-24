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

const Hospitality = () => {
  return (
    <>
      <div className="xl:mt-8 xl:pt-6 pb-24 xl:pb-8">
        <div className="grid xl:grid-cols-3 gap-x-19 gap-y-8 pb-8 xl:pb-12">
          <div className="col-span-1">
            <img className="w-full" src="/images/industry/hospitality.webp" alt=" " />
            <h4 className="text-xxl xl:text-h4 mt-6 xl:mt-8">
              Modern technology is revolutionizing the hospitality sector and
              changing the way guests experience.
            </h4>
          </div>
          <div className="xl:col-span-2">
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Mobile Booking & AI Support</p>
              <p className="text-md xl:text-xxl mt-4">
                Booking and check-in are made easier by mobile apps, and
                chatbots powered by AI offer immediate support
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Data-Driven Personalization</p>
              <p className="text-md xl:text-xxl mt-4">
                Operations are optimized and services are customized based on
                user preferences thanks to data analytics. Hotel previews are
                brought to life through virtual reality, and the smooth
                automation of smart room technology improves comfort.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">VR & Smart Rooms</p>
              <p className="text-md xl:text-xxl mt-4">
                The future is full of opportunities as contactless solutions and
                highly customized hospitality become commonplace. Valoriz&apos;s
                imaginative approach to boost the effect of your brand will help
                you enter the next era of excellence.
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

export default Hospitality;