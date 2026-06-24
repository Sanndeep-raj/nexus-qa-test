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


const VbrandxImpact = () => {
  return (
    <section className="text-white bg-black py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="lg:w-1/2 max-lg:mb-8">
          <h2 className="text-h3 lg:text-h2">Impact</h2>
          <p className="text-xxl mt-6 lg:mt-8">
            The platform keeps evolving, bringing new features to meet the
            demands of a rapidly evolving market
          </p>
        </div>

        {/* CMS Integration */}
        <div className="md:flex lg:justify-between md:gap-x-16 border-b border-gray-900 py-12 lg:py-16">
          <div className="lg:flex lg:justify-end md:w-1/2 lg:w-6/12 md:order-2 max-md:mb-12">
            <img
              src="/images/vbrandx/impact-cms.svg"
              width={609}
              height={239}
              alt="CMS Integration"
              className="max-w-full max-md:w-full"
            />
          </div>
          <div className="md:w-1/2 lg:w-5/12 md:order-1">
            <h3 className="text-h5 lg:text-h4">CMS Integration</h3>
            <p className="lg:text-xxl mt-6 lg:mt-8">
              The platform works with popular CMS like Strapi and Sanity, making
              it easy to manage complex content for dynamic mobile apps.
            </p>
          </div>
        </div>

        {/* Data Transformation */}
        <div className="md:flex lg:justify-between md:gap-x-16 border-b border-gray-900 py-12 lg:py-16">
          <div className="md:w-1/2 lg:w-6/12 max-md:mb-12">
            <img
              src="/images/vbrandx/impact-data.svg"
              width={552}
              height={358}
              alt="Data Transformation Layer"
              className="max-w-full max-md:w-full"
            />
          </div>
          <div className="md:w-1/2 lg:w-5/12">
            <h4 className="text-h5 lg:text-h4">Data Transformation Layer</h4>
            <p className="lg:text-xxl mt-6 lg:mt-8">
              A custom microservice converts JSON data from the CMS into a
              mobile-friendly format, keeping everything consistent across all
              apps.
            </p>
          </div>
        </div>

        {/* Low Code Architecture */}
        <div className="md:flex lg:justify-between md:gap-x-16 border-b border-gray-900 py-12 lg:py-16">
          <div className="lg:flex lg:justify-end md:w-1/2 lg:w-6/12 md:order-2 max-md:mb-12">
            <img
              src="/images/vbrandx/impact-architecture.svg"
              width={525}
              height={287}
              alt="Low Code Architecture"
              className="max-w-full max-md:w-full"
            />
          </div>
          <div className="md:w-1/2 lg:w-5/12 md:order-1">
            <h4 className="text-h5 lg:text-h4">Low Code Architecture</h4>
            <p className="lg:text-xxl mt-6 lg:mt-8">
              Designed for flexibility, the architecture enables enterprises to
              develop fully customized mobile apps without requiring extensive
              technical expertise.
            </p>
          </div>
        </div>

        {/* Scalable and Flexible */}
        <div className="md:flex lg:justify-between md:gap-x-16 py-12 lg:py-16">
          <div className="md:w-1/2 lg:w-6/12 max-md:mb-12">
            <img
              src="/images/vbrandx/impact-flexible.svg"
              width={608}
              height={312}
              alt="Scalable and Flexible"
              className="max-w-full max-md:w-full"
            />
          </div>
          <div className="md:w-1/2 lg:w-5/12">
            <h4 className="text-h5 lg:text-h4">Scalable and Flexible</h4>
            <p className="lg:text-xxl mt-6 lg:mt-8">
              With a modular design, enterprises can manage multiple apps from
              one content source, making scaling and expansion effortless.
            </p>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default VbrandxImpact;
