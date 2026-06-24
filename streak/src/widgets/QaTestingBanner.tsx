/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

interface BannerSectionProps {
  data: {
    heading: string;
    headingsm: string;
    description: string;
    buttonText: string;
    img: string;
    imgSm: string;
    scrollId: string
  }
}

const QaTestingBanner = (props: BannerSectionProps) => {
  const heading = props?.data?.heading;
  const description = props?.data?.description;
  const buttonText = props?.data?.buttonText;
  const img = props?.data?.img;
  const imgSm = props?.data?.imgSm;
  const scrollId = props?.data?.scrollId;
  const headingsm = props?.data?.headingsm || heading;
  return (
    <section className="relative bg-black bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(1,33,26,1)_22%,_rgba(1,26,18,1)_51%,_rgba(0,0,0,1)_100%)]">
      <div className="container relative flex items-center min-h-screen">
        <div className="w-full lg:flex lg:items-center lg:justify-between">

          <div className="relative lg:w-1/2 text-white max-lg:text-center z-20">
            <h1
              className="text-h4 hidden xl:inline-block xl:text-h1 text-primary-light leading-tight whitespace-pre-line"
            >
              {heading}
            </h1>
            <h1
              className="text-h4 xl:hidden xl:text-h1 text-primary-light leading-tight whitespace-pre-line"
            >
              {headingsm}
            </h1>

            <p className="text-md xl:text-xxl mt-8 xl:mt-6">{description}</p>

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

          <div className="lg:w-5/12 lg:ps-8 xl:ps-10 max-lg:absolute left-0 bottom-0 w-full z-10">
            <img
              src={img}
              alt="Banner"
              className="w-full h-auto max-lg:hidden"
            />
            {props?.data?.imgSm &&
              <img
                src={imgSm}
                alt="Banner-sm"
                className="w-full h-auto max-w-[80%] md:max-w-[60%] mx-auto lg:hidden"
              />
            }
          </div>
        </div>
      </div>

      <Script id="QaTestingBanner" options={{ scrollId }}>
         {(gDom: any, options: any) => {
          const scrollId = options.scrollId;
          const headerSection = document.getElementById("header");
          const headerHeight = headerSection?.offsetHeight || 0;
          document.getElementById("btn_banner")?.addEventListener("click", () => {
            console.log(scrollId)
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

export default QaTestingBanner;
