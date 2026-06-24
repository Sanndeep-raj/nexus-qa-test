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

const DataAnalyticsOverview = () => {
  return (
    <section className="bg-light-gradient py-12 xl:py-20 xxl:py-26" id="over">
      <div className="container">
        <div className="lg:flex lg:gap-20 xl:gap-[132px] border-b border-gray-200 py-6 lg:py-16">
          <div className="w-full lg:w-1/2 lg:order-2">
            <img
              src="/images/services/overview-services.webp"
              alt="overview-services"
              className="w-full h-full rounded-lg max-lg:hidden"
            />
            <img
              src="/images/services/overview-services.webp"
              alt="overview-services2"
              className="w-full h-full rounded-lg lg:hidden"
            />
          </div>
          <div className="w-full lg:w-1/2 max-lg:mt-8 lg:order-1">
            <p className="text-xxl xl:text-h4 mb-2">
              Turning raw data into meaningful insights that drive better
              decisions and real outcomes.
            </p>
            <p className="text-xxl xl:text-h4 mb-2 mt-6">
              Connecting the right dots to reveal what matters most to the
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsOverview;