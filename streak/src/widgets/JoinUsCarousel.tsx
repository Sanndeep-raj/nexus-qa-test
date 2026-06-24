import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

interface JoinUsCarouselProps {
  data: {
    title: string,
    link: string,
    isWhiteBg: boolean,
  }
}

const JoinUsCarousel = (props: JoinUsCarouselProps) => {
  const { title, link, isWhiteBg } = props?.data || {};

  const slides = [
    {
      banner: "/images/careers/join-bg-1.webp",
      thumb: "/images/careers/join-1.webp",
    },
    {
      banner: "/images/careers/join-bg-2.webp",
      thumb: "/images/careers/join-2.webp",
    },
    {
      banner: "/images/careers/join-bg-3.webp",
      thumb: "/images/careers/join-3.webp",
    },
  ];

  const [slide] = slides;
  if (!slide) return null;

  const getVisibleThumbs = (selectedIndex = 0) => {
    const total = slides.length;
    const visibleCount = 5;
    const half = Math.floor(visibleCount / 3);
    const visibleThumbs = [];
    for (let i = -half; i <= half; i++) {
      let index = (selectedIndex + i + total) % total;
      visibleThumbs.push({ ...slides[index], realIndex: index, offset: i });
    }
    return visibleThumbs;
  };

  return (
    <section className={`overflow-hidden ${isWhiteBg ? "" : "bg-black"}`} id="join_as_carousel">
        <div className="relative flex min-h-screen py-12 xl:py-26">
          <div className="container relative z-30">
            <div className="xl:flex xl:items-center xl:h-full">
              <div className="xl:w-1/2 text-white">
                <h1 className={`text-h4 xl:text-h2 leading-tight ${isWhiteBg ? "text-black" : "text-white"}`}>
                  Join a Team That <br /> Celebrates You!
                </h1>
                <h2 className={`text-xxl xl:text-h5 mt-6 xl:mt-6 ${isWhiteBg ? "text-black" : "text-white"}`}>
                  At Valoriz, we believe in empowering our team with the right
                  opportunities, a supportive culture, and a healthy work-life
                  balance. Join us and grow in a place where your ideas matter!
                </h2>
                <a href={link}>
                  <Button variant="primary" className="flex items-center mt-10 xl:mt-12 max-xl:mx-auto group">
                    <span>{title}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                      <Icon src={ArrowRight} size="sm" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="h-full" id="join-us-container">
              <div
                className={`join_us_slides absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out opacity-100 pointer-events-auto ${isWhiteBg ? "before:bg-white/85" : ""
                  } flex xl:items-center before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/85 before:z-20`}
              >
                <div className="absolute left-0 top-0 w-full h-full z-10">
                  <img
                    src={slide.banner}
                    width={1920}
                    height={1133}
                    alt=""
                    loading="lazy"
                    className="join_us_banner_image w-full h-full max-h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Thumbnails */}
          <div className="container absolute top-0 bottom-10 xl:-top-8 xl:-bottom-8 flex max-xl:flex-col max-xl:items-center max-xl:justify-end xl:justify-end left-1/2 -translate-x-1/2 max-xl:px-0 z-40 pointer-events-none">
            <div className="flex items-center xl:flex-col justify-center xl:justify-between gap-14 xl:gap-10 max-xl:w-full transition-transform duration-500 pointer-events-auto">
              {getVisibleThumbs().map((slide, idx) => {
                const isActive = slide.offset === 0;

                let sizeClass = "flex aspect-[0.69/1] w-[20%] h-auto max-xl:max-w-[85px] max-xl:max-h-[122px] xl:w-auto xl:h-[20%]";
                if (isActive) sizeClass = "flex aspect-[0.69/1] w-[50%] h-auto max-xl:max-w-[120px] max-xl:max-h-[174px] xl:w-auto xl:h-[50%] xl:max-w-[290px]";
                else if (Math.abs(slide.offset) === 1) sizeClass = "flex aspect-[0.69/1] w-[20%] h-auto max-xl:max-w-[85px] max-xl:max-h-[122px] xl:w-auto xl:h-[20%]";

                const opacityClass = isActive ? "" : Math.abs(slide.offset) > 1 ? "opacity-30" : "opacity-50";

                return (
                  <button
                    key={idx}
                    data-index={slide.realIndex}
                    aria-label={`join-us-${idx}`}
                    className={`join_us_thumbs_button rounded-full overflow-hidden transition-all duration-300 shrink-0 ${sizeClass} ${opacityClass}`}
                  >
                    <img
                      src={slide.thumb}
                      width={150}
                      height={150}
                      alt=""
                      loading="lazy"
                      className="w-full object-cover"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <Script id="JoinUsCarousel" options={{ slides }}>
          {(gDom: any, options: { slides: any }) => {
            let timer: any;
            let slides: HTMLElement[] = [];
            const section = gDom.geById("join_as_carousel");
            const bannerContainer = gDom.geById("join-us-container");
            const [, ...restSliders] = options?.slides || []; // First slide already loaded
            const slideDataList = restSliders;
            const totalSlides = options?.slides?.length;
            const thumbButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".join_us_thumbs_button"));

            const setSlides = () => {
              slides = Array.from(
                document.querySelectorAll<HTMLElement>(".join_us_slides")
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

                clonedSlide.classList.replace("pointer-events-auto", "pointer-events-none");
                clonedSlide.classList.replace("opacity-100", "opacity-0");

                clonedSlide.id = `join-slide-${idx + 2}`; // +2 because first slide is already there

                const bannerImage = clonedSlide.querySelector(".join_us_banner_image") as HTMLImageElement;
                bannerImage.src = slideData.banner;

                bannerContainer?.appendChild(clonedSlide);
              });
            };

            const setThumbNailImages = (selectedIndex: number) => {
              const getVisibleThumbs = () => {
                const visibleCount = 5;
                const half = Math.floor(visibleCount / 3);
                const visibleThumbs = [];
                for (let i = -half; i <= half; i++) {
                  let index = (selectedIndex + i + totalSlides) % totalSlides;
                  if (options?.slides?.[index]) {
                    visibleThumbs.push({ ...options?.slides?.[index], realIndex: index, offset: i });
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
                    button.dataset.index = String(thumbSlide.realIndex);
                    thumbImage.src = thumbSlide.thumb;
                  }
                });
              } else {
                console.error("Thumb length not matches");
              }
            };

            const showSlide = (index: number) => {
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

              slides.forEach((slide, i) => {
                if (i === index) {
                  slide.classList.replace("pointer-events-none", "pointer-events-auto");
                  slide.classList.replace("opacity-0", "opacity-100");
                } else {
                  slide.classList.replace("pointer-events-auto", "pointer-events-none");
                  slide.classList.replace("opacity-100", "opacity-0");
                }
              });

              setThumbNailImages(index);

              clearTimeout(timer);
              timer = setTimeout(() => {
                const nextIndex = (index + 1) % totalSlides;
                showSlide(nextIndex);
              }, 5000);
            };

            thumbButtons?.forEach((button) => {
              button.addEventListener("click", () => {
                showSlide(Number(button?.dataset?.index) || 0)
              })
            });

            if (!gDom.ftr) {
              showSlide(0);
            } else {
              gDom.addEventListener("userIntracted", () => {
                showSlide(0);
              });
            }
          }}
        </Script>
    </section>
  )
}

export default JoinUsCarousel;