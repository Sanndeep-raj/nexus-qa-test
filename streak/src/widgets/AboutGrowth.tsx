import ScrollFade from "@common/components/ScrollFade";
import { Dynamic, Script } from "streak/components";

const AboutGrowth = () => {
  return (
    <section>
      <ScrollFade>
        <div className="container flex flex-col min-h-screen">
          <div className="lg:flex flex-1">
            <div className="flex-1 pt-12 pb-8 xl:py-20 xxl:py-26">
              <h3 className="text-h4 xl:text-h2">
                We&apos;re Always
                <br /> Moving Forward
              </h3>
              <p className="text-xxl xl:text-h6 mt-6 lg:mt-12">
                At Valoriz, we&apos;re always evolving, creating an impact, and
                setting new industry standards. Innovation drives us forward, and
                our growth tells the story.
              </p>
            </div>
            <div className="lg:w-[380px] ps-17 max-lg:hidden">
              <div className="flex items-start justify-end w-full h-full">
                <AboutGrowthTree />
              </div>
            </div>
            <div className="flex flex-wrap gap-y-14 lg:hidden mb-12">
              <div className="flex flex-col items-center w-1/2 text-center">
                <span className="text-h3 text-primary leading-tight">25+</span>
                <span className="text-md">Site Launches</span>
              </div>
              <div className="flex flex-col items-center w-1/2 text-center">
                <span className="text-h3 text-primary leading-tight">7m+</span>
                <span className="text-md">Operations</span>
              </div>
              <div className="flex flex-col items-center w-1/2 text-center">
                <span className="text-h3 text-primary leading-tight">120+</span>
                <span className="text-md">Agile enabled talent and growing</span>
              </div>
              <div className="flex flex-col items-center w-1/2 text-center">
                <span className="text-h3 text-primary leading-tight">30+</span>
                <span className="text-md">Countries</span>
              </div>
              <div className="flex flex-col items-center w-full text-center px-4">
                <span className="text-h3 text-primary leading-tight">10+</span>
                <span className="text-md">Years Of Dedication</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollFade>
    </section>
  );
}

export default AboutGrowth;

