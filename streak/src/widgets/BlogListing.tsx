/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * @author Minna Ancy Mathew
 */

import SanityImage from "@common/components/SanityImage";
import { hasArrayElements } from "utils/commonUtils";
import ArrowRight from "@common/icons/ArrowRight";
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import Spinner from "@common/components/Spinner";
import DomainListing from "./DomainListing";
import clsx from "clsx";
import IconClose from "@common/icons/Close";
import ArrowRightIcon from "@common/icons/ArrowRight";
import { Script } from "streak/components";

type BlogImage = {
  alt?: string;
  asset?: unknown;
};

type BlogItem = {
  _key: string;
  title?: string;
  description?: string;
  link?: string;
  badge?: string;
  image?: BlogImage;
  domains?: string[];
};

interface SanityBlogItem {
  title?: string;
  description?: string;
  link?: string;
  domains?: string[];
  image?: {
    url?: string;
    alt?: string;
  };
}

interface SanityResponse {
  result?: {
    ourBlogs?: SanityBlogItem[];
  };
}

interface SanityQueryParams {
  query: string;
  [key: `$${string}`]: string | number | string[];
}

interface SanityClient {
  getSanityContentByQuery?: (
    params: SanityQueryParams
  ) => Promise<SanityResponse>;
}
interface Option {
  value: string | number;
  label: string;
}

type BlogListingWidget = {
  widgetId: string;
  widgetType: string;
  loadingStrategy?: "lazy";
  data: {
    ourBlogs: BlogItem[];
    allDomains: string[];
    totalCount: number;
  };
};


const BlogListing = ({ data }: BlogListingWidget) => {
  const { ourBlogs = [], allDomains = [], totalCount = 0 } = data || {};

  const blogs = ourBlogs.map((blog) => ({
    ...blog,
    domains: blog.domains?.map((d) => d.trim()),
  }));
  let categoryOptions: Option[] = allDomains.map((domain) => ({
    value: domain,
    label: domain,
  }));;

  const HERO_OFFSET = 1;
  const PAGE_LIMIT = 3;

  const heroBlog = blogs[0];
  const latestBlogs = blogs.slice(
    HERO_OFFSET,
    HERO_OFFSET + PAGE_LIMIT
  );

  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  const selectedDomain =
    searchParams?.get("domains")?.replace(/\+/g, " ") ?? "";

  return (
    <section className="mt-19 py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-y-6 pb-6">
          <div className="col-span-1">
            <h1 className="text-h4 lg:text-h3 leading-[53px] md:leading-[64px]">
              Blogs
            </h1>
          </div>

          <div className="flex col-span-1 justify-end">
            <form data-lenis-prevent>
              <div className="flex-1 min-w-[200px] relative">
                <div className="flex-1 min-w-[200px] relative font-medium">
                  <div id="dropdownWrapper" className={`inline-block`}>
                    <button
                      id="dropdownButton"
                      type="button"
                      className="flex items-center justify-between w-full text-start focus:outline-none border cursor-pointer border-black h-[56px] text-base py-3 px-4 rounded-lg"
                    >
                      <span className="text-md">
                        Categories
                      </span>
                      <div
                        id="selected_one"
                        className="hidden flex items-center text-white text-sm rounded bg-black ms-4 me-2 px-2"
                      >
                        <span id="select_text" className="leading-6 me-2"></span>
                        <div className="w-2 h-2">
                          <div id="desk_close"><Icon src={IconClose} size="" className="w-2 h-2" /></div>
                        </div>
                      </div>
                      <span
                        id="arrow"
                        className="w-4 h-4 transition-transform duration-200 ms-2"
                      >
                        <img
                          src="/images/icons/arrowBottom.svg"
                          width={16}
                          height={16}
                          alt="Dropdown Arrow"
                        />
                      </span>
                    </button>
                    <div
                      id="dropdownsection"
                      className=
                      "absolute hidden w-full bg-white shadow-md overflow-hidden z-10 border-gray-400 mt-5 rounded-lg border border-black"
                    >

                      <div
                        className=
                        "top-[5px] border-b border-gray-400 mx-2 py-2"
                      >
                        <input
                          id="text_input"
                          type="text"
                          placeholder="Search"
                          name="categories"
                          className=
                          "w-full text-sm rounded-lg outline-none p-2 h-[33px]"
                        />
                      </div>

                      <div className="max-h-[250px] text-sm overflow-y-auto px-2">
                        {hasArrayElements(categoryOptions) &&
                          categoryOptions.map((option) => (
                            <div
                              key={`${option.value}-web`}
                              data-key={option.value}
                              className=
                              "flex cursor-pointer border-t first:border-t-0 border-gray-400 px-5 py-3 text-gray-800 hover:bg-gray-100 px-[8px] py-4"
                            >

                              <div className="flex items-center">
                                <div className="relative">
                                  <input
                                    data-checkbox={option.value}
                                    type="checkbox"
                                    className="h-3 w-3 bg-white border border-gray-500 checked:bg-black checked:border-black appearance-none rounded-sm me-2"
                                  />
                                  <svg
                                    className="absolute left-[1px] top-[5px] h-[10px] w-[10px] text-white pointer-events-none"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <span>{option.label}</span>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div id="modal_one" className="hidden fixed inset-0 backdrop-blur-[2px] bg-black/25 opacity-100 z-[1041]">
                      <div id="modal_two"
                        className="hidden fixed z-1042 bottom-0 left-0 right-0 h-[526px] w-full bg-white rounded-t-[16px] p-4"
                      >
                        <div className="border-b border-gray-200 pb-4 mb-2">
                          <div className="flex justify-between items-center p-2">
                            <div className="flex items-center">
                              <p className="text-md font-medium">Categories</p>
                              <span
                                id="mob_count"
                                className="hidden text-white text-sm rounded bg-black ms-4 px-2"
                              ></span>

                            </div>
                            <div
                              id="mob_close"
                              className="flex justify-center items-center w-8 h-8 bg-white rounded-full"
                            >
                              <Icon src={IconClose} size="sm" />
                            </div>
                          </div>
                          <hr className="my-4" />
                          <div className="flex items-center space-x-4">
                            <input
                              id="text_input_two"
                              type="text"
                              placeholder="Search"
                              className="w-full h-[41px] text-sm outline-none border border-gray-400 rounded-none p-2"
                            />

                            <button
                              id="clear_button"
                              className="text-sm bg-white opacity-50"
                              type="button"

                            >
                              Clear
                            </button>
                          </div>

                        </div>
                        <div id="mobdiv" className="overflow-y-auto h-[440px] pb-[200px]">
                          {hasArrayElements(categoryOptions) &&
                            categoryOptions.map((option) => (
                              <div
                                key={option.value}
                                data-key={option.value}
                                className={clsx(
                                  "flex items-center cursor-pointer border-t first:border-t-0 border-gray-200 px-5 py-3 text-gray-800 hover:bg-gray-100 px-[8px] py-[16px]",
                                )}

                              >

                                <div className="flex items-center">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      name="categories"
                                      className="h-3 w-3 bg-white border border-gray-500 checked:bg-black checked:border-black appearance-none rounded-sm me-2"
                                      data-checkbox={option.value}
                                    />
                                    <svg
                                      className="absolute left-[1px] top-2 h-[10px] w-[10px] text-white pointer-events-none"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                </div>

                                <span className="text-base leading-4">
                                  {option.label}
                                </span>
                              </div>
                            ))
                          }
                        </div>
                        <div className="flex fixed bottom-0 right-4 left-4 bg-white pt-12 pb-4">
                          <Button
                            id="filterbutton"
                            size="xl"
                            variant="secondary"
                            type="button"
                            className="inline-flex w-full lg:w-auto items-center justify-center gap-3 transition-all duration-300"
                          >
                            Apply Filter
                            <Icon src={ArrowRightIcon} size="md" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="filterblogs" className="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-16"></div>
        <div id="allblogs">
          {heroBlog && (
            <div className="max-md:-px-6">
              <a
                className="grid lg:grid-cols-2 gap-x-[130px] max-md:-mx-6 group"
                href={heroBlog?.link ?? "#"}
              >
                <div className="[clip-path:inset(0)]">
                  <SanityImage
                    className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                    src={heroBlog?.image}
                    width={710}
                    height={480}
                    alt={heroBlog?.image?.alt}
                    loading="lazy"
                  />
                </div>
                <div className="pt-6 max-lg:px-6 lg:pt-0">
                  {heroBlog?.badge && (
                    <span className="text-white bg-primary text-xs font-medium px-2 py-1 rounded">
                      {heroBlog?.badge}
                    </span>
                  )}
                  <div className="flex max-md:hidden items-center gap-4 mb-4 mt-6">
                    <DomainListing items={heroBlog?.domains} />
                  </div>
                  <p className="text-xxl xl:text-h4 max-lg:mt-6 max-lg:mb-4">
                    {heroBlog?.title ?? ""}
                  </p>
                  <p className="max-lg:hidden text-xxl py-6">
                    {heroBlog?.description ?? ""}
                  </p>
                  <div className="flex justify-between items-center md:justify-start">
                    <div className="flex md:hidden items-center gap-4 mb-4 mt-6">
                      <DomainListing items={heroBlog?.domains} />
                    </div>
                    <span className="flex  items-center text-sm font-medium leading-[18px]">
                      Read More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </span>
                  </div>
                </div>
              </a>
              <hr className="md:hidden border-gray-600 -mx-6" />
            </div>
          )}
          {hasArrayElements(latestBlogs) && (
            <>
              <h1 className="text-h5 xl:text-h4 my-8 lg:my-10">
                Latest Stories
              </h1>
              <div id="blog-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-16">
                {latestBlogs?.map((each) => (
                  <a
                    className="flex flex-col w-full group"
                    key={each?._key}
                    href={each?.link ?? "#"}
                  >
                    <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                      <SanityImage
                        src={each?.image}
                        width={420}
                        height={280}
                        alt={each?.image?.alt}
                        className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col justify-between h-full mt-7">
                      <div>
                        <div className="flex max-md:hidden items-center gap-4 mb-5">
                          <DomainListing items={each?.domains} />
                        </div>
                        <h1 className="text-xxl">{each?.title ?? ""}</h1>
                      </div>
                      <div className="flex items-center justify-between md:justify-start mt-8">
                        <div className="flex md:hidden items-center gap-4">
                          <DomainListing items={each?.domains} />
                        </div>
                        <span className="flex  items-center text-sm font-medium leading-[18px]">
                          Read More
                          <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                            <Icon src={ArrowRight} size="sm" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
          {totalCount > HERO_OFFSET + latestBlogs.length && (
            <div className="mt-24 text-center">
              <Button
                id="loadmore-btn"
                variant="outline-secondary"
                className="flex items-center mx-auto gap-3"
              >
                <span id="loadmore-text">Load More</span>
                <Spinner id="loadmore-spinner" className="hidden" />
                <span id="loadmore-arrow">
                  <Icon src={ArrowRight} size="sm" className="rotate-90" />
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>

      <Script
        id="LoadMoreBlogs"
        options={{
          start: HERO_OFFSET + PAGE_LIMIT,
          total: totalCount,
          limit: PAGE_LIMIT,
          domain: selectedDomain,
        }}
      >
        {(gDom: SanityClient, opts: any) => {
          let start = opts.start;
          const { total, limit } = opts;
          let domain = opts?.domain
          const init = () => {
            const btn = document.getElementById(
              "loadmore-btn"
            ) as HTMLButtonElement | null;
            const spinner = document.getElementById("loadmore-spinner");
            const arrow = document.getElementById("loadmore-arrow");
            const list = document.getElementById("blog-list");

            if (!btn || !list || !gDom.getSanityContentByQuery) {
              requestAnimationFrame(init);
              return;
            }

            btn.onclick = async () => {
              if (!gDom.getSanityContentByQuery) return;

              btn.disabled = true;
              spinner?.classList.remove("hidden");
              arrow?.classList.add("hidden");

              const end = Math.min(start + limit, total);

              try {
                const json = await gDom.getSanityContentByQuery({
                  query: `
                    *[_type == "blogListing"][0]{
                      "ourBlogs": ${domain
                      ? `ourBlogs[defined(domains) && count(domains[@ in [$domain]]) > 0]`
                      : "ourBlogs"
                    }[$start...$end]{
                      badge,
                      domains,
                        title,
                        description,
                        link,
                        "image": {
                          "url": image.asset->url,
                          "alt": coalesce(image.alt,"")
                        }
                      }
                    }
                  `,
                  $start: start,
                  $end: end,
                  ...(domain ? { $domain: domain } : {}),
                });

                (json.result?.ourBlogs ?? []).forEach((blog) => {
                  const a = document.createElement("a");
                  a.href = blog.link ?? "#";
                  a.className = "flex flex-col w-full group mb-8";

                  const imgWrapper = document.createElement("div");
                  imgWrapper.className = "rounded [clip-path:inset(0_round_0.25rem)]";
                  const sanityImg = createSanityImage(blog.image, 420, 280, "w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]");
                  if (sanityImg) imgWrapper.appendChild(sanityImg);
                  a.appendChild(imgWrapper);

                  const contentWrapper = document.createElement("div");
                  contentWrapper.className = "flex flex-col justify-between h-full mt-7";

                  if (blog.domains && blog.domains.length > 0) {
                    const topDomain = createDomainListing(blog.domains);
                    if (topDomain) {
                      topDomain.classList.add("max-md:hidden", "mb-5");
                      contentWrapper.appendChild(topDomain);
                    }
                  }

                  const title = document.createElement("h1");
                  title.className = "text-xxl";
                  title.textContent = blog.title ?? "";
                  contentWrapper.appendChild(title);

                  const bottom = document.createElement("div");
                  bottom.className = "flex items-center justify-between md:justify-start mt-8";

                  if (blog.domains && blog.domains.length > 0) {
                    const bottomDomain = createDomainListing(blog.domains);
                    if (bottomDomain) {
                      bottomDomain.classList.add("md:hidden");
                      bottom.appendChild(bottomDomain);
                    }
                  }

                  const readMore = document.createElement("span");
                  readMore.className = "flex items-center text-sm font-medium leading-[18px]";
                  readMore.textContent = "Read More ";

                  const arrow = document.createElement("span");
                  arrow.className = "transition-transform duration-300 group-hover:translate-x-1 ms-2";
                  arrow.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     fill="currentColor"
     viewBox="0 0 24 18"
     class="w-4 h-4">
  <path d="M16.155 0.833481C16.0791 0.742401 15.985 0.668145 15.8787 0.61545C15.7725 0.562754 15.6564 0.532774 15.538 0.52742C15.4195 0.522067 15.3012 0.541458 15.1906 0.584358C15.0801 0.627257 14.9797 0.692724 14.8958 0.776583C14.8119 0.860443 14.7465 0.960856 14.7036 1.07142C14.6607 1.18198 14.6413 1.30027 14.6466 1.41875C14.652 1.53722 14.682 1.65328 14.7347 1.75953C14.7874 1.86577 14.8616 1.95987 14.9527 2.03583L21.0871 8.1774H0.810714C0.59183 8.18902 0.385739 8.28415 0.234908 8.44319C0.0840779 8.60224 0 8.81308 0 9.03227C0 9.25146 0.0840779 9.46231 0.234908 9.62135C0.385739 9.7804 0.59183 9.87553 0.810714 9.88714H21.0871L14.9431 16.0215C14.7884 16.1835 14.7022 16.3988 14.7022 16.6227C14.7022 16.8466 14.7884 17.0619 14.9431 17.2239C15.0219 17.303 15.1156 17.3657 15.2188 17.4085C15.322 17.4514 15.4326 17.4734 15.5443 17.4734C15.6559 17.4734 15.7665 17.4514 15.8697 17.4085C15.9729 17.3657 16.0666 17.303 16.1454 17.2239L23.7442 9.62503C23.8251 9.54718 23.8895 9.45381 23.9334 9.35051C23.9774 9.24722 24 9.13611 24 9.02386C24 8.9116 23.9774 8.8005 23.9334 8.6972C23.8895 8.5939 23.8251 8.50053 23.7442 8.42268L16.155 0.833481Z"/>
</svg>
`;
                  readMore.appendChild(arrow);
                  bottom.appendChild(readMore);
                  contentWrapper.appendChild(bottom);

                  a.appendChild(contentWrapper);
                  list?.appendChild(a);
                });

                start = end;
                if (start >= total) btn.style.display = "none";
              } catch (e) {
                console.error("Load more failed", e);
              } finally {
                spinner?.classList.add("hidden");
                arrow?.classList.remove("hidden");
                btn.disabled = false;
              }
            };
          };

          requestAnimationFrame(init);

          /* ---------- Select-script ---------- */

          let isopen = false;

          const metaTag = document.getElementById("mobile-breakpoint")!;
          const breakpoint = parseInt(metaTag.getAttribute("content")!, 10);

          const wrapper = document.getElementById("dropdownWrapper");
          const dropdown = document.getElementById("dropdownsection")!;
          const arrow = document.getElementById("arrow")!;

          const modalOne = document.getElementById("modal_one");
          const modalTwo = document.getElementById("modal_two");

          const selected = document.getElementById("selected_one");
          const selectedspan = document.getElementById("select_text")!;
          const deskclose = document.getElementById("desk_close");
          const mobclose = document.getElementById("mob_close");

          const allblogs = document.getElementById("allblogs");
          const filterList = document.getElementById("filterblogs")!;
          const filterButton = document.getElementById("filterbutton")!;
          const mobCount = document.getElementById("mob_count")!;

          const inputOne = document.getElementById("text_input")! as HTMLInputElement;
          const inputTwo = document.getElementById("text_input_two")! as HTMLInputElement;
          const clearButton = document.getElementById("clear_button")!;
          const mobdiv = document.getElementById("mobdiv");

          const parent = document.querySelector("[data-key]")?.parentElement;

          let selectedValues: string[] = [];

          const isMobileView = () => window.innerWidth < breakpoint;

          let noResultsElem = document.getElementById("no-results");
          if (!noResultsElem) {
            noResultsElem = document.createElement("h6");
            noResultsElem.id = "no-results";
            noResultsElem.textContent = "No results found";
            noResultsElem.className = "text-gray-500 px-5 py-3";
            noResultsElem.style.display = "none";
            (isMobileView() ? mobdiv : parent)?.appendChild(noResultsElem);
          }

          const filterOptions = (value: string) => {
            const searchValue = value.trim().toLowerCase();
            const optionItems = document.querySelectorAll("[data-key]");
            let hasVisible = false;

            optionItems.forEach((item) => {
              const label = item.querySelector("span")?.textContent?.toLowerCase()?.trim();
              const match = !searchValue || (label && label.includes(searchValue));

              item.classList.toggle("hidden", !match);
              if (match && label?.includes(searchValue)) hasVisible = true;
            });

            noResultsElem!.style.display = !hasVisible && searchValue ? "block" : "none";
          };

          clearButton.addEventListener("click", () => {
            inputTwo.value = "";
            filterOptions("");
            noResultsElem!.style.display = "none";
          });

          inputOne.addEventListener("input", (e: any) => filterOptions(e.target.value));
          inputTwo.addEventListener("input", (e: any) => filterOptions(e.target.value));

          function createDomainListing(items: any[]) {
            if (!items?.length) return null;

            const wrapper = document.createElement("div");
            wrapper.className = "flex items-center gap-1";

            items.forEach((each) => {
              const item = document.createElement("div");
              item.className = "flex items-center gap-1";

              const dot = document.createElement("span");
              dot.className = "w-1 h-1 bg-primary rounded-full block";

              const text = document.createElement("p");
              text.className = "text-xs font-medium leading-4";
              text.textContent = each;

              item.append(dot, text);
              wrapper.appendChild(item);
            });

            return wrapper;
          }

          function createSanityImage(sanityImg: any, width: number, height: number, className = "") {
            if (!sanityImg?.url) return null;

            const img = document.createElement("img");
            img.src = sanityImg.url;
            img.alt = sanityImg.alt ?? "";
            img.width = width;
            img.height = height;
            img.className = className;
            return img;
          }

          const handleResize = () => {
            const isMobile = isMobileView();

            dropdown.classList.toggle("hidden", isMobile || !isopen);
            modalOne?.classList.toggle("hidden", !isMobile || !isopen);
            modalTwo?.classList.toggle("hidden", !isMobile || !isopen);
          };

          const closeAll = () => {
            if (!isopen) return;

            dropdown.classList.add("hidden");
            modalOne?.classList.add("hidden");
            modalTwo?.classList.add("hidden");
            arrow.classList.remove("rotate-180");
            isopen = false;
          };

          wrapper?.addEventListener("click", (e) => {
            e.stopPropagation();
            isopen = !isopen;

            if (isMobileView()) {
              modalOne?.classList.toggle("hidden", !isopen);
              modalTwo?.classList.toggle("hidden", !isopen);
            } else {
              dropdown.classList.toggle("hidden", !isopen);
              modalOne?.classList.add("hidden");
              modalTwo?.classList.add("hidden");
            }

            arrow.classList.toggle("rotate-180", isopen);
          });

          const updateSearchParam = (params: any[]) => {
            const url = new URL(window.location.href);

            params.forEach(({ key, value }) => {
              value ? url.searchParams.set(key, value) : url.searchParams.delete(key);
            });

            window.history.replaceState({}, "", url);
          };

          const reomveAll = () => {
            const url = new URL(window.location.href);
            url.search = "";
            window.history.replaceState({}, "", url);
          };

          const handleSelect = (values: string[]) => {
            values.length
              ? updateSearchParam([
                { key: "domains", value: values.join("|") },
                { key: "p", value: "" },
              ])
              : reomveAll();
          };

          const fetchFilteredData = async () => {
            const searchParams = new URLSearchParams(window.location.search);
            const domainFilters = searchParams
              .get("domains")
              ?.split("|")
              .map(d => d.trim())
              .filter(Boolean) || [];

            if (!gDom.getSanityContentByQuery) return;

            try {
              const jsonnew = await gDom.getSanityContentByQuery({
                query: `
                  *[_type == "blogListing"][0]{
                    "ourBlogs": ${domainFilters.length
                    ? `ourBlogs[defined(domains) && count(domains[@ in $domainFilters]) > 0]`
                    : "ourBlogs"
                  }{
                      badge, domains, title, link,
                      "image": { "url": image.asset->url, "alt": coalesce(image.alt, "") }
                    }
                  }
                `,
                ...(domainFilters.length ? { $domainFilters: domainFilters } : {}),
              });

              filterList.innerHTML = "";
              allblogs?.classList.add("hidden");
              filterList.classList.remove("hidden");

              (jsonnew.result?.ourBlogs ?? []).forEach((blog) => {
                const a = document.createElement("a");
                  a.href = blog.link ?? "#";
                  a.className = "flex flex-col w-full group mb-8";

                  const imgWrapper = document.createElement("div");
                  imgWrapper.className = "rounded [clip-path:inset(0_round_0.25rem)]";
                  const sanityImg = createSanityImage(blog.image, 420, 280, "w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]");
                  if (sanityImg) imgWrapper.appendChild(sanityImg);
                  a.appendChild(imgWrapper);

                  const contentWrapper = document.createElement("div");
                  contentWrapper.className = "flex flex-col justify-between h-full mt-7";

                  if (blog.domains && blog.domains.length > 0) {
                    const topDomain = createDomainListing(blog.domains);
                    if (topDomain) {
                      topDomain.classList.add("max-md:hidden", "mb-5");
                      contentWrapper.appendChild(topDomain);
                    }
                  }

                  const title = document.createElement("h1");
                  title.className = "text-xxl";
                  title.textContent = blog.title ?? "";
                  contentWrapper.appendChild(title);

                  const bottom = document.createElement("div");
                  bottom.className = "flex items-center justify-between md:justify-start mt-8";

                  if (blog.domains && blog.domains.length > 0) {
                    const bottomDomain = createDomainListing(blog.domains);
                    if (bottomDomain) {
                      bottomDomain.classList.add("md:hidden");
                      bottom.appendChild(bottomDomain);
                    }
                  }

                  const readMore = document.createElement("span");
                  readMore.className = "flex items-center text-sm font-medium leading-[18px]";
                  readMore.textContent = "Read More ";

                  const arrow = document.createElement("span");
                  arrow.className = "transition-transform duration-300 group-hover:translate-x-1 ms-2";
                  arrow.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     fill="currentColor"
     viewBox="0 0 24 18"
     class="w-4 h-4">
  <path d="M16.155 0.833481C16.0791 0.742401 15.985 0.668145 15.8787 0.61545C15.7725 0.562754 15.6564 0.532774 15.538 0.52742C15.4195 0.522067 15.3012 0.541458 15.1906 0.584358C15.0801 0.627257 14.9797 0.692724 14.8958 0.776583C14.8119 0.860443 14.7465 0.960856 14.7036 1.07142C14.6607 1.18198 14.6413 1.30027 14.6466 1.41875C14.652 1.53722 14.682 1.65328 14.7347 1.75953C14.7874 1.86577 14.8616 1.95987 14.9527 2.03583L21.0871 8.1774H0.810714C0.59183 8.18902 0.385739 8.28415 0.234908 8.44319C0.0840779 8.60224 0 8.81308 0 9.03227C0 9.25146 0.0840779 9.46231 0.234908 9.62135C0.385739 9.7804 0.59183 9.87553 0.810714 9.88714H21.0871L14.9431 16.0215C14.7884 16.1835 14.7022 16.3988 14.7022 16.6227C14.7022 16.8466 14.7884 17.0619 14.9431 17.2239C15.0219 17.303 15.1156 17.3657 15.2188 17.4085C15.322 17.4514 15.4326 17.4734 15.5443 17.4734C15.6559 17.4734 15.7665 17.4514 15.8697 17.4085C15.9729 17.3657 16.0666 17.303 16.1454 17.2239L23.7442 9.62503C23.8251 9.54718 23.8895 9.45381 23.9334 9.35051C23.9774 9.24722 24 9.13611 24 9.02386C24 8.9116 23.9774 8.8005 23.9334 8.6972C23.8895 8.5939 23.8251 8.50053 23.7442 8.42268L16.155 0.833481Z"/>
</svg>
`;
                  readMore.appendChild(arrow);
                  bottom.appendChild(readMore);
                  contentWrapper.appendChild(bottom);

                  a.appendChild(contentWrapper);
                filterList.appendChild(a);
              });
            } catch (e) {
              console.error("Load more failed", e);
            }
          };

          function syncCheckboxes(cat: string) {
            selectedValues = selectedValues.includes(cat)
              ? selectedValues.filter(v => v !== cat)
              : [...selectedValues, cat];

            const hasSelection = selectedValues.length > 0;

            selected?.classList.toggle("hidden", !hasSelection);
            mobCount?.classList.toggle("hidden", !hasSelection);
            selectedspan.innerHTML = hasSelection ? `<div>${selectedValues.length}</div>` : "";
            mobCount.innerHTML = hasSelection ? `<div>${selectedValues.length}</div>` : "";

            document
              .querySelectorAll<HTMLInputElement>("[data-checkbox]")
              .forEach(cb => (cb.checked = selectedValues.includes(cb.dataset.checkbox!)));
          }

          document.querySelectorAll<HTMLElement>("[data-key]").forEach((opt) => {
            const cat = opt.dataset.key!;

            mobclose?.addEventListener("click", () => closeAll());

            opt.addEventListener("click", () => {
              syncCheckboxes(cat);

              if (!isMobileView()) {
                handleSelect(selectedValues);

                if (selectedValues.length > 0) {
                  fetchFilteredData();
                } else {
                  filterList.classList.add("hidden");
                  allblogs?.classList.remove("hidden");
                }

                closeAll();
              }
            });

          });

          deskclose?.addEventListener("click", (e) => {
            e.stopPropagation();
            selectedValues = [];
            handleSelect(selectedValues);
            filterList.classList.add("hidden");
            allblogs?.classList.remove("hidden");
            selected?.classList.add("hidden");
            mobCount?.classList.add("hidden");
            selectedspan.innerHTML = "";

            document
              .querySelectorAll<HTMLInputElement>("[data-checkbox]")
              .forEach(cb => (cb.checked = false));
          });

          filterButton.addEventListener("click", (e) => {
            e.stopPropagation();

            if (selectedValues.length === 0) {
              filterList.classList.add("hidden");
              allblogs?.classList.remove("hidden");
              reomveAll();
              closeAll();
              return;
            }

            handleSelect(selectedValues);
            fetchFilteredData();

            allblogs?.classList.add("hidden");
            filterList.classList.remove("hidden");

            closeAll();
          });


          dropdown.addEventListener("click", e => e.stopPropagation());
          modalOne?.addEventListener("click", e => e.stopPropagation());
          modalTwo?.addEventListener("click", e => e.stopPropagation());

          window.addEventListener("resize", handleResize);
          document.addEventListener("click", closeAll);

        }}
      </Script>
    </section>
  );
};

export default BlogListing;
