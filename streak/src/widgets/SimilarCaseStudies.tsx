/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author
 * Anagha Chandrababu
 */

import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import SanityImage from "@common/components/SanityImage";
import ArrowRight from "@common/icons/ArrowRight";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

type CaseStudy = {
  data: {
    similarCaseStudies: {
      _key: string;
      link: string;
      image: { url: string; alt: string };
      title: string;
      ariaLabel: string;
      url: string;
      description: string;
    }[];
  };
};
const SimilarCaseStudies = (props: CaseStudy) => {
  const caseStudies = props?.data?.similarCaseStudies ?? [];
  return (
    <section
      className="relative text-black bg-white overflow-hidden py-12 xl:py-20 xxl:py-26"
      id="case-studies"
    >
      <div className="container will-change-transform">
        <div className="flex justify-between">
          <h3 className="text-h4 xl:text-h2">Case Studies</h3>

          <div className="flex items-center justify-center gap-6 lg:gap-8">
            <button
              className="embla_navigation_button group disabled:opacity-20"
              data-action="previous"
              aria-label="previous case studies"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
                <Icon src={ChevronLeft} size="md" />
              </span>
            </button>

            <div className="dots flex items-center gap-2 max-lg:hidden"></div>

            <button
              className="embla_navigation_button group disabled:opacity-20"
              data-action="next"
              aria-label="next case studies"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
                <Icon src={ChevronRight} size="md" />
              </span>
            </button>
          </div>
        </div>

        <div className="embla mt-6 lg:mt-18">
          <div className="embla__container flex -mx-3 xl:-mx-5 xxl:-mx-7">
            {caseStudies?.map((each, index) => (
              <a
                href={each.link ?? "#"}
                aria-label={each.ariaLabel ?? each.title}
                key={each._key}
                className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group"
              >
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <SanityImage
                    loading="lazy"
                    src={each.image}
                    width={800}
                    height={583}
                    alt={each.image.alt}
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>

                <div className="flex flex-col justify-between h-full mt-8 text-black">
                  <h4 className="text-xxl">{each.title}</h4>

                  <div>
                    <p className="text-md mt-4">{each.description}</p>

                    <div className="mt-8">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200">
                        Read More
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16 xl:mt-26">
          <a href="/case-studies">
            <Button
              variant="outline-dark"
              className="border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white active:bg-secondary active:text-white focus:outline-none transition-all duration-300 p-6 text-lg font-medium rounded h-[76px] opacity-100 flex items-center group"
            >
              <span>View All Stories</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                <Icon src={ArrowRight} size="sm" />
              </span>
            </Button>
          </a>
        </div>
      </div>
      <Script id="SimilarCaseStudies">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const section = document.getElementById("case-studies");
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
                button.className = "group flex items-center justify-center";
                const span = document.createElement("span");
                span.className = "w-1 h-1 rounded-full bg-gray-600";
                button.appendChild(span);
                button.ariaLabel = `case-study-${index}`;
                button.addEventListener("click", () => embla.scrollTo(index));
                dotsContainer?.appendChild(button);
              });

              // Arrow navigation
              navigationButtons?.forEach((btn) => {
                const button: HTMLButtonElement = btn as HTMLButtonElement;
                button.addEventListener("click", () =>
                  button?.dataset?.action === "previous"
                    ? embla.scrollPrev()
                    : embla.scrollNext()
                );
              });

              // Update controls
              const updateDots = () => {
                const selectedIndex = embla.selectedScrollSnap();
                const buttons = dotsContainer?.querySelectorAll("button");

                buttons?.forEach((button, index) => {
                  const span = button.querySelector("span");

                  if (!span) return;

                  /** ALWAYS SHOW CENTER DOT */
                  Object.assign(span.style, {
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor:
                      index === selectedIndex ? "black" : "#9ca3af",
                  });

                  /** OUTER RING STYLE */
                  Object.assign(button.style, {
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    border:
                      index === selectedIndex
                        ? "4px solid black"
                        : "1px solid #9ca3af",
                    backgroundColor: "white",
                  });
                   // ARROWS
                navigationButtons?.forEach((btn) => {
                  const b: HTMLButtonElement = btn as HTMLButtonElement;
                  if (b.dataset.action === "previous")
                    b.disabled = !embla.canScrollPrev();
                  else b.disabled = !embla.canScrollNext();
                });
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

export default SimilarCaseStudies;
