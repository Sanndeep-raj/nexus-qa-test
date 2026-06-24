/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Anagha Chandrababu
 */
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

interface BannerSectionProps {
  data: {
    description: string;
    buttonText: string;
    img: string;
    imgSm: string;
    scrollId: string;
  };
}

const AIMLBanner = (props: BannerSectionProps) => {
  const description = props?.data?.description;
  const buttonText = props?.data?.buttonText;
  const scrollId = props?.data?.scrollId;

  return (
    <section className="relative bg-black bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(1,33,26,1)_22%,_rgba(1,26,18,1)_51%,_rgba(0,0,0,1)_100%)]">
      <div className="container relative flex items-center min-h-screen">
        <div className="w-full lg:flex lg:items-center lg:justify-between">
          <div className="relative lg:w-1/2 text-white max-lg:text-center z-20">
            <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight">
              AI & Machine
              <br /> Learning Services
            </h1>

            <p className="text-md xl:text-xxl mt-8 xl:mt-6">{description}</p>

            <div className="flex max-md:flex-col max-md:items-center max-lg:justify-center my-8 xl:my-10 gap-8 md:gap-12 xl:gap-25">
              <div className="flex items-center md:items-start gap-2 md:flex-col">
                <p className="text-xxl md:text-h5 font-semibold">7m+</p>
                <p className="max-md:text-xs">Operations</p>
              </div>

              <div className="flex items-center md:items-start gap-2 md:flex-col">
                <p className="text-xxl md:text-h5 font-semibold">200+M</p>
                <p className="max-md:text-xs">Revenue</p>
              </div>

              <div className="flex items-center md:items-start gap-2 md:flex-col">
                <p className="text-xxl md:text-h5 font-semibold">10+</p>
                <p className="max-md:text-xs">Years Of Industry Expertise</p>
              </div>
            </div>

            <Button
              id="btn_banner"
              variant="outline-light"
              className="flex items-center mt-8 lg:mt-12 max-lg:mx-auto group"
            >
              <span>{buttonText}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                <Icon src={ArrowRight} size="sm" />
              </span>
            </Button>
          </div>
          <div className="lg:w-5/12 lg:ps-8 xl:ps-10 max-lg:absolute left-0 bottom-0 w-full mb-[180px] z-10">
            <img
              src="/images/services/aiml-graphics.webp"
              width={735}
              height={591}
              alt=""
              className="w-full max-lg:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-10 max-lg:hidden w-5/12">
        <img
          src="/images/services/aiml-graphics-2.webp"
          width={800}
          height={398}
          alt=""
          className="w-full max-w-full"
        />
      </div>
      <Script id="AIMLBanner" options={{ scrollId }}>
        {(gDom: any, options: any) => {
          const scrollId = options.scrollId;
          document
            .getElementById("btn_banner")
            ?.addEventListener("click", () => {
              console.log(scrollId);
              const el = document.getElementById(scrollId);
              if (el) {
                const isMobile = window.innerWidth < 1024;
                const yOffset = isMobile ? -145 : -153;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            });
        }}
      </Script>
    </section>
  );
};

export default AIMLBanner;
