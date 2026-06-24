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

import Quote from "@common/components/Quote";
import Icon from "@common/components/Icon";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import SanityImage from "@common/components/SanityImage";
import { Script } from "streak/components";
import PortableDescription from "@common/components/PortableDescription";

type LifeVoiceWidget = {
  widgetId: string;
  widgetType: string;
  loadingStrategy: "lazy";
  data: LifeVoiceData;
};

type LifeVoiceData = {
  voiceOfValorians: VoiceItem[];
  totalVoices?: number;
};

type VoiceItem = {
  _key: string;
  quote: string;
  authorName: string;
  authorRole: string;
  image: {
    url?: string;
    alt?: string;
    asset?: { _ref: string };
  };
  description: any[];
};

const LifeVoice = (props: LifeVoiceWidget) => {
  const voiceList = props?.data?.voiceOfValorians ?? [];
  const totalVoices = props?.data?.totalVoices ?? voiceList.length;

  if (!Array.isArray(voiceList) || voiceList.length === 0) return null;

  return (
    <section className="text-white bg-black py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2 mb-10 xl:mb-16">
          Voice of Valorians
        </h2>
      </div>

      <div id="life_voice" className="container relative">
        <div className="embla overflow-hidden">
          <div className="embla__container flex">
            {voiceList.map((each) => (
              <div
                key={each._key}
                className=" embla__slide flex max-md:flex-col flex-none w-full"
              >
                <div className="flex max-md:flex-col items-center">
                  <div className="md:w-5/12">
                    <SanityImage
                      width={460}
                      height={499}
                      src={each.image}
                      alt={each.image?.alt}
                      className="w-full max-w-[260px] md:max-w-none mx-auto rounded"
                      urlWithOutDimension
                    />
                  </div>

                  <div className="md:w-7/12 md:ps-8 lg:ps-10 xl:ps-16">
                    <div className="flex items-center mb-4">
                      <Icon src={Quote} size="lg" variant="primary" />
                      <span className="text-sm lg:text-md ms-4">
                        {each.quote}
                      </span>
                    </div>
                    {/* <div className="flex flex-col gap-4 lg:gap-12"> */}
                      <div className=" text-md lg:text-h6">
                        <PortableDescription value={each.description} />
                      </div>
                    {/* </div> */}

                    <div className="mt-16">
                      <p className="text-xxl text-primary">
                        {each.authorName}
                      </p>
                      <p className="text-md text-gray-500">
                        {each.authorRole}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 lg:gap-8 mt-16">
          <button
            type="button"
            className="embla_navigation_button disabled:opacity-20"
            data-action="previous"
            aria-label="Previous slide"
          >
            <Icon src={ChevronLeft} size="md" />
          </button>

          <div className="dots flex items-center gap-2"></div>

          <button
            type="button"
            className="embla_navigation_button disabled:opacity-20"
            data-action="next"
            aria-label="Next slide"
          >
            <Icon src={ChevronRight} size="md" />
          </button>
        </div>
      </div>

      <Script id="LifeVoiceCarousel">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const section = document.getElementById("life_voice");
              const emblaNode = section?.querySelector(".embla");
              const navigationButtons = section?.querySelectorAll(
                ".embla_navigation_button"
              );
              const dotsContainer = section?.querySelector(".dots");

              const emblaOptions = { loop: false };
              const embla = EmblaCarousel(emblaNode, emblaOptions);

              const defaultClass =
                "group flex items-center justify-center w-4 h-4 rounded-full border border-gray-600 hover:border-gray-500";

              const scrollSnaps = embla.scrollSnapList();

              scrollSnaps.forEach((_: any, index: number) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = defaultClass;
                button.setAttribute(
                  "aria-label",
                  `Go to slide ${index + 1}`
                );
                const span = document.createElement("span");
                span.className =
                  "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";
                span.setAttribute("aria-hidden", "true");
                button.appendChild(span);
                button.addEventListener("click", () =>
                  embla.scrollTo(index)
                );
                dotsContainer?.appendChild(button);
              });
              navigationButtons?.forEach((btn) => {
                const button = btn as HTMLButtonElement;
                button.addEventListener("click", () =>
                  button.dataset.action === "previous"
                    ? embla.scrollPrev()
                    : embla.scrollNext()
                );
              });

              const updateDots = () => {
                navigationButtons?.forEach((btn) => {
                  const button = btn as HTMLButtonElement;
                  if (button.dataset.action === "previous") {
                    button.disabled = !embla.canScrollPrev();
                  } else {
                    button.disabled = !embla.canScrollNext();
                  }
                });

                const selectedIndex = embla.selectedScrollSnap();
                const buttons = dotsContainer?.querySelectorAll("button");

                buttons?.forEach((button, index) => {
                  const span = button.querySelector("span");

                  if (index === selectedIndex) {
                    button.className =
                      "group flex items-center justify-center w-4 h-4 rounded-full border-4 border-white";
                    button.style.borderWidth = "4px";
                    button.style.borderColor = "#fff";
                    button.setAttribute("aria-current", "true");
                    if (span) {
                      span.className =
                        "w-1 h-1 rounded-full bg-white";
                    }
                  } else {
                    button.className = defaultClass;
                    button.style.borderWidth = "1px";
                    button.removeAttribute("aria-current");
                    if (span) {
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

export default LifeVoice;
