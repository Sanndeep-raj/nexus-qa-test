import ScrollFade from "@common/components/ScrollFade";
import { Script } from "streak/components";

const AboutMission = () => {

  const contents = [
    {
      media: "/images/about/mission-1.webp",
      title: "Always Ahead",
      description: "Pushing boundaries to ensure you stay on top.",
    },
    {
      media: "/images/about/mission-2.webp",
      title: "Flawless Operations",
      description:
        "Making complexity simple, so your business runs flawlessly.",
    },
    {
      media: "/images/about/mission-3.webp",
      title: "Adaptive Solutions",
      description: "Smart strategies that evolve with your needs.",
    },
  ];

  const lines = "Delivering high-quality, /cutting edge & /customer centric #solutions to businesses /and its customers.";

  return (
    <section
      className="xl:min-h-screen xl:flex py-12 xl:py-20 xxl:py-26"
      id="AboutMissionSection"
    >
      <ScrollFade>
        <div className="sticky top-5 md:top-0 h-screen container flex flex-col">
          {/* Top Title */}
          <div className="flex-none pt-16 lg:pt-26">
            <h2 className="text-h4 xl:text-h2">Our Mission</h2>
          </div>

          {/* Middle Running Text */}
          <div className="flex-1 flex items-center">
            {/* flex flex-col justify-between h-full */}
            <h3 className="text-h5 xl:text-h3" id="scroll-text">
              {
                <div style={{ width: "100%", justifyContent: "center", }}>
                  {lines.split("").map((char, charIndex) => (
                    ["#", "/"].includes(char) ?
                      <br className={char === "#" ? "" : "block md:hidden"} />
                      :
                      <span
                        key={`char-${charIndex}`}
                        style={{ display: "inline-block", opacity: 1 }}
                        className="transition-colors duration-200 text-black"
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                  ))}
                </div>
              }
            </h3>
          </div>

          {/* Bottom Description List */}
          <div className="flex-none pb-16 lg:pb-26 overflow-x-hidden max-xl:-mx-6 xl:mt-5">
            <div
              className="flex flex-nowrap max-xl:overflow-x-auto max-xl:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              style={{
                willChange: "transform",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {contents?.map((content, index) => (
                <div
                  className="flex items-center gap-4 xl:gap-8 max-xl:w-[360px] xl:w-4/12 shrink-0"
                  key={`om-baner-${index + 1}`}
                >
                  <div className="w-[108px] xl:w-[132px] shrink-0">
                    <img
                      src={content?.media}
                      width={600}
                      height={600}
                      alt={content?.title}
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-xxl pe-4 xl:pe-4">{content?.title}</h4>
                    <p className="text-gray-900 mt-2 pe-6 xl:pe-16">
                      {content?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Script id="AboutMission">
          {(gDom: any) => {
            const textEl = gDom.geById("scroll-text");

            const letters = textEl.querySelectorAll("span") as NodeListOf<HTMLElement>;
            const letterCount = letters.length;
            const section = gDom.geById("AboutMissionSection") as HTMLElement;

            function setSectionHeight() {
              // Make section tall enough: viewport + extra scroll per letter
              section.style.height = `${window.innerHeight + letterCount * 10}px`; // adjust 10px per letter
            }

            function updateColors(event: any) {
              const { animatedScroll } = event;
              const scrollTop = animatedScroll;

              const progress = (scrollTop - section?.offsetTop) / (section?.offsetHeight - window.innerHeight);

              const lettersToColor = Math.floor(progress * letters.length);

              letters.forEach((span, i) => {
                if (i < lettersToColor) {
                  span.classList.replace("text-black", "text-primary");
                } else {
                  span.classList.add("text-black");
                  span.classList.remove("text-primary");
                }
              });
            }

            const lenisEvent = "ce-sl-lenis";

            const lenisScrollHandler = (event: any) => {
              updateColors(event);
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
              updateColors({ animatedScroll: window.scrollY });
            });

            // Start
            setSectionHeight();
          }}
        </Script>
      </ScrollFade>
    </section>
  )
}

export default AboutMission;