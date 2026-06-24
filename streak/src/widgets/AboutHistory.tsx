import ScrollFade from "@common/components/ScrollFade";
import { Dynamic, Script } from "streak/components";

interface TreeViewData {
  id: string;
  title: string;
  media: string;
  imageWidth: number;
  imageHeight: number;
  description?: string;
  histories: History[];
}

interface HistoryInfo {
  title: string;
  historyTrees: TreeViewData[];
}

interface History {
  historyKey: string;
  title: string;
  subTitle: string;
  description: string;
  media: { lg: string; sm: string };
}

interface SliderViewProps {
  currentSlide: History[];
  index: number;
}

const AboutHistory = () => {

  const historyInfo: HistoryInfo = {
    title: "Making History <br /> Since 2014",
    historyTrees: [
      {
        id: "4",
        title: "2024-Now",
        media: "/images/icons/leaf-5.svg",
        imageWidth: 100,
        imageHeight: 50,
        histories: [
          {
            historyKey: "4.0",
            title: "2024",
            subTitle: "Launch Of Knitrix & vBrandX",
            description:
              "We launched multiple eCommerce Accelerators like Knitrix, vBrandX",
            media: {
              lg: "/images/about/about-history-10.webp",
              sm: "/images/about/about-history-10-sm.webp",
            },
          },
          {
            historyKey: "4.1",
            title: "Now",
            subTitle: "Pioneering Tomorrow",
            description:
              "Valoriz leads the tech industry with ethical innovation, R&D, and global expansion, setting standards and driving future advancements.",
            media: {
              lg: "/images/about/about-history-11.webp",
              sm: "/images/about/about-history-11-sm.webp",
            },
          },
        ],
      },
      {
        id: "3",
        title: "2023",
        media: "/images/icons/leaf-4.svg",
        imageWidth: 84,
        imageHeight: 44,
        histories: [
          {
            historyKey: "3.0",
            title: "April",
            subTitle: "The Next Big Step",
            description:
              "ShopSphere was published as a Co-Sell product on Microsoft Azure Marketplace, expanding its global reach.",
            media: {
              lg: "/images/about/about-history-7.webp",
              sm: "/images/about/about-history-7-sm.webp",
            },
          },
          {
            historyKey: "3.1",
            title: "Aug",
            subTitle: "Period Of Expansion",
            description:
              "We expanded with a new swanky work class office inside Infopark Kochi, Kerala",
            media: {
              lg: "/images/about/about-history-8.webp",
              sm: "/images/about/about-history-8-sm.webp",
            },
          },
          {
            historyKey: "3.2",
            title: "Nov",
            subTitle: "The Next Big Step",
            description:
              "We launched multiple AI powered applications like Product Visual Search, AI RecommendationEngine, AI ChatBot with ChatGPT integration",
            media: {
              lg: "/images/about/about-history-9.webp",
              sm: "/images/about/about-history-9-sm.webp",
            },
          },
        ],
      },
      {
        id: "2",
        title: "2021-2022",
        media: "/images/icons/leaf-3.svg",
        imageWidth: 68,
        imageHeight: 44,
        histories: [
          {
            historyKey: "2.0",
            title: "2021",
            subTitle: "Period Of Expansion",
            description:
              "We expanded to Kochi. Started our Third office in India",
            media: {
              lg: "/images/about/about-history-5.webp",
              sm: "/images/about/about-history-5-sm.webp",
            },
          },
          {
            historyKey: "2.1",
            title: "2022",
            subTitle: "ShopSphere Launch",
            description:
              "We introduced ShopSphere, a comprehensive eCommerce platform, at GITEX Dubai—the world's largest IT exhibition—marking a significant milestone in our journey.",
            media: {
              lg: "/images/about/about-history-6.webp",
              sm: "/images/about/about-history-6-sm.webp",
            },
          },
        ],
      },
      {
        id: "1",
        title: "2019-2020",
        media: "/images/icons/leaf-2.svg",
        imageWidth: 60,
        imageHeight: 39,
        histories: [
          {
            historyKey: "1.0",
            title: "2019",
            subTitle: "Period Of Expansion",
            description:
              "We expanded to Trivandrum, Started our Second office in Technopark, Trivandrum.",
            media: {
              lg: "/images/about/about-history-3.webp",
              sm: "/images/about/about-history-3-sm.webp",
            },
          },
          {
            historyKey: "1.1",
            title: "2020",
            subTitle: "Partnership with Microsoft",
            description:
              "Our journey with Microsoft reached a major milestone when we became a Co-sell partner.",
            media: {
              lg: "/images/about/about-history-4.webp",
              sm: "/images/about/about-history-4-sm.webp",
            },
          },
        ],
      },
      {
        id: "0",
        title: "2014-2018",
        media: "/images/icons/leaf-1.svg",
        imageWidth: 32,
        imageHeight: 35,
        histories: [
          {
            historyKey: "0.0",
            title: "2014",
            subTitle: "Start Of An Era",
            description:
              "A group of bright and like-minded software professionals had the spark to make a difference in the retail commerce domain and set off on their journey to start a digital house.",
            media: {
              lg: "/images/about/about-history.webp",
              sm: "/images/about/about-history-sm.webp",
            },
          },
          {
            historyKey: "0.1",
            title: "2018",
            subTitle: "Period Of Expansion",
            description:
              "We expanded our presence beyond borders, establishing a strong foothold in the UAE to extend our expertise in the retail commerce domain.",
            media: {
              lg: "/images/about/about-history-2.webp",
              sm: "/images/about/about-history-2-sm.webp",
            },
          },
        ],
      },
    ],
  };

  return (
    <section
      className={`relative bg-black lg:h-[${historyInfo?.historyTrees.length * 100}vh]`}
      id="AboutHistorySection"
    >
      <ScrollFade>
        {/* Sticky Content */}
        <div className="sticky top-20 lg:top-0 lg:flex items-center h-screen container flex flex-col overflow-hidden xl:min-h-screen">
          <div className="lg:flex flex-1" style={{ width: "100%" }}>
            <div className="lg:flex flex-1 pt-12 xl:pt-20 xxl:pt-26 pb-10 xl:pb-20 xxl:pb-26">
              <div className="lg:w-5/12">
                <h3 className="text-h4 lg:text-h2 text-white" dangerouslySetInnerHTML={{ __html: historyInfo?.title }} />
              </div>
              <Dynamic id="about-history-slide">
                {
                  historyInfo?.historyTrees?.map((each, i) => (
                    <div
                      key={each?.id}
                      slider-index={each?.id}
                      style={{ display: each?.id === "0" ? "block" : "none" }}
                      className="about_history_slides lg:w-7/12"
                    >
                      <SliderView
                        currentSlide={each?.histories ?? []}
                        index={i}
                      />
                    </div>
                  ))
                }
              </Dynamic>
            </div>

            {/* Scroll TreeView Web */}
            <div className="lg:w-[230px] ps-17 max-lg:hidden relative">
              <div className="flex items-end justify-end w-full h-full" id="AboutHistoryTree"></div>
            </div>

            {/* For mobile */}
            <div className="flex lg:hidden mb-10">
              <Dynamic id="about-history-buttons">
                {historyInfo?.historyTrees?.map((each, index) => (
                  <button btn-slider-index={each?.id} className="about_history_buttons flex flex-col items-center flex-1 justify-end" key={`sm-ah-${each?.id}`} aria-label={`btn-${each?.id}`}>
                    <span id="about_history_title" className="text-white text-nowrap" style={{ display: index === 0 ? "block" : "none" }}>
                      {each?.title}
                    </span>
                    <span id="about_history_dots" className={`w-4 h-4 border-4 ${index === 0 ? "border-primary" : "border-gray-900"} rounded-full mt-1`} />
                  </button>
                ))}
              </Dynamic>
            </div>
          </div>
        </div>
        <Script id="AboutHistory" options={{ contents: historyInfo?.historyTrees }}>
          {(gDom: any, options: { contents: TreeViewData[] }) => {

            const { contents } = options || {};
            const rootSection = document.getElementById("AboutHistorySection") as HTMLElement;

            function getTreeViewClasses(index: number) {
              const span2Styles = [
                { width: "18px", height: "18px", borderWidth: "4px" },
                { width: "10px", height: "10px", borderWidth: "2px", marginLeft: "4px" },
              ];

              const span3Styles = [
                { bottom: "9px", width: "100px", transition: "height 0.7s ease 0.3s" },
                { bottom: "4px", width: "84px", transition: "height 0.7s ease 0.3s" },
                { bottom: "4px", width: "68px", transition: "height 0.7s ease 0.3s" },
                { bottom: "0px", width: "60px", transition: "height 0.7s ease 0.3s" },
                { bottom: "100%", width: "32px", transition: "height 0.7s ease 0.3s" },
              ];

              const span4Styles = [
                { color: "white", paddingLeft: "1rem", lineHeight: "1", whiteSpace: "nowrap" },
                { color: "white", paddingLeft: "1rem", marginTop: "-2px", lineHeight: "1", whiteSpace: "nowrap" },
              ];

              const heightValues = ["48px", "44px", "44px", "40px", "36px"];
              const classIndex = index === 0 ? 0 : 1;

              return {
                span2: span2Styles[classIndex],
                span3: span3Styles[index],
                span4: span4Styles[classIndex],
                heightValue: heightValues[index] ?? "",
              };
            }

            function createMilestoneItem(item: TreeViewData, index: number, total: number, isStemFullyGrown: boolean[]) {
              const milestoneIndex = total - 1 - index;
              const start = milestoneIndex / total;
              const end = (milestoneIndex + 1) / total;

              const { span2, span3, span4, heightValue } = getTreeViewClasses(index);

              const wrapper = document.createElement("div");
              wrapper.className = "relative flex-1 h-full max-h-[17%] transition-all";

              const span = document.createElement("span");
              span.className = "absolute left-2 bottom-0 w-[2px] bg-primary";
              span.style.height = "0%";

              const button = document.createElement("button");
              button.className = "flex";
              //for -ml-2 not rendering
              button.style.marginLeft = "-0.5rem"
              button.style.opacity = "0";

              const span2El = document.createElement("span");
              span2El.className = "relative border-primary rounded-full shrink-0 bg-black";
              Object.assign(span2El.style, span2);

              const span3El = document.createElement("span");
              span3El.className = "absolute left-1/2 -translate-x-1/2 overflow-hidden";
              Object.assign(span3El.style, span3);
              span3El.style.height = "0px";

              const img = document.createElement("img");
              img.src = item.media || "";
              img.width = item.imageWidth || 100;
              img.height = item.imageHeight || 50;
              img.alt = item.title;
              img.className = "w-full";

              span3El.appendChild(img);
              span2El.appendChild(span3El);

              const span4El = document.createElement("span");
              span4El.className = "text-white leading-none ps-4 text-nowrap";
              Object.assign(span4El.style, span4);
              span4El.textContent = item.title;

              button.appendChild(span2El);
              button.appendChild(span4El);
              span.appendChild(button);
              wrapper.appendChild(span);

              function update(scrollProgress: number) {
                const t = (scrollProgress - start) / (end - start);
                const clamped = Math.max(0, Math.min(1, t));

                button.style.opacity = clamped.toFixed(2);
                span.style.height = `${clamped * 100}%`;

                const threshold = index === 1 ? 50.9 : 99.9;
                isStemFullyGrown[index] = clamped * 100 >= threshold;

                span3El.style.height = isStemFullyGrown[index] ? heightValue : "0px";
              }

              return { wrapper, update };
            }

            function updateSlides(nextIndex: string) {
              rootSection.querySelectorAll(".about_history_slides").forEach((each) => {
                const slide = each as HTMLDivElement;
                const sliderIndex = slide.getAttribute("slider-index") ?? "0";
                if (nextIndex === sliderIndex) {
                  slide.style.display = "block"
                } else {
                  slide.style.display = "none"
                }
              });
            }

            function createAboutHistoryTreeView() {
              const container = document.getElementById("AboutHistoryTree") as HTMLElement;
              const total = contents.length;
              const isStemFullyGrown = new Array(total).fill(false);

              const treeWrapper = document.createElement("div");
              treeWrapper.className = "flex flex-col justify-end w-[124px] h-full";

              const milestones = contents.map((item, index) =>
                createMilestoneItem(item, index, total, isStemFullyGrown)
              );

              milestones.forEach((m) => treeWrapper.appendChild(m.wrapper));
              container.appendChild(treeWrapper);

              const lenisScrollHandler = (event: any) => {
                if (window?.innerWidth < 1024) return;

                const { animatedScroll } = event;
                const scrollTop = animatedScroll || window.scrollY;
                const scrollProgress = (scrollTop - rootSection?.offsetTop) / (rootSection?.offsetHeight - window.innerHeight);

                // Update Slide
                const rawIndex = Math.floor(scrollProgress * total);
                const nextIndex = Math.min(Math.max(0, rawIndex), total - 1);
                updateSlides(`${nextIndex}`);

                milestones.forEach((m) => m.update(scrollProgress));
              }

              let listerTriggered = false;
              const lenisEvent = "ce-sl-lenis";

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
            }

            function updateMobileButtons(clickedBtnIndex: string) {
              rootSection.querySelectorAll(".about_history_buttons").forEach((button) => {
                const index = button.getAttribute("btn-slider-index");
                const title = button.querySelector("#about_history_title") as HTMLSpanElement;
                const dots = button.querySelector("#about_history_dots") as HTMLSpanElement;
                if (index === clickedBtnIndex) {
                  title.style.display = "block";
                  dots.classList.replace("border-gray-900", "border-primary");
                } else {
                  title.style.display = "none";
                  dots.classList.replace("border-primary", "border-gray-900");
                }
              });
            }

            function loadDynamicContents() {
              gDom.loadDynamicComponent("about-history-slide", () => {
                console.log("AboutHistoryTree slides loaded");
                createAboutHistoryTreeView();
              });

              gDom.loadDynamicComponent("about-history-buttons", () => {
                console.log("AboutHistoryTree buttons loaded");
                if (window?.innerWidth < 1024) {
                  updateSlides(`${contents.length - 1}`);
                };
                rootSection.querySelectorAll(".about_history_buttons").forEach((each) => {
                  const button = each as HTMLButtonElement;
                  button.addEventListener("click", () => {
                    const btnIndex = button.getAttribute("btn-slider-index") ?? "0";
                    updateSlides(btnIndex);
                    updateMobileButtons(btnIndex);
                  })
                })
              });
            }

            // Start
            if (!gDom.ftr) {
              loadDynamicContents()
            } else {
              gDom.addEventListener("userIntracted", () => {
                loadDynamicContents();
              });
            }
          }}
        </Script>
      </ScrollFade>
    </section>
  );
}

export default AboutHistory;

const SliderView = ({ currentSlide, index }: SliderViewProps) => {
  return (
    <div id={`SliderView-${index}`} className="flex flex-col items-center flex-1 lg:items-end max-lg:mt-10">
      {/* Year Buttons */}
      <div className="flex gap-8">
        {currentSlide?.map((history, index) => (
          <button
            key={`btn${history?.historyKey}_${index + 1}`}
            className={`embla_navigation_buttons flex flex-col justify-center text-h5 lg:text-h4 ${index === 0 ? "text-primary" : "text-gray-normal"}`}
          >
            <span className="leading-tight">{history?.title}</span>
            <span className="leading-tight">&bull;</span>
          </button>
        ))}
      </div>
      <div className="hidden mt-1 mt-12" />
      <div data-key="content-wrapper" className={`embla overflow-hidden w-full mt-6 $lg:mt-12`}>
        <div className="embla__container flex lg:-mx-6">
          {currentSlide?.map((history, index) => (
            <div
              className="embla__slide shrink-0 grow-0 basis-full px-6"
              key={`details${history?.historyKey}_${index + 1}`}
            >
              <div className="flex flex-col items-center flex-1 lg:items-end">
                <div data-key="img-wrap" className={`w-full`}>
                  <img
                    data-key="image"
                    src={history?.media?.lg}
                    width={320}
                    height={240}
                    alt={history?.title}
                    className={`w-full rounded-lg max-lg:hidden`}
                    loading="lazy"
                  />
                  <div className="aspect-[1.66] w-[295px] rounded-lg overflow-hidden lg:hidden">
                    <img
                      src={history?.media?.sm}
                      alt={history?.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-white lg:text-end mt-6 lg:mt-10">
                  <h4 className="text-xxl lg:text-h5">{history?.subTitle}</h4>
                  <p data-key="para" className="text-md lg:text-xxl mt-4 lg:h-[15vh]">
                    {history?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Script id={`SliderView-${index}`} options={{ index }}>
        {(gDom: any, options: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const section = document.getElementById(`SliderView-${options?.index}`);
              const emblaNode = section?.querySelector('.embla');
              const navigationButtons = section?.querySelectorAll(".embla_navigation_buttons");



              const emblaOptions = { loop: true }
              const embla = EmblaCarousel(emblaNode, emblaOptions);
              let timer: any;
              let xlScale = window.devicePixelRatio >= 1.4;
              let isMobile = window.innerWidth < 1024;


              const checkScale = () => {
                xlScale = window.devicePixelRatio >= 1.4;
                isMobile = window.innerWidth < 1024;

              }

              const sliderUpdate = () => {
                checkScale();

                if (!section || isMobile) return;

                section
                  .querySelectorAll<HTMLElement>('[data-key="content-wrapper"]')
                  .forEach((content) => {
                    content.style.marginTop = xlScale ? "0.25rem" : "3rem";
                  });

                section
                  .querySelectorAll<HTMLElement>('.embla__slide')
                  .forEach((slide) => {
                    const imgwrap = slide.querySelector<HTMLElement>('[data-key="img-wrap"]');
                    const image = slide.querySelector<HTMLImageElement>('[data-key="image"]');
                    const para = slide.querySelector<HTMLElement>('[data-key="para"]');

                    if (!imgwrap || !image || !para) return;

                    if (xlScale) {
                      imgwrap.style.maxWidth = "200px";
                      image.style.height = "150px";
                      para.style.height="150px"
                    } else {
                      imgwrap.style.maxWidth = "320px";
                      image.style.height = "240px";
                      para.style.height="15vh"
                    }
                  });

              }
              sliderUpdate();
              window.addEventListener("resize", sliderUpdate)
              const updateButtons = () => {
                navigationButtons?.forEach((each, i) => {
                  if (i === embla.selectedScrollSnap()) {
                    each.classList.replace("text-gray-normal", "text-primary");
                  } else {
                    each.classList.replace("text-primary", "text-gray-normal");
                  }
                })
              }

              // Update controls
              const autoplaySlides = () => {
                clearInterval(timer);
                timer = setInterval(() => {
                  embla.scrollNext();
                  updateButtons()
                }, 5000)
              }

              const renderSlides = () => {
                autoplaySlides();
                updateButtons();
              }

              navigationButtons?.forEach((each, index) => {
                each.addEventListener("click", () => {
                  embla.scrollTo(index);
                  renderSlides()
                })
              });

              // Start
              embla.on('select', renderSlides)
              embla.on('reInit', renderSlides)
              autoplaySlides()
            }).catch((err: Error) => {
              console.log({ err });
            });
        }}
      </Script>
    </div>
  )
}
