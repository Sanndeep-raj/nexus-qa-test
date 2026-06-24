import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import IconMuted from "@common/icons/IconMuted";
import IconVolume from "@common/icons/IconVolume";
import MouseArrowBottomWhite from "@common/icons/MouseArrowBottomWhite";
import { Preload, Script } from "streak/components";
import { getAzureCdnUrl } from "utils/commonUtils";


type SlideBase = {
  id: number;
  duration: number;
  titleTop: string;
  titleMain: string;
  subtitle: string;
  button?: {
    label: string;
    url: string;
  };
  thumb: string;
  ariaLabel: string;
  url: string;
};

type VideoSlide = SlideBase & {
  type: "video";
  videoSrc: string;
  poster?: string; // optional because some videos may not have posters
};

type ImageSlide = SlideBase & {
  type: "image";
  imageWeb: string;
  imageMob: string;
};

type Slide = VideoSlide | ImageSlide;

const RADIUS = 7.5;
const CIRCUMFERENCE = 47.12; // 2 * Math.PI * 7.5

const HomeHeroBanner = () => {
  const slides: Slide[] = [
    {
      id: 1,
      type: "video",
      duration: 10,
      videoSrc: getAzureCdnUrl("HOME_ANNIVERSARY_BANNER"),
      poster: `/images/home/banner/poster-anniversary-teaser.webp`,
      titleTop: "Celebrating",
      titleMain: "11 Years <br /> of Excellence",
      subtitle: "Honoring our journey with gratitude and pride.",
      button: { label: "Book a Consultation Call", url: "/contact" },
      thumb: "/images/home/banner/banner-1-thumb.webp",
      ariaLabel: "Contact",
      url: "/",
    },
    {
      id: 2,
      type: "video",
      duration: 10,
      videoSrc: getAzureCdnUrl("HOME_AKENO_PARTNERSHIP"),
      titleTop: "Proud",
      titleMain: "Official <br />Akeneo Partner",
      subtitle: "Empowering high-performance product experiences.",
      thumb: "/images/home/banner/banner-1-thumb.webp",
      ariaLabel: "Contact",
      url: "/",
    },
    {
      id: 2,
      type: "video",
      duration: 40,
      videoSrc: getAzureCdnUrl("HOME_HERO_BANNER_1"),
      titleTop: "Building the next era of",
      titleMain: "Digital <br /> Transformation",
      subtitle: "Where Collaboration Drives Innovation and Growth.",
      button: { label: "Book a Consultation Call", url: "/contact" },
      thumb: "/images/home/banner/banner-1-thumb.webp",
      ariaLabel: "Contact",
      url: "/",
    },
    {
      id: 3,
      type: "video",
      duration: 10,
      videoSrc: getAzureCdnUrl("HOME_HERO_BANNER_2"),
      titleTop: "We Are Now",
      titleMain: "ISO & IEC <br /> Certified!",
      subtitle: "Delivering Excellence with Global Standards.",
      button: { label: "Awards & Recognitions", url: "/awards" },
      thumb: "/images/home/banner/banner-2-thumb.webp",
      ariaLabel: "Awards",
      url: "/awards",
    },
    // {
    //   id: 3,
    //   type: "image",
    //   duration: 4,
    //   imageWeb: "/images/home/banner/banner-3.webp", // You can add CDN URL dynamically
    //   imageMob: "/images/home/banner/banner-sm-3.webp",
    //   titleTop: "Building the next era of",
    //   titleMain: "Digital <br /> Transformation",
    //   subtitle: "Where Collaboration Drives Innovation and Growth.",
    //   button: { label: "Book a Consultation Call", url: "/contact" },
    //   thumb: "/images/home/banner/banner-3-thumb.webp",
    //   ariaLabel: "Contact",
    //   url: "/",
    // },
  ];

  const [slide, ...restSliders] = slides;
  if (!slide) {
    return null;
  }
  return (
    <section className="bg-black" id="home_hero_banner_section">
      <ScrollFade>
        <div className="relative w-[var(--slide-size)] h-screen bg-secondary overflow-hidden">
          <div
            className="relative h-full w-full"
            id="hero-banner-container"
            data-active-index="0"
          >
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-10 pointer-events-auto slide`}
              data-type={slide.type}
              data-duration={slide.duration}
            >
              <span className="absolute inset-0 bg-black/50 z-10" />

              <a
                href={slide.url}
                className={`main-link ${slide.type === "video"
                  ? "flex max-lg:aspect-[1.54/1] h-full"
                  : "flex h-full"
                  }`}
                aria-label="Contact"
              >
                {slide.type === "video" ? (
                  <>
                    {slide.poster ? (
                      <>
                        <img
                          src={slide.poster}
                          alt="Banner Poster"
                          data-video-src={slide.videoSrc}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <Preload src={slide.poster} as="video" />
                      </>
                    ) : (
                      <video
                        id={`banner-${slide.id}-video`}
                        className="w-full h-full object-cover"
                        playsInline
                        muted
                        loop
                        autoPlay
                        poster={slide.poster}
                      >
                        <source src={slide.videoSrc} type="video/mp4" />
                        <track
                          kind="captions"
                          src="/captions/dummy.vtt"
                          srcLang="en"
                          label="English"
                          default
                        />
                      </video>
                    )}
                  </>
                ) : (
                  <>
                    <img
                      src={slide.imageWeb}
                      width={1920}
                      height={1080}
                      alt="DT"
                      className="w-full object-cover hidden lg:block"
                    />
                    <img
                      src={slide.imageMob}
                      width={800}
                      height={1585}
                      alt="DT"
                      className="w-full object-cover lg:hidden"
                    />
                  </>
                )}
                <div
                  className="mute-unmute-icons absolute bottom-6 right-6 z-10"
                  style={{ display: slide.type === "video" ? "block" : "none" }}
                >
                  <button aria-label="mute" className="mute-btn">
                    <span id="banner-1-muteIcon">
                      <Icon
                        src={IconMuted}
                        variant="white"
                        size="md"
                        className="mute-icon"
                      />
                    </span>
                    <span
                      id="banner-1-volumeIcon"
                      className=" unmute-icon hidden"
                    >
                      <Icon src={IconVolume} variant="white" size="md" />
                    </span>
                  </button>
                </div>
              </a>
              <div className="container absolute lg:flex mx-auto bottom-[144px] xl:bottom-[104px] left-1/2 -translate-x-1/2 lg:bottom-20 pointer-events-none z-20">
                <div className="text-white pointer-events-auto max-md:text-center">
                  <h4
                    className="text-xxl xxl:text-h4 mb-2"
                    dangerouslySetInnerHTML={{ __html: slide.titleTop }}
                  />
                  <h3
                    className="text-h4 xl:text-display2 xxl:text-h1 text-primary-light leading-tight"
                    dangerouslySetInnerHTML={{ __html: slide.titleMain }}
                  />
                  <h4 className="text-md xl:text-xxl mt-4">{slide.subtitle}</h4>
                  {slide.button && <a
                    href={slide.button.url}
                    aria-label={slide.ariaLabel}
                    className={`link-btn-cta${slide.id === 1 ? " invisible" : ""
                      }`}
                  >
                    <Button
                      variant="primary"
                      className="home_banner_slide_button flex items-center mt-16 max-md:mx-auto group"
                    >
                      <span>{slide.button.label}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                        <Icon src={ArrowRight} size="sm" />
                      </span>
                    </Button>
                  </a>}
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10 max-lg:hidden"
            style={{ animationDuration: "2s" }}
          >
            <Icon src={MouseArrowBottomWhite} size="" variant="white" className="w-8 h-8" />
            <div className="h-8 bg-linear-to-b from-white to-transparent" />
          </div>
          {/* <!-- Button Navigation --> */}
          <div className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:right-0 bottom-0 lg:bottom-[100px] pointer-events-none z-10">
            <div className="flex pointer-events-auto">
              <div className="flex xl:min-w-[280px] text-white rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg bg-black backdrop-blur-sm bg-opacity-70 px-6 py-4 lg:p-4">
                <div className="flex items-center justify-center w-[72px] flex-[0_0_72px] max-lg:hidden">
                  <img
                    src="/images/home/banner/banner-1-thumb.webp"
                    width={72}
                    height={72}
                    alt="thumb image"
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="lg:ps-4">
                  <button className="group max-lg:hidden" id="home-banner-next">
                    <div className="flex items-center">
                      <h5 className="text-xs">Next</h5>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                    <p className="text-sm text-gray-light">Building Next Era</p>
                  </button>
                  <div className="flex gap-6 lg:gap-2 lg:my-2">
                    {slides.map((s, idx) => (
                      <button
                        key={s.id}
                        className="home_banner_slide_indication group relative flex items-center justify-center w-4 h-4 rounded-full transition-all border border-gray-600 hover:border-gray-500"
                        data-index={idx}
                        aria-label={`slide-${s.id}`}
                      >
                        <svg
                          className="absolute top-0 left-0 w-full h-full"
                          viewBox="0 0 16 16"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r={RADIUS}
                            fill="none"
                            stroke="white"
                            strokeWidth="1"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={CIRCUMFERENCE}
                            style={{
                              transition: "stroke-dashoffset 40s ease-out",
                            }}
                          />
                        </svg>
                        <span className="w-1 h-1 rounded-full z-10 transition-all bg-gray-600 group-hover:bg-gray-500" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Script
          id="home-hero-banner-scripts"
          options={{
            slides: restSliders,
          }}
        >
          {(
            gDom: any,
            options: {
              slides: any[];
            }
          ) => {
            const slideDataList = options?.slides || [];
            const totalSlides = slideDataList.length + 1; // Including the first slide

            let timer: any;
            let currentSlide = 0;
            let isAlreadyTriggred = false;

            let slides: HTMLElement[] = [];

            const setSlides = () => {
              slides = Array.from(
                document.querySelectorAll<HTMLElement>(".slide")
              );
              if (slides.length !== totalSlides) {
                console.warn(
                  `Expected ${totalSlides} slides, but found ${slides.length}.`
                );
              }
            };
            setSlides();

            const indicators = document.querySelectorAll<HTMLElement>(
              ".home_banner_slide_indication"
            );

            const indicatorButtons = Array.from(indicators).map((el) => ({
              btn: el as HTMLButtonElement,
              circle: el.querySelector("circle"),
              dot: el.querySelector("span"),
            }));

            document.addEventListener("click", (e) => {
              const target = e.target as HTMLElement;
              if (target && target.closest(".mute-btn")) {
                e.preventDefault();
                const slider = target.closest(".slide");
                if (slider) {
                  const video = slider.querySelector(
                    "video"
                  ) as HTMLVideoElement;
                  if (video) {
                    video.muted = !Boolean(video.muted);
                    const unmuteIcon = slider.querySelector(
                      ".mute-btn .unmute-icon"
                    );
                    const muteIcon = slider.querySelector(
                      ".mute-btn .mute-icon"
                    );

                    unmuteIcon?.classList.toggle("hidden", video.muted);
                    muteIcon?.classList.toggle("hidden", !video.muted);
                  }
                }
              }
            });

            function getDuration(index: number) {
              return Number(slides[index]?.dataset?.duration) || 10;
            }

            function animateIndicator(index: number) {
              indicatorButtons.forEach((b, i) => {
                if (i === index) {
                  // active styles
                  b?.btn?.classList?.remove(
                    "border",
                    "border-gray-600",
                    "hover:border-gray-500"
                  );
                  b?.btn?.classList?.add("border-none");

                  b?.dot?.classList?.remove(
                    "bg-gray-600",
                    "group-hover:bg-gray-500"
                  );
                  b?.dot?.classList?.add("bg-white");

                  // Force reflow (browser reads layout, ensures reset is applied)
                  b?.circle?.getBoundingClientRect();

                  // Now animate
                  if (b?.circle?.style)
                    b.circle.style.transition = `stroke-dashoffset ${getDuration(
                      index
                    )}s ease-out`;
                  b?.circle?.setAttribute("stroke-dashoffset", "0");
                } else {
                  // reset styles
                  b?.btn?.classList?.remove("border-none");
                  b?.btn?.classList?.add(
                    "border",
                    "border-gray-600",
                    "hover:border-gray-500"
                  );

                  b?.dot?.classList?.remove("bg-white");
                  b?.dot?.classList?.add(
                    "bg-gray-600",
                    "group-hover:bg-gray-500"
                  );

                  if (b?.circle?.style.transition)
                    b.circle.style.transition = "";
                  b?.circle?.setAttribute("stroke-dashoffset", "47.12");
                }
              });
            }

            const bannerContainer = gDom.geById("hero-banner-container");

            const loadLazySlides = (data: any[]) => {
              data.forEach((slideData, idx) => {
                const clonedSlide = slides[0]?.cloneNode(true) as HTMLElement;
                if (!clonedSlide) return;

                clonedSlide.classList.remove(`z-10`);
                clonedSlide.classList.replace("opacity-100", "opacity-0");

                clonedSlide.id = `home-banner-slide-${idx + 2}`; // +2 because first slide is already there
                clonedSlide.dataset.type = slideData.type;
                clonedSlide.dataset.duration = String(slideData.duration);

                const titleTopEl = clonedSlide.querySelector(
                  "h4:nth-of-type(1)"
                ) as HTMLElement;
                const titleMainEl = clonedSlide.querySelector(
                  "h3"
                ) as HTMLElement;
                const subtitleEl = clonedSlide.querySelector(
                  "h4:nth-of-type(2)"
                ) as HTMLElement;
                const buttonEl = clonedSlide.querySelector(
                  ".link-btn-cta"
                ) as HTMLAnchorElement;

                const mainAnchor = clonedSlide.querySelector(
                  "a.main-link"
                ) as HTMLAnchorElement;
                mainAnchor.href = slideData.url;
                const muteUnmuteIcons = clonedSlide.querySelector(
                  ".mute-unmute-icons"
                ) as HTMLDivElement;

                if (slideData.type === "video") {
                  mainAnchor.classList =
                    "main-link flex max-lg:aspect-[1.54/1] h-full";
                  mainAnchor.innerHTML = `<video id="banner-${slideData.id
                    }-video" class="w-full h-full object-cover" playsInline muted loop autoPlay poster="${slideData.poster ? slideData.poster : ""
                    }" ><source src="${slideData.videoSrc
                    }" type="video/mp4" /><track kind="captions" src="/captions/dummy.vtt" srcLang="en" label="English" default /></video> <div class="mute-unmute-icons absolute bottom-6 right-6 z-10 block">
                      <button aria-label="mute" class="mute-btn">

                        <!-- MUTED ICON -->
                        <span id=mute-${idx} class="mute-icon">
                        <svg
                          className="text-white w-6 h-6"
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <defs>
                            <clipPath id="b">
                              <rect width="24" height="24" />
                            </clipPath>
                          </defs>
                          <g id="a" clipPath="url(#b)">
                            <g transform="translate(-0.137 0.452)">
                              <path
                                // eslint-disable-next-line max-len
                                d="M3.961,17.365H7.6l3.6,3.6a3.347,3.347,0,0,0,2.386.991A3.359,3.359,0,0,0,16.959,18.6l.015-.9,4.039,4.039a.819.819,0,0,0,1.082,0,.758.758,0,0,0,0-1.079l-5.129-5.129V3.964A3.369,3.369,0,0,0,13.588.548a3.346,3.346,0,0,0-2.386.991l-3.6,3.6H6.569L2.2.774A.763.763,0,1,0,1.126,1.853L4.347,5.074l-.795.084A3.815,3.815,0,0,0,.137,8.96v4.59a3.83,3.83,0,0,0,3.825,3.825ZM8.455,6.334a2.209,2.209,0,0,0,.451-.348L12.283,2.61a1.847,1.847,0,0,1,3.152,1.349V13.991l-7.4-7.4.421-.252ZM1.666,8.951A2.3,2.3,0,0,1,3.961,6.656H5.939l9.5,9.5v2.383a1.876,1.876,0,0,1-1.064,1.717,1.85,1.85,0,0,1-2.089-.372L8.906,16.5a2.285,2.285,0,0,0-1.621-.674H3.961a2.3,2.3,0,0,1-2.295-2.295V8.951Z"
                                transform="translate(0)"
                              />
                              <path
                                // eslint-disable-next-line max-len
                                d="M17.45,6.478a.764.764,0,1,0-1.079,1.083,2.671,2.671,0,0,1,.539,1.755,2.713,2.713,0,0,1-.544,1.755.763.763,0,0,0,0,1.079.8.8,0,0,0,1.082,0,4.045,4.045,0,0,0,.99-2.834,4.065,4.065,0,0,0-.99-2.839Z"
                                transform="translate(5.409 1.929)"
                              />
                            </g>
                          </g>
                        </svg>
                        </span>

                        <!-- VOLUME ICON -->
                        <span id=unmute-${idx} class="hidden unmute-icon">
                          <svg
                          className="text-white w-6 h-6"
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <defs>
                            <clipPath id="b">
                              <rect width="24" height="24" />
                            </clipPath>
                          </defs>
                          <g id="a" clipPath="url(#b)">
                            <g transform="translate(-0.139 0.743)">
                              <path
                                // eslint-disable-next-line max-len
                                d="M3.966,17.375H7.6l3.6,3.6a3.348,3.348,0,0,0,2.386.991,3.37,3.37,0,0,0,3.379-3.416V3.964A3.37,3.37,0,0,0,13.594.548a3.346,3.346,0,0,0-2.386.991l-3.6,3.6H3.965A3.831,3.831,0,0,0,.139,8.964v4.59A3.831,3.831,0,0,0,3.965,17.38ZM1.671,8.96a2.3,2.3,0,0,1,2.3-2.3H7.291a2.264,2.264,0,0,0,1.621-.674l3.377-3.377a1.847,1.847,0,0,1,3.153,1.349V18.545a1.877,1.877,0,0,1-1.064,1.717,1.851,1.851,0,0,1-2.089-.372L8.912,16.513a2.285,2.285,0,0,0-1.621-.674H3.966a2.3,2.3,0,0,1-2.3-2.3V8.96Z"
                                transform="translate(0 0)"
                              />
                              <path
                                // eslint-disable-next-line max-len
                                d="M17.448,6.482a.764.764,0,1,0-1.079,1.083,2.67,2.67,0,0,1,.539,1.756,2.714,2.714,0,0,1-.544,1.756.763.763,0,0,0,0,1.079.8.8,0,0,0,1.082,0,4.044,4.044,0,0,0,.991-2.835,4.066,4.066,0,0,0-.991-2.839Z"
                                transform="translate(5.419 1.934)"
                              />
                            </g>
                          </g>
                        </svg>
                        </span>

                      </button>
                    </div>
                    `;
                } else {
                  if (muteUnmuteIcons) {
                    muteUnmuteIcons.style.display = "none";
                  }
                  mainAnchor.classList = "main-link flex h-full";
                  mainAnchor.innerHTML = `
                  <img src="${slideData.imageWeb}" width="1920" height="1080" alt="DT" class="w-full object-cover hidden lg:block" />
                  <img src="${slideData.imageMob}" width="800" height="1585" alt="DT" class="w-full object-cover lg:hidden" />
                  `;
                }

                titleMainEl.innerHTML = slideData.titleMain;
                titleTopEl.innerHTML = slideData.titleTop;
                subtitleEl.textContent = slideData.subtitle;

                if (buttonEl && slideData.button) {
                  buttonEl.href = slideData.button.url;
                  buttonEl.ariaLabel = slideData.ariaLabel;
                  (buttonEl.querySelector("span") as HTMLElement).textContent =
                    slideData.button.label;

                  // Apply visibility logic based on slide id
                  if (slideData.id === 1) {
                    buttonEl.classList.add("invisible");
                  } else {
                    buttonEl.classList.remove("invisible");
                  }
                }

                bannerContainer?.appendChild(clonedSlide);
              });
            };

            const checkAndAddVideo = (Autoplay = false) => {
              const firstSlide = slides[0];
              if (!firstSlide) return;

              const mainAnchor = firstSlide.querySelector(
                "a.main-link"
              ) as HTMLAnchorElement;

              if (mainAnchor) {
                const video = mainAnchor.querySelector(
                  "video"
                ) as HTMLVideoElement | null;
                if (!video) {
                  const img = mainAnchor.querySelector(
                    "img"
                  ) as HTMLImageElement | null;
                  const videoSrc = img?.getAttribute("data-video-src");
                  if (videoSrc) {
                    const template = document.createElement("template");
                    template.innerHTML = `
                      <video id="banner-${firstSlide.id}-video" class="w-full h-full object-cover" playsinline muted loop autoplay poster="${img?.src}">
                        <source src="${videoSrc}" type="video/mp4" />
                        <track kind="captions" src="/captions/dummy.vtt" srcLang="en" label="English" default />
                      </video>
                    `;
                    const videoEl = template.content
                      .firstElementChild as HTMLVideoElement;

                    videoEl.addEventListener("canplay", () => {
                      if (Autoplay) {
                        videoEl.play().catch((err) => {
                          console.warn("Autoplay prevented:", err);
                        });
                      }
                      img?.remove();
                    });

                    img?.parentNode?.insertBefore(videoEl, img.nextSibling);
                  }
                }
              }
            };

            const showSlide = (index: number, autoPlay = true) => {
              if (index >= totalSlides) {
                return;
              }
              animateIndicator(index);
              bannerContainer?.setAttribute("data-active-index", String(index));

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

              if (index === 0) {
                checkAndAddVideo(autoPlay);
              }

              slides.forEach((slide, i) => {
                slide.classList.replace("z-10", "z-0");
                slide.classList.replace("opacity-100", "opacity-0");

                const slideType = slide.dataset.type;
                const video = slide.querySelector(
                  "video"
                ) as HTMLVideoElement | null;

                if (i === index) {
                  if (slideType === "video") {
                    if (video) {
                      video.currentTime = 0;
                      if (autoPlay) {
                        video.play().catch((err) => {
                          console.warn("Autoplay prevented:", err);
                        });
                      }
                    }
                  }

                  slide.classList.replace("z-0", "z-10");
                  slide.classList.replace("opacity-0", "opacity-100");
                } else {
                  if (slideType === "video") {
                    if (video) {
                      video.pause();
                    }
                  }
                }
              });

              // Duration from data-duration (default 10s)
              const duration: number = getDuration(index) * 1000;
              clearTimeout(timer);
              timer = setTimeout(() => {
                const nextIndex = (index + 1) % totalSlides;
                showSlide(nextIndex);
              }, duration);
            };

            gDom.geById("home-banner-next").onclick = (e: any) => {
              e.preventDefault();
              const currentActiveIndex =
                Number(bannerContainer?.dataset?.activeIndex) || 0;
              const nextIndex = (currentActiveIndex + 1) % totalSlides;
              showSlide(nextIndex);
            };

            indicators.forEach((el) => {
              const element: HTMLButtonElement = el as HTMLButtonElement;
              element.addEventListener("click", () =>
                showSlide(Number(element?.dataset?.index) || 0)
              );
            });

            if (!gDom.ftr) {
              showSlide(0);
            } else {
              const rootSection = gDom.geById("home_hero_banner_section");
              let isAlreadyTriggered = false;

              const handler = () => {
                if (isAlreadyTriggered) return;
                isAlreadyTriggered = true;
                [
                  "keydown",
                  "mousemove",
                  "touchmove",
                  "touchstart",
                  "wheel",
                ].forEach((e) => rootSection?.removeEventListener(e, handler));
                showSlide(0);
              };

              [
                "keydown",
                "mousemove",
                "touchmove",
                "touchstart",
                "wheel",
              ].forEach((e) =>
                rootSection?.addEventListener(e, handler, { passive: true })
              );
            }
          }}
        </Script>
      </ScrollFade>
    </section>
  );
};

export default HomeHeroBanner;
