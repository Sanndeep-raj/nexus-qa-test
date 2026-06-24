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
import Sync from "@common/icons/Sync";
import FullyAutomated from "@common/icons/FullyAutomated";
import Standard from "@common/icons/Standard";
import Best from "@common/icons/Best";

const Knitrix = () => {
  return (
    <>
      <section className="py-12 xl:py-20 xxl:py-26">
        <div className="container">
          <div className="grid grid-cols-2 xl:grid-cols-8 xl:gap- gap-y-8 xl:gap-y-0">
            <div className="col-span-2 xl:col-span-3">
              <div className="flex flex-col justify-end relative xl:w-[88%] h-auto xl:h-[580px] bg-gradient-knitrix rounded-lg space-y-8 xl:space-y-12">
                <div className="flex flex-col items-start space-y-4 pt-8 px-8 xl:px-14">
                  <div className="text-black text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    Sync Any PIM{" "}
                  </div>
                  <div className="text-black text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    Customizable Apps
                  </div>
                  <div className="text-black text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                    Rapid Deploy
                  </div>
                  <div className="w-full bg-white/70 px-8 xl:px-7 py-7 xl:py-6 rounded-lg">
                    <img
                      className="mx-auto"
                      src="/images/products/knitrix-logo.svg"
                      width={144}
                      height={36}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full bg-black/10 mt-auto">
                  <div className="absolute w-full h-auto blur-sm"></div>
                  <p className="text-white text-md font-medium text-center p-4 xl:px-9 xl:py-6">
                    The Next Generation Sync for Composable Commerce
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 xl:col-span-5">
              <div className="xl:w-[90%] xl:ms-auto">
                <p className="text-md font-semibold uppercase mb-6 xl:mb-4">
                  Unlocking the Power of Integration
                </p>
                <img
                  src="/images/products/knitrix-logo.svg"
                  className="hidden xl:block"
                  width={240}
                  height={60}
                  alt=""
                />
                <img
                  src="/images/products/knitrix-logo.svg"
                  className="xl:hidden"
                  width={192}
                  height={48}
                  alt=""
                />
                <p className="text-xxl xl:text-h5 mt-8 xl:mt-12">
                  Seamlessly sync any PIM system with your eCommerce platform
                  for accurate, consistent, and up to date product data.
                </p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 mt-10">
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-knitrix p-5">
                      <Icon src={Sync} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Next Gen Sync
                    </p>
                    <p className="text-gray-dark mt-2">
                      The Next Generation Sync for Composable Commerce
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-knitrix p-5">
                      <Icon src={FullyAutomated} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Fully Automated
                    </p>
                    <p className="text-gray-dark mt-2">
                      Knitrix automates data sync between Akeneo PIM and
                      eCommerce platforms
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-knitrix p-5">
                      <Icon src={Standard} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Uncompromising Standard
                    </p>
                    <p className="text-gray-dark mt-2">
                      We deliver robust, reliable, and meticulously tested
                      software solutions.
                    </p>
                  </div>
                  <div>
                    <div className="inline-block w-auto h-auto rounded-lg bg-gradient-knitrix p-5">
                      <Icon src={Best} variant="white" size="lg" />
                    </div>
                    <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                      Best in Class
                    </p>
                    <p className="text-gray-dark mt-2">
                      Harnessing the latest technologies, we create future-ready
                      innovations.
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

export default Knitrix;