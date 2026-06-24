/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Vishakh B S
 */
import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import ChevronDown from "@common/icons/ChevronDown";
import { Script } from "streak/components";
import { hasArrayElements } from "utils/commonUtils";

type Job = {
  title: string;
  slug?: string;
  experience: string;
  location: string;
};

type OpeningListProps = {
  widgetId: string;
  widgetType: string;
  loadingStrategy: "eager" | "lazy";
  data?: Record<string, Job[]>;
};

const OpeningList = (props: OpeningListProps) => {
  const groupedJobsByRole = props.data ?? {};
  const hasOpenings = hasArrayElements(Object.keys(groupedJobsByRole));

  return (
    <section
      id="openings"
      aria-labelledby="openings-heading"
      className="my-12 lg:my-26 scroll-mt-30"
    >
      <div className="container">
        <h1 id="openings-heading" className="text-h4 lg:text-h2 mb-4">
          {hasOpenings ? "Current Openings" : "No Openings For Now"}
        </h1>

        {hasOpenings &&
          Object.entries(groupedJobsByRole).map(([role, jobs]) => (
            <details
              key={role}
              aria-label={`Job openings for ${role}`}
              className="border-b border-b-black group transition-all duration-500 job-accordion"
            >
              <summary className="flex items-center justify-between cursor-pointer py-6 lg:py-10 list-none group/summary">
                <h2 className="text-xxl lg:text-h5 font-medium flex items-center transition-all duration-300 group-hover/summary">
                  {role}
                  <span className="ml-[6px] opacity-70 transition-all duration-300 ease-out group-hover/summary:ml-[16px]">
                    ({jobs.length})
                  </span>
                </h2>
                <div className="transition-transform duration-300 group-open:rotate-180">
                  <Icon src={ChevronDown} size="md" />
                </div>
              </summary>

              <div
                className="
                  border-t border-gray-dark
                  lg:py-5 px-4 lg:px-8
                  overflow-hidden
                  transition-[max-height,opacity,transform]
                  duration-500 ease-in-out
                  max-h-0 opacity-0 scale-y-95 origin-top
                  group-open:max-h-[1000px]
                  group-open:opacity-100
                  group-open:scale-y-100
                "
              >
                {jobs.map((job, index) => (
                  <div
                    key={`${job.title}-${index}`}
                    className={`flex flex-wrap lg:items-center -mx-4 py-6 lg:py-5 ${
                      index !== jobs.length - 1
                        ? "max-lg:border-b max-lg:border-b-black"
                        : ""
                    }`}
                  >
                    <div className="w-full lg:w-4/12 px-4">
                      <h3 className="text-xxl max-lg:mb-5">{job.title}</h3>
                    </div>

                    <div className="lg:w-6/12 px-4">
                      <div className="lg:flex lg:text-xxl">
                        <div className="lg:w-1/2 lg:pe-2">
                          {job.experience} of experience
                        </div>
                        <div className="lg:w-1/2 lg:ps-2">{job.location}</div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/12 flex lg:justify-end px-4 mt-5 lg:mt-0">
                      <a href={`/careers-apply/${job.slug ?? ""}`}>
                        <Button
                          variant="outline-secondary"
                          className="flex items-center group/button"
                          size="md"
                        >
                          <span className="text-nowrap">Apply Now</span>
                          <span className="transition-transform duration-500 group-hover/button:translate-x-1 ms-2">
                            <Icon src={ArrowRight} size="sm" />
                          </span>
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
      </div>

      <Script id="opening-accordion">
        {(_gDom: any) => {
          const attachAccordionLogic = () => {
            const container =
              document.querySelector("#openings") || document.body;

            if ((container as any).__jobAccordionBound) return;
            (container as any).__jobAccordionBound = true;

            container.addEventListener(
              "toggle",
              (e) => {
                const target = e.target as HTMLElement;
                if (!(target instanceof HTMLDetailsElement)) return;
                if (!target.classList.contains("job-accordion")) return;
                if (!target.open) return;

                requestAnimationFrame(() => {
                  document
                    .querySelectorAll<HTMLDetailsElement>(
                      ".job-accordion[open]"
                    )
                    .forEach((other) => {
                      if (other !== target) {
                        other.removeAttribute("open");
                      }
                    });
                });
              },
              true
            );
          };

          if (
            document.readyState === "complete" ||
            document.readyState === "interactive"
          ) {
            setTimeout(attachAccordionLogic, 0);
          } else {
            window.addEventListener("DOMContentLoaded", attachAccordionLogic, {
              once: true,
            });
          }
        }}
      </Script>
    </section>
  );
};

export default OpeningList;
