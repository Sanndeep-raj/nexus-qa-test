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

import { Script } from "streak/components";
interface Stats {
  title: string;

  content1: string;
  value1: string | number;
  suffix1: string;
  decimal1: boolean

  content2: string;
  value2: string | number;
  suffix2: string;
  decimal2: boolean


  content3: string;
  value3: string | number;
  suffix3: string;
  decimal3: boolean

};
interface StatsData {
  data: Stats
}

const DigitalCommerceHighlights = (props: StatsData) => {
  const data = props?.data;
  return (
    <section className="bg-light-gradient py-12 xl:py-20 xxl:py-26">
      <div className="container text-center">
        <h2 className="text-h5 xl:text-h4">{data.title}</h2>

        <div className="flex max-lg:flex-col max-lg:gap-17 md:items-center md:justify-between mt-16">
          <div className="lg:flex-1">
            <p
              className="text-h4 font-semibold text-black"
              data-counter
              data-to={data.value1}
              data-suffix={data.suffix1}
              data-decimal={data.decimal1}

            >
              0
            </p>
            <p className="text-xxl mt-2">{data.content1}</p>
          </div>

          <div className="lg:flex-1">
            <p
              className="text-h4 font-semibold text-black"
              data-counter
              data-to={data.value2}
              data-suffix={data.suffix2}
            >
              0
            </p>
            <p className="text-xxl mt-2">{data.content2}</p>
          </div>

          <div className="lg:flex-1">
            <p
              className="text-h4 font-semibold text-black"
              data-counter
              data-to={data.value3}
              data-suffix={data.suffix3}
            >
              0
            </p>
            <p className="text-xxl mt-2">{data.content3}</p>
          </div>
        </div>
      </div>

      <Script id="DigitalCommerceHighlights">
        {() => {
          const counters = document.querySelectorAll("[data-counter]");

          const easeOut = (t: any) => 1 - Math.pow(1 - t, 3);

          const animateCount = (el: any) => {
            const from = Number(el.getAttribute("data-from")) || 0;
            const to = Number(el.getAttribute("data-to")) || 100;

            const isDecimal = el.getAttribute("data-decimal") === "true";
            const decimals = isDecimal ? 1 : 0;

            const duration = 1.2;
            const prefix = el.getAttribute("data-prefix") || "";
            const suffix = el.getAttribute("data-suffix") || "";

            let startTime: any = null;

            const step = (timestamp: any) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min(
                (timestamp - startTime) / (duration * 1000),
                1
              );
              const eased = easeOut(progress);
              const value = from + (to - from) * eased;

              el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;

              if (progress < 1) requestAnimationFrame(step);
              else el.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
            };

            requestAnimationFrame(step);
          };

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                const el = entry.target;
                if (entry.isIntersecting) {
                  animateCount(el);
                } else {
                  const from = Number(el.getAttribute("data-from")) || 0;
                  const prefix = el.getAttribute("data-prefix") || "";
                  const suffix = el.getAttribute("data-suffix") || "";

                  const decimals =
                    el.getAttribute("data-decimal") === "true" ? 1 : 0;

                  el.textContent = `${prefix}${from.toFixed(decimals)}${suffix}`;
                }
              });
            },
            { threshold: 0.4 }
          );

          counters.forEach((counter) => observer.observe(counter));
        }}
      </Script>


    </section>
  );
};

export default DigitalCommerceHighlights;
