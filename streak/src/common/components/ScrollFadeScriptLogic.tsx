import { Script } from "streak/components";


const ScrollFadeScriptLogic = () => <div style={{ display: 'none' }}>
  <Script id={`scroll-fade-script`}>
    {() => {

      (function () {
        const FADE_SELECTOR = ".scroll_fade_section";
        const sections = new Set<HTMLElement>();

        const doHandler = () => {
          (document.querySelectorAll(FADE_SELECTOR) as
            NodeListOf<HTMLElement>

          ).forEach((el) => sections.add(el));
        }

        // Observe DOM changes for dynamically added sections
        const observer = new MutationObserver(doHandler);

        // Observe body (you can scope this narrower if needed)
        observer.observe(document.body, { childList: true, subtree: true });

        // Initial collection
        doHandler();

        // Throttled scroll update using requestAnimationFrame
        let ticking = false;

        function handleScroll() {
          if (!ticking) {
            requestAnimationFrame(updateSections);
            ticking = true;
          }
        }

        function updateSections() {
          const windowHeight = window.innerHeight;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isTransformNeeded = section.getAttribute("restrict-transform") !== "true";

            // Skip if element is not in viewport at all (for perf)
            if (rect.bottom < 0 || rect.top > windowHeight) return;

            const start = windowHeight;
            const end = -rect.height;

            let progress = (rect.top - start) / (end - start);
            progress = Math.min(Math.max(progress, 0), 1);

            // Opacity logic (stays 1 for first half, fades to 0 in second)
            const opacity = progress <= 0.5 ? 1 : 1 - (progress - 0.5) / 0.5;

            if (isTransformNeeded) {
              // TranslateY: from +130px (below) → -130px (above)
              const translateY = 130 + progress * -260;

              section.style.transform = `translateY(${translateY}px)`;
            }

            section.style.opacity = `${opacity}`;
            section.style.willChange = "transform, opacity";
          });

          ticking = false;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);


        handleScroll();
      })();

    }}
  </Script>
</div>



export default ScrollFadeScriptLogic;