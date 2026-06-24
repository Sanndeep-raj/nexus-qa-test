/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Minna Ancy Mathew
 */

import Icon from "@common/components/Icon";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";
import CardCollaborate from "./CardCollaborate";
import CardTechSupport from "./CardTechSupport";
import CardExpandService from "./CardExpandService";
import CardSharedSuccess from "./CardSharedSuccess";

const WhyPartnerSm = () => {
  return (
    <section id="why_partner_sm">
      <div className="container">
        {/* Carousel Section */}
        <div className="embla mt-12 xl:mt-26">
          <div className="embla__container flex -mx-3">
            <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
              <CardCollaborate />
            </div>
            <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
              <CardTechSupport />
            </div>
            <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
              <CardExpandService />
            </div>
            <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
              <CardSharedSuccess />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 xl:mt-26">
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            <button
              className="embla_navigation_button disabled:opacity-20"
              data-action="previous"
              aria-label="previous"
            >
              <Icon src={ChevronLeft} size="md" />
            </button>
            <div className="dots flex items-center gap-2"></div>
            <button
              className="embla_navigation_button disabled:opacity-20"
              data-action="next"
              aria-label="next"
            >
              <Icon src={ChevronRight} size="md" />
            </button>
          </div>
        </div>
      </div>

      {/* Embla Initialization Script */}
      <Script id="WhyPartnerSm">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const EmblaCarousel = (gDom as any).EmblaCarousel;
              const section = document.getElementById("why_partner_sm");
              const emblaNode = section?.querySelector(".embla");
              const navigationButtons = section?.querySelectorAll(
                ".embla_navigation_button"
              );
              const dotsContainer = section?.querySelector(".dots");
              const emblaOptions = { loop: false };
              const embla = EmblaCarousel(emblaNode, emblaOptions);
              const defaultClass =
                "border border-gray-600 hover:border-gray-500";

              // Create dots
              const scrollSnaps = embla.scrollSnapList();
              scrollSnaps.forEach((_: any, index: number) => {
                const button = document.createElement("button");
                button.className = `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`;
                const span = document.createElement("span");
                span.className =
                  "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";
                button.appendChild(span);
                button.ariaLabel = `dot-${index}`;
                button.addEventListener("click", () => embla.scrollTo(index));
                dotsContainer?.appendChild(button);
              });

              // Navigation logic
              navigationButtons?.forEach((btn) => {
                const button = btn as HTMLButtonElement;
                button.addEventListener("click", () => {
                  if (button?.dataset?.action === "previous")
                    embla.scrollPrev();
                  else embla.scrollNext();
                });
              });

              // Update controls
              const updateDots = () => {
                navigationButtons?.forEach((btn) => {
                  const button = btn as HTMLButtonElement;
                  if (button?.dataset?.action === "previous")
                    button.disabled = !embla.canScrollPrev();
                  else button.disabled = !embla.canScrollNext();
                });

                const selectedIndex = embla.selectedScrollSnap();
                const buttons = dotsContainer?.querySelectorAll("button");

                buttons?.forEach((button, index) => {
                  const span = button.querySelector("span");
                  if (!span) return;
                  if (index === selectedIndex) {
                    button.className =
                      "group flex items-center justify-center w-4 h-4 rounded-full border-4 border-white";
                    button.style.borderWidth = "4px";
                    button.style.borderColor = "#fff";
                    span.className = "w-1 h-1 rounded-full bg-white";
                  } else {
                    button.className = `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`;
                    button.style.borderWidth = "1px";
                    span.className =
                      "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";
                  }
                });
              };

              embla.on("select", updateDots);
              embla.on("reInit", updateDots);
              updateDots();
            })
            .catch((err: Error) => {
              console.log({ err });
            });
        }}
      </Script>
    </section>
  );
};

export default WhyPartnerSm;
