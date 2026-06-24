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
import CMS from "@common/icons/CMS";
import Interaction from "@common/icons/Interaction";
import Apps from "@common/icons/Apps";
import Launch from "@common/icons/Launch";

const VBrandX = () => {
  return (
    <>
      <section className="bg-black text-white py-12 xl:py-20 xxl:py-26">
        <a href="/vbrandx">
          <div className="container">
            <div className="grid grid-cols-2 xl:grid-cols-8 xl:gap- gap-y-8 xl:gap-y-0">
              <div className="col-span-2 xl:col-span-3">
                <div className="flex flex-col justify-end relative xl:w-[88%] h-auto xl:h-[580px] bg-gradient-vbrandx rounded-lg space-y-8 xl:space-y-12">
                  <div className="flex flex-col items-start space-y-4 pt-8 px-8 xl:px-14">
                    <div className="text-black text-md font-medium bg-white/70 px-4 py-2 rounded-lg">
                      User-Friendly
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
                        src="/images/products/vbrand-logo.svg"
                        width={156}
                        height={28}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full bg-black/10 mt-auto">
                    <div className="absolute w-full h-auto blur-sm"></div>
                    <p className="text-white text-md font-medium text-center p-4 xl:px-9 xl:py-6">
                      Powering intuitive app creation with speed, interactivity,
                      and zero complexity
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 xl:col-span-5">
                <div className="xl:w-[90%] xl:ms-auto">
                  <p className="text-md font-semibold uppercase mb-6 xl:mb-4">
                    Step Into the Future of Digital Interactions.
                  </p>
                  <img
                    src="/images/products/vbrand-logo-white.svg"
                    className="hidden xl:block"
                    width={334}
                    height={60}
                    alt=""
                  />
                  <img
                    src="/images/products/vbrand-logo-white.svg"
                    className="xl:hidden"
                    width={267}
                    height={48}
                    alt=""
                  />
                  <p className="text-xxl xl:text-h5 mt-8 xl:mt-12">
                    A low code Brand Experience Platform empowering teams to
                    create engaging, non-transactional mobile apps effortlessly.
                  </p>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-12 mt-10">
                    <div>
                      <div className="inline-block w-auto h-auto rounded-lg bg-gradient-vbrandx p-5">
                        <Icon src={CMS} variant="white" size="lg" />
                      </div>
                      <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                        Rapid Deploy & CMS
                      </p>
                      <p className="text-gray-light mt-2">
                        Designed for rapid deployment and effortless content
                        management.
                      </p>
                    </div>
                    <div>
                      <div className="inline-block w-auto h-auto rounded-lg bg-gradient-vbrandx p-5">
                        <Icon src={Interaction} variant="white" size="lg" />
                      </div>
                      <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                        Built for Interaction
                      </p>
                      <p className="text-gray-light mt-2">
                        Built to create interactive, non-transactional mobile
                        experiences.
                      </p>
                    </div>
                    <div>
                      <div className="inline-block w-auto h-auto rounded-lg bg-gradient-vbrandx p-5">
                        <Icon src={Apps} variant="white" size="lg" />
                      </div>
                      <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                        Apps Made Easy
                      </p>
                      <p className="text-gray-light mt-2">
                        Empowers businesses to launch apps without technical
                        complexity.
                      </p>
                    </div>
                    <div>
                      <div className="inline-block w-auto h-auto rounded-lg bg-gradient-vbrandx p-5">
                        <Icon src={Launch} variant="white" size="lg" />
                      </div>
                      <p className="text-md xl:text-xxl font-medium xl:font-normal mt-8">
                        Launch in Hours
                      </p>
                      <p className="text-gray-light mt-2">
                        Launch apps within hours if design and content are ready.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
    </>
  );
};

export default VBrandX;