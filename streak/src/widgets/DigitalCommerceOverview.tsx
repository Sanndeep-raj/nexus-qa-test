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
  return (
    <section className="py-12 xl:py-20 xxl:py-26" id="over">
      <div className="container">
        <div className="lg:w-7/12">
          <h1 className="text-xxl xl:text-h4 mb-2">
            Let&rsquo;s build your dream store with our
          </h1>
          <h2 className="text-h4 xl:text-h2 text-primary">
            Expert Ecommerce Development Services
          </h2>
        </div>
        <div className="lg:flex lg:gap-20 xl:gap-[132px] border-b border-gray-200 py-6 lg:py-16">
          <div className="lg:flex-[0_0_420px] lg:order-2">
            <img
              src="/images/services/overview-1.webp"
              width={800}
              height={453}
              alt="overview-1"
              className="w-full rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/overview-1-sm.webp"
              width={800}
              height={617}
              alt="overview-sm-1"
              className="w-full rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full max-lg:mt-8 lg:order-1">
            <p className="text-xxl">
              As an experienced company in this platform, eCommerce is all about
              creating a ideal connections between businesses and customers, and
              that&rsquo;s precisely what we aim for at Valoriz Digital.
            </p>
            <p className="text-md mt-6">
              As a top ecommerce website design and development company, we
              specialize in creating mind blowing UI/UX designs and backend
              systems to develop online stores that perform as quickly as you
              do. We have the expertise to assist you from top notch ecommerce
              app development to a comprehensive ecommerce solution.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:gap-20 xl:gap-[132px] py-6 lg:py-16 pb-0">
          <div className="lg:flex-[0_0_420px]">
            <img
              src="/images/services/overview-2.webp"
              width={800}
              height={453}
              alt="overview-2"
              className="w-full rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/overview-2-sm.webp"
              width={800}
              height={617}
              alt="overview-2-sm"
              className="w-full rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full max-lg:mt-8">
            <p className="text-xxl">
              Our ecommerce development services encompass everything from
              strategy and integrations to migrations and ongoing support, all
              tailored to help your business succeed.
            </p>
            <p className="text-md mt-6">
              As a prominent ecommerce development company in India and the UAE,
              we provide exceptional ecommerce services to build results-driven
              stores that evolve alongside your business. Let&rsquo;s
              collaborate to create something extraordinary!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCommerceOverview;