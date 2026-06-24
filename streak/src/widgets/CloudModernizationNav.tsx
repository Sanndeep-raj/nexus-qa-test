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

import Icon from "@common/components/Icon";
import ChevronDown from "@common/icons/ChevronDown";
import { Script } from "streak/components";

interface CloudModernizationNavProps {
  data: {
    sectionMap: Record<string, string>;
  }
}

const CloudModernizationNav = (props: CloudModernizationNavProps) => {
  const { sectionMap } = props.data || {};

  const reverseSectionMap = Object.fromEntries(
    Object.entries(sectionMap).map(([label, id]) => [id, label]),
  );

  const labels = sectionMap ? Object.keys(sectionMap) : [];

  return (
    <section id="navsection" className="border-b border-t border-gray-400 bg-white sticky top-[76px] z-30">
      <div className="lg:container lg:flex lg:justify-center">
        <div className="relative lg:hidden">
          <button
            id="btn_jump"
            className="flex justify-between w-full bg-[linear-gradient(0deg,_rgba(238,238,238,1)_0%,_rgba(244,244,244,1)_100%)] px-10 pe-7 py-5"
          >
            <p className="text-md font-medium">Jump To Section</p>
            <span id="icon" className="transition-transform duration-300">
              <Icon src={ChevronDown} size="md" />
            </span>
          </button>

          <div
            id="mobile_section"
            className="overflow-hidden transition-[max-height] duration-500 ease-in-out absolute left-0 top-full w-full border-b border-gray-400 rounded-bl-lg rounded-br-lg bg-white px-2 max-h-0"
          >
            {labels.map((item) => (
              <button
                key={item}
                id={item}
                data-item={item}
                className="btn_mobile text-start border-b last:border-none border-gray-200 px-2 py-3 w-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex max-lg:hidden -mb-[1px]">
          {labels.map((item) => (
            <button
              key={item}
              id={item}
              data-item={item}
              className="btn_desktop text-md font-medium px-4 py-6 border-b border-gray-400"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <Script id="CloudModernizationNav" options={{ sectionMap, reverseSectionMap }}>
        {(gDom: any, options: any) => {
          let isOpen = false;
          let activeSection = "Services";
          const { sectionMap, reverseSectionMap } = options;
          const btnJump = document.getElementById("btn_jump");
          const icon = document.getElementById("icon");
          const mobileSection = document.getElementById("mobile_section");
          const navsection = document.getElementById("navsection")!;
          const headerSection = document.getElementById("header");
          const headerHeight = headerSection?.offsetHeight || 0;
          const metaTag = document.getElementById("mobile-breakpoint")!;
          const breakpoint = parseInt(metaTag.getAttribute("content")!, 10);

          const btn = document.querySelector('.btn_desktop[data-item="Services"]') as HTMLElement | null;
          btn?.style.setProperty("border-bottom", "2px solid #049E76");

          btnJump?.addEventListener("click", () => {
            isOpen = !isOpen;
            icon?.classList.toggle("rotate-180", isOpen);
            mobileSection?.classList.toggle("max-h-[600px]", isOpen);
            mobileSection?.classList.toggle("max-h-0", !isOpen);

          });

          navsection.addEventListener("click", (e) => {
            const btn = (e.target as HTMLElement).closest("[data-item]");
            if (!btn) return;

            const item = btn.getAttribute("data-item")!;
            scrollToSection(sectionMap[item], item);

            if (window.innerWidth < breakpoint) closeDropdown();
          });

          const handleScroll = () => {
            const scrollPosition = window.scrollY + getHeight();
            const sections = Object.values(sectionMap).map(id =>
              document.getElementById(id as string)
            );

            sections.forEach((section) => {
              if (!section) return;
              const el = section as HTMLElement;
              const top = el.offsetTop;
              const height = el.offsetHeight;
              const id = el.getAttribute("id");

              if (
                id &&
                scrollPosition >= top &&
                scrollPosition < top + height
              ) {
                const label = reverseSectionMap[id];
                if (label && label !== activeSection) {
                  activeSection = label;
                  updateActiveButton(label);
                }
              }
            });
          };

          const scrollToSection = (id: string, label: string) => {
            const el = document.getElementById(id);
            if (el) {
              const yOffset = -1 * getHeight() + 1;
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
              activeSection = label;
              updateActiveButton(label);
            }
          };

          const getHeight = () => {
            const nav = document.getElementById("navsection");
            const navHeight = nav?.offsetHeight || 0;
            return headerHeight + navHeight;
          };

          const closeDropdown = () => {
            isOpen = false;
            icon?.classList.remove("rotate-180");
            mobileSection?.classList.remove("max-h-[600px]");
            mobileSection?.classList.add("max-h-0");
          };

          const updateActiveButton = (label: string) => {
            document.querySelectorAll(".btn_desktop").forEach((btn) => {
              const item = btn.getAttribute("data-item") || "";

              (btn as HTMLElement).style.borderBottom = "0px solid #9ca3af";
              (btn as HTMLElement).style.transition = "border-color 0.3s ease";

              if (item === label) {
                (btn as HTMLElement).style.borderBottom = "2px solid #049E76";
              }
            });
          };

          window.addEventListener("scroll", handleScroll);
          handleScroll();
        }}
      </Script>
    </section>
  );
};

export default CloudModernizationNav;