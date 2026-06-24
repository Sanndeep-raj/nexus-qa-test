import { Script } from "streak/components";
import HomeAboutValoriz from "./HomeAboutValoriz";
import HomeHighlights from "./HomeHighlights";
import HomeServices from "./HomeServices";
import HomeAboutValorizCarousel from "./HomeAboutValorizCarousel";
import { cdnBaseUrl } from "utils/config";

const HomeStackedWidgets = () => {
  const animatedWidgetHeroContent = [
    "We believe in innovation",
    "that accelerates the path",
    "forward.",
  ];
  const animatedWidgetOneContent = [
    {
      video: `${cdnBaseUrl}/assets/home-potential.mp4`,
      title: "Ignite Potential",
      description: "Your ideas deserve more than just a start, they deserve momentum. We bring speed, innovation, and precision, so you don't just begin, you take off.",
      features: [
        { image: "/images/home/about/icon-speed.svg", title: "Speedy Delivery" },
        { image: "/images/home/about/icon-idea.svg", title: "Innovative Ideas" },
        { image: "/images/home/about/icon-execution.svg", title: "Precision Execution" },
      ],
    },
    {
      video: `${cdnBaseUrl}/assets/home-level-up.mp4`,
      title: "Level Up",
      description: "Growth doesn't have to be complicated. We simplify complexity with sharp strategies and seamless execution, keeping you ahead.",
      features: [
        { image: "/images/home/about/icon-trust.svg", title: "Build Trust" },
        { image: "/images/home/about/icon-growth.svg", title: "Ignite Growth" },
        { image: "/images/home/about/icon-spark.svg", title: "Spark Change" },
      ],
    },
    {
      video: `${cdnBaseUrl}/assets/home-trophy-90.mp4`,
      title: "Seal the Win",
      description: "Your success is our pride. From end to end, we're here to make sure every effort leads to something extraordinary.",
      features: [
        { image: "/images/home/about/icon-progress.svg", title: "Pioneer Progress" },
        { image: "/images/home/about/icon-results.svg", title: "Extraordinary Results" },
        { image: "/images/home/about/icon-lead.svg", title: "Lead Boldly" },
      ],
    }
  ];



  return (
    <section id="scroll-section" className="relative bg-black text-white h-auto xl:h-[815.734vh]">
      <div className="hidden xl:block sticky top-0 h-screen overflow-hidden pointer-events-none" id="stack-section-1">
        <HomeAboutValoriz
          heroContent={animatedWidgetHeroContent}
          content={animatedWidgetOneContent}
        />
      </div>
      <div className="xl:hidden"><HomeAboutValorizCarousel /></div>
      <div className="sticky top-0 h-screen overflow-hidden pointer-events-none" id="stack-section-2">
        <HomeHighlights />
      </div>
      <div className="xl:sticky xl:top-0 xl:scale-70 xl:translate-y-[50px] xl:opacity-0 xl:pointer-events-none" id="stack-section-3">
        <HomeServices />
      </div>
      <Script id="HomeStackedWidgets">
        {(gDom: any) => {
          const section = document.getElementById("scroll-section");
          const first = document.getElementById("stack-section-1");
          const second = document.getElementById("stack-section-2");
          const third = document.getElementById("stack-section-3");
          const highLightsEl = document.getElementById("HomeHighlightsSection");

          // Helper function to map range
          function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
            return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
          }

          function normalizeProgress(p: number, isNonXlScreen: boolean) {
            const pMin = isNonXlScreen ? 0.4 : 0.29;
            const pMax = isNonXlScreen ? 1 : 0.55;
            const highLightProgress = (p - pMin) / (pMax - pMin);
            second?.setAttribute("highlight-scroll-progress", `${highLightProgress}`)
          }

          const lenisEvent = "ce-sl-lenis";

          const lenisScrollHandler = (event: any) => {
            const isNonXlScreen = window?.innerWidth <= 1279;
            const sectionHeight = isNonXlScreen && highLightsEl instanceof HTMLElement ? highLightsEl.offsetHeight : section?.offsetHeight ?? 0;
            const { animatedScroll } = event;

            const scrollTop = animatedScroll;
            const sectionTop = section?.offsetTop ?? 0;
            const progress = (scrollTop - sectionTop) / (sectionHeight - window.innerHeight);

            // Clamp progress between 0 and 1
            const p = Math.min(Math.max(progress, 0), 1);

            normalizeProgress(p, isNonXlScreen);

            if (!isNonXlScreen) {
              // First opacity: [0, 0.2, 0.3] => [1, 1, 0]
              if (first) {
                if (p <= 0.2) {
                  first.style.opacity = "1";
                } else if (p > 0.2 && p <= 0.3) {
                  first.style.opacity = `${mapRange(p, 0.2, 0.3, 1, 0)}`;
                } else {
                  first.style.opacity = "0";
                }
              }

              // Second opacity: [0.29, 0.4, 0.7] => [0, 1, 0]
              if (second) {
                if (p <= 0.29) {
                  second.style.opacity = "0";
                } else if (p > 0.29 && p <= 0.4) {
                  second.style.opacity = `${mapRange(p, 0.29, 0.4, 0, 1)}`;
                } else if (p > 0.4 && p <= 0.7) {
                  second.style.opacity = `${mapRange(p, 0.4, 0.7, 1, 0)}`;
                } else {
                  second.style.opacity = "0";
                }
              }

              // Third opacity, scale, Y: [0.69, 0.95, 1]
              if (third) {
                if (p <= 0.69) {
                  third.style.opacity = "0";
                  third.style.transform = "scale(0.7) translateY(50px)";
                  third.style.pointerEvents = "none";
                } else if (p > 0.69 && p <= 0.9) {
                  const opacity = mapRange(p, 0.69, 0.95, 0, 1);
                  const scale = mapRange(p, 0.69, 0.9, 0.7, 1);
                  const y = mapRange(p, 0.69, 0.92, 50, 0);
                  third.style.opacity = `${opacity}`;
                  third.style.transform = `scale(${scale}) translateY(${y}px)`;
                  third.style.pointerEvents = opacity > 0.3 ? "auto" : "none";
                } else {
                  third.style.opacity = "1";
                  third.style.transform = "scale(1) translateY(0px)";
                  third.style.pointerEvents = "auto";
                }
              }
            } else {
              if (second) second.style.opacity = "1";
              if (third) {
                third.style.opacity = "1";
                third.style.transform = "scale(1) translateY(0px)";
                third.style.pointerEvents = "auto";
              }
            }
          };

          let listerTriggered = false;
          const handleRestOfThenContents = () => {
            const detail = gDom.triggeredEvents[lenisEvent];
            const lenis = detail.lenis;
            if (lenis && !listerTriggered) {
              lenis.on("scroll", lenisScrollHandler);
              listerTriggered = true;
            }
          };

          gDom.addEventListener(lenisEvent, handleRestOfThenContents);
          if (gDom.triggeredEvents && gDom.triggeredEvents[lenisEvent]) {
            handleRestOfThenContents();
            gDom.removeEventListener(lenisEvent, handleRestOfThenContents);
          }

          gDom.addEventListener("resizeEnd", () => {
            lenisScrollHandler({ animatedScroll: window.scrollY });
          });
        }}
      </Script>
    </section>
  );
}

export default HomeStackedWidgets;