/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Minna Ancy Mathew
 */

import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";

const PartnersBanner = () => {
  return (
    <section
      className="relative flex flex-col justify-center min-h-screen text-white bg-black bg-[url(/images/partners/banner-bg-sm.webp)] xl:bg-[url(/images/partners/banner-bg.webp)] bg-cover bg-center bg-no-repeat py-12 xl:py-20 xxl:py-26"
    >
      <div className="absolute xl:hidden w-full h-full opacity-90 bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.7)_51%,rgba(0,0,0,1)_100%)]"></div>
      <div className="container relative z-20">
        <div className="xl:flex xl:items-center xl:justify-between xl:gap-30">
          <div className="xl:w-1/2 md:text-center xl:text-start">
            <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight">
              Partner with Valoriz
            </h1>
            <h2 className="text-md xl:text-xxl mt-8">
              Join Valoriz and unlock a partnership built for long-term success
              over short-term wins
            </h2>
            <a href="#partners-enquiry">
              <Button
                variant="outline-light"
                className="flex items-center mt-8 xl:mt-12 max-md:ms-0 max-xl:mx-auto group"
              >
                <span>Become A Partner</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
          <div className="xl:w-1/2 max-lg:mt-16">
            <img
              src="/images/partners/banner-1.webp"
              width={584}
              height={480}
              alt="Partners banner"
              className="w-full max-xl:hidden"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersBanner;
