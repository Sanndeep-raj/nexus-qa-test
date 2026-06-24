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

const ProductEngineeringOverview = () => {
  return (
    <section className="border-b py-12 xl:py-20 xxl:py-26" id="over">
      <div className="container">
        <div className="lg:w-7/12">
          <p className="text-xxl xl:text-h4 mb-2">Engineering the</p>
          <p className="text-h4 xl:text-h2 text-primary">
            Future of Your Product
          </p>
        </div>
        <div className="lg:flex lg:gap-20 xl:gap-[132px] border-b border-gray-200 py-6 lg:py-16">
          <div className="lg:flex-[0_0_420px] lg:order-2">
            <img
              src="/images/services/overview-pe-1.webp"
              width={800}
              height={453}
              alt="overview"
              className="w-full rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/overview-pe-1-sm.webp"
              width={800}
              height={617}
              alt="overview-sm"
              className="w-full rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full max-lg:mt-8 lg:order-1">
            <p className="text-xxl">
              With deep engineering experience, we&rsquo;re here to support you
              through every step of bringing your product ideas to life, making
              sure they fit your industry and can adapt as things change.
            </p>
            <p className="text-md mt-6">
              The goal is simple—build products that are practical,
              user-friendly, and built to last, so you can focus on growing your
              business while we handle the engineering.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:gap-20 xl:gap-[132px] lg:items-center py-6 lg:py-16 pb-0">
          <div className="lg:flex-[0_0_420px]">
            <img
              src="/images/services/overview-pe-2.webp"
              width={800}
              height={453}
              alt="overview-2"
              className="w-full rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/overview-pe-2-sm.webp"
              width={800}
              height={617}
              alt="overview-2-sm"
              className="w-full rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full max-lg:mt-8">
            <p className="text-xxl">
              We build new ideas from the ground up and improve existing
              products to deliver solutions that grow stronger with your
              business.
            </p>
            <p className="text-md mt-6">
              Committed to developing products that simplify processes and boost
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProductEngineeringOverview;