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
import { hasArrayElements } from "utils/commonUtils";

interface CloudModernizationBannerProps {
  data: {
    heading: string;
    bannerItems: { feature: string; count: string }[]
    image: string;
    description: string;
  }
}

const CloudModernizationBanner = (props: CloudModernizationBannerProps) => {
  const { heading, description, bannerItems, image } = props.data || {};
  const scrollId = "overview"
  return (
    <section className="relative bg-black bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(1,33,26,1)_22%,_rgba(1,26,18,1)_51%,_rgba(0,0,0,1)_100%)]">
      <div className="container relative flex items-center min-h-screen">
        <div className="w-full lg:flex lg:items-center lg:justify-between">
          <div className="relative lg:w-1/2 text-white max-lg:text-center z-20">
            <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight" dangerouslySetInnerHTML={{ __html: heading }} />
            <h2 className="text-md xl:text-xxl mt-8 xl:mt-6">
              {description}
            </h2>
            <div className="flex max-md:flex-col max-md:items-center max-lg:justify-center my-8 xl:my-10 gap-8 md:gap-12 xl:gap-25">
              {
                hasArrayElements(bannerItems) && bannerItems.map((item) => (
                  <div key={item.feature} className="flex items-center md:items-start gap-2 md:flex-col">
                    <p className="text-xxl md:text-h5">{item.count}</p>
                    <p className="max-md:text-xs">{item.feature}</p>
                  </div>
                ))
              }
            </div>
            <div id="btn_banner">
              <Button
                variant="outline-light"
                className="flex items-center mt-8 lg:mt-12 max-lg:mx-auto group"

              >
                <span>Get Started</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </div>
          </div>
          <div className="lg:w-5/12 lg:ps-8 xl:ps-10 max-lg:absolute left-0 bottom-0 w-full z-10">
            <img
              src={image}
              alt="graphics"
              className="w-full max-lg:hidden"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      <Script id="CloudModernizationBanner" options={{ scrollId }}>
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
            return headerHeight + navHeight;
          };
        }}
      </Script>
    </section>
  );
};

export default CloudModernizationBanner;


