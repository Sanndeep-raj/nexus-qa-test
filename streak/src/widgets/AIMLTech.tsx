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

const AIMLTech = () => {
  return (
    <section
      className="border-b bg-cover bg-no-repeat lg:bg-[url('/images/bg/bg-services.webp')] py-12 xl:py-20 xxl:py-26 max-lg:border-t"
      id="aiml-tech"
    >
      <div className="container">
        <div className="mb-10 xl:mb-16">
         <p className="text-xxl xl:text-h4">Our AI & ML</p>
          <h2 className="text-h4 xl:text-h2 text-primary">Tech Stack</h2>
        </div>

        <div className="lg:flex">
          <div className="lg:w-[276px] lg:flex-[0_0_276px] lg:h-full lg:border-r max-lg:-mx-6 max-lg:overflow-x-hidden max-lg:mb-10">
            <ul
              id="aiml-tabs"
              className="flex max-lg:flex-nowrap lg:flex-col gap-6 lg:gap-8 max-lg:overflow-x-auto max-lg:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <li className="grid">
                <button
                  className="w-full text-left whitespace-nowrap max-lg:border-b max-lg:border-transparent"
                  data-tab="Deep Learning"
                  data-heading="Deep Learning Frameworks"
                >
                  Deep Learning
                </button>
              </li>
              <li className="grid">
                <button
                  data-tab="Languages"
                  className="w-full text-left whitespace-nowrap max-lg:border-b max-lg:border-transparent"
                >
                  Languages
                </button>
              </li>
              <li className="grid">
                <button
                  data-tab="Cloud"
                  className="w-full text-left w-full text-left whitespace-nowrap max-lg:border-b max-lg:border-transparent"
                >
                  Cloud
                </button>
              </li>
              <li className="grid">
                <button
                  data-tab="Data Engineering & Storage"
                  className="w-full text-left whitespace-nowrap max-lg:border-b max-lg:border-transparent"
                >
                  Data Engineering & Storage
                </button>
              </li>
              <li className="grid">
                <button
                  data-tab="ML Model Deployment"
                  className="w-full text-left whitespace-nowrap max-lg:border-b max-lg:border-transparent"
                >
                  ML Model Deployment
                </button>
              </li>
              <li className="grid">
                <button
                  data-tab="Vector Databases"
                  className="w-full text-left whitespace-nowrap max-lg:border-b max-lg:border-transparent"
                >
                  Vector Databases
                </button>
              </li>
              <li className="grid">
                <button
                  data-tab="Ecommerce Platforms"
                  className="w-full text-left whitespace-nowrap max-lg:border-b max-lg:border-transparent"
                >
                  Ecommerce Platforms
                </button>
              </li>
              <li className="grid">
                <button data-tab="MLops & CI/CD" className="w-full text-left">
                  MLops & CI/CD
                </button>
              </li>
            </ul>
          </div>

          <div id="aiml-content" className="flex-1 lg:ps-14" />
        </div>
      </div>

      <Script id="AIMLTech">
        {() => {
          type TabName =
            | "Deep Learning"
            | "Languages"
            | "Cloud"
            | "Data Engineering & Storage"
            | "ML Model Deployment"
            | "Vector Databases"
            | "Ecommerce Platforms"
            | "MLops & CI/CD";

          const tabLogos: Record<
            TabName,
            { img: string; w: number; h: number }[]
          > = {
            "Deep Learning": [
              { img: "/images/logo/pytorch.svg", w: 82, h: 53 },
              { img: "/images/logo/tensorflow.svg", w: 131, h: 84 },
              { img: "/images/logo/mxnet.svg", w: 106, h: 36 },
              { img: "/images/logo/jax.svg", w: 81, h: 47 },
            ],
            Languages: [
              { img: "/images/logo/python.svg", w: 65, h: 73 },
              { img: "/images/logo/sql.svg", w: 82, h: 39 },
              { img: "/images/logo/javascript.svg", w: 82, h: 82 },
            ],
            Cloud: [
              { img: "/images/logo/azure.svg", w: 100, h: 28 },
              { img: "/images/logo/aws.svg", w: 98, h: 55 },
              { img: "/images/logo/google-cloud.svg", w: 82, h: 82 },
            ],
            "Data Engineering & Storage": [
              { img: "/images/logo/spark.svg", w: 90, h: 46 },
              { img: "/images/logo/databricks.svg", w: 122, h: 64 },
              { img: "/images/logo/snowflake.svg", w: 111, h: 25 },
              { img: "/images/logo/delta-lake.svg", w: 90, h: 73 },
              { img: "/images/logo/polars.svg", w: 114, h: 26 },
            ],
            "ML Model Deployment": [
              { img: "/images/logo/kubernetes.svg", w: 95, h: 82 },
              { img: "/images/logo/docker.svg", w: 122, h: 27 },
              { img: "/images/logo/fast-api.svg", w: 98, h: 18 },
              { img: "/images/logo/flask.svg", w: 66, h: 84 },
            ],
            "Vector Databases": [
              { img: "/images/logo/pinecone.svg", w: 104, h: 20 },
              { img: "/images/logo/weaviate.svg", w: 114, h: 20 },
              { img: "/images/logo/faiss.svg", w: 82, h: 85 },
            ],
            "Ecommerce Platforms": [
              { img: "/images/logo/shopify.svg", w: 106, h: 30 },
              { img: "/images/logo/majento.svg", w: 106, h: 30 },
              { img: "/images/logo/saleor.svg", w: 98, h: 20 },
              { img: "/images/logo/woo.svg", w: 122, h: 62 },
            ],
            "MLops & CI/CD": [
              { img: "/images/logo/mlflow.svg", w: 98, h: 37 },
              { img: "/images/logo/dvc.svg", w: 82, h: 82 },
              { img: "/images/logo/github-actions.svg", w: 73, h: 76 },
              { img: "/images/logo/azure-devops.svg", w: 106, h: 39 },
            ],
          };

          const tabsContainerEl = document.getElementById("aiml-tabs");
          const contentElNode = document.getElementById("aiml-content");

          if (!tabsContainerEl || !contentElNode) return;

          const tabsContainer = tabsContainerEl as HTMLElement;
          const contentEl = contentElNode as HTMLElement;

          if (!tabsContainer || !contentEl) return;

          const tabButtons = Array.from(
            tabsContainer.querySelectorAll<HTMLButtonElement>(
              "button[data-tab]"
            )
          );

          function renderTab(tabName: TabName, btn: HTMLButtonElement): void {
            const logos = tabLogos[tabName];

            const heading = btn.getAttribute("data-heading") || tabName;

            const html = `
    <h3 class="text-xxl xl:text-h5 mb-8">${heading}</h3>
    <div class="flex flex-wrap gap-8">
      ${logos
        .map(
          (l) => `
        <div class="flex items-center justify-center w-[146px] h-[130px] flex-[0_0_146px]
            rounded-xl bg-white shadow-md border border-gray-100" style="width: 146px; height: 130px">
          <img src="${l.img}" width="${l.w}" height="${l.h}" class="max-w-full" alt="" />
        </div>`
        )
        .join("")}
    </div>
  `;

            contentEl.innerHTML = html;
          }

          function setActiveButton(activeBtn: HTMLButtonElement): void {
            tabButtons.forEach((btn) => {
              btn.classList.remove(
                "text-primary",
                "max-lg:border-b",
                "lg:border-r",
                "border-primary"
              );
              btn.classList.add("max-lg:border-transparent");
            });

            activeBtn.classList.add(
              "text-primary",
              "max-lg:border-b",
              "lg:border-r",
              "border-primary"
            );
          }

          tabButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
              const target = e.currentTarget as HTMLButtonElement;
              const tabName = target.getAttribute("data-tab") as TabName;

              setActiveButton(target);
              renderTab(tabName, target);
            });
          });

          const initialBtn =
            tabButtons.find(
              (b) => b.getAttribute("data-tab") === "Deep Learning"
            ) ?? tabButtons[0];

          if (initialBtn) {
            setActiveButton(initialBtn);
            renderTab(
              initialBtn.getAttribute("data-tab") as TabName,
              initialBtn
            );
          }
        }}
      </Script>
    </section>
  );
};

export default AIMLTech;
