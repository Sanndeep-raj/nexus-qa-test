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

import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import Spinner from "@common/components/Spinner";
import { Script } from "streak/components";
import SanityImage from "@common/components/SanityImage";

type AwardsListWidget = {
  widgetId: string;
  widgetType: string;
  loadingStrategy: "lazy";
  data: AwardsListData;
};

type AwardsListData = {
  awards: AwardItem[];
  totalAwards: number;
};

type AwardItem = {
  _key: string;
  date: string;
  title: string;
  description: string;
  image: any;
};

interface SanityResponse {
  result?: {
    awards?: any[];
  };
}

interface SanityQueryParams {
  query: string;
  [key: `$${string}`]: string | number;
}

interface SanityClient {
  getSanityContentByQuery?: (
    params: SanityQueryParams
  ) => Promise<SanityResponse>;
}

interface LoadMoreOptions {
  start: number;
  total: number;
  limit: number;
}

const INITIAL_COUNT = 4;

const AwardsList = ({ data }: AwardsListWidget) => {
  const awards = data?.awards ?? [];
  const totalAwards = data?.totalAwards ?? 0;

  if (!awards.length) return null;

  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="xl:w-2/5 mb-16 xl:mb-20">
          <h2 className="text-h4 xl:text-h2">
            Our Journey of <br className="max-lg:hidden" /> Excellence
          </h2>
        </div>

        <div className="flex flex-col gap-y-6 lg:gap-y-10" id="awards-list">
          {awards.slice(0, INITIAL_COUNT).map((award) => (
            <div
              key={award._key}
              className="grid items-center grid-cols-1 lg:grid-cols-5 max-lg:gap-y-8 lg:gap-x-13 border border-gray-400 rounded-lg drop-shadow-[0_0_12px_rgba(0,0,0,0.15)] bg-white p-8 lg:p-10"
            >
              <div className="flex justify-center col-span-1">
                <SanityImage
                  width={168}
                  height={168}
                  src={award.image}
                  alt={award.image?.alt}
                />
              </div>

              <div className="col-span-4">
                <p className="text-sm font-medium">{award.date}</p>
                <p className="text-xxl my-4">{award.title}</p>
                <p className="text-md">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {INITIAL_COUNT < totalAwards && (
          <div className="flex justify-center mt-16 xl:mt-26">
            <Button
              id="loadmore-btn"
              variant="outline-secondary"
              className="flex items-center group"
              type="button"
            >
              <span className="loadmore-text">Load More</span>
              <Spinner id="loadmore-spinner" className="hidden ms-2" />
              <span id="loadmore-arrow" className="ms-2">
                <Icon src={ArrowRight} size="sm" className="rotate-90" />
              </span>
            </Button>
          </div>
        )}
      </div>

      <Script<LoadMoreOptions>
        id="LoadMoreAwards"
        options={{
          start: INITIAL_COUNT,
          total: totalAwards,
          limit: 4,
        }}
      >
        {(gDom: SanityClient, opts: LoadMoreOptions) => {
          let start = opts.start;
          const { total, limit } = opts;

          const init = () => {
            const btn = document.getElementById(
              "loadmore-btn"
            ) as HTMLButtonElement | null;
            const spinner = document.getElementById("loadmore-spinner");
            const arrow = document.getElementById("loadmore-arrow");
            const list = document.getElementById("awards-list");

            if (!btn || !list || !gDom.getSanityContentByQuery) {
              requestAnimationFrame(init);
              return;
            }

            btn.onclick = async () => {
              if (btn.disabled) return;

              btn.disabled = true;
              spinner?.classList.remove("hidden");
              arrow?.classList.add("hidden");

              const end = Math.min(start + limit, total);

              try {
                const json = await gDom.getSanityContentByQuery!({
                  query: `
                    *[_type == "awards"][0]{
                      "awards": awards[$start...$end]{
                        _key,
                        date,
                        title,
                        description,
                        "imageUrl": image.asset->url,
                        "alt": coalesce(image.alt,"")
                      }
                    }
                  `,
                  $start: start,
                  $end: end,
                });

                const items = json.result?.awards ?? [];

                items.forEach((award: any) => {
                  const div = document.createElement("div");
                  div.className =
                    "grid items-center grid-cols-1 lg:grid-cols-5 max-lg:gap-y-8 lg:gap-x-13 border border-gray-400 rounded-lg drop-shadow-[0_0_12px_rgba(0,0,0,0.15)] bg-white p-8 lg:p-10";

                  div.innerHTML = `
                    <div class="flex justify-center col-span-1">
                      <img src="${award.imageUrl}" alt="${award.alt}"
                        class="w-[168px] h-[168px] object-cover" />
                    </div>
                    <div class="col-span-4">
                      <p class="text-sm font-medium">${award.date}</p>
                      <p class="text-xxl my-4">${award.title}</p>
                      <p class="text-md">${award.description}</p>
                    </div>
                  `;

                  list.appendChild(div);
                });

                start = end;

                if (start >= total) {
                  btn.style.display = "none";
                }
              } catch (e) {
                console.error("Awards load more failed", e);
              } finally {
                spinner?.classList.add("hidden");
                arrow?.classList.remove("hidden");
                btn.disabled = false;
              }
            };
          };

          requestAnimationFrame(init);
        }}
      </Script>
    </section>
  );
};

export default AwardsList;
 