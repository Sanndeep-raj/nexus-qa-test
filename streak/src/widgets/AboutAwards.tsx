import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

const AboutAwards = () => {
  return (
    <section className="py-16 lg:py-26 overflow-hidden" id="about_awards">
      <ScrollFade>
        <div className="container">
          <h3 className="text-h4 lg:text-h2">Awards</h3>
          <div className="embla mt-12 xl:mt-26">
            <div className="embla__container flex -mx-5">
              <div className="embla__slide flex flex-col flex-none w-[85%] md:w-1/3 xl:w-[33.33%] px-5">
                <img
                  src="/images/about/award-3.webp"
                  width={396}
                  height={476}
                  alt=""
                  className="w-full rounded"
                  loading="lazy"
                />
                <div className="mt-4 xl:mt-8">
                  <h4 className="text-xxl xl:text-h5">ISO Certified</h4>
                  <p className="text-md">2025</p>
                </div>
              </div>
              <div className="embla__slide flex flex-col flex-none w-[85%] md:w-1/3 xl:w-[33.33%] px-5">
                <img
                  src="/images/about/award-4.webp"
                  width={396}
                  height={476}
                  alt=""
                  className="w-full rounded"
                  loading="lazy"
                />
                <div className="mt-4 xl:mt-8">
                  <h4 className="text-xxl xl:text-h5">ISM Certified</h4>
                  <p className="text-md">2025</p>
                </div>
              </div>
              <div className="embla__slide flex flex-col flex-none w-[85%] md:w-1/3 xl:w-[33.33%] px-5">
                <img
                  src="/images/about/award-1.webp"
                  width={396}
                  height={476}
                  alt=""
                  className="w-full rounded"
                  loading="lazy"
                />
                <div className="mt-4 xl:mt-8">
                  <h4 className="text-xxl xl:text-h5">Cricket Runner Ups</h4>
                  <p className="text-md">2023</p>
                </div>
              </div>
              <div className="embla__slide flex flex-col flex-none w-[85%] md:w-1/3 xl:w-[33.33%] px-5">
                <img
                  src="/images/about/award-2.webp"
                  width={396}
                  height={476}
                  alt=""
                  className="w-full rounded"
                  loading="lazy"
                />
                <div className="mt-4 xl:mt-8">
                  <h4 className="text-xxl xl:text-h5">Valoriz Rebranding</h4>
                  <p className="text-md">2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-26">
            <div className="flex items-center justify-center gap-6 lg:gap-8">
              <button className="embla_navigation_button disabled:opacity-20" data-action="previous" aria-label="previous">
                <Icon src={ChevronLeft} size="md" />
              </button>
              <div className="dots flex items-center gap-2"></div>
              <button className="embla_navigation_button disabled:opacity-20" data-action="next" aria-label="next">
                <Icon src={ChevronRight} size="md" />
              </button>
            </div>
          </div>
        </div>
        <Script id="AboutAwards">
          {(gDom: any) => {
            gDom
              .loadPackage("js/embla-carousel.umd.js")
              .then(() => {
                const EmblaCarousel = (gDom as any).EmblaCarousel;
                const section = document.getElementById("about_awards");
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
                  button.ariaLabel = `team-${index}`
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
  )
}

export default AboutAwards;