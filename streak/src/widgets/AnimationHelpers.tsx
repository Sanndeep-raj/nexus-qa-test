import FloatingCursor from "@common/components/FloatingCursor";
import ScrollFadeScriptLogic from "@common/components/ScrollFadeScriptLogic";
import { Dynamic, Script } from "streak/components";

const AnimationHelpers = () => {
  return (
    <>
      <Dynamic id="scroll-fade-dynamic">
        <ScrollFadeScriptLogic />
      </Dynamic>
      <Dynamic id="floating-cursor-dynamic">
        <FloatingCursor />
      </Dynamic>

      <Script id={`scroll-fade-script-loader`}>
        {(gDom: any) => {
          gDom.triggeredEvents = {};

          const triggerCustomEvent = (name: string, detail: any = {}) => {
            gDom.triggeredEvents[name] = detail;
            detail.triggeredEvents = Object.keys(gDom.triggeredEvents);
            const event = new CustomEvent(name, { detail });
            window.dispatchEvent(event);
          };

          const triggerScrollFadeLoad = () => {
            gDom.loadDynamicComponent("scroll-fade-dynamic", () => {
              console.log("ScrollFade dynamic component loaded");
            });

            gDom.loadDynamicComponent("floating-cursor-dynamic", () => {
              console.log("FloatingCursor dynamic component loaded");
            });

            gDom
              .loadPackage("js/lenis.min.js")
              .then(() => {
                const Lenis = (gDom as any).Lenis;

                const lenis = new Lenis({
                  duration: 0.7,
                  smooth: true,
                });

                // Use requestAnimationFrame to continuously update the scroll
                function raf(time: number) {
                  lenis.raf(time);
                  requestAnimationFrame(raf);
                }

                requestAnimationFrame(raf);

                triggerCustomEvent("ce-sl-lenis", { lenis });
              })
              .catch((err: any) => {
                console.error(err);
              });

            gDom
              .loadPackage("js/motion.js")
              .then(() => {
                const Motion = (gDom as any).Motion;

                const styleTag = document.createElement("style");
                styleTag.innerHTML = `html.lenis,html.lenis body{height:auto}.lenis:not(.lenis-autoToggle).lenis-stopped{overflow:clip}.lenis [data-lenis-prevent],.lenis [data-lenis-prevent-wheel],.lenis [data-lenis-prevent-touch]{overscroll-behavior:contain}.lenis.lenis-smooth iframe{pointer-events:none}.lenis.lenis-autoToggle{transition-property:overflow;transition-duration:1ms;transition-behavior:allow-discrete}`;
                document.head.appendChild(styleTag);

                triggerCustomEvent("ce-sl-motion", { Motion });
              })
              .catch((err: any) => {
                console.error(err);
              });

            let resizeTimer: any;
            let isResizing = false;

            let lastWidth = window.innerWidth;

            window.addEventListener("resize", () => {
              const dw = Math.abs(window.innerWidth - lastWidth);

              if (dw < 1) return;

              lastWidth = window.innerWidth;

              if (!isResizing) {
                isResizing = true;
                requestAnimationFrame(() => {
                  document.body.style.setProperty("opacity", "0", "important");
                  document.body.style.setProperty("background-color", "#000", "important");
                  document.body.style.backgroundImage = "url('/images/valoriz-logo-white.svg')";
                  document.body.style.backgroundPosition = "center";
                  document.body.style.backgroundRepeat = "no-repeat";
                  document.body.style.backgroundAttachment = "fixed";
                });
                triggerCustomEvent("resizeStart")
              }

              clearTimeout(resizeTimer);

              resizeTimer = window.setTimeout(() => {
                isResizing = false;
                requestAnimationFrame(() => {
                  document.body.style.setProperty("background-color", "#fff", "important");
                  document.body.style.setProperty("opacity", "1", "important");
                  document.body.style.backgroundImage = "none";
                });
                triggerCustomEvent("resizeEnd")
              }, 200);

            });

            let isUserIntracted = false;

            const userIntractionHandler = () => {
              if (isUserIntracted) return;
              isUserIntracted = true;
              ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach(e =>
                document?.removeEventListener(e, userIntractionHandler)
              );
              triggerCustomEvent("userIntracted")
            };

            ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach(e =>
              document?.addEventListener(e, userIntractionHandler, { passive: true })
            );
          };

          if (gDom.ftr) {
            setTimeout(triggerScrollFadeLoad, 2000);
          } else {
            triggerScrollFadeLoad();
          }
        }}
      </Script>
    </>
  );
};

export default AnimationHelpers;
