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
import SanityImage from "@common/components/SanityImage";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";

import { Script } from "streak/components";

type EventItem = {
  _key: string;
  title: string;
  description: string;
  year: string;
  image: {
    url?: string;
    alt?: string;
    asset?: { _ref: string };
  };
};

type LifeEventsWidget = {
  widgetId: string;
  widgetType: string;
  loadingStrategy: "lazy";
  data: {
    valorizEvents: EventItem[];
    totalEvents?: number;
  };
};

const LifeEvents = (props: LifeEventsWidget) => {
  const eventList = props?.data?.valorizEvents ?? [];

  if (!Array.isArray(eventList) || eventList.length === 0) return null;

  return (
    <section className="relative border-b py-12 xl:py-20 xxl:py-26 overflow-hidden">
      <div className="container">
        <h3 className="text-h4 xl:text-h2">Events</h3>

        <div id="life_events" className="relative mt-8 lg:mt-16 xl:mt-20">
          <div className="embla">
            <div className="embla__container flex -mx-3 xl:-mx-7">
              {eventList.map((each) => (
                <div
                  key={each._key}
                  className="embla__slide flex-none flex flex-col w-[95%] md:w-1/3 xl:w-[31.3%] px-2 xl:px-5"
                >
                  <SanityImage
                    src={each.image}
                    width={800}
                    height={583}
                    alt={each.image?.alt}
                    className="w-full rounded"
                  />

                  <div className="flex flex-col justify-between h-full mt-8">
                    <h4 className="text-xxl">{each.title}</h4>

                    <div>
                      <div className="flex items-center gap-1 mt-4">
                        <p className="text-xs font-medium">{each.year}</p>
                      </div>

                      <p className="text-md mt-4">{each.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 lg:gap-8 mt-16">
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

        <Script id="LifeEventsCarousel">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const EmblaCarousel = (gDom as any).EmblaCarousel;
              const section = document.getElementById("life_events");
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
      </div>
    </section>
  );
};

export default LifeEvents;
