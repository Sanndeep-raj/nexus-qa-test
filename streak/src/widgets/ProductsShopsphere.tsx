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
import Launch from "@common/icons/MousePointer"
import Architecture from "@common/icons/Architecture"
import WhatYouSee from "@common/icons/WhatYouSee";
import Backend from "@common/icons/Backend";

const Shopsphere = () => {
  return (
    <>
      <section className="py-12 xl:py-20 xxl:py-26">
        <div className="container">
          <div className="grid grid-cols-2 xl:grid-cols-8 xl:gap- gap-y-8 xl:gap-y-0">
            <div className="col-span-2 xl:col-span-3">
              <div className="flex flex-col justify-end relative xl:w-[88%] h-auto xl:h-[580px] bg-gradient-shopsphere rounded-lg space-y-8 xl:space-y-12">
                <div className="flex flex-col items-start space-y-4 pt-8 px-8 xl:px-14">
                  <div className="text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    Multi language support
                  </div>
                  <div className="text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    ShopSphere Visual Search
                  </div>
                  <div className="text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    Inhouse Delivery Agent
                  </div>
                  <div className="w-full bg-white/70 px-8 xl:px-7 py-7 xl:py-6 rounded-lg">
                    <img
                      className="mx-auto"
                      src="/images/products/shopsphere-logo.svg"
                      width={236}
                      height={40}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full bg-black/10 mt-auto">
                  <div className="absolute w-full h-auto blur-sm"></div>
                  <p className="text-white text-md font-medium text-center p-4 xl:px-9 xl:py-6">
                    Designed to fuel eCommerce progress and evolve with your
                    business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 xl:col-span-5">
              <div className="xl:w-[90%] xl:ms-auto">
                <p className="text-md font-semibold uppercase mb-6 xl:mb-4">
                  Building Future Shops
                </p>
                <img
                  src="/images/products/shopsphere-logo.svg"
                  className="hidden lg:block"
                  width={362}
                  height={60}
                  alt=""
                />
                <img
                  src="/images/products/shopsphere-logo.svg"
                  className="lg:hidden"
                  width={290}
                  height={48}
                  alt=""
                />
                <p className="text-xxl xl:text-h5 mt-8 xl:mt-12">
                  A cloud native, feature rich ecommerce platform enabling
                  customizable, omnichannel shopping experiences and seamless
                  multi-brand rollouts.
                </p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 mt-10">
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-shopsphere p-5">
                      <Icon src={Launch} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Launch in 1 Day
                    </p>
                    <p className="text-gray-dark mt-2">
                      Launch a fully functional online store in just one day,
                      with ease and efficiency.
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-shopsphere p-5">
                      <Icon src={Architecture} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Architecture That Adapts
                    </p>
                    <p className="text-gray-dark mt-2">
                      Built on latest technical architecture to facilitate
                      scaling and flexibility
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-shopsphere p-5">
                      <Icon src={WhatYouSee} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Shop What You See
                    </p>
                    <p className="text-gray-dark mt-2">
                      Offer an intrusive shopping experience to your customers -
                      including the visual search and product discovery.
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-shopsphere p-5">
                      <Icon src={Backend} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Backed by Expertise
                    </p>
                    <p className="text-gray-dark mt-2">
                      Leverage the decade old domain expertise of Valoriz - the
                      makers of ShopShere
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

export default Shopsphere;