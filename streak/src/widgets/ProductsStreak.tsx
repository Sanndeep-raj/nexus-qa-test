/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */

import Icon from "@common/components/Icon";
import Speed from "@common/icons/Speed";
import GraphUpward from "@common/icons/GraphUpward";
import Flash from "@common/icons/Flash";
import Versatility from "@common/icons/Versatility";

const Streak = () => {
  return (
    <>
      <section className="bg-black text-white py-12 xl:py-20 xxl:py-26">
        <div className="container">
          <div className="grid grid-cols-2 xl:grid-cols-8 xl:gap- gap-y-8 xl:gap-y-0">
            <div className="col-span-2 xl:col-span-3">
              <div className="flex flex-col justify-end relative xl:w-[88%] h-auto xl:h-[580px] bg-gradient-streak rounded-lg space-y-8 xl:space-y-12">
                <div className="flex flex-col items-start space-y-4 pt-8 px-8 xl:px-14">
                  <div className="text-black text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    Improved SEO & Engagement
                  </div>
                  <div className="text-black text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    3x Faster Load Times
                  </div>
                  <div className="text-black text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    Seamless Content Updates
                  </div>
                  <div className="w-full bg-white/70 px-8 xl:px-7 py-7 xl:py-6 rounded-lg">
                    <img
                      className="mx-auto"
                      src="/images/products/streak-logo.svg"
                      width={190}
                      height={48}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full bg-black/10 mt-auto">
                  <div className="absolute w-full h-auto blur-sm"></div>
                  <p className="text-white text-md font-medium text-center p-4 xl:px-9 xl:py-6">
                    A lightweight performance focused custom front-end framework
                    ​
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 xl:col-span-5">
              <div className="xl:w-[90%] xl:ms-auto">
                <p className="text-md font-semibold uppercase mb-6 xl:mb-4">
                  Built for speed and performance
                </p>
                <img
                  src="/images/products/streak-logo-white.svg"
                  className="hidden xl:block"
                  width={277}
                  height={56}
                  alt=""
                />
                <img
                  src="/images/products/streak-logo-white.svg"
                  className="xl:hidden"
                  width={192}
                  height={48}
                  alt=""
                />
                <p className="text-xxl xl:text-h5 mt-8 xl:mt-12">
                  A lightweight, high-performance front-end framework for
                  eCommerce, blending SSR & SSG, and built for headless
                  commerce.
                </p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 mt-10">
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-streak p-5">
                      <Icon src={Speed} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Optimized for Speed
                    </p>
                    <p className="text-gray-light mt-2">
                      Optimized for eCommerce, blending SSR & Static Site
                      Generation
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-streak p-5">
                      <Icon src={GraphUpward} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Ready for Tomorrow
                    </p>
                    <p className="text-gray-light mt-2">
                      Designed to work with existing infrastructure while being
                      future-proof for headless commerce
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-streak p-5">
                      <Icon src={Flash} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Fast by Design
                    </p>
                    <p className="text-gray-light mt-2">
                      Lightweight framework designed for pre-rendered content
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-streak p-5">
                      <Icon src={Versatility} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Built for Versatility
                    </p>
                    <p className="text-gray-light mt-2">
                      Optimized for all content heavy platforms, ensuring
                      consistent speed and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Streak;