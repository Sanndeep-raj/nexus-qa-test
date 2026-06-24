import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

const HomeCaseStudy = () => {
  return (
    <section className="relative text-white bg-black overflow-hidden py-12 xl:py-20 xxl:py-26" id="home_case_study_section">
      <ScrollFade>
        <div className="container will-change-transform">
          <div className="flex justify-between">
            <h2 className="text-h4 xl:text-h2">Case Studies</h2>
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
              <a href="/case-study/transforming-b2c-retail-brand-experience-platform-with-sanity" className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" target="_blank">
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
                  <h3 className="text-xxl">
                    Transforming B2C Retail: Brand Experience Platform with Sanity
                  </h3>
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
              <a href="/case-study/quick-b2c-e-commerce-launch-using-shopify" className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" target="_blank">
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
                  <h3 className="text-xxl">
                    Quick B2C e-commerce launch using Shopify
                  </h3>
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
              <a href="/case-studies" className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" target="_blank">
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
                  <h3 className="text-xxl">Data Engineering & Integration</h3>
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
              <a href="/case-studies" className="embla__slide flex flex-col flex-none w-[94%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-5 xxl:px-7 group" target="_blank">
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    loading="lazy"
                    src="/images/case-studies/case-4.webp"
                    width={800}
                    height={583}
                    alt=""
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <h3 className="text-xxl">Customised B2B site launch</h3>
                  <div>
                    <p className="text-md mt-4">
                      We built a custom B2B site with role-based access, bulk
                      ordering, pricing rules, and seamless ERP integration.
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
              <Button variant="outline-light" className="flex items-center group">
                <span>View All Stories</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* <!-- Left gradient mask --> */}
        <div className="absolute top-0 left-0 w-10 lg:w-30 h-full z-10 pointer-events-none bg-black [mask-image:linear-gradient(to_right,black,transparent)] [mask-repeat:no-repeat] [mask-size:cover]" />
        {/* <!-- Right gradient mask --> */}
        <div className="absolute top-0 right-0 w-10 lg:w-30 h-full z-10 pointer-events-none bg-black [mask-image:linear-gradient(to_left,black,transparent)] [mask-repeat:no-repeat] [mask-size:cover]" />

        <Script id="HomeCaseStudy">
          {(gDom: any) => {
            gDom
              .loadPackage("js/embla-carousel.umd.js")
              .then(() => {
                const section = document.getElementById("home_case_study_section");
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
                        button.className = "group flex items-center justify-center w-4 h-4 rounded-full border-4 border-white"
                        // TO DO border-4 not rendering
                        button.style.borderWidth = "4px"
                        span.className = "w-1 h-1 rounded-full bg-white"
                      } else {
                        button.className = `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`
                        // TO DO border-4 not rendering
                        button.style.borderWidth = "1px"
                        span.className = 'w-1 h-1 rounded-full bg-gray-600 group-hover:bg-gray-500'
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
      </ScrollFade>
    </section>
  )
}

export default HomeCaseStudy;