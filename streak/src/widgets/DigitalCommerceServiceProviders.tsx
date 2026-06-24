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

import React from "react";

const DigitalCommerceServicesProvide = () => {
  return (
    <section className="bg-[linear-gradient(50deg,_rgba(255,255,255,1)_52%,_rgba(218,239,234,1)_100%)] py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="lg:w-8/12 mb-8">
          <h1 className="text-xxl xl:text-h4 mb-2">Leading the way in</h1>
          <h2 className="text-h4 xl:text-h2 text-primary">Services We Provide</h2>
          <p className="text-xxl mt-8">
            Our Advanced Ecommerce Consulting ensures your online store is
            efficient and is built for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-6 lg:gap-x-8 xl:gap-28 mt-16">

          {/* Service 1 */}
          <div>
            <div className="mb-4 xl:mb-8">
              <img
                src="/images/services/b2c-retail-ecommerce.webp"
                alt="B2C Retail eCommerce Service"
                className="max-w-full rounded-[16px] max-lg:hidden"
              />
              <img
                src="/images/services/b2c-retail-ecommerce-sm.webp"
                alt="B2C Retail eCommerce Service - Small"
                className="max-w-full rounded-[16px] lg:hidden"
              />
            </div>
            <p className="text-xxl font-medium">B2C Retail eCommerce</p>
            <p className="text-md mt-4 xl:mt-6">
              Create customer friendly shopping experiences with eCommerce
              development solutions designed to make buying effortless and
              engaging.
            </p>
          </div>

          {/* Service 2 */}
          <div>
            <div className="mb-4 xl:mb-8">
              <img
                src="/images/services/b2b-wholesale-ecommerce.webp"
                alt="B2B Wholesale eCommerce Service"
                className="max-w-full rounded-[16px] max-lg:hidden"
              />
              <img
                src="/images/services/b2b-wholesale-ecommerce-sm.webp"
                alt="B2B Wholesale eCommerce Service - Small"
                className="max-w-full rounded-[16px] lg:hidden"
              />
            </div>
            <p className="text-xxl font-medium">B2B Wholesale eCommerce</p>
            <p className="text-md mt-4 xl:mt-6">
              Simplify wholesale buying and streamline operations with top
              eCommerce development services in India, built for B2B success.
            </p>
          </div>

          {/* Service 3 */}
          <div>
            <div className="mb-4 xl:mb-8">
              <img
                src="/images/services/marketplace-integrations.webp"
                alt="Marketplace Integrations Service"
                className="max-w-full rounded-[16px] max-lg:hidden"
              />
              <img
                src="/images/services/marketplace-integrations-sm.webp"
                alt="Marketplace Integrations Service - Small"
                className="max-w-full rounded-[16px] lg:hidden"
              />
            </div>
            <p className="text-xxl font-medium">Marketplace Integrations</p>
            <p className="text-md mt-4 xl:mt-6">
              Easily connect buyers and sellers on a single platform with
              marketplace integrations designed for a smooth selling experience.
            </p>
          </div>

          {/* Service 4 */}
          <div>
            <div className="mb-4 xl:mb-8">
              <img
                src="/images/services/custom-ecommerce-solutions.webp"
                alt="Custom eCommerce Solutions Service"
                className="max-w-full rounded-[16px] max-lg:hidden"
              />
              <img
                src="/images/services/custom-ecommerce-solutions-sm.webp"
                alt="Custom eCommerce Solutions Service - Small"
                className="max-w-full rounded-[16px] lg:hidden"
              />
            </div>
            <p className="text-xxl font-medium">Custom eCommerce Solutions</p>
            <p className="text-md mt-4 xl:mt-6">
              Get a custom eCommerce platform designed for your business. The
              leading eCommerce development company in the UAE and India
              delivers seamless solutions.
            </p>
          </div>

          {/* Service 5 */}
          <div>
            <div className="mb-4 xl:mb-8">
              <img
                src="/images/services/digital-omnichannel-experience.webp"
                alt="Digital Omnichannel Experience Service"
                className="max-w-full rounded-[16px] max-lg:hidden"
              />
              <img
                src="/images/services/digital-omnichannel-experience-sm.webp"
                alt="Digital Omnichannel Experience Service - Small"
                className="max-w-full rounded-[16px] lg:hidden"
              />
            </div>
            <p className="text-xxl font-medium">
              Digital Omnichannel Experience
            </p>
            <p className="text-md mt-4 xl:mt-6">
              We create personalized shopping experiences with unified
              strategies. As the top eCommerce website design company, we ensure
              consistency across all channels.
            </p>
          </div>

          {/* Service 6 */}
          <div>
            <div className="mb-4 xl:mb-8">
              <img
                src="/images/services/managed-services.webp"
                alt="Managed Services"
                className="max-w-full rounded-[16px] max-lg:hidden"
              />
              <img
                src="/images/services/managed-services-sm.webp"
                alt="Managed Services - Small"
                className="max-w-full rounded-[16px] lg:hidden"
              />
            </div>
            <p className="text-xxl font-medium">Managed Services</p>
            <p className="text-md mt-4 xl:mt-6">
              Stay ahead with continuous monitoring, proactive updates, and
              reliable support. As the top eCommerce web development company, we
              keep your business running smoothly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalCommerceServicesProvide;
