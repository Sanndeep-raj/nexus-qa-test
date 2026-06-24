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

const LifeWellnessHealth = () => {
  const images = [
    "/images/life/health-1.webp",
    "/images/life/health-2.webp",
    "/images/life/health-3.webp",
    "/images/life/health-1.webp",
    "/images/life/health-2.webp",
    "/images/life/health-3.webp",
  ];

  return (
    <section className="relative overflow-hidden" id="life_health">
      <div className="container">
        <div className="border-b py-12 xl:py-20 xxl:py-26">
          <h3 className="text-h4 xl:text-h2 lg:mb-16">
            Employee <br /> Wellness Initiatives
          </h3>

          <div className="lg:flex">
            <div className="lg:w-4/12 max-lg:mt-16">
              <h4 className="text-h5">
                Posture Correction <br /> Health Talk
              </h4>
              <p className="xxl text-gray-500 mt-4">2025</p>
            </div>

            <div className="lg:w-8/12">
              <div className="embla max-lg:mt-5 lg:overflow-hidden">
                <div className="embla__container flex -mx-2 xl:-mx-5">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-2 lg:px-4"
                    >
                      <img
                        src={img}
                        width={600}
                        height={578}
                        alt=""
                        className="w-full rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end gap-6 lg:gap-8 mt-15 xl:mt-20">
                <button
                  className="embla_navigation_button group disabled:opacity-20"
                  data-action="previous"
                  aria-label="previous good hands"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
                    <Icon src={ChevronLeft} size="md" />
                  </span>
                </button>

                <div className="flex items-center">
                  <div className="dots flex items-center justify-center gap-2"></div>
                </div>

                <button
                  className="embla_navigation_button group disabled:opacity-20"
                  data-action="next"
                  aria-label="next good hands"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
                    <Icon src={ChevronRight} size="md" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script id="LifeWellnessHealthCarousel">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const EmblaCarousel = (gDom as any).EmblaCarousel;
              const section = document.getElementById("life_health");
              const emblaNode = section?.querySelector(".embla");
              const navigationButtons = section?.querySelectorAll(".embla_navigation_button");
              const dotsContainer = section?.querySelector(".dots");
              const emblaOptions = { loop: false };
              const embla = EmblaCarousel(emblaNode, emblaOptions);
              const defaultClass = "border border-gray-600 hover:border-gray-500";

              const scrollSnaps = embla.scrollSnapList();
              scrollSnaps.forEach((_: any, index: number) => {
                const button = document.createElement("button");
                button.className = `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`;
                const span = document.createElement("span");
                span.className = "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";;
                button.appendChild(span);
                button.ariaLabel = `health-${index}`;
                button.addEventListener("click", () => embla.scrollTo(index));
                dotsContainer?.appendChild(button);
              });

              navigationButtons?.forEach((btn) => {
                const button: HTMLButtonElement = btn as HTMLButtonElement;
                button.addEventListener("click", () =>
                  button.dataset.action === "previous"
                    ? embla.scrollPrev()
                    : embla.scrollNext()
                );
              });

              const updateDots = () => {
                navigationButtons?.forEach((btn) => {
                  const button: HTMLButtonElement = btn as HTMLButtonElement;
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
            .catch((err: Error) => console.log({ err }));
        }}
      </Script>
    </section>
  );
};

export default LifeWellnessHealth;
