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

const Entertainment = () => {
  return (
    <>
      <div className="xl:mt-8 xl:pt-6 pb-24 xl:pb-8">
        <div className="grid xl:grid-cols-3 gap-x-19 gap-y-8 pb-8 xl:pb-12">
          <div className="col-span-1">
            <img className="w-full" src="/images/industry/entertainment.webp" alt=" " />
            <h4 className="text-xxl xl:text-h4 mt-6 xl:mt-8">
              Imagine a tailored entertainment experience where AI and
              technology work together to create unique adventures.
            </h4>
          </div>
          <div className="xl:col-span-2">
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">
                Effortless Personal Discovery
              </p>
              <p className="text-md xl:text-xxl mt-4">
                You take charge of your path as each moment flows naturally.
                It&apos;s easier than ever to discover what you love, making the
                process smooth and engaging.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">
                Tailored Entertainment Experiences
              </p>
              <p className="text-md xl:text-xxl mt-4">
                At Valoriz, we provide dynamic, open experiences that are
                customized for your audience, elevating entertainment.
              </p>
            </div>
            <div className="mb-6 pb-6 xl:mb-8 xl:pb-8 border-b last:border-0 last:mb-0 last:pb-0 border-gray-dark">
              <p className="text-xxl xl:text-h6">Bring Stories to Life</p>
              <p className="text-md xl:text-xxl mt-4">
                Your story deserves to be extraordinary, and we&apos;re here to
                bring it to life.
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

export default Entertainment;