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

import SanityImage from "common/components/SanityImage";
import { Script } from "streak/components";

const Partners = (props: any) => {
  const partnersInfo =
    props?.partnersInfo ??
    props?.Partners?.partnersInfo ??
    props?.data?.partnersInfo;

  const ourPartners: Array<{ _key?: string; logo?: any }> =
    partnersInfo?.ourPartners ?? [];

  const description: string =
    partnersInfo?.description || "No Description Available";

  return (
    <section className="py-12 xl:py-20 xxl:py-26 bg-light-gradient">
      <div className="container will-change-transform">
        <div className="xl:w-2/5 mb-16 xl:mb-24 relative overflow-hidden">
          <h2 className="text-h4 xl:text-h2 fade-item">Partners</h2>
          <div
            id="partners-animated-description"
            className="text-md xl:text-h5 mt-4 xl:mt-8 text-black-500 fade-item leading-relaxed"
          >
            {description.split("\n").map((line: string, lineIndex: number) => (
              <div key={lineIndex} className="mb-2">
                {line.split(" ").map((word: string, wordIndex: number) => (
                  <span
                    key={wordIndex}
                    style={{
                      display: "inline-block",
                      opacity: 0,
                      transform: "translateY(10px)",
                      marginRight: "0.25em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        {ourPartners.length > 0 && (
          <div className="xl:w-10/12 xl:mx-auto">
            <div
              id="partners-grid"
              className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 xl:gap-x-30 gap-y-26 xl:gap-y-30"
            >
              {ourPartners.map((partner, index) => (
                <div
                  key={partner?._key || index}
                  className="flex justify-center items-center"
                >
                  <SanityImage
                    width={168}
                    height={60}
                    src={partner?.logo}
                    alt={partner?.logo?.alt || "Partner logo"}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Animation Script */}
      <Script id="PartnersAnimatedDescription">
        {(gDom: any) => {
          const motionEvent = "ce-sl-motion";

          const handleAfterMotionLoads = ({ detail }: any) => {
            const Motion = detail.Motion;
            const descContainer = document.getElementById(
              "partners-animated-description"
            );

            if (!descContainer) return;

            gDom.onVisible(
              descContainer,
              () => {
                const spans = descContainer.querySelectorAll("span");
                spans.forEach((span: any, i: number) => {
                  Motion.animate(
                    span,
                    { opacity: [0, 1], y: [10, 0] },
                    { duration: 0.4, delay: i * 0.1, easing: "ease-out" }
                  );
                });
              },
              { threshold: 0.2 }
            );
          };

          gDom.addEventListener(motionEvent, handleAfterMotionLoads);
          if (gDom.triggeredEvents && gDom.triggeredEvents[motionEvent]) {
            handleAfterMotionLoads({
              detail: gDom.triggeredEvents[motionEvent],
            });
            gDom.removeEventListener(motionEvent, handleAfterMotionLoads);
          }

          // Animate Partner Logos
          const logoWrappers = document.querySelectorAll("#partners-grid > div");
          logoWrappers.forEach((wrapper, index) => {
            const el = wrapper as HTMLElement;
            el.style.opacity = "0";
            el.style.transform = "translateY(40px)";
            const observer = new IntersectionObserver(
              (entries, obs) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    el.style.transition = `opacity 0.6s ${index * 0.1
                      }s ease-out, transform 0.6s ${index * 0.1}s ease-out`;
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    obs.unobserve(el);
                  }
                });
              },
              { threshold: 0.4 }
            );
            observer.observe(wrapper);
          });
        }}
      </Script>
    </section>
  );
};

export default Partners;
