import Icon from "@common/components/Icon";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

interface DigitalMarketingIndustryProps {
  data: {
    title: string
    slides: Array<{
      title: string
      description: string
      image: string
    }>
  }
}

const DigitalMarketingIndustry = (props: DigitalMarketingIndustryProps) => {
  return (
    <section className="relative text-black bg-white overflow-hidden py-12 xl:py-20 xxl:py-26" id="case-studies">
      <div className="container will-change-transform">
        <div className="flex justify-between">
          <p className="text-h4 xl:text-h2">{props.data.title}</p>
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            <button className="embla_navigation_button group disabled:opacity-20" data-action="previous" aria-label="previous case studies">
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
                <Icon src={ChevronLeft} size="md" />
              </span>
            </button>
            <div className="dots flex items-center gap-2 max-lg:hidden">
            </div>
            <button className="embla_navigation_button group disabled:opacity-20" data-action="next" aria-label="next case studies">
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
                <Icon src={ChevronRight} size="md" />
              </span>
            </button>
          </div>
        </div>
        <div className="embla mt-6 lg:mt-18">
          <div className="embla__container flex -mx-3 xl:-mx-5 xxl:-mx-7">
            {
              props?.data?.slides?.map((slide, index) => (
                <div className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" >
                  <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                    <img
                      loading="lazy"
                      src={slide.image}
                      width={800}
                      height={583}
                      alt={slide.title}
                      className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-full mt-8">
                    <p className="text-xxl">
                      {slide.title}
                    </p>
                    <div>
                      <p className="text-md mt-4">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <span className="hidden w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500 bg-black border border-gray-600 hover:border-gray-500 group flex items-center justify-center w-4 h-4 rounded-full" />
      <Script id="dm-CaseStudyCarousal">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const section = document.getElementById("case-studies");
              const emblaNode = section?.querySelector('.embla');
              const navigationButtons = section?.querySelectorAll(".embla_navigation_button");
              const dotsContainer = section?.querySelector('.dots');
              const emblaOptions = { loop: false }
              const embla = EmblaCarousel(emblaNode, emblaOptions)
              const defaultClass = 'border border-gray-600 hover:border-gray-500'

              // Create dots
              const scrollSnaps = embla.scrollSnapList()

              scrollSnaps.forEach((_: any, index: number) => {
                const button = document.createElement('button')
                button.className = `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`
                const span = document.createElement('span')
                span.className = 'w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500'
                button.appendChild(span)
                button.ariaLabel = `case-study-${index}`
                button.addEventListener('click', () => embla.scrollTo(index));
                dotsContainer?.appendChild(button)
              })

              // Arrow navigation
              navigationButtons?.forEach((btn) => {
                const button: HTMLButtonElement = btn as HTMLButtonElement;
                button.addEventListener("click", () => button?.dataset?.action === "previous" ? embla.scrollPrev() : embla.scrollNext());
              })

              // Update controls
              const updateDots = () => {

                navigationButtons?.forEach((btn) => {
                  const button: HTMLButtonElement = btn as HTMLButtonElement;
                  if (button?.dataset?.action === "previous") button.disabled = !embla.canScrollPrev()
                  else button.disabled = !embla.canScrollNext()
                })

                const selectedIndex = embla.selectedScrollSnap()
                const buttons = dotsContainer?.querySelectorAll('button')

                buttons?.forEach((button, index) => {
                  const span = button.querySelector('span')
                  if (span) {
                    if (index === selectedIndex) {
                      button.className =
                        "group";
                      Object.assign(button.style, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "9999px",
                        borderWidth: "4px",
                        borderStyle: "solid",
                        borderColor: "black",
                      });

                      span.className = "w-1 h-1 rounded-full bg-black";
                    } else {
                      button.className = `group`;
                      Object.assign(button.style, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "9999px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "#4b5563",
                      });
                      span.className =
                        "w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500";
                    }
                  }
                })
              }

              embla.on('select', updateDots)
              embla.on('reInit', updateDots)
              updateDots()

            }).catch((err: Error) => {
              console.log({ err });
            });
        }}
      </Script>
    </section>)
}

export default DigitalMarketingIndustry;