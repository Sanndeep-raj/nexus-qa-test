/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Vishakh B S
 */
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";

const CareersBanner = () => {
  return (
    <section
      aria-labelledby="careers-banner-heading"
      style={{ backgroundImage: "url('/images/careers/about-banner-1.webp')" }}
      className="bg-black bg-cover bg-center before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/70 before:z-10"
    >
      <div className="container relative z-10 flex items-center min-h-screen">
        <div>
          <div className="md:w-7/12 xl:w-5/12 max-lg:mx-auto text-white max-lg:text-center">
            <h1
              id="careers-banner-heading"
              className="text-h4 xl:text-h3 xxl:text-h1 text-primary-light leading-tight"
            >
              Let Our Team Be Your New Team
            </h1>
            <h2 className="text-md xxl:text-xxl mt-6">
              We always strive to make a positive difference in everything. If
              that's important to you, Valoriz would be a good fit
            </h2>
            <a href="#openings">
              <Button
                variant="outline-light"
                className="flex items-center mt-18 xl:mt-6 max-lg:mx-auto group"
              >
                <span>Opening Roles</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
