/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */

import React from "react";

const VbrandxWhy = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="lg:w-1/2 mb-22">
          <h2 className="text-h4 lg:text-h2">
            Why VbrandX <br />
            Stands Out
          </h2>
          <p className="text-xxl mt-4">
            A smarter way to build and deliver dynamic experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 xl:gap-x-27 xl:gap-y-22">

          {/* 1 */}
          <div className="flex flex-col max-md:border-b border-gray-400 max-md:py-10">
            <div className="rounded-lg overflow-hidden bg-[linear-gradient(90deg,_rgba(251,251,251,1)_0%,_rgba(231,246,242,1)_100%)]">
              <img
                src="/images/vbrandx/why-1.webp"
                width="332"
                height="200"
                alt=""
                className="max-w-full max-md:w-full"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xxl">Rapid Deployment</h3>
              <p className="text-md mt-4">
                Launch apps within hours if design and content are ready.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col max-md:border-b border-gray-400 max-md:py-10">
            <div className="rounded-lg overflow-hidden bg-[linear-gradient(90deg,_rgba(251,251,251,1)_0%,_rgba(231,246,242,1)_100%)]">
              <img
                src="/images/vbrandx/why-2.webp"
                width="332"
                height="200"
                alt=""
                className="max-w-full max-md:w-full"
              />
            </div>
            <div className="mt-8">
              <h4 className="text-xxl">Cost-Effective</h4>
              <p className="text-md mt-4">
                Saves development costs with a streamlined process.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col max-md:border-b border-gray-400 max-md:py-10">
            <div className="rounded-lg overflow-hidden bg-[linear-gradient(90deg,_rgba(251,251,251,1)_0%,_rgba(231,246,242,1)_100%)]">
              <img
                src="/images/vbrandx/why-3.webp"
                width="332"
                height="200"
                alt=""
                className="max-w-full max-md:w-full"
              />
            </div>
            <div className="mt-8">
              <h4 className="text-xxl">Scalable & Customizable</h4>
              <p className="text-md mt-4">
                Grows with your business, offering full customization.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col max-md:border-b border-gray-400 max-md:py-10">
            <div className="rounded-lg overflow-hidden bg-[linear-gradient(90deg,_rgba(251,251,251,1)_0%,_rgba(231,246,242,1)_100%)]">
              <img
                src="/images/vbrandx/why-4.webp"
                width="332"
                height="200"
                alt=""
                className="max-w-full max-md:w-full"
              />
            </div>
            <div className="mt-8">
              <h4 className="text-xxl">User-Friendly Management</h4>
              <p className="text-md mt-4">
                Non technical teams can update content easily via Strapi or
                Sanity.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="flex flex-col max-md:py-10">
            <div className="rounded-lg overflow-hidden bg-[linear-gradient(90deg,_rgba(251,251,251,1)_0%,_rgba(231,246,242,1)_100%)]">
              <img
                src="/images/vbrandx/why-5.webp"
                width="332"
                height="200"
                alt=""
                className="max-w-full max-md:w-full"
              />
            </div>
            <div className="mt-8">
              <h4 className="text-xxl">Market Advantage</h4>
              <p className="text-md mt-4">
                Stay ahead with a fast, efficient, and hassle-free app
                development process.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VbrandxWhy;
