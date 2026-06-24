import { Script } from "streak/components";

interface HomeAboutValorizProps {
  className?: string;
  style?: { [key: string]: string };
  heroContent: string[];
  content: {
    video: string;
    title: string;
    description: string;
    features: { image: string; title: string }[];
  }[];
}
const HomeAboutValoriz = (props: HomeAboutValorizProps) => {
  const { className, style, content, heroContent, } = props;
  const [defaultContent] = content;
  if (!defaultContent) return null;
  return (
    <section
      id="HomeAboutValorizSection"
      className={className}
      style={{ height: `${225}vh`, ...(style || {}) }}
    >
      <div className="top-0 h-screen xl:flex xl:items-center text-white bg-black xl:min-h-screen py-12 xl:py-20 xxl:py-26 max-xl:hidden">
        <div className="container flex flex-col justify-between h-full will-change-transform">
          <div className="grid lg:grid-cols-2">
            <h3 className="text-h4 xxl:text-h3 max-lg:hidden" id="w-01-hc">
              {heroContent.map((line) => (
                <div>
                  {line.split("").map((letter) => (
                    <span style={{ display: "inline-block", opacity: 0 }}>
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </div>
              ))}
            </h3>
            <div className="flex items-center justify-center max-xl:max-w-[500px] max-xl:mx-auto max-xl:mb-12 xl:ps-16 lg:h-[306px] xl:h-[380px]">
              <video
                id="w-01-vd"
                className="h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src={defaultContent.video}
              >
                <track kind="captions" src="/captions/dummy.vtt" srcLang="en" label="English" default />
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h4 className="text-h5 xxl:text-h4" id="w-01-tt">
                {defaultContent.title}
              </h4>
              <p className="text-md xxl:text-xxl mt-7" id="w-01-dc">
                {defaultContent.description}
              </p>
            </div>
            <div
              id="w-01-ics"
              className="flex items-end justify-center lg:justify-end gap-16 mt-12 lg:mt-0"
            >
              {defaultContent.features.map((feature) => (
                <div className="flex flex-col text-center">
                  <img
                    alt={feature.title}
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="max-w-full mx-auto max-lg:w-8 max-lg:h-8"
                    src={feature.image}
                    id="w-01-ic"
                  />
                  <h5 className="text mt-6 lg:mt-4" id="w-01-ict">
                    {feature.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Script id="HomeAboutValoriz" options={{ contents: content }}>
        {
          (gDom: any, options: any) => {
            const motionEvent = "ce-sl-motion";
            const lenisEvent = "ce-sl-lenis";
            let activeIndex = 0;

            const section = gDom.geById("HomeAboutValorizSection");
            const videoEl = gDom.geById("w-01-vd") as HTMLVideoElement;

            const contents = options?.contents || [];

            const titleEl = gDom.geById("w-01-tt");
            const descEl = gDom.geById("w-01-dc");
            const featuresEl = gDom.geById("w-01-ics");

            function updateContent(index: number, scale = 1) {
              const detail = gDom.triggeredEvents[motionEvent];
              const Motion = detail.Motion;

              const content = contents[index];
              if (!content) return;

              // Update video
              if (videoEl) {
                videoEl.src = content.video;
                videoEl.style.transform = `scale(${scale})`;
              }

              // Update title
              if (titleEl) {
                titleEl.textContent = content.title;
                Motion.animate(
                  titleEl,
                  { opacity: [0, 1], y: [30, 0] },
                  { duration: 0.8 }
                );
              }

              // Update description
              if (descEl) {
                descEl.textContent = content.description;
                Motion.animate(
                  descEl,
                  { opacity: [0, 1], y: [30, 0] },
                  { duration: 0.8, delay: 0.3 }
                );
              }

              // Update features
              if (featuresEl) {
                featuresEl.innerHTML = "";

                content.features.forEach((f: { title: string, image: string }, index: number) => {
                  const div = document.createElement("div");
                  div.className = "flex flex-col text-center";
                  div.innerHTML = `
    <img src="${f.image}" width="48" height="48" class="max-w-full mx-auto max-lg:w-8 max-lg:h-8" style="transform:scale(${scale})" alt="${f.title}"/>
    <h5 class="text mt-6 lg:mt-4">${f.title}</h5>
  `;
                  featuresEl.appendChild(div);

                  // Animate each feature with stagger
                  Motion.animate(
                    div,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.8, delay: index * 0.3 }
                  );
                });
              }
            }

            const sectionHeight = section?.offsetHeight ?? 1;

            let scrollHandlerDebounce: NodeJS.Timeout;

            const lenisScrollHandler = (event: any) => {
              const { animatedScroll } = event;

              clearTimeout(scrollHandlerDebounce);
              scrollHandlerDebounce = setTimeout(() => {

                const ratio = animatedScroll / sectionHeight;
                const transformedRatio = ratio * contents.length - 1;

                const newIndex = Math.min(
                  contents.length - 1,
                  Math.max(0, Math.floor(transformedRatio))
                );

                const number = Math.floor(transformedRatio);
                const decimal = transformedRatio - number;
                const scale = newIndex === contents.length - 1 ? 1 : 1 - decimal * 0.2;

                if (newIndex !== activeIndex) {
                  activeIndex = newIndex;
                  updateContent(activeIndex, scale);
                } else {
                  // Scale video + features smoothly
                  videoEl.style.transform = `scale(${scale})`;
                  section
                    ?.querySelectorAll(
                      ".flex.items-end.justify-center.lg\\:justify-end.gap-16.mt-12.lg\\:mt-0 img"
                    )
                    .forEach((img: HTMLImageElement) => {
                      img.style.transform = `scale(${scale})`;
                    });
                }
              }, 1);
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
            const checkAndTriggerHandleRestOfTheContents = (detail: any) => {
              if (
                [motionEvent, lenisEvent].every((each) => gDom.triggeredEvents[each])
              ) {
                handleRestOfThenContents();
              }
            };

            const handleAfterMotionLoads = ({ detail }: any) => {
              const Motion = detail.Motion;

              const headingContainer = gDom.geById("w-01-hc");

              gDom.onVisible(
                headingContainer,
                () => {
                  headingContainer
                    .querySelectorAll("span")
                    .forEach((span: any, i: number) => {
                      Motion.animate(
                        span,
                        { opacity: [0, 1], y: [20, 0] },
                        { duration: 0.3, delay: i * 0.01, easing: "ease-out" }
                      );
                    });
                },
                { threshold: 0.2 }
              );

              checkAndTriggerHandleRestOfTheContents({ detail });
              updateContent(0);
            };

            gDom.addEventListener(motionEvent, handleAfterMotionLoads);
            if (gDom.triggeredEvents && gDom.triggeredEvents[motionEvent]) {
              handleAfterMotionLoads({
                detail: gDom.triggeredEvents[motionEvent],
              });
              gDom.removeEventListener(motionEvent, handleAfterMotionLoads);
            }

            gDom.addEventListener(lenisEvent, checkAndTriggerHandleRestOfTheContents);
            if (gDom.triggeredEvents && gDom.triggeredEvents[lenisEvent]) {
              checkAndTriggerHandleRestOfTheContents({
                detail: gDom.triggeredEvents[lenisEvent],
              });
              gDom.removeEventListener(
                lenisEvent,
                checkAndTriggerHandleRestOfTheContents
              );
            }
          }
        }
      </Script>
    </section>
  );
}

export default HomeAboutValoriz;