import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

const CaseStudyCarousal = () => {
  return (
    <section className="relative text-black bg-white overflow-hidden py-12 xl:py-20 xxl:py-26" id="case-studies">
        <div className="container will-change-transform">
          <div className="flex justify-between">
            <p className="text-h4 xl:text-h2">Case Studies</p>
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

              {/* <!-- Slide 1 --> */}
              <a href="/case-study/transforming-b2c-retail-brand-experience-platform-with-sanity" className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" >
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    loading="lazy"
                    src="/images/case-studies/case-1.webp"
                    width={800}
                    height={583}
                    alt=""
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">
                    Transforming B2C Retail: Brand Experience Platform with Sanity
                  </p>
                  <div>
                    <p className="text-md mt-4">
                      Our customer needs an online platform to expand its brand
                      experience community and strengthen customer relationships.
                    </p>
                    <div className="mt-8">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200 group-hover:text-primary">
                        Read More
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* <!-- Slide 2 --> */}
              <a href="/case-study/quick-b2c-e-commerce-launch-using-shopify" className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" >
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    loading="lazy"
                    src="/images/case-studies/case-2.webp"
                    width={800}
                    height={583}
                    alt=""
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">
                    Quick B2C e-commerce launch using Shopify
                  </p>
                  <div>
                    <p className="text-md mt-4">
                      Our customer needed a quick and reliable migration of their
                      e-commerce site and their content to Shopify.
                    </p>
                    <div className="mt-8">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200 group-hover:text-primary">
                        Read More
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* <!-- Slide 3 --> */}
              <a href="/case-studies" className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" >
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    loading="lazy"
                    src="/images/case-studies/case-3.webp"
                    width={800}
                    height={583}
                    alt=""
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">Data Engineering & Integration</p>
                  <div>
                    <p className="text-md mt-4">
                      Our customer needs an expert team to fully manage their
                      cloud based data integration and data engineering
                      requirements.
                    </p>
                    <div className="mt-8">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200 group-hover:text-primary">
                        Read More
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* <!-- Slide 4 --> */}
              <a href="/case-studies" className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" >
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    loading="lazy"
                    src="/images/case-studies/case-7.webp"
                    width={800}
                    height={583}
                    alt=""
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">Customised B2B site launch</p>
                  <div>
                    <p className="text-md mt-4">
                      Our customer needs an expert team to fully manage their cloud based data integration and data engineering requirements.
                    </p>
                    <div className="mt-8">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200 group-hover:text-primary">
                        Read More
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-16 xl:mt-26">
            <a href="/case-studies">
              <Button variant="outline-secondary" className="flex items-center group">
                <span>View All Stories</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
        </div>
        <Script id="CaseStudyCarousal">
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
    </section>
  )
}

export default CaseStudyCarousal;