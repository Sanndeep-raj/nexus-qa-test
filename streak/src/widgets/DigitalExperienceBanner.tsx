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
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

const DigitalExperinceBanner = () => {
  const scrollId = "over"
  return (
    <section className="relative bg-black bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(1,33,26,1)_22%,_rgba(1,26,18,1)_51%,_rgba(0,0,0,1)_100%)]">
      <div className="container relative flex items-center min-h-screen">
        <div className="w-full lg:flex lg:items-center lg:justify-between">
          <div className="relative lg:w-1/2 text-white max-lg:text-center z-20">
            <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight">
              Digital
              <br className="max-lg:hidden" /> Experience
              <span className="max-md:hidden">
                <br /> Services
              </span>
            </h1>
            <div className="flex max-md:flex-col max-md:items-center max-lg:justify-center my-8 xl:my-10 gap-8 md:gap-12 xl:gap-25">
              <div className="flex items-center md:items-start gap-2 md:flex-col">
                <p className="text-xxl md:text-h5">7m+</p>
                <p className="max-md:text-xs">Operations</p>
              </div>
              <div className="flex items-center md:items-start gap-2 md:flex-col">
                <p className="text-xxl md:text-h5">200+M</p>
                <p className="max-md:text-xs">Revenue</p>
              </div>
              <div className="flex items-center md:items-start gap-2 md:flex-col">
                <p className="text-xxl md:text-h5">10+</p>
                <p className="max-md:text-xs">Years Of Industry Expertise</p>
              </div>
            </div>
            <div id = "btn_banner"><Button
              variant="outline-light"
              className="btn_banner flex items-center mt-8 lg:mt-12 max-lg:mx-auto group"

            >
              <span>Get Started</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                <Icon src={ArrowRight} size="sm" />
              </span>
            </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ps-8 xl:ps-10 max-lg:absolute left-0 bottom-0 w-full z-10">
            <img
              src="/images/services/de-graphics.webp"
              width={654}
              height={500}
              alt=""
              className="w-full max-lg:hidden"
            />
          </div>
        </div>
      </div>
       <Script id="DigitalExperinceBanner" options={{ scrollId }}>
        {(gDom: any, options: any) => {
          const scrollId = options.scrollId;
          const headerSection = document.getElementById("header");
          const headerHeight = headerSection?.offsetHeight || 0;
          document.getElementById("btn_banner")?.addEventListener("click", () => {
            const el = document.getElementById(scrollId);
            if (el) {
              
              const yOffset = -1 * getHeight() + 1;
              const y =
                el.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }

          });
          const getHeight = () => {
            const nav = document.getElementById("navsection");
            const navHeight = nav?.offsetHeight || 0;
            console.log(navHeight)
            return headerHeight + navHeight;
          };
        }}
      </Script>
    </section>
  );
};

export default DigitalExperinceBanner;


