/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Anagha Chandrababu
 */

import Icon from "@common/components/Icon";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

export type OverviewSlide = {
  title: string;
  description: string;
  img: string;
  imgSm: string;
};

export type AIMLOverviewProps = {
  data: {
    heading?: string;
    subHeading?: string;
    intro?: string;
    slides: OverviewSlide[];
  };
};

const AIMLOverview = (props: AIMLOverviewProps) => {
  const heading = props?.data?.heading;
  const subHeading = props?.data?.subHeading;
  const intro = props?.data?.intro;
  const slides = props?.data?.slides;

  return (
    <section className="py-16 lg:py-26 overflow-hidden" id="overview">
      <div className="container">
        <div className="lg:w-8/12">
          <p className="text-xxl xl:text-h4 mb-2">{heading}</p>
          <p className="text-h4 xl:text-h2 text-primary">{subHeading}</p>
          <p className="text-xxl xl:text-h5 mt-8">{intro}</p>
        </div>

        <div className="embla mt-16">
          <div className="embla__container flex -mx-2 xl:-mx-5">
            {slides.map((item, index) => (
              <div
                key={index}
                className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-2 lg:px-4"
              >
                <div>
                  <img
                    src={item.img}
                    width={800}
                    height={451}
                    alt={item.title}
                    className="w-full rounded-[16px] max-lg:hidden"
                  />
                  <img
                    src={item.imgSm}
                    width={800}
                    height={593}
                    alt={`${item.title}-sm`}
                    className="w-full rounded-[16px] lg:hidden"
                  />
                </div>

                <div className="mt-8">
                  <p className="text-xxl">{item.title}</p>
                  <p className="text-md mt-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 lg:gap-8 mt-12 xl:mt-15">
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

      <Script id="AIMLOverview">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const section = document.getElementById("overview");
              const emblaNode = section?.querySelector(".embla");
              const navigationButtons = section?.querySelectorAll(
                ".embla_navigation_button"
              );
              const dotsContainer = section?.querySelector(".dots");
              const emblaOptions = { loop: false };
              const embla = EmblaCarousel(emblaNode, emblaOptions);
              const defaultClass =
                "border border-gray-600 hover:border-gray-500";

              const scrollSnaps = embla.scrollSnapList();
              scrollSnaps.forEach((_: any, index: number) => {
                const button = document.createElement("button");
                button.className = `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`;
                const span = document.createElement("span");
                span.className =
                  "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";
                button.appendChild(span);
                button.ariaLabel = `qa-service-${index}`;
                button.addEventListener("click", () => embla.scrollTo(index));
                dotsContainer?.appendChild(button);
              });

              navigationButtons?.forEach((btn) => {
                const button: HTMLButtonElement = btn as HTMLButtonElement;
                button.addEventListener("click", () =>
                  button?.dataset?.action === "previous"
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

export default AIMLOverview;
