import { Script } from "streak/components";

const HomeHighlights = () => {
  // "/"added for mobile device line break
  // "#" added for desktop device line break
  const lines: string = "Turning /complexity into /simplicity, #so you /can focus on /success";

  return (
    <section className="bg-black" id="HomeHighlightsSection">
      <div className="sticky top-0 flex flex-col justify-center h-screen py-12 xl:py-20">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <h2
              id="scroll-text"
              className="text-h4 xl:text-h2 leading-snug tracking-wide flex flex-wrap text-white"
              data-letter-count={lines.length}
            >
              {
                <div style={{ width: "100%", justifyContent: "center" }}>
                  {lines.split("").map((char, charIndex) => (
                    ["#", "/"].includes(char) ? (
                      <br className={char === "#" ? "hidden lg:block" : "block md:hidden"} />
                    ) : (
                      <span
                        key={`char-${charIndex}`}
                        style={{ display: "inline-block", opacity: 1 }}
                        className="transition-colors duration-200 text-white"
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>)
                  ))}
                </div>
              }
            </h2>
          </div>
        </div>
      </div>

      <Script id="HomeHighlights">
        {(gDom: any) => {
          const textEl = gDom.geById("scroll-text");

          const letters = textEl.querySelectorAll("span") as NodeListOf<HTMLElement>;
          const letterCount = letters.length;
          const section = gDom.geById("HomeHighlightsSection") as HTMLElement;

          function setSectionHeight() {
            // Make section tall enough: viewport + extra scroll per letter
            section.style.height = `${window.innerHeight + letterCount * 10}px`; // adjust 10px per letter
          }

          function updateColors() {
            const highlightsStack = gDom.geById(
              "stack-section-2"
            ) as HTMLElement;
            const progress = Number(
              highlightsStack?.getAttribute("highlight-scroll-progress")
            );

            const lettersToColor = Math.floor(progress * letters.length);

            letters.forEach((span, i) => {
              if (i < lettersToColor) {
                span.classList.replace("text-white", "text-primary");
              } else {
                span.classList.add("text-white");
                span.classList.remove("text-primary");
              }
            });
          }

          const lenisEvent = "ce-sl-lenis";

          const lenisScrollHandler = (event: any) => {
            updateColors();
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
            setSectionHeight();
            updateColors();
          });

          // Start
          setSectionHeight();
          updateColors();
        }}
      </Script>
    </section>
  );
}

export default HomeHighlights;