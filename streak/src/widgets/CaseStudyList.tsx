/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
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
import ArrowRight from "@common/icons/ArrowRight";
import IconClose from "@common/icons/Close";
import DomainListing from "@common/components/DomainListing";
import { Script } from "streak/components";
import SanityImage from "@common/components/SanityImage";
import Button from "@common/components/button/Button";

type CaseStudyListProps = {
  data: {
    _key: string;
    link: string;
    image: {
      url: string;
      alt: string;
    };
    title: string;
    description: string;
    capabilities: string[];
    ariaLabel: string;
    url: string;
    industries: string[];
    allCapabilityOptions?: string[];
    allIndustryOptions?: string[];
  }[];
};

const CaseStudyList = (props: CaseStudyListProps) => {
  let data: any[] = [];
  const hasCaseStudyList = (obj: unknown): obj is { CaseStudyList: any[] } => {
    return (
      typeof obj === "object" &&
      obj !== null &&
      Array.isArray((obj as any).CaseStudyList)
    );
  };
  if (Array.isArray(props?.data)) {
    data = props.data;
  } else if (hasCaseStudyList(props?.data)) {
    data = (props.data as { CaseStudyList: any[] }).CaseStudyList;
  } else {
    console.warn("Unexpected data format in CaseStudyList:", props?.data);
  }

  const allIndustryOptions = Array.from(
    new Set(
      data.reduce<string[]>((acc, d) => {
        if (Array.isArray(d.industries)) acc.push(...d.industries);
        return acc;
      }, [])
    )
  ).sort();

  const allCapabilityOptions = Array.from(
    new Set(
      data.reduce<string[]>((acc, d) => {
        if (Array.isArray(d.capabilities)) acc.push(...d.capabilities);
        return acc;
      }, [])
    )
  ).sort();

  return (
    <section className="mt-19 pt-9 pb-16 lg:py-26" id="case_study_section">
      <style>{`
        #case_study_section input[type="checkbox"] {
          -webkit-appearance: auto;
          accent-color: black;
        }

      .dropdown-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #000;
          color: #fff;
          border-radius: 6px;
          font-size: 14px;
          padding: 0px 6px;
          margin-left: 8px;
          gap: 8px;
        }

        .dropdown-count .count-number {
        font-size: 14px;
        line-height: 1.5rem;
        }
        .dropdown-toggle{
          outline:none;
        }
        .dropdown-count .close-btn {
          background: transparent;
          border: none;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          line-height: 1;
          padding: 0;
        }
        .dropdown-arrow svg {
          width: 16px;
          height: 16px;
           /* same as Contact page arrow color */
        }
        .dropdown-menu input[type="text"] {
          box-sizing: border-box;
        }
        .dropdown-list .dropdownlist-item{
           padding-top: 1rem;
           padding-bottom: 1rem;
           border-bottom: 1px solid #e5e7eb;
        }
        .dropdown-list p.no-results {
          padding: 8px;
          color: #9ca3af;
          text-align:center;
          margin:0;
        }
        .industry-dropdown-btn{
          width: 100%;
          height: 56px;
          border: 1px solid black;
          padding-left: 16px;
          padding-right: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;}
          .dropdown-count-sm {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  border-radius: 6px;
  margin-left: 8px;
  line-height: 1.5rem;
}

.dropdown-count[style*="display: none"] {
  width: 0 !important;
  height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden !important;
}



      `}</style>

      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-y-6 pb-12 lg:pb-15">
          <div className="flex items-center col-span-1">
            <h3 className="text-h4 lg:text-h3 leading-[53px] md:leading-[64px]">
              Case Studies
            </h3>
          </div>

          <div className="hidden lg:flex col-span-1 justify-end gap-4">
            <div className="relative inline-block text-nowrap">
              <button
                type="button"
                id="industryDropdownBtn"
                className="industry-dropdown-btn w-full border border-gray-300 rounded-lg py-2 px-4 text-md font-medium flex items-center gap-2"
              >
                Industries
              </button>

              <div
                id="industryDropdown"
                className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg p-3 hidden dropdown-menu z-20"
              >
                <div className="border-b border-gray-400">
                  {" "}
                  <input
                    type="text"
                    placeholder="Search"
                    className="dropdown-toggle w-full rounded px-2 py-1 mb-2 text-sm"
                    id="industrySearch"
                  />
                </div>

                <div
                  className="max-h-[250px] overflow-y-auto space-y-1 dropdown-list"
                  id="industryList"
                >
                  {allIndustryOptions.map((ind) => (
                    <div className="filter-item flex items-center cursor-pointer border-t first:border-t-0 border-gray-200 px-[8px] py-[16px]">
                      <input
                        type="checkbox"
                        className="industryCheck h-3 w-3 mr-2"
                        value={ind}
                        aria-label={`Industry ${ind}`}
                      />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative inline-block text-nowrap">
              <button
                type="button"
                id="capabilityDropdownBtn"
                className="industry-dropdown-btn w-full border border-gray-300 rounded-lg py-2 px-4 text-md font-medium flex items-center gap-2"
              >
                Capabilities
              </button>

              <div
                id="capabilityDropdown"
                className="absolute right-0 left-auto mt-2 min-w-60 w-full bg-white border rounded-lg shadow-lg p-3 hidden dropdown-menu z-20"
              >
                <div className="border-b border-gray-400">
                  {" "}
                  <input
                    type="text"
                    placeholder="Search"
                    className="dropdown-toggle w-full rounded px-2 py-1 mb-2 text-sm"
                    id="capabilitySearch"
                  />
                </div>

                <div
                  className="max-h-[250px] overflow-y-auto space-y-1 dropdown-list"
                  id="capabilityList"
                >
                  {allCapabilityOptions.map((cap) => (
                    <div className="filter-item flex items-center cursor-pointer border-t first:border-t-0 border-gray-200 px-[8px] py-[16px]">
                      <input
                        type="checkbox"
                        className="capabilityCheck h-3 w-3 mr-2"
                        value={cap}
                        aria-label={`Capability ${cap}`}
                      />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-8 lg:hidden">
            {" "}
            <div className="lg:text-end relative ">
              <div className="inline-block w-auto text-md text-nowrap font-medium">
                <button
                  id="industryBtn"
                  type="button"
                  className="flex items-center justify-between w-full text-start focus:outline-none border cursor-pointer border-black h-[56px] text-base py-3 px-4 rounded-lg"
                >
                  <span className="text-md font-medium">Industries</span>

                  <div className="flex items-center gap-2 ms-2">
                    <span className="flex dropdown-count-sm hidden px-2 text-sm gap-2">
                      <span className="count-number"></span>
                      <div>
                        <svg
                          className="w-2 h-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M13.8261 12L23.5652 2.21739C24.087 1.69565 24.087 0.869565 23.5652 0.391304C23.0435 -0.130435 22.2174 -0.130435 21.7391 0.391304L12 10.1739L2.21739 0.391304C1.69565 -0.130435 0.869565 -0.130435 0.391304 0.391304C-0.130435 0.913043 -0.130435 1.73913 0.391304 2.21739L10.1304 12L0.391304 21.7826C-0.130435 22.3043 -0.130435 23.1304 0.391304 23.6087C0.652174 23.8696 1 24 1.30435 24C1.6087 24 1.95652 23.8696 2.21739 23.6087L12 13.8261L21.7826 23.6087C22.0435 23.8696 22.3913 24 22.6957 24C23 24 23.3478 23.8696 23.6087 23.6087C24.1304 23.087 24.1304 22.2609 23.6087 21.7826L13.8261 12Z"
                          ></path>
                        </svg>
                      </div>
                    </span>

                    <span className="dropdown-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                      >
                        <path
                          d="M1.6 4.86L8 10.41l6.38-5.55"
                          stroke="black"
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex lg:text-end relative">
              <div className="inline-block w-auto text-md text-nowrap font-medium">
                <button
                  id="capabilityBtn"
                  type="button"
                  className="flex items-center justify-between w-full text-start focus:outline-none border cursor-pointer border-black h-[56px] text-base py-3 px-4 rounded-lg"
                >
                  <span className="text-md font-medium">Capabilities</span>

                  <div className="flex items-center gap-2 ms-2">
                    <span className="flex dropdown-count-sm hidden px-2 text-sm gap-2">
                      <span className="count-number"></span>
                      <div>
                        <svg
                          className="w-2 h-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M13.8261 12L23.5652 2.21739C24.087 1.69565 24.087 0.869565 23.5652 0.391304C23.0435 -0.130435 22.2174 -0.130435 21.7391 0.391304L12 10.1739L2.21739 0.391304C1.69565 -0.130435 0.869565 -0.130435 0.391304 0.391304C-0.130435 0.913043 -0.130435 1.73913 0.391304 2.21739L10.1304 12L0.391304 21.7826C-0.130435 22.3043 -0.130435 23.1304 0.391304 23.6087C0.652174 23.8696 1 24 1.30435 24C1.6087 24 1.95652 23.8696 2.21739 23.6087L12 13.8261L21.7826 23.6087C22.0435 23.8696 22.3913 24 22.6957 24C23 24 23.3478 23.8696 23.6087 23.6087C24.1304 23.087 24.1304 22.2609 23.6087 21.7826L13.8261 12Z"
                          ></path>
                        </svg>
                      </div>
                    </span>

                    <span className="dropdown-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                      >
                        <path
                          d="M1.6 4.86L8 10.41l6.38-5.55"
                          stroke="black"
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-16 case-study-cards">
          {data.length ? (
            data.map((each, index) => (
              <a
                key={each._key}
                href={each.link ?? "#"}
                aria-label={each.ariaLabel ?? each.title}
                className="case-card flex flex-col w-full group"
                data-industry={(each.industries ?? []).join(",")}
                data-capability={(each.capabilities ?? []).join(",")}
              >
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <SanityImage
                    src={each?.image}
                    width={420}
                    height={280}
                    alt={each?.image?.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-7">
                  <div>
                    {each.capabilities?.length ? (
                      <div className="mb-6">
                        <DomainListing items={each.capabilities} />
                      </div>
                    ) : null}
                    <h4 className="text-h6 leading-[34px]">{each.title}</h4>
                  </div>

                  <p className="text-md leading-7 mt-6">{each.description}</p>
                  <div className="mt-8 flex items-center text-sm font-medium leading-[18px]">
                    Read More{" "}
                    <span className="ms-2 transition-transform duration-300 group-hover:translate-x-1">
                      <Icon src={ArrowRight} size="sm" />
                    </span>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div
              id="no-results-empty"
              className="col-span-full py-20"
              role="status"
              aria-live="polite"
            >
              <span className="sr-only">No Case Studies Found</span>
            </div>
          )}
        </div>
      </div>
      <div
        id="drawerOverlay"
        className="hidden fixed inset-0 backdrop-blur-[2px] bg-black/25 z-[1041]"
      ></div>
      <div
        id="drawer"
        className="hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[16px] z-[1042] h-[526px] flex flex-col pt-4"
      >
        <div className="border-b border-gray-200 pb-4 mb-2 px-4">
          <div className="flex items-center justify-between py-2 px-1">
            <div className="flex items-center gap-2">
              <p id="drawerTitle" className="text-md font-medium">
                Filter
              </p>
              <span
                id="drawerCount"
                className="dropdown-count-sm hidden px-2 text-sm gap-2"
                style={{ display: "none" }}
              >
                <span className="count-number"></span>
              </span>
            </div>
            <div
              id="drawerClose"
              className="flex justify-center items-center w-8 h-8 bg-white rounded-full"
            >
              <Icon src={IconClose} size="sm" />
            </div>
          </div>

          <hr className="my-4" />
          <div className="flex items-center space-x-4">
            <input
              id="drawerSearch"
              type="text"
              placeholder="Search"
              className="w-full h-[41px] text-sm outline-none border border-gray-400 rounded-none p-2"
            />
            <button
              id="drawerClear"
              className="text-sm bg-white opacity-50"
              type="button"
              disabled
            >
              Clear
            </button>
          </div>
        </div>

        <div id="drawerList" className="flex-1 overflow-y-auto px-4"></div>

        <div className="shrink-0 sticky bottom-0 bg-white border-t px-4 py-3">
          <Button
            id="drawerApply"
            size="xl"
            variant="secondary"
            type="button"
            className="inline-flex w-full items-center justify-center gap-3 transition-all duration-300"
          >
            Apply Filter
            <Icon src={ArrowRight} size="md" />
          </Button>
        </div>
      </div>
      <Script id="CaseStudyFilterScript">
        {() => {
          const section = document.getElementById("case_study_section");
          if (!section) return;

          type DropdownItem = {
            name: string;
            btn: HTMLElement;
            menu: HTMLElement;
            checkboxSel: string;
            searchSel: string;
            listSel: string;
            countEl?: HTMLElement;
            arrowEl?: HTMLElement;
          };

          const cards = Array.from(
            section.querySelectorAll<HTMLElement>(".case-card")
          );

          const dropdowns: DropdownItem[] = [
            {
              name: "industry",
              btn: section.querySelector("#industryDropdownBtn") as HTMLElement,
              menu: section.querySelector("#industryDropdown") as HTMLElement,
              checkboxSel: ".industryCheck",
              searchSel: "#industrySearch",
              listSel: "#industryList",
            },
            {
              name: "capability",
              btn: section.querySelector(
                "#capabilityDropdownBtn"
              ) as HTMLElement,
              menu: section.querySelector("#capabilityDropdown") as HTMLElement,
              checkboxSel: ".capabilityCheck",
              searchSel: "#capabilitySearch",
              listSel: "#capabilityList",
            },
          ];
          let drawerOpen = false;

          const preventBodyScroll = (e: TouchEvent) => {
            if (drawerOpen) {
              e.preventDefault();
            }
          };

          dropdowns.forEach((d) => {
            if (!d.btn.querySelector(".dropdown-count")) {
              const countWrapper = document.createElement("span");
              countWrapper.className = "dropdown-count";
              countWrapper.style.display = "none";

              const countNum = document.createElement("span");
              countNum.className = "count-number";

              const close = document.createElement("button");
              close.className = "close-btn";
              close.innerHTML = `
          
         <svg
                          className="w-2 h-2"
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M13.8261 12L23.5652 2.21739C24.087 1.69565 24.087 0.869565 23.5652 0.391304C23.0435 -0.130435 22.2174 -0.130435 21.7391 0.391304L12 10.1739L2.21739 0.391304C1.69565 -0.130435 0.869565 -0.130435 0.391304 0.391304C-0.130435 0.913043 -0.130435 1.73913 0.391304 2.21739L10.1304 12L0.391304 21.7826C-0.130435 22.3043 -0.130435 23.1304 0.391304 23.6087C0.652174 23.8696 1 24 1.30435 24C1.6087 24 1.95652 23.8696 2.21739 23.6087L12 13.8261L21.7826 23.6087C22.0435 23.8696 22.3913 24 22.6957 24C23 24 23.3478 23.8696 23.6087 23.6087C24.1304 23.087 24.1304 22.2609 23.6087 21.7826L13.8261 12Z"
                          ></path>
                        </svg>
        `;

              close.addEventListener("click", (e) => {
                e.stopPropagation();

                const checks = section.querySelectorAll<HTMLInputElement>(
                  d.checkboxSel
                );
                checks.forEach((c) => (c.checked = false));

                countWrapper.style.display = "none";

                d.menu.classList.add("hidden");
                if (d.arrowEl) d.arrowEl.style.transform = "rotate(0deg)";

                filterCards();
              });

              countWrapper.appendChild(countNum);
              countWrapper.appendChild(close);
              d.btn.appendChild(countWrapper);
              d.countEl = countWrapper;
            }

            if (!d.btn.querySelector(".dropdown-arrow")) {
              const arrow = document.createElement("span");
              arrow.className = "dropdown-arrow";
              arrow.innerHTML = `
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M1.60914 4.8602C1.53982 4.92524 1.50058 5.01362 1.50002 5.10598C1.49956 5.15181 1.50901 5.19725 1.52777 5.23952C1.54654 5.28178 1.57422 5.31997 1.60914 5.35176L7.73585 11.1472C7.76981 11.1798 7.81026 11.2056 7.85486 11.2233C7.89947 11.2409 7.94733 11.25 7.99567 11.25C8.04402 11.25 8.09188 11.2409 8.13648 11.2233C8.18109 11.2056 8.22154 11.1798 8.2555 11.1472L14.3835 5.35176C14.4195 5.31989 14.4484 5.2815 14.4684 5.23886C14.4884 5.19622 14.4991 5.15022 14.4999 5.10358C14.5008 5.05694 14.4917 5.01062 14.4732 4.96737C14.4547 4.92413 14.4272 4.88485 14.3923 4.85186C14.3574 4.81888 14.3159 4.79287 14.2702 4.77537C14.2245 4.75788 14.1755 4.74927 14.1262 4.75005C14.0769 4.75083 14.0283 4.76098 13.9832 4.7799C13.9381 4.79882 13.8975 4.82613 13.8639 4.8602L7.99567 10.4099L2.12879 4.8602C2.09475 4.8278 2.05426 4.80208 2.00967 4.78454C1.96508 4.76699 1.91726 4.75796 1.86897 4.75796C1.82067 4.75796 1.77285 4.76699 1.72826 4.78454C1.68367 4.80208 1.64319 4.8278 1.60914 4.8602Z" fill="black"/>
</svg>
        `;
              arrow.style.transition = "transform 0.2s ease";
              arrow.style.marginLeft = "6px";
              arrow.style.display = "inline-flex";
              arrow.style.alignItems = "center";
              arrow.style.justifyContent = "center";
              d.btn.appendChild(arrow);
              d.arrowEl = arrow;
            }
          });

          dropdowns.forEach((d) => {
            d.btn.addEventListener("click", (e) => {
              e.stopPropagation();
              const isOpen = !d.menu.classList.contains("hidden");

              dropdowns.forEach((o) => {
                o.menu.classList.add("hidden");
                resetSearch(o);
                if (o.arrowEl) o.arrowEl.style.transform = "rotate(0deg)";
              });

              if (!isOpen) {
                d.menu.classList.remove("hidden");
                if (d.arrowEl) d.arrowEl.style.transform = "rotate(180deg)";
              } else {
                d.menu.classList.add("hidden");
                if (d.arrowEl) d.arrowEl.style.transform = "rotate(0deg)";
              }
            });
          });

          document.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            const insideDropdown = dropdowns.some(
              (d) => d.btn.contains(target) || d.menu.contains(target)
            );
            if (!insideDropdown) {
              dropdowns.forEach((d) => {
                resetSearch(d);
                d.menu.classList.add("hidden");
                if (d.arrowEl) d.arrowEl.style.transform = "rotate(0deg)";
              });
            }
          });

          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              dropdowns.forEach((d) => {
                resetSearch(d);
                d.menu.classList.add("hidden");
                if (d.arrowEl) d.arrowEl.style.transform = "rotate(0deg)";
              });
            }
          });

          const filterCards = () => {
            const selectedIndustry = Array.from(
              section.querySelectorAll<HTMLInputElement>(
                ".industryCheck:checked"
              )
            ).map((c) => c.value);
            const selectedCapability = Array.from(
              section.querySelectorAll<HTMLInputElement>(
                ".capabilityCheck:checked"
              )
            ).map((c) => c.value);

            dropdowns.forEach((d) => {
              const count =
                d.checkboxSel === ".industryCheck"
                  ? selectedIndustry.length
                  : selectedCapability.length;

              const countNum = d.btn.querySelector(
                ".count-number"
              ) as HTMLElement | null;
              const countEl = d.btn.querySelector(
                ".dropdown-count"
              ) as HTMLElement | null;

              if (countEl) {
                if (count > 0) {
                  countEl.style.display = "";
                  if (countNum) countNum.textContent = `${count}`;
                } else {
                  countEl.style.display = "none";
                }
              }
            });

            cards.forEach((card) => {
              const cardInd = (card.dataset.industry || "")
                .split(",")
                .filter(Boolean);
              const cardCap = (card.dataset.capability || "")
                .split(",")
                .filter(Boolean);

              const matchInd =
                selectedIndustry.length === 0 ||
                selectedIndustry.some((i) => cardInd.includes(i));
              const matchCap =
                selectedCapability.length === 0 ||
                selectedCapability.some((c) => cardCap.includes(c));

              (card as HTMLElement).style.display =
                matchInd && matchCap ? "" : "none";
            });

            updateNoResultsMessage();
            updateMobileButtonCounts();
          };
          const resetSearch = (d: DropdownItem) => {
            const search = section.querySelector<HTMLInputElement>(d.searchSel);
            const list = section.querySelector<HTMLElement>(d.listSel);
            if (!search || !list) return;

            search.value = "";

            list
              .querySelectorAll<HTMLElement>(".filter-item")
              .forEach((item) => {
                item.style.display = "";
              });

            const msg = list.querySelector("p.no-results");
            if (msg) msg.remove();
          };

          const updateNoResultsMessage = () => {
            const grid = section.querySelector(".case-study-cards");
            if (!grid) return;

            const anyVisible = cards.some(
              (card) => (card as HTMLElement).style.display !== "none"
            );

            let empty = grid.querySelector<HTMLElement>("#no-results-empty");

            if (!anyVisible) {
              if (!empty) {
                empty = document.createElement("div");
                empty.id = "no-results-empty";
                empty.className = "col-span-full py-20";
                empty.innerHTML = `<h3 class="text-h6 lg:text-h5">
    No Case Studies Found
  </h3>
`;

                grid.appendChild(empty);
              }
            } else {
              if (empty) empty.remove();
            }
          };

          const getIndustryCount = () => {
            return Array.from(
              section.querySelectorAll<HTMLInputElement>(
                ".industryCheck:checked"
              )
            ).length;
          };

          const getCapabilityCount = () => {
            return Array.from(
              section.querySelectorAll<HTMLInputElement>(
                ".capabilityCheck:checked"
              )
            ).length;
          };

          const updateMobileButtonCounts = () => {
            const update = (btnId: string, count: number) => {
              const btn = document.getElementById(btnId);
              if (!btn) return;

              const badge = btn.querySelector(
                ".dropdown-count-sm"
              ) as HTMLElement;
              const num = btn.querySelector(".count-number") as HTMLElement;

              if (!badge || !num) return;

              if (count > 0) {
                num.textContent = String(count);
                badge.style.display = "inline-flex";
              } else {
                num.textContent = "";
                badge.style.display = "none";
              }
            };

            update("industryBtn", getIndustryCount());
            update("capabilityBtn", getCapabilityCount());
          };

          dropdowns.forEach((d) => {
            const searchInput = section.querySelector<HTMLInputElement>(
              d.searchSel
            );
            const listEl = section.querySelector<HTMLElement>(d.listSel);
            if (!searchInput || !listEl) return;

            searchInput.addEventListener("input", () => {
              const term = searchInput.value.toLowerCase();
              let visibleCount = 0;
              listEl
                .querySelectorAll<HTMLElement>(".filter-item")
                .forEach((item) => {
                  if (item.textContent!.toLowerCase().includes(term)) {
                    item.style.display = "";
                    visibleCount++;
                  } else {
                    item.style.display = "none";
                  }
                });

              let msg = listEl.querySelector("p.no-results");
              if (!visibleCount) {
                if (!msg) {
                  msg = document.createElement("p");
                  msg.className = "no-results";
                  msg.textContent = "No results found";
                  listEl.appendChild(msg);
                }
              } else if (msg) msg.remove();
            });
          });

          section
            .querySelectorAll<HTMLInputElement>(
              ".industryCheck, .capabilityCheck"
            )
            .forEach((checkbox) => {
              checkbox.addEventListener("change", () => {
                filterCards();

                updateDrawerLiveCount();
                updateMobileButtonCounts();

                if (window.innerWidth >= 1024) {
                  dropdowns.forEach((d) => {
                    d.menu.classList.add("hidden");
                    if (d.arrowEl) d.arrowEl.style.transform = "rotate(0deg)";
                  });
                }
              });
            });

          filterCards();

          const industryBtn = document.getElementById("industryBtn");
          const capabilityBtn = document.getElementById("capabilityBtn");
          const drawer = document.getElementById("drawer");
          const drawerOverlay = document.getElementById("drawerOverlay");
          const drawerTitle = document.getElementById("drawerTitle");
          const drawerCount = document.getElementById("drawerCount");
          const drawerClose = document.getElementById("drawerClose");
          const drawerApply = document.getElementById("drawerApply");
          const drawerSearch = document.getElementById(
            "drawerSearch"
          ) as HTMLInputElement;
          const drawerClear = document.getElementById(
            "drawerClear"
          ) as HTMLButtonElement;
          const drawerList = document.getElementById("drawerList");
          if (drawerList) {
            drawerList.addEventListener(
              "touchmove",
              (e) => {
                e.stopPropagation();
              },
              { passive: true }
            );

            drawerList.addEventListener(
              "wheel",
              (e) => {
                e.stopPropagation();
              },
              { passive: true }
            );
          }

          let activeDrawer: "industry" | "capability" | null = null;
          const interceptMobileCountClose = (
            btn: HTMLElement | null,
            selector: ".industryCheck" | ".capabilityCheck"
          ) => {
            if (!btn || !section) return;

            btn.addEventListener(
              "click",
              (e) => {
                const target = e.target as HTMLElement;
                if (target.closest(".dropdown-count-sm")) {
                  e.preventDefault();
                  e.stopImmediatePropagation();

                  section
                    .querySelectorAll<HTMLInputElement>(selector)
                    .forEach((c) => (c.checked = false));

                  updateMobileButtonCounts();
                  filterCards();
                }
              },
              true
            );
          };

          interceptMobileCountClose(
            industryBtn as HTMLElement,
            ".industryCheck"
          );
          interceptMobileCountClose(
            capabilityBtn as HTMLElement,
            ".capabilityCheck"
          );
          const lockBodyScroll = () => {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.top = `-${window.scrollY}px`;
          };

          const unlockBodyScroll = () => {
            const scrollY = -parseInt(document.body.style.top || "0");
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            window.scrollTo(0, scrollY);
          };

          const updateDrawerLiveCount = () => {
            if (!drawerCount || !section || !activeDrawer) return;

            const selector =
              activeDrawer === "industry"
                ? ".industryCheck"
                : ".capabilityCheck";

            const count = section.querySelectorAll<HTMLInputElement>(
              `${selector}:checked`
            ).length;

            const num = drawerCount.querySelector(
              ".count-number"
            ) as HTMLElement;

            num.textContent = "";

            if (count === 0) {
              drawerCount.style.display = "none";
              return;
            }

            num.textContent = String(count);
            drawerCount.style.display = "inline-flex";
          };

          const openDrawer = (type: "industry" | "capability") => {
            if (!drawer || !drawerList || !section) return;

            activeDrawer = type;
            drawerTitle!.textContent =
              type === "industry" ? "Industries" : "Capabilities";

            drawerList.innerHTML = "";
            drawerList.querySelector(".no-results")?.remove();

            const listSelector =
              type === "industry" ? "#industryList" : "#capabilityList";

            const sourceList = section.querySelector(listSelector);
            if (!sourceList) return;

            sourceList
              .querySelectorAll<HTMLElement>(".filter-item")
              .forEach((item) => {
                drawerList.appendChild(item);
              });

            updateDrawerLiveCount();
            updateMobileButtonCounts();

            drawer.classList.remove("hidden");
            drawerOverlay?.classList.remove("hidden");

            drawerOpen = true;
            lockBodyScroll();
          };

          const closeDrawer = () => {
            if (!drawer || !drawerList || !section) return;

            const industryList = section.querySelector("#industryList");
            const capabilityList = section.querySelector("#capabilityList");

            Array.from(drawerList.children).forEach((label) => {
              const input = label.querySelector("input");
              if (!input) return;

              if (input.classList.contains("industryCheck"))
                industryList?.appendChild(label);
              else capabilityList?.appendChild(label);
            });

            drawer.classList.add("hidden");
            drawerOverlay?.classList.add("hidden");

            drawerOpen = false;
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.removeEventListener("touchmove", preventBodyScroll);

            filterCards();
          };

          industryBtn?.addEventListener("click", () => openDrawer("industry"));
          capabilityBtn?.addEventListener("click", () =>
            openDrawer("capability")
          );

          drawerClose?.addEventListener("click", closeDrawer);
          drawerOverlay?.addEventListener("click", closeDrawer);

          drawerApply?.addEventListener("click", closeDrawer);

          drawerSearch?.addEventListener("input", () => {
            const term = drawerSearch.value.toLowerCase();

            drawerClear.disabled = !term;
            drawerClear.classList.toggle("opacity-50", !term);

            let searchMatchCount = 0;

            drawerList
              ?.querySelectorAll<HTMLElement>(".filter-item")
              .forEach((item) => {
                const text = item.textContent!.toLowerCase();
                const matchesSearch = text.includes(term);

                if (matchesSearch) {
                  item.style.display = "";
                  searchMatchCount++;
                } else {
                  item.style.display = "none";
                }
              });

            let msg = drawerList?.querySelector(".no-results");

            if (term && searchMatchCount === 0) {
              if (!msg) {
                msg = document.createElement("p");
                msg.className = "no-results";
                msg.textContent = "No results found";
                drawerList?.appendChild(msg);
              }
            } else {
              msg?.remove();
            }
          });

          drawerClear?.addEventListener("click", (e) => {
            e.preventDefault();

            drawerSearch.value = "";
            drawerClear.disabled = true;
            drawerClear.classList.add("opacity-50");

            if (section) {
              section
                .querySelectorAll<HTMLInputElement>(
                  ".industryCheck, .capabilityCheck"
                )
                .forEach((c) => {
                  c.checked = false;
                });
            }
            drawerList
              ?.querySelectorAll<HTMLElement>(".filter-item")
              .forEach((item) => (item.style.display = ""));

            drawerList?.querySelector(".no-results")?.remove();

            updateDrawerLiveCount();
            updateMobileButtonCounts();
            unlockBodyScroll();

            filterCards();
          });

          window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
              drawer?.classList.add("hidden");
              drawerOverlay?.classList.add("hidden");
              drawerList?.querySelector(".no-results")?.remove();
              const industryList = section.querySelector("#industryList");
              const capabilityList = section.querySelector("#capabilityList");

              drawerList?.querySelectorAll(".filter-item").forEach((label) => {
                const input = label.querySelector("input");
                if (!input) return;

                if (input.classList.contains("industryCheck")) {
                  industryList?.appendChild(label);
                } else {
                  capabilityList?.appendChild(label);
                }
              });

              activeDrawer = null;
            }
          });
        }}
      </Script>
    </section>
  );
};

export default CaseStudyList;
