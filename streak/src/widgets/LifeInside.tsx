/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Minna Ancy Mathew
 */

import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import Spinner from "@common/components/Spinner";
import SanityImage from "@common/components/SanityImage";
import { Script } from "streak/components";

interface LifeInsideImage {
  _key: string;
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}

interface LifeInsideData {
  insideValoriz: LifeInsideImage[];
  totalMedias: number;
}

interface LifeInsideWidget {
  widgetId: string;
  widgetType: string;
  loadingStrategy: "lazy";
  data: LifeInsideData;
}

interface LoadMoreOptions {
  start: number;
  total: number;
  limit: number;
}

interface SanityImageItem {
  url: string;
  alt: string;
}

interface SanityResponse {
  result?: {
    insideValoriz?: SanityImageItem[];
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


const LifeInsidePublic = ({ data }: LifeInsideWidget) => {
  const mediaList = data?.insideValoriz ?? [];
  const totalMedias = data?.totalMedias ?? 0;

  if (!mediaList.length) return null;

  return (
    <section className="border-b py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2 mb-14">Inside Valoriz</h2>

        <div
          id="lifeinside-list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11"
        >
          {mediaList.map((item) => (
            <div key={item._key} className="[clip-path:inset(0)]">
              <SanityImage
                src={item.image}
                width={400}
                height={346}
                alt={item.image.alt}
                urlWithOutDimension
                className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.05]"
              />
            </div>
          ))}
        </div>

        {mediaList.length < totalMedias && (
          <div className="mt-14 text-center">
            <Button
              id="loadmore-btn"
              variant="outline-secondary"
              className="flex items-center mx-auto gap-3 group"
              type="button"
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
      <Script<LoadMoreOptions>
        id="LoadMoreLifeInside"
        options={{
          start: mediaList.length,
          total: totalMedias,
          limit: 6,
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
            const list = document.getElementById("lifeinside-list");

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
                if (!gDom.getSanityContentByQuery) return;
                const json = await gDom.getSanityContentByQuery({
                  query: `
                    *[_type == "lifeAtValoriz"][0]{
                      "insideValoriz": insideValoriz[$start...$end]{
                        "url": image.asset->url,
                        "alt": coalesce(image.alt,"")
                      }
                    }
                  `,
                  $start: start,
                  $end: end,
                });

                const items = json.result?.insideValoriz ?? [];

                items.forEach((item) => {
                  const wrapper = document.createElement("div");
                  wrapper.className = "[clip-path:inset(0)]";

                  const img = document.createElement("img");
                  img.src = item.url;
                  img.alt = item.alt;
                  img.className =
                    "w-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.05]";

                  wrapper.appendChild(img);
                  list.appendChild(wrapper);
                });

                start = end;

                if (start >= total) {
                  btn.style.display = "none";
                }
              } catch (error) {
                console.error("Load more failed:", error);
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

export default LifeInsidePublic;
