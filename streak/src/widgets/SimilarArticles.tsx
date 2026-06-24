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
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";
import { hasArrayElements } from "utils/commonUtils";
import DomainListing from "./DomainListing";
import SanityImage from "@common/components/SanityImage";

interface SanityImageAsset {
  _ref: string;
  _type: "reference";
}

interface SanityImageType {
  _type: "image";
  asset: SanityImageAsset;
  alt?: string;
}

interface SimilarBlog {
  _key: string;
  title: string;
  link: string;
  description: string;
  domains: string[];
  image: SanityImageType;
}

interface SimilarArticlesProps {
  data?: {
    similarBlogs?: SimilarBlog[];
  };
}


const SimilarArticles = (props: SimilarArticlesProps) => {
  const similarBlogs = props?.data?.similarBlogs || {}

  return (
    <section className="relative pb-12 xl:py-20 xxl:py-26 overflow-hidden" id="similar_blogs_section">
      <div className="container will-change-transform">
        <div className="flex justify-between">
          <p className="text-h4 xl:text-h2">Similar articles</p>

          <div className="flex items-center justify-center gap-6 lg:gap-8 max-md:hidden">
            <button
              className="embla_navigation_button group disabled:opacity-20"
              data-action="previous"
              aria-label="previous"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
                <Icon src={ChevronLeft} size="md" />
              </span>
            </button>

            <div className="flex items-center gap-2">
              <div className="dots-desktop flex items-center justify-center gap-2"></div>
            </div>

            <button
              className="embla_navigation_button group disabled:opacity-20"
              data-action="next"
              aria-label="next"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
                <Icon src={ChevronRight} size="md" />
              </span>
            </button>
          </div>
        </div>          <div className="embla mt-14">
          <div className="embla__container flex -mx-3 xl:-mx-7">
            {similarBlogs?.map((blog: any) => (
              <a
                href={blog?.link ?? "#"}
                key={blog?._key}
                className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-7 group"
              >
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <SanityImage
                    src={blog?.image}
                    width={800}
                    height={583}
                    alt={blog?.image?.alt}
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>

                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">{blog?.title}</p>

                  <div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {hasArrayElements(blog?.domains) && (
                        <DomainListing items={blog?.domains} />
                      )}
                    </div>

                    <p className="text-md mt-4">{blog?.description}</p>

                    <div className="mt-14">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200 group-hover:text-primary">
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
        <div className="flex items-center justify-center mt-14 gap-6 lg:gap-8 md:hidden">
          <button
            className="embla_navigation_button group disabled:opacity-20"
            data-action="previous"
            aria-label="previous"
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
              <Icon src={ChevronLeft} size="md" />
            </span>
          </button>

          <div className="flex items-center gap-2">
            <div className="dots-mobile flex items-center justify-center gap-2"></div>
          </div>

          <button
            className="embla_navigation_button group disabled:opacity-20"
            data-action="next"
            aria-label="next"
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
              <Icon src={ChevronRight} size="md" />
            </span>
          </button>
        </div>
        <div className="flex justify-center mt-16 xl:mt-26">
          <a href="/blogs">
            <Button variant="outline-secondary" className="flex items-center group">
              <span>View All Blogs</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                <Icon src={ArrowRight} size="sm" />
              </span>
            </Button>
          </a>
        </div>
      </div>

      <Script id="SimilarArticles">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const EmblaCarousel = (gDom as any).EmblaCarousel;
              const section = document.getElementById("similar_blogs_section");
              const emblaNode = section?.querySelector(".embla");
              const navigationButtons = section?.querySelectorAll(".embla_navigation_button");
              const dotsContainers = section?.querySelectorAll(
                ".dots-desktop, .dots-mobile"
              );
              const emblaOptions = { loop: false };

              const embla = EmblaCarousel(emblaNode, emblaOptions);
              const defaultClass = "border border-gray-600 hover:border-gray-500";

              const scrollSnaps = embla.scrollSnapList();
              dotsContainers?.forEach((dotsContainer: any) => {
                scrollSnaps.forEach((_: any, index: number) => {
                  const btn = document.createElement("button");
                  btn.className = `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`;
                  const span = document.createElement("span");
                  span.className = "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";
                  btn.appendChild(span);
                  btn.ariaLabel = `similar-blog-${index}`;
                  btn.addEventListener("click", () => embla.scrollTo(index));
                  dotsContainer?.appendChild(btn);
                });
              })

              navigationButtons?.forEach((button: any) => {
                button.addEventListener("click", () =>
                  button?.dataset?.action === "previous"
                    ? embla.scrollPrev()
                    : embla.scrollNext()
                );
              });

              const updateDots = () => {
                dotsContainers?.forEach((dotsContainer: any) => {

                  navigationButtons?.forEach((btn: any) => {
                    if (btn?.dataset?.action === "previous") btn.disabled = !embla.canScrollPrev();
                    else btn.disabled = !embla.canScrollNext();
                  });

                  const selectedIndex = embla.selectedScrollSnap();
                  const buttons = dotsContainer?.querySelectorAll("button");

                  buttons?.forEach((button: any, index: number) => {
                    const span = button.querySelector("span");
                    if (index === selectedIndex) {
                      button.className =
                        "group flex items-center justify-center w-4 h-4 rounded-full border-4 border-black";
                      button.style.borderWidth = "4px";
                      button.style.borderColor = "#000";
                      span.className = "w-1 h-1 rounded-full bg-black";
                    } else {
                      button.className =
                        `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`;
                      button.style.borderWidth = "1px";
                      span.className = "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";
                    }
                  });
                })
              }

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

export default SimilarArticles;
