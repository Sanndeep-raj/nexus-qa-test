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

import clsx from "clsx";

import BannerContentShopsphere from "@common/components/content/BannerContentShopsphere";
import BannerContentStreak from "@common/components/content/BannerContentStreak";
import BannerContentVBrands from "@common/components/content/BannerContentVBrands";
import BannerContentKnitrix from "@common/components/content/BannerContentKnitrix";
import { Script } from "streak/components";
import ScrollFade from "@common/components/ScrollFade";

const slides = [
  {
    banner: "/images/products/products-banner-1.webp",
    alt: "Shopsphere",
    title: "Say Hello to Tomorrow",
    subtitle:
      "Our product suite isn’t just about tools, it’s about transformation. Engineered for agility, built to grow, and trusted by ambitious brands.",
  },
  {
    banner: "/images/products/products-banner-2.webp",
    alt: "Streak",
    title: "Say Hello to Tomorrow",
    subtitle:
      "Our product suite isn’t just about tools, it’s about transformation. Engineered for agility, built to grow, and trusted by ambitious brands.",
  },
  {
    banner: "/images/industry/industry-banner-3.webp",
    alt: "Knitrix",
    title: "Say Hello to Tomorrow",
    subtitle:
      "Our product suite isn’t just about tools, it’s about transformation. Engineered for agility, built to grow, and trusted by ambitious brands.",
  },
  {
    banner: "/images/industry/industry-banner-4.webp",
    alt: "VBrand",
    title: "Say Hello to Tomorrow",
    subtitle:
      "Our product suite isn’t just about tools, it’s about transformation. Engineered for agility, built to grow, and trusted by ambitious brands.",
  },
];

const ProductsBanner = () => {
  return (
    <section
      className="relative min-h-screen bg-black overflow-hidden "
    >
      <ScrollFade>
        <div restrict-transform="true" className="absolute inset-0 " id="banner-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={clsx(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center",
                index === 0 ? "opacity-100 z-30" : "opacity-0 z-10"
              )}
              data-index={index}
            >
              <div className="absolute inset-0">
                {index === 0 && (
                  <div className="absolute inset-0 bg-[#51467C] opacity-100" />
                )}
                <img
                  src={slide.banner}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 max-xl:hidden"
                />
                <img
                  src="/images/products/products-banner-sm.webp"
                  alt="Products banner"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 xl:hidden"
                />
                <div className="absolute inset-0 bg-black/70" />
              </div>
              <div className="container relative z-30 flex items-center justify-center min-h-full">
                <div className="flex flex-col xl:flex-row items-center justify-center xl:space-x-26 w-full min-h-screen">
                  <div className="xl:w-1/2 text-white text-center xl:text-left px-6 min-h-full">
                    <p className="text-h4 xl:text-h1 text-primary-light leading-tight">
                      {slide.title}
                    </p>
                    <p className="text-md xl:text-xxl mt-2 xl:mt-6">
                      {slide.subtitle}
                    </p>
                  </div>
                  <div
                    className="hidden xl:flex xl:w-1/2 min-h-full items-center"
                    id={`banner-content-${index}`}
                  >
                    {index === 0 && <BannerContentShopsphere />}
                    {index === 1 && <BannerContentStreak />}
                    {index === 2 && <BannerContentKnitrix />}
                    {index === 3 && <BannerContentVBrands />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div restrict-transform="true" className="max-xl:hidden container relative z-40 pointer-events-none h-screen flex items-end justify-end pb-10">
          <div className="text-right pointer-events-auto me-12">
            <div className="relative flex mx-auto h-[1px] bg-gray-700 w-[80%] mb-6">
              {slides.map((_, i) => (
                <span
                  key={i}
                  data-index={i}
                  className={clsx(
                    "indicator-dot absolute top-[-3px] w-2 h-2 rounded-full outline outline-4 outline-black bg-gray-700 transition-all duration-300",
                    i === 0 && "bg-primary",
                    {
                      "left-[0%]": i === 0,
                      "left-[33%]": i === 1,
                      "left-[66%]": i === 2,
                      "left-[100%]": i === 3,
                    }
                  )}
                />
              ))}
            </div>

            <div className="flex space-x-10 justify-end">
              {[
                {
                  logo: "/images/products/shopsphere-logo-white.svg",
                  alt: "Shopsphere logo",
                  width: 144,
                  height: 24,
                },
                {
                  logo: "/images/products/streak-logo-white.svg",
                  alt: "Streak logo",
                  width: 108,
                  height: 27,
                },
                {
                  logo: "/images/products/knitrix-logo-white.svg",
                  alt: "Knitrix logo",
                  width: 84,
                  height: 21,
                },
                {
                  logo: "/images/products/vbrand-logo-white.svg",
                  alt: "VBrand logo",
                  width: 100,
                  height: 18,
                },
              ].map((brand, i) => (
                <button
                  key={i}
                  data-index={i}
                  className={clsx(
                    "brand-btn transition-opacity duration-300",
                    i === 0 ? "opacity-100" : "opacity-50"
                  )}
                >
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    width={brand.width}
                    height={brand.height}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <Script
          id="ProductsBanner"
          options={{
            slides,
          }}
        >
          {(gDom: any, options: any) => {
            const SLIDE_DURATION = 6000;
            const slides = options.slides || [];
            let currentIndex = 0;
            let timer: any;
            const container = gDom.geById("banner-container");
            const indicators = document.querySelectorAll(
              ".indicator-dot"
            );
            const brandButtons = document.querySelectorAll(".brand-btn");

            const setActiveSlide = (index: number) => {
              const slidesEl = container?.querySelectorAll("[data-index]");
              if (!slidesEl) return;

              slidesEl.forEach((slide: any, i: any) => {
                slide.classList.toggle("opacity-100", i === index);
                slide.classList.toggle("z-30", i === index);
                slide.classList.toggle("opacity-0", i !== index);
                slide.classList.toggle("z-10", i !== index);
              });
              brandButtons.forEach((btn, i) => {
                (btn as HTMLElement).style.opacity = i === index ? "1" : "0.5";
              });
              indicators.forEach((dot, i) => {
                (dot as HTMLElement).classList.toggle("bg-primary", i === index);
              });
              currentIndex = index;
            };

            const nextSlide = () => {
              currentIndex = (currentIndex + 1) % slides.length;
              setActiveSlide(currentIndex);
            };

            const startAutoplay = () => {
              clearInterval(timer);
              timer = setInterval(nextSlide, SLIDE_DURATION);
            };

            const handleManualClick = (index: number) => {
              clearInterval(timer);
              setActiveSlide(index);
              startAutoplay();
            };

            brandButtons.forEach((btn, i) => {
              btn.addEventListener("click", () => handleManualClick(i));
            });

            indicators.forEach((ind, i) => {
              ind.addEventListener("click", () => handleManualClick(i));
            });

            setActiveSlide(0);
            startAutoplay();
          }}
        </Script>
      </ScrollFade>
    </section>
  );
};

export default ProductsBanner;
