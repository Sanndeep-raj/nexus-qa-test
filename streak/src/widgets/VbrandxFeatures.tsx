/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */

import Icon from "@common/components/Icon";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

const VbrandxFeatures = () => {
  return (
    <section className="py-16 lg:py-26 overflow-hidden" id="vbrandxfeatures">
      <div className="container">

        {/* Heading Section */}
        <div className="lg:w-6/12">
          <h4 className="text-md font-semibold mb-4">FEATURES OF</h4>
          <img src="/images/products/vbrand-logo.svg" width={334} height={60} alt="" />
          <p className="text-xxl mt-12">
            The platform keeps evolving, bringing new features to meet the
            demands of a rapidly evolving market
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="embla mt-14 lg:mt-20">
          <div className="embla__container flex -mx-2 xl:-mx-5">

            {/* Slide 1 */}
            <div className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-2 lg:px-4">
              <div>
                <img src="/images/vbrandx/vb-feature-1.webp" width={800} height={451} alt="" className="w-full" />
              </div>
              <div className="mt-8">
                <h4 className="text-xxl">Strapi and Sanity Integration</h4>
                <p className="text-md mt-4">
                  Designed for rapid deployment and effortless content management.
                </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-2 lg:px-4">
              <div>
                <img src="/images/vbrandx/vb-feature-2.webp" width={800} height={451} alt="" className="w-full" />
              </div>
              <div className="mt-8">
                <h4 className="text-xxl">Real-Time Collaboration</h4>
                <p className="text-md mt-4">
                  Built to create interactive, non-transactional mobile experiences.
                </p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-2 lg:px-4">
              <div>
                <img src="/images/vbrandx/vb-feature-3.webp" width={800} height={451} alt="" className="w-full" />
              </div>
              <div className="mt-8">
                <h4 className="text-xxl">API-First Approach</h4>
                <p className="text-md mt-4">
                  Empowers businesses to launch apps without technical complexity.
                </p>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-2 lg:px-4">
              <div>
                <img src="/images/vbrandx/vb-feature-4.webp" width={800} height={451} alt="" className="w-full" />
              </div>
              <div className="mt-8">
                <h4 className="text-xxl">Launch in Hours</h4>
                <p className="text-md mt-4">
                  Launch apps within hours if design and content are ready.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Buttons + Dots */}
        <div className="flex items-center justify-center gap-6 lg:gap-8 mt-16">
          <button className="embla_navigation_button group disabled:opacity-20" data-action="previous" aria-label="previous case studies">
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
              <Icon src={ChevronLeft} size="md" />
            </span>
          </button>
          <div className="dots flex items-center gap-2">
          </div>
          <button className="embla_navigation_button group disabled:opacity-20" data-action="next" aria-label="next case studies">
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
              <Icon src={ChevronRight} size="md" />
            </span>
          </button>
        </div>

      </div>

      {/* Script */}
      <Script id="VbrandxFeatures">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const section = document.getElementById("vbrandxfeatures");
              const emblaNode = section?.querySelector(".embla");
              const navigationButtons = section?.querySelectorAll(".embla_navigation_button");
              const dotsContainer = section?.querySelector(".dots");
              const emblaOptions = { loop: false };
              const embla = EmblaCarousel(emblaNode, emblaOptions);
              const defaultClass = "border border-gray-600";

              // Create dots
              const scrollSnaps = embla.scrollSnapList();

              scrollSnaps.forEach((_: any, index: any) => {
                const button = document.createElement("button");
                button.className =
                  `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`;
                const span = document.createElement("span");
                span.className = "w-1 h-1 rounded-full bg-gray-600";
                button.appendChild(span);
                button.ariaLabel = `dot-${index}`;
                button.addEventListener("click", () => embla.scrollTo(index));
                dotsContainer?.appendChild(button);
              });

              // Arrow navigation
              navigationButtons?.forEach((btn) => {
                const button = btn as HTMLButtonElement;
                button.addEventListener("click", () =>
                  button?.dataset?.action === "previous"
                    ? embla.scrollPrev()
                    : embla.scrollNext()
                );
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

                  if (span) {
                    if (index === selectedIndex) {
                      button.className = "group";
                      Object.assign(button.style, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "9999px",
                        borderWidth: "4px",
                        borderStyle: "solid",
                        borderColor: "black",
                        opacity: "1"

                      });

                      span.className = "w-1 h-1 rounded-full bg-black";
                    } else {
                      button.className = "group";
                      Object.assign(button.style, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "9999px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "#4b5563",
                      });

                       span.className =
                        "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";
                      }
                  }
                });
              };

              embla.on("select", updateDots);
              embla.on("reInit", updateDots);
              updateDots();
            })
            .catch((err: any) => {
              console.log({ err });
            });
        }}
      </Script>

    </section>
  );
};

export default VbrandxFeatures;
