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

const DigitalCommerceOverview = () => {
  const id = "over";
  return (
    <section className="border-b py-12 xl:py-20 xxl:py-26" id={id}>
      <div className="container">
        <div className="lg:w-7/12">
          <p className="text-xxl xl:text-h4 mb-2">
            Enhancing Customer Journeys Through
          </p>
          <p className="text-h4 xl:text-h2 text-primary">
            Efficient Digital Solutions
          </p>
        </div>
        <div className="lg:flex lg:gap-20 xl:gap-[132px] border-b border-gray-200 py-6 lg:py-16">
          <div className="lg:flex-[0_0_420px] lg:order-2">
            <img
              src="/images/services/overview-de-1.webp"
              width={800}
              height={453}
              alt=""
              className="w-full rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/overview-de-1-sm.webp"
              width={800}
              height={617}
              alt=""
              className="w-full rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full max-lg:mt-8 lg:order-1">
            <p className="text-xxl">
              Every moment your customers spend with you matters and making
              those moments easy and enjoyable is what builds lasting
              connections.
            </p>
            <p className="text-md mt-6">
              Today customers expect to find what they want quickly and easily
              so your digital experience has to keep up with those needs.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:gap-20 xl:gap-[132px] lg:items-center py-6 lg:py-16 pb-0">
          <div className="lg:flex-[0_0_420px]">
            <img
              src="/images/services/overview-de-2.webp"
              width={800}
              height={453}
              alt=""
              className="w-full rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/overview-de-2-sm.webp"
              width={800}
              height={617}
              alt=""
              className="w-full rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full max-lg:mt-8">
            <p className="text-xxl">
              Committed to developing products that simplify processes and boost
              performance.
            </p>
            <p className="text-md mt-6">
              That means fewer clicks, faster load times, and a smoother journey
              from start to finish. When everything just works, customers stay
              longer, come back more often, and trust you with their next move.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default DigitalCommerceOverview;