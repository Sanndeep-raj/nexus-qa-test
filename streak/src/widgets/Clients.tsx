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

import { Script } from "streak/components";
import ScrollFade from "@common/components/ScrollFade";

const logos = [
  "/images/clients/alfuttaim-logo.svg",
  "/images/clients/noon-logo.svg",
  "/images/clients/teleflora-logo.svg",
  "/images/clients/magrabi-logo.svg",
  "/images/clients/fenix-logo.svg",
  "/images/clients/m&s-logo.svg",
  "/images/clients/toysrus.svg",
  "/images/clients/doctorM-logo.svg",
  "/images/clients/american-greetings-logo.svg",
  "/images/clients/primus-logo.svg",
  "/images/clients/watsons-logo.svg",
  "/images/clients/fjall-raven-logo.svg",
  "/images/clients/han-wag-logo.svg",
  "/images/clients/ace-logo.svg",
  "/images/clients/kiabi-logo.svg",
];

const Clients = () => {
  const sentence =
    "We’ve built our journey on one simple belief: when you grow, we grow.";

  const desktopLines = [
    "We’ve built our journey",
    "on one simple belief:",
    "when you grow, we",
    "grow.",
  ];

  return (
    <section>
      <ScrollFade>
        <div className="container">
          {/* HEADING */}
          <div className="w-full flex justify-start">
            <div className="w-full max-w-[720px] mb-16 xl:mb-28">
              <div
                id="clients-animated-description"
                className="text-h5 xl:text-h2 leading-[1.25]"
              >
                {/* DESKTOP */}
                <div className="hidden xl:block">
                  {desktopLines.map((line, lineIdx) => (
                    <div
                      key={lineIdx}
                      style={{ display: "block", marginBottom: "8px" }}
                    >
                      {line.split(" ").map((word, wIdx) => (
                        <span
                          key={wIdx}
                          data-anim
                          style={{
                            display: "inline-block",
                            opacity: 0,
                            transform: "translateY(14px)",
                            marginRight: "6px",
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* MOBILE */}
                <span className="block lg:hidden">
                  {sentence.split(" ").map((word, index) => (
                    <span
                      key={index}
                      data-anim
                      style={{
                        display: "inline-block",
                        opacity: 0,
                        transform: "translateY(14px)",
                        marginRight: "6px",
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* LOGO GRID */}
          <div
            id="clients-grid"
            className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            gap-12 md:gap-28
            justify-between
          "
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${index + 1 === logos.length
                    ? "col-span-2 md:col-span-1 lg:col-span-1 justify-self-center"
                    : ""
                  }`}
                style={{
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: `opacity .6s ease-out ${index * 0.1}s, transform .6s ease-out ${index * 0.1}s`,
                }}
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  width={120}
                  height={60}
                  className="
                  w-full max-w-[126px] xl:max-w-[170px]
                  opacity-80 hover:opacity-100
                  grayscale hover:grayscale-0
                  transition-all
                "
                />
              </div>
            ))}
          </div>
        </div>

        <Script id="Clients">
          {(gDom: any) => {
            const motionEvent = "ce-sl-motion";

            const handleMotionInit = ({ detail }: any) => {
              const Motion = detail.Motion;

              const spans = document.querySelectorAll(
                "#clients-animated-description span[data-anim]"
              );

              spans.forEach((el: any, i: number) => {
                gDom.onVisible(
                  el,
                  () => {
                    Motion.animate(
                      el,
                      { opacity: [0, 1], y: [14, 0] },
                      {
                        duration: 0.45,
                        delay: i * 0.04,
                        easing: "ease-out",
                      }
                    );
                  },
                  { threshold: 0.15 }
                );
              });

              // LOGO ANIMATION
              const wrappers = document.querySelectorAll("#clients-grid > div");

              wrappers.forEach((wrapper: any) => {
                const obs = new IntersectionObserver(
                  (entries, obs) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        wrapper.style.opacity = "1";
                        wrapper.style.transform = "translateY(0)";
                        obs.unobserve(wrapper);
                      }
                    });
                  },
                  { threshold: 0.4 }
                );

                obs.observe(wrapper);
              });
            };

            gDom.addEventListener(motionEvent, handleMotionInit);
            if (gDom.triggeredEvents?.[motionEvent]) {
              handleMotionInit({ detail: gDom.triggeredEvents[motionEvent] });
            }
          }}
        </Script>
      </ScrollFade>
    </section>
  );
};

export default Clients;
