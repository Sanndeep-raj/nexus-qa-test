import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import { Preload, Script } from "streak/components";

type BannerProps = {
  data: {
    isAboutPage: boolean;
    title: string;
    description: string;
    button: { url: string, text: string };
    slides: {
      banner: string;
      poster?: string;
      thumb: string;
      keyvalue: number | string;
      caption: string;
      partners?: {
        logo: string;
        name: string;
      }[]
    }[]
  }
}

const AboutBanner = (props: BannerProps) => {
  const { title, description, button, slides, isAboutPage } = props?.data || {};

  const [slide] = slides;
  if (!slide) return null;

  const getVisibleThumbs = (selectedIndex = 0) => {
    const total = slides.length;
    const visibleCount = 5;
    const half = Math.floor(visibleCount / 2);
    const visibleThumbs = [];
    for (let i = -half; i <= half; i++) {
      let index = (selectedIndex + i + total) % total;
      visibleThumbs.push({ ...slides[index], realIndex: index, offset: i });
    }
    return visibleThumbs;
  };

  return (
    <section className="bg-black bottom-0" id="about_hero_banner_section">
      <ScrollFade>
        <div className="relative flex min-h-screen py-16 xl:py-26 bg-secondary" restrict-transform="true">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full flex items-center z-40 xl:pointer-events-none">
            <div className="container">
              <div className="xl:w-1/2 max-xl:text-center text-white pointer-events-auto select-text">
                {title && <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight" dangerouslySetInnerHTML={{ __html: title }} />}
                {description && <h2 className="text-md xl:text-xxl mt-2 xl:mt-6" dangerouslySetInnerHTML={{ __html: description }} />}
                {button?.url &&
                  <a href={button.url}>
                    <Button
                      variant="outline-light"
                      className="flex items-center mt-8 xl:mt-12 max-xl:mx-auto group"
                    >
                      <span>{button.text}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                        <Icon src={ArrowRight} size="sm" />
                      </span>
                    </Button>
                  </a>}
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden touch-none select-none">
            <div className="relative h-full w-full" id="hero-banner-container">
              <div className={`about_slide absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center opacity-100 z-30 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/70 before:z-20`}>
                <div className="absolute left-0 top-0 w-full h-full z-10">
                  <img
                    src={slide.poster}
                    width={1920}
                    height={1133}
                    alt={slide.caption || String(slide.keyvalue ?? 0) || ""}
                    draggable={false}
                    className="about_banner_image w-full h-full max-h-full object-cover"
                  />
                  <Preload src={slide.poster} as="image" />
                </div>
                <div className="container relative z-30 select-text">
                  <div className="w-full xl:flex xl:items-center">
                    <div className="xl:w-1/2 max-xl:hidden" />
                    <div className="xl:w-1/3 max-xl:hidden">
                      <div className="flex flex-col justify-end flex-1 text-end">
                        <div className={`about_key_value ${isAboutPage ? "text-[184px]" : "text-h5"} leading-tight font-semibold text-gradient`}>
                          {slide.keyvalue}{isAboutPage ? "+" : ""}
                        </div>
                        {isAboutPage && <p className="about_caption text-h4 text-white">{slide.caption}</p>}
                        {isAboutPage && <div className="about_partners_container flex items-center justify-end gap-6 mt-4"></div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute max-xl:bottom-8 left-1/2 -translate-x-1/2 flex justify-center xl:justify-end container xl:top-1/2 xl:-translate-y-1/2 z-40 pointer-events-none">
            <div className="flex xl:flex-col items-center max-md:justify-between md:gap-14 xl:gap-12 xxl:gap-20 max-md:w-full transition-transform duration-500 pointer-events-auto">
              {getVisibleThumbs().map((slide, idx) => {
                const isActive = slide.offset === 0;

                let sizeClass = "w-[48px] h-[48px] xl:w-[80px] xl:h-[80px]";
                if (isActive) sizeClass = "w-[107px] h-[107px] xl:w-[140px] xl:h-[140px]";
                else if (Math.abs(slide.offset) === 1) sizeClass = "w-[58px] h-[58px] xl:w-[91px] xl:h-[91px]";
                else sizeClass = "w-[33px] h-[33px] xl:hidden xl:w-[41px] xl:h-[41px]";

                const opacityClass = isActive ? "" : Math.abs(slide.offset) > 1 ? "opacity-30" : "opacity-50";

                return (
                  <button
                    key={idx}
                    data-index={slide.realIndex}
                    aria-label={`btn-${idx}`}
                    className={`about_thumbs_button relative rounded-full overflow-hidden transition-all duration-300 shrink-0 p-1 ${sizeClass} ${opacityClass}`}
                  >
                    <div className="w-[97%] h-[97%] rounded-full overflow-hidden">
                      <img
                        src={slide.thumb}
                        width={150}
                        height={150}
                        alt=""
                        className="w-full"
                      />
                      <Preload src={slide.thumb} as="image" />
                    </div>
                    <div id="about_slide_active"></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <Script id="AboutBanner" options={{ slides, isAboutPage }}>
          {(gDom: any, options: { slides: any, isAboutPage: boolean }) => {
            let timer: any;
            const [, ...restSliders] = options?.slides || []; // First slide already loaded
            const slideDataList = restSliders;
            const totalSlides = options?.slides?.length;
            const bannerContainer = gDom.geById("hero-banner-container");
            const rootSection = gDom.geById("about_hero_banner_section");
            const thumbButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".about_thumbs_button"));
            let slides: HTMLElement[] = [];

            const setSlides = () => {
              slides = Array.from(
                document.querySelectorAll<HTMLElement>(".about_slide")
              );
              if (slides.length !== totalSlides) {
                console.warn(
                  `Expected ${totalSlides} slides, but found ${slides.length}.`
                );
              }
            };
            setSlides();

            const loadLazySlides = (data: any[]) => {
              data.forEach((slideData, idx) => {
                const clonedSlide = slides[0]?.cloneNode(true) as HTMLElement;
                if (!clonedSlide) return;

                clonedSlide.classList.remove(`z-30`);
                clonedSlide.classList.replace("opacity-100", "opacity-0");

                clonedSlide.id = `about-banner-slide-${idx + 2}`; // +2 because first slide is already there

                const bannerImage = clonedSlide.querySelector(
                  ".about_banner_image"
                ) as HTMLImageElement;
                const keyValue = clonedSlide.querySelector(
                  ".about_key_value"
                ) as HTMLDivElement;
                const caption = clonedSlide.querySelector(
                  ".about_caption"
                ) as HTMLDivElement;
                const partnersContainer = clonedSlide.querySelector(
                  ".about_partners_container"
                ) as HTMLDivElement;

                keyValue.innerHTML = slideData.keyvalue;
                bannerImage.src = slideData.banner;
                bannerImage.alt = slideData.caption;

                if (options?.isAboutPage) {
                  caption.innerHTML = slideData.caption;
                  if (slideData?.partners) {
                    const createPartner = ({ logo, name }: { logo: string, name: string }) =>
                      `<div className="flex items-center justify-center" key="${name}">
                      <img src="${logo}" width={80} height={29} alt="${name}" className="w-full max-w-[80px]"/>
                    </div>`
                    partnersContainer.innerHTML = slideData?.partners?.map(createPartner);
                  } else {
                    partnersContainer.innerHTML = "";
                  }
                }

                bannerContainer?.appendChild(clonedSlide);
              });
            };

            const setThumbNailImages = (selectedIndex: number) => {
              const getVisibleThumbs = () => {
                const visibleCount = 5;
                const half = Math.floor(visibleCount / 2);
                const visibleThumbs = [];
                for (let i = -half; i <= half; i++) {
                  let index = (selectedIndex + i + totalSlides) % totalSlides;
                  if (options?.slides?.[index]) {
                    visibleThumbs.push({ ...options.slides[index], realIndex: index, offset: i });
                  }
                }
                return visibleThumbs;
              };

              const visibleThumbs = getVisibleThumbs();

              if (thumbButtons?.length === visibleThumbs?.length) {
                thumbButtons?.forEach((button, idx) => {
                  const thumbSlide = visibleThumbs?.[idx] || null;
                  if (thumbSlide) {
                    const thumbImage = button.querySelector("img:nth-of-type(1)") as HTMLImageElement;
                    const activeSlideContainer = button.querySelector("#about_slide_active") as HTMLDivElement;
                    button.dataset.index = String(thumbSlide.realIndex);
                    thumbImage.src = thumbSlide.thumb;

                    if (thumbSlide.offset === 0) {
                      const template = `
                    <svg class="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle 
                        cx="64" 
                        cy="64" 
                        r="60" 
                        stroke="#049E76" 
                        stroke-width="4" 
                        stroke-linecap="round" 
                        stroke-dasharray="377" 
                        stroke-dashoffset="377" 
                        style="animation: drawCircle 2s forwards ease-out;"
                      ></circle>
                      <style>
                        @keyframes drawCircle {
                          to {
                          stroke-dashoffset: 0;
                          }
                        }
                      </style>
                    </svg>
                  `;
                      activeSlideContainer.innerHTML = template;
                    } else {
                      activeSlideContainer.innerHTML = ""
                    }
                  }
                })
              } else {
                console.error("Thumb length not matches");
              }
            }

            const counterAnimation = (selectedIndex: number, start = 0, duration = 1000) => {
              let startTime: number | null = null;
              const element = slides?.[selectedIndex]?.querySelector(".about_key_value") as HTMLDivElement
              const end = options?.slides?.[selectedIndex]?.keyvalue ?? 0;

              if (!element) return;
              requestAnimationFrame(startAnimation);

              function startAnimation(currentTime: number) {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const current = Math.floor(progress * (end - start) + start);
                element.textContent = `${current}+`;

                if (progress < 1) {
                  requestAnimationFrame(startAnimation);
                }
              }
            }

            const showSlide = (index: number, initial: boolean = false) => {
              if (index >= totalSlides) {
                return;
              }

              let loadedSlide = slides[index];

              if (!loadedSlide) {
                loadLazySlides(slideDataList);
                setSlides();
                loadedSlide = slides[index];
                if (!loadedSlide) {
                  console.error(
                    "Slide still not found after loading lazy slides."
                  );
                  return;
                }
              }

              if (initial && index === 0) {
                const bannerImage = rootSection.querySelector(
                  ".about_banner_image"
                ) as HTMLImageElement;
                bannerImage.src = options?.slides?.[0]?.banner;
              }

              slides.forEach((slide, i) => {
                if (i === index) {
                  slide.classList.replace("z-10", "z-30");
                  slide.classList.replace("opacity-0", "opacity-100");
                } else {
                  slide.classList.replace("z-30", "z-10");
                  slide.classList.replace("opacity-100", "opacity-0");
                }
              });

              setThumbNailImages(index);

              if (options?.isAboutPage) counterAnimation(index);

              clearTimeout(timer);
              timer = setTimeout(() => {
                const nextIndex = (index + 1) % totalSlides;
                showSlide(nextIndex);
              }, 4000);
            };

            const loadButtonActions = () => {
              thumbButtons?.forEach((button) => {
                button.addEventListener("click", () => {
                  showSlide(Number(button?.dataset?.index) || 0)
                })
              });
            }

            //Start
            if (!gDom.ftr) {
              showSlide(0, true);
              loadButtonActions();
            } else {
              let isAlreadyTriggered = false;

              const handler = () => {
                if (isAlreadyTriggered) return;
                isAlreadyTriggered = true;
                ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach(e =>
                  rootSection?.removeEventListener(e, handler)
                );
                showSlide(0, true);
                loadButtonActions();
              };

              ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach(e =>
                rootSection?.addEventListener(e, handler, { passive: true })
              );
            }
          }}
        </Script>
      </ScrollFade>
    </section>
  );
}

export default AboutBanner;