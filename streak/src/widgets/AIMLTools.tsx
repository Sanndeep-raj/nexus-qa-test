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

import { Script } from "streak/components";

interface TabItem {
  img: string;
  w: number;
  h: number;
  alt?: string;
}

interface TabsContent {
  [key: string]: TabItem[];
}

const AIMLTools = () => {
  return (
    <section id="aiml-tools" className="border-b py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="mb-10 xl:mb-16">
          <p className="text-xxl xl:text-h4">Tools We</p>
          <h2 className="text-h4 xl:text-h2 text-primary">Excel With</h2>
        </div>

        <div className="lg:flex">
          <div className="lg:w-[276px] lg:flex-[0_0_276px] lg:h-full lg:border-r max-lg:-mx-6 max-lg:overflow-x-hidden max-lg:mb-10">
            <ul
              id="aiml-tools-tabs"
              className="flex max-lg:flex-nowrap lg:flex-col gap-6 lg:gap-8 max-lg:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {[
                "Data Processing",
                "ML & AI Development",
                "Visualization & Reporting",
                "APIs & Integrations",
                "Security & Compliance",
              ].map((tabName) => (
                <li key={tabName} className="aiml-tab-item">
                  <button
                    data-tab={tabName}
                    className="aiml-tab-btn text-start w-full text-left whitespace-nowrap lg:-mr-[1px] max-lg:text-nowrap"
                  >
                    {tabName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div id="aiml-tools-content" className="flex-1 lg:ps-14"></div>
        </div>
      </div>

      <Script id="AIMLToolsScript">
        {() => {
          const tabsContent: TabsContent = {
            "Data Processing": [
              {
                img: "/images/logo/pandas.svg",
                w: 106,
                h: 106,
                alt: "Pandas Logo",
              },
              {
                img: "/images/logo/numpy.svg",
                w: 82,
                h: 82,
                alt: "NumPy Logo",
              },
              {
                img: "/images/logo/spark.svg",
                w: 90,
                h: 46,
                alt: "Spark Logo",
              },
            ],
            "ML & AI Development": [
              {
                img: "/images/logo/transformers.svg",
                w: 106,
                h: 57,
                alt: "Transformers Logo",
              },
              {
                img: "/images/logo/openai.svg",
                w: 106,
                h: 28,
                alt: "OpenAI Logo",
              },
              {
                img: "/images/logo/langchain.svg",
                w: 122,
                h: 19,
                alt: "Langchain Logo",
              },
            ],
            "Visualization & Reporting": [
              {
                img: "/images/logo/tableau.svg",
                w: 98,
                h: 55,
                alt: "Tableau Logo",
              },
              {
                img: "/images/logo/powerbi.svg",
                w: 82,
                h: 99,
                alt: "Power BI Logo",
              },
              {
                img: "/images/logo/matplotlib.svg",
                w: 122,
                h: 24,
                alt: "Matplotlib Logo",
              },
              {
                img: "/images/logo/seaborn.svg",
                w: 124,
                h: 37,
                alt: "Seaborn Logo",
              },
            ],
            "APIs & Integrations": [
              {
                img: "/images/logo/rest-api.svg",
                w: 114,
                h: 64,
                alt: "REST API Logo",
              },
              {
                img: "/images/logo/graphql.svg",
                w: 70,
                h: 77,
                alt: "GraphQL Logo",
              },
              {
                img: "/images/logo/azure-cognitive.svg",
                w: 82,
                h: 79,
                alt: "Azure Cognitive Services Logo",
              },
              {
                img: "/images/logo/sagemaker.svg",
                w: 130,
                h: 78,
                alt: "SageMaker Logo",
              },
            ],
            "Security & Compliance": [
              {
                img: "/images/logo/access-control.svg",
                w: 81,
                h: 85,
                alt: "Access Control Logo",
              },
              {
                img: "/images/logo/data-encryption.svg",
                w: 81,
                h: 97,
                alt: "Data Encryption Logo",
              },
              {
                img: "/images/logo/eu-gdpr.svg",
                w: 82,
                h: 82,
                alt: "EU GDPR Logo",
              },
            ],
          };

          const tabs =
            document.querySelectorAll<HTMLButtonElement>(".aiml-tab-btn");
          const contentEl = document.getElementById("aiml-tools-content");

          if (!contentEl) return;

          function activateTab(btn: HTMLButtonElement) {
            tabs.forEach((t) => {
              t.classList.remove("text-primary");
              t.classList.remove("border-primary");
            });

            btn.classList.add("text-primary", "border-primary", "lg:border-r", "max-lg:border-b");
            btn.classList.add(
              "border-primary",
              "border-primary",
              "lg:border-r",
              "max-lg:border-b"
            );
          }

          function renderTab(tabName: string) {
            const items: TabItem[] = tabsContent[tabName] || [];
            if (!contentEl) return;
            contentEl.innerHTML = `
              <h3 class="text-xxl xl:text-h5 mb-8">${tabName}</h3>
              <div class="flex flex-wrap gap-8">
                ${items
                  .map(
                    (item) => `
                  <div class="flex items-center justify-center w-[146px] h-[130px] flex-[0_0_146px]
                    rounded-xl bg-white shadow-md border border-gray-100" style="width: 146px; height: 130px">
                    <img src="${item.img}" width="${item.w}" height="${
                      item.h
                    }" class="max-w-full"   alt="${item.alt || ""}"  />
                  </div>`
                  )
                  .join("")}
              </div>
            `;
          }

          tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
              const tabName = tab.dataset.tab;
              if (!tabName) return;

              activateTab(tab);
              renderTab(tabName);
            });
          });

          const firstTab = tabs[0];
          if (firstTab && firstTab.dataset.tab) {
            activateTab(firstTab);
            renderTab(firstTab.dataset.tab);
          }
        }}
      </Script>
    </section>
  );
};

export default AIMLTools;