const AboutGrowthTree = () => {
  return (
    <div className="flex flex-col justify-start w-[124px] h-full">
      <Dynamic id="about-growth-tree">
        <div className="relative flex items-end flex-1 h-full max-h-[17%] transition-all">
          <span className="absolute left-2 top-0 w-[2px] h-[calc(100%-16px)] bg-primary" />
          <button className="flex">
            <span className="relative w-[18px] h-[18px] border-4 border-primary rounded-full shrink-0">
              <span className={`about_growth_leaf`}>
                <img
                  src="/images/icons/leaf-1.svg"
                  width={32}
                  height={35}
                  alt=""
                  className="w-full  rotate-180"
                  loading="lazy"
                />
              </span>
            </span>
            <span className="absolute -bottom-14 -left-full -translate-x-[130px] flex flex-col items-end w-[170px] text-end">
              <span className="text-h3 text-primary leading-tight">25+</span>
              <span className="text-md">Site Launches</span>
            </span>
          </button>
        </div>
        <div className="relative flex items-end flex-1 h-full max-h-[17%] transition-all">
          <span className="absolute left-2 top-0 w-[2px] h-[calc(100%-16px)] bg-primary" />
          <button className="flex">
            <span className="relative w-[18px] h-[18px] border-4 border-primary rounded-full shrink-0">
              <span className={"about_growth_leaf"}>
                <img
                  src="/images/icons/leaf-2.svg"
                  width={60}
                  height={39}
                  alt=""
                  className="w-full rotate-180"
                  loading="lazy"
                />
              </span>
            </span>
            <span className="absolute -bottom-14 -left-full -translate-x-[130px] flex flex-col items-end w-[170px] text-end">
              <span className="text-h3 text-primary leading-tight">7m+</span>
              <span className="text-md">Operations</span>
            </span>
          </button>
        </div>
        <div className="relative flex items-end flex-1 h-full max-h-[17%] transition-all">
          <span className="absolute left-2 top-0 w-[2px] h-[calc(100%-16px)] bg-primary" />
          <button className="flex">
            <span className="relative w-[18px] h-[18px] border-4 border-primary rounded-full shrink-0">
              <span className={"about_growth_leaf"} >
                <img
                  src="/images/icons/leaf-3.svg"
                  width={68}
                  height={44}
                  alt=""
                  className="w-full rotate-180"
                  loading="lazy"
                />
              </span>
            </span>
            <span className="absolute -bottom-14 -left-full -translate-x-[130px] flex flex-col items-end w-[170px] text-end">
              <span className="text-h3 text-primary leading-tight">30+</span>
              <span className="text-md">Countries</span>
            </span>
          </button>
        </div>
        <div className="relative flex items-end flex-1 h-full max-h-[17%] transition-all">
          <span className="absolute left-2 top-0 w-[2px] h-[calc(100%-16px)] bg-primary" />
          <button className="flex">
            <span className="relative w-[18px] h-[18px] border-4 border-primary rounded-full shrink-0">
              <span className={"about_growth_leaf"}>
                <img
                  src="/images/icons/leaf-4.svg"
                  width={84}
                  height={44}
                  alt=""
                  className="w-full rotate-180"
                  loading="lazy"
                />
              </span>
            </span>
            <span className="absolute -bottom-14 -left-full -translate-x-[130px] flex flex-col items-end w-[170px] text-end">
              <span className="text-h3 text-primary leading-tight">120+</span>
              <span className="text-md">Agile enabled talent and growing</span>
            </span>
          </button>
        </div>
        <div className="relative flex items-end flex-1 h-full max-h-[17%] transition-all">
          <span className="absolute left-2 top-0 w-[2px] h-[calc(100%-16px)] bg-primary" />
          <button className="flex">
            <span className="relative w-[18px] h-[18px] border-4 border-primary rounded-full shrink-0">
              <span className={"about_growth_leaf"}>
                <img
                  src="/images/icons/leaf-5.svg"
                  width={100}
                  height={50}
                  alt=""
                  className="w-full rotate-180"
                  loading="lazy"
                />
              </span>
            </span>
            <span className="absolute -bottom-14 -left-full -translate-x-[130px] flex flex-col items-end w-[170px] text-end">
              <span className="text-h3 text-primary leading-tight">10+</span>
              <span className="text-md">Years Of Dedication</span>
            </span>
          </button>
        </div>
      </Dynamic>
      <Script id="AboutGrowthTree">
        {(gDom: any) => {
          const loadAboutGrowthTree = () => {
            gDom.loadDynamicComponent("about-growth-tree", () => {
              console.log("AboutGrowthTree component loaded");

              const styles = [
                {
                  position: "absolute",
                  top: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2rem",          // w-8 = 2rem
                  overflow: "hidden",
                  border: "none",
                  height: "2.25rem",      // h-9 = 2.25rem
                  transition: "height 0.7s ease",
                  transitionDelay: "0.3s",
                },
                {
                  position: "absolute",
                  top: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "3.75rem",       // w-15 = 3.75rem
                  overflow: "hidden",
                  height: "2.5rem",       // h-10 = 2.5rem
                  transition: "height 0.7s ease",
                  transitionDelay: "0.3s",
                },
                {
                  position: "absolute",
                  top: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "4.25rem",       // w-17 ≈ 4.25rem
                  overflow: "hidden",
                  height: "2.75rem",      // h-11 ≈ 2.75rem
                  transition: "height 0.7s ease",
                  transitionDelay: "0.3s",
                },
                {
                  position: "absolute",
                  top: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "5.25rem",       // w-21 ≈ 5.25rem
                  overflow: "hidden",
                  height: "2.75rem",      // h-11
                  transition: "height 0.7s ease",
                  transitionDelay: "0.3s",
                },
                {
                  position: "absolute",
                  top: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "6.25rem",       // w-25 = 6.25rem
                  overflow: "hidden",
                  height: "3rem",         // h-12 = 3rem
                  transition: "height 0.7s ease",
                  transitionDelay: "0.3s",
                },
              ];

              const targets = Array.from(document.querySelectorAll<HTMLElement>(".about_growth_leaf"));

              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                      const index = Number(entry.target.dataset.index) ?? 0;
                      entry.target.style.height = styles?.[index]?.height ?? "0";
                    } else {
                      (entry.target as HTMLElement).style.height = "0";
                    }
                  });
                },
                { threshold: 0.3 }
              );

              targets.forEach((target, index) => {
                target.dataset.index = `${index}`;
                Object.assign(target.style, styles[index]);
                observer.observe(target);
              });
            });
          }

          // Start
          if (!gDom.ftr) {
            loadAboutGrowthTree();
          } else {
            gDom.addEventListener("userIntracted", () => {
              loadAboutGrowthTree();
            });
          }
        }}
      </Script>
    </div>
  );
};