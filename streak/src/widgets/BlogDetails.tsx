/* eslint-disable max-len */
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

import SocialMedia from "./SocialMedia";
import DomainListing from "./DomainListing";
import { hasArrayElements } from "utils/commonUtils";
import SanityImage from "@common/components/SanityImage";
import Widget from "@common/components/Widget";
import { Script } from "streak/components";

export interface BlogDetailsSections {
  _type: string;
  widgets: any;
}

export interface BlogDetailsProps {
  data: {
    blogDetails: BlogDetailsSections;
  };
}

const BlogDetails = (props: BlogDetailsProps) => {

  const blogDetailsSections = props?.data?.blogDetails;

  return (
    <>
      <section className="container">
      <div className="grid xl:grid-cols-4">
        <div className="max-xl:hidden h-max sticky top-[76px]">
          <ul className="text-gray-700 text-md font-medium text-end border-r">
            {hasArrayElements(blogDetailsSections?.widgets) &&
              blogDetailsSections?.widgets?.map((widget: any) => (
                <li
                  key={widget?._key}
                  data-target={widget?._key}  
                  className="mb-8 last:mb-0 relative pe-10"
                >
                  <a
                    href={`#${widget?._key}`}  
                    className="font-medium text-md transition-colors duration-300"
                  >
                    {widget?.title}
                  </a>
                </li>
              ))}
          </ul>
          <SocialMedia />
        </div>
        {/* Content */}
        <div className="col-span-3">
          <Widget
            widgets={blogDetailsSections?.widgets}
          />
          <div className="xl:hidden mt-14">
            <SocialMedia />
          </div>
        </div>
      </div>
        <Script id="BlogDetails" options={{ blogDetailsSections: props?.data }}>
          {(gDom: any, options: any) => {
            const { blogDetailsSections } = options || {};
            const headerSection = document.getElementById("header");
            const headerHeight = headerSection?.offsetHeight || 0;

            let activeId = blogDetailsSections?.widgets?.[0]?._key ?? "";

            let sectionMetrics: {
              id: string;
              top: number;
              bottom: number;
            }[] = [];

            const calculateMetrics = () => {
              const sections = document.querySelectorAll<HTMLElement>("[data-target]");
              sectionMetrics = [];

              sections.forEach((item) => {
                const target = item.dataset.target;
                if (!target) return;

                const section = document.getElementById(target);
                if (!section) return;

                const top = section.offsetTop;
                const height = section.offsetHeight;

                sectionMetrics.push({
                  id: target,
                  top,
                  bottom: top + height,
                });
              });

              if (!activeId && sectionMetrics.length > 0) {
                activeId = sectionMetrics[0]?.id;
              }
            };
            const applyActiveClasses = () => {
              const listItems =
                document.querySelectorAll<HTMLElement>("[data-target]");

              listItems.forEach((item) => {
                const target = item.dataset.target;
                const link = item.querySelector("a");

                if (!link) return;

                if (target === activeId) {
                  link.style.color = "#049E76";

                  if (!item.querySelector(".active-line")) {
                    item.style.position = "relative";

                    const afterLine = document.createElement("span");
                    afterLine.classList.add("active-line");

                    afterLine.style.position = "absolute";
                    afterLine.style.top = "0";
                    afterLine.style.bottom = "0";
                    afterLine.style.right = "-1px";
                    afterLine.style.borderRight = "1px solid #049E76";

                    item.appendChild(afterLine);
                  }

                } else {
                  link.style.color = "";

                  const existingLine = item.querySelector(".active-line");
                  if (existingLine) {
                    existingLine.remove();
                  }
                }
              });
            };

            const handleScroll = () => {
              const scrollPosition = window.scrollY + headerHeight * 3;
              let currentActiveId = activeId;

              sectionMetrics.forEach(({ id, top, bottom }) => {
                if (scrollPosition >= top && scrollPosition < bottom) {
                  currentActiveId = id;
                }
              });

              if (currentActiveId !== activeId) {
                activeId = currentActiveId;
                applyActiveClasses();
              }
            };

            calculateMetrics();
            applyActiveClasses();

            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", calculateMetrics);
          }}
        </Script>
      </section>
    </>
  );
};

export default BlogDetails;