import Icon from "@common/components/Icon";
import SanityImage from "@common/components/SanityImage";
import ScrollFade from "@common/components/ScrollFade";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

const HomeGoodHands = (props: any) => {

  const getBackGroundStyle = ((goodHand: any) => {
    const { gradientAngle, gradientEnd, gradientStart } = goodHand?.backgroundGradient || {};
    return `linear-gradient(${gradientAngle}deg, ${gradientStart?.hex} 0%, ${gradientEnd?.hex} 46%)`;
  });

  return (
    <section className="relative py-12 xl:py-20 xxl:py-26 overflow-hidden" id="home_good_hands_section">
      <ScrollFade>
        <div className="container will-change-transform">
          <h3 className="text-h4 xl:text-h2">You&apos;re In <br /> Good Hands!</h3>
          <div className="embla mt-12 xl:mt-26 max-md:-mx-6">
            <div className="embla__container flex gap-4 xl:gap-12">
              {props?.data?.map((goodHand: any) => (
                <div className="embla__slide w-full max-md:px-6 flex-none xl:w-1/2 max-w-[626px]" key={goodHand?._key}>
                  <div className="flex flex-col h-full rounded-[24px] p-4 xl:p-8 overflow-hidden" style={{ background: getBackGroundStyle(goodHand) }}>
                    <div className="z-10">
                      <div className="flex align-middle gap-x-4">
                        <img loading="lazy" width={32} height={32} src="/images/icons/quote.svg" alt="Quote" />
                        <p className="text-primary xl:text-md font-semibold">{goodHand?.quote}</p>
                      </div>
                      <p className="text-xxl xl:text-h6 mt-4 mb-6 xl:mb-13">{goodHand?.title}</p>
                      <div className="mt-auto">
                        <SanityImage loading="lazy" src={goodHand?.logo} height={32} width={131} alt={goodHand?.logo?.alt} />
                        <p className="xl:text-md font-medium mt-4">{goodHand?.author}</p>
                        <p className="max-xl:text-sm">{goodHand?.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 lg:gap-8 mt-12 xl:mt-20">
            <button className="embla_navigation_button group disabled:opacity-20" data-action="previous" aria-label="previous good hands">
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[-2px]">
                <Icon src={ChevronLeft} size="md" />
              </span>
            </button>

            {/* Dot Navigation */}
            <div className="flex items-center">
              <div className="dots flex items-center justify-center gap-2"></div>
            </div>

            <button className="embla_navigation_button group disabled:opacity-20" data-action="next" aria-label="next good hands">
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
                <Icon src={ChevronRight} size="md" />
              </span>
            </button>
          </div>
        </div>

        {/* <!-- Left gradient mask --> */}
        <div className="absolute top-0 left-0 w-10 lg:w-30 h-full z-10 pointer-events-none bg-white [mask-image:linear-gradient(to_right,black,transparent)] [mask-repeat:no-repeat] [mask-size:cover]" />
        {/* <!-- Right gradient mask --> */}
        <div className="absolute top-0 right-0 w-10 lg:w-30 h-full z-10 pointer-events-none bg-white [mask-image:linear-gradient(to_left,black,transparent)] [mask-repeat:no-repeat] [mask-size:cover]" />

        <Script id="HomeGoodHands">
          {(gDom: any) => {
            gDom
              .loadPackage("js/embla-carousel.umd.js")
              .then(() => {
                const section = document.getElementById("home_good_hands_section");
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
                  button.ariaLabel = `good-hands-${index}`
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

export default HomeGoodHands;