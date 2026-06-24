import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

const Blogs = () => {
  return (
    <section className="relative py-12 xl:py-20 xxl:py-26 overflow-hidden" id="blogs_section">
      <ScrollFade>
        <div className="container will-change-transform">
          <div className="flex justify-between">
            <p className="text-h4 xl:text-h2">Blogs</p>
            <div className="flex items-center justify-center gap-6 lg:gap-8">
              <button className="embla_navigation_button group disabled:opacity-20" data-action="previous" aria-label="previous">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
                  <Icon src={ChevronLeft} size="md" />
                </span>
              </button>
              <div className="flex items-center gap-2">
                <div className="dots flex items-center justify-center gap-2"></div>
              </div>
              <button className="embla_navigation_button group disabled:opacity-20" data-action="next" aria-label="next">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
                  <Icon src={ChevronRight} size="md" />
                </span>
              </button>
            </div>
          </div>
          <div className="embla mt-14">
            <div className="embla__container flex -mx-3 xl:-mx-7">

              {/* Slide - 1 */}
              <a href="/blog/revolutionizing-retail-the-impact-of-conversational-ai-on-customer-experience-and-sales" className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-7 group">
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    src="/images/about/blog-retail.webp"
                    width={800}
                    height={583}
                    alt=""
                    loading="lazy"
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">
                    Revolutionizing Retail: The Impact of Conversational AI on
                    Customer Experience and Sales
                  </p>
                  <div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">E-Commerce</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">Retail</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">AI</p>
                      </div>
                    </div>
                    <p className="text-md mt-4">
                      In an ever-changing retail world, effective conversational
                      touchpoints are crucial for enhancing customer engagement
                      and satisfaction.
                    </p>
                    <div className="mt-14">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200 group-hover:text-primary">
                        Read More
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Slide - 2 */}
              <a href="/blogs" className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-7 group">
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    src="/images/about/blog-ecommerce.webp"
                    width={800}
                    height={583}
                    alt=""
                    loading="lazy"
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">
                    Revolutionizing E-commerce: How AR and 3D Technology Are
                    Transforming Online Shopping
                  </p>
                  <div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">E-Commerce</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">AR</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">3D Tech</p>
                      </div>
                    </div>
                    <p className="text-md mt-4">
                      The e-commerce landscape is an axis of relentless
                      innovation. Faced with intense competition and continually
                      shifting customer expectations...
                    </p>
                    <div className="mt-14">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200 group-hover:text-primary">
                        Read More
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Slide - 3 */}
              <a href="/blogs" className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-7 group">
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    src="/images/about/blog-next.webp"
                    width={800}
                    height={583}
                    alt=""
                    loading="lazy"
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">
                    Next.js Powerup for High-Performance E-Commerce Sites{" "}
                  </p>
                  <div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">E-Commerce</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">Performance</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">Technology</p>
                      </div>
                    </div>
                    <p className="text-md mt-4">
                      Building a high-performance e-commerce storefront is crucial
                      for delivering a seamless user experience and achieving
                      better business outcomes.
                    </p>
                    <div className="mt-14">
                      <span className="flex items-center text-sm font-medium transition duration-300 delay-200 group-hover:text-primary">
                        Read More
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Slide - 4 */}
              <a href="/blogs" className="embla__slide flex flex-col flex-none w-[95%] md:w-1/3 xl:w-[33.33%] px-3 xl:px-7 group">
                <div className="rounded [clip-path:inset(0_round_0.25rem)]">
                  <img
                    src="/images/about/check-list.webp"
                    width={800}
                    height={583}
                    alt=""
                    loading="lazy"
                    className="w-full rounded object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between h-full mt-8">
                  <p className="text-xxl">
                    Comprehensive E-commerce Checklist: Plan, Launch, and Grow
                    Your Online Store{" "}
                  </p>
                  <div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">E-Commerce</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">Performance</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full block"></span>
                        <p className="text-xs font-medium">Technology</p>
                      </div>
                    </div>
                    <p className="text-md mt-4">
                      Launching an online store is a multifaceted process that
                      requires meticulous planning and execution. A
                      well-structured checklist can help you navigate the
                      complexities...
                    </p>
                    <div className="mt-14">
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
            <a href="/blogs">
              <Button variant="outline-secondary" className="flex items-center group">
                <span>View All Blogs</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
        </div>

        <Script id="Blogs">
          {(gDom: any) => {
            gDom
              .loadPackage("js/embla-carousel.umd.js")
              .then(() => {
                const EmblaCarousel = (gDom as any).EmblaCarousel;
                const section = document.getElementById("blogs_section");
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
                  button.ariaLabel = `blogs-${index}`
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
                        button.className = "group flex items-center justify-center w-4 h-4 rounded-full border-4 border-black"
                        // TO DO border-4 not rendering
                        button.style.borderWidth = "4px"
                        button.style.borderColor = "#000"
                        span.className = `w-1 h-1 rounded-full bg-black`
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
  );
}

export default Blogs;