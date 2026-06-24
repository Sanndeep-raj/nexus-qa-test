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

import Telephone from "@common/icons/Telephone";
import ArrowRight from "@common/icons/ArrowRight";
import Envelop from "@common/icons/Mail";
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";

const CaseStudies = () => {
  return (
    <>
      <hr className="border-gray-dark" />

      <div className="grid xl:grid-cols-3 gap-x-19 pt-12">
        <div className="col-span-1 order-2 xl:order-1">
          <div className="xl:hidden border-b border-gray-dark my-10" />

          <h4 className="text-h5 xl:text-h4">
            Lead the Way <br className="max-xl:hidden" /> With Us
          </h4>

          <p className="text-md xl:text-xxl mt-4">
            We&apos;re here to help your ideas take shape, reach out and discuss!
          </p>

          <div className="flex items-center space-x-4 mt-12">
            <Icon src={Telephone} />
            <a href="tel:+91 471 270 0666" className="text-xxl">
              +91 471 270 0666
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-8 mb-12">
            <Icon src={Envelop} />
            <a href="mailto:info@valoriz.com" className="text-xxl">
              info@valoriz.com
            </a>
          </div>

          <div className="fixed xl:static bottom-0 right-0 left-0 max-xl:shadow-[0_4px_25px_rgba(0,_0,_0,_0.25)] bg-white px-6 xl:px-0 py-4 xl:py-0 z-0">
            <a href="/contact">
              <Button
                id="btn-one"
                className="w-full xl:w-auto h-[60px] lg:h-[68px] lg:text-xl py-4 lg:py-5 lg:px-8"
                size="xxl"
              >
                Let’s Connect
              </Button>
            </a>
          </div>
        </div>

        <div className="xl:col-span-2 order-1 xl:order-2">
          <div className="flex items-center justify-between">
            <h4 className="text-h5 xl:text-h4">Case Studies</h4>
            <a href="/case-studies">
              <Button
                id="btn-two"
                className="flex items-center"
                variant="outline-secondary"
                size="md"
              >
                <span className="me-2">View All</span>
                <Icon src={ArrowRight} size="sm" />
              </Button>
            </a>
          </div>

          <a
            href="/case-study/transforming-b2c-retail-brand-experience-platform-with-sanity"
            className="group block xl:grid xl:grid-cols-3 gap-x-8 gap-y-8 xl:gap-y-0 mt-14"
            aria-label="Transforming B2C Retail: Brand Experience Platform with Sanity case study"
          >
            <div className="col-span-1">
              <img
                className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                src="/images/industry/b-to-c-retail.webp"
                width={278}
                height={186}
                alt="Transforming B2C Retail Brand Experience Platform with Sanity case study thumbnail"
                loading="lazy"
              />
            </div>

            <div className="xl:col-span-2 flex flex-col justify-between h-full pt-6 xl:pt-0">
              <p className="text-xxl">
                Transforming B2C Retail: Brand Experience Platform with Sanity
              </p>
              <p className="text-md my-4">
                Our customer needs an online platform to expand its brand
                experience community and strengthen customer relationships.
              </p>
              <span className="flex items-center text-sm font-medium transition group-hover:text-primary">
                Read More
                <Icon src={ArrowRight} size="sm" className="ms-2" />
              </span>
            </div>
          </a>

          <a
            href="/case-study/quick-b2c-e-commerce-launch-using-shopify"
            className="group block xl:grid xl:grid-cols-3 gap-x-8 gap-y-8 xl:gap-y-0 mt-14"
            aria-label="Quick B2C e-commerce launch using Shopify case study"
          >
            <div className="col-span-1">
              <img
                className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                src="/images/industry/b-to-c-shopify.webp"
                width={278}
                height={186}
                alt="Quick B2C e-commerce launch using Shopify case study thumbnail"
                loading="lazy"
              />
            </div>

            <div className="xl:col-span-2 flex flex-col justify-between h-full pt-6 xl:pt-0">
              <p className="text-xxl">
                Quick B2C e-commerce launch using Shopify
              </p>
              <p className="text-md my-4">
                Our customer needed a quick and reliable migration of their
                e-commerce site and their content to Shopify.
              </p>
              <span className="flex items-center text-sm font-medium transition group-hover:text-primary">
                Read More
                <Icon src={ArrowRight} size="sm" className="ms-2" />
              </span>
            </div>
          </a>

          <a
            href="/case-study/data-engineering-and-integration"
            className="group block xl:grid xl:grid-cols-3 gap-x-8 gap-y-8 xl:gap-y-0 mt-14"
            aria-label="Data Engineering & Integration case study"
          >
            <div className="col-span-1">
              <img
                className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                src="/images/industry/data-engineering.webp"
                width={278}
                height={186}
                alt="Data Engineering and Integration case study thumbnail"
                loading="lazy"
              />
            </div>

            <div className="xl:col-span-2 flex flex-col justify-between h-full pt-6 xl:pt-0">
              <p className="text-xxl">Data Engineering & Integration</p>
              <p className="text-md my-4">
                Our customer needs an expert team to fully manage their cloud
                based data integration and data engineering.
              </p>
              <span className="flex items-center text-sm font-medium transition group-hover:text-primary">
                Read More
                <Icon src={ArrowRight} size="sm" className="ms-2" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
