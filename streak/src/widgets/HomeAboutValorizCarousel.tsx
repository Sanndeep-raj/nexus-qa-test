import ScrollFade from "@common/components/ScrollFade";
import { Script } from "streak/components";
import { getAzureCdnUrl } from "utils/commonUtils";

const HomeAboutValorizCarousel = () => {
  return (
    <section className="bg-black text-white bg-black py-12" id="home_about_carousel_section">
      <ScrollFade>
        <div className="container flex flex-col justify-between">
          <div className="embla overflow-hidden -mx-6">
            <div className="embla__container flex">

              {/* Slide - 1 */}
              <div className="embla__slide flex flex-col flex-none w-full px-6">
                <div className="flex items-center justify-center max-w-[500px] h-[216px] mx-auto mb-12">
                  <video preload="auto" className="h-full object-cover" autoPlay loop muted playsInline>
                    <source src={getAzureCdnUrl("HOME_ABOUT_VALORIZ_1")} type="video/mp4" />
                    <track kind="captions" src="/captions/dummy.vtt" srcLang="en" label="English" default />
                  </video>
                </div>
                <div className="md:w-10/12 md:mx-auto">
                  <h4 className="text-h5">Ignite Potential</h4>
                  <p className="text-md mt-7">Your ideas deserve more than just a start, they deserve momentum. We bring speed, innovation, and precision, so you don't just begin, you take off.</p>
                </div>
                <div className="flex items-end justify-center gap-16 mt-12">
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-speed.svg" width={48} height={48} alt="Speedy Delivery" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Speedy Delivery</h5>
                  </div>
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-idea.svg" width={48} height={48} alt="Innovative Ideas" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Innovative Ideas</h5>
                  </div>
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-execution.svg" width={48} height={48} alt="Precision Execution" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Precision Execution</h5>
                  </div>
                </div>
              </div>

              {/* Slide - 2 */}
              <div className="embla__slide flex flex-col flex-none w-full px-6">
                <div className="flex items-center justify-center max-w-[500px] h-[216px] mx-auto mb-12">
                  <video preload="auto" className="h-full object-cover" autoPlay loop muted playsInline>
                    <source src={getAzureCdnUrl("HOME_ABOUT_VALORIZ_2")} type="video/mp4" />
                    <track kind="captions" src="/captions/dummy.vtt" srcLang="en" label="English" default />
                  </video>
                </div>
                <div className="md:w-10/12 md:mx-auto">
                  <h4 className="text-h5">Level Up</h4>
                  <p className="text-md mt-7">Growth doesn't have to be complicated. We simplify complexity with sharp strategies and seamless execution, keeping you ahead.</p>
                </div>
                <div className="flex items-end justify-center gap-16 mt-12">
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-trust.svg" width={48} height={48} alt="Build Trust" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Build Trust</h5>
                  </div>
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-growth.svg" width={48} height={48} alt="Ignite Growth" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Ignite Growth</h5>
                  </div>
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-spark.svg" width={48} height={48} alt="Spark Change" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Spark Change</h5>
                  </div>
                </div>
              </div>

              {/* Slide - 3 */}
              <div className="embla__slide flex flex-col flex-none w-full px-6">
                <div className="flex items-center justify-center max-w-[500px] h-[216px] mx-auto mb-12">
                  <video preload="auto" className="h-full object-cover" autoPlay loop muted playsInline>
                    <source src={getAzureCdnUrl("HOME_ABOUT_VALORIZ_3")} type="video/mp4" />
                    <track kind="captions" src="/captions/dummy.vtt" srcLang="en" label="English" default />
                  </video>
                </div>
                <div className="md:w-10/12 md:mx-auto">
                  <h4 className="text-h5">Seal the Win</h4>
                  <p className="text-md mt-7">Your success is our pride. From end to end, we're here to make sure every effort leads to something extraordinary.</p>
                </div>
                <div className="flex items-end justify-center gap-16 mt-12">
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-progress.svg" width={48} height={48} alt="Pioneer Progress" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Pioneer Progress</h5>
                  </div>
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-results.svg" width={48} height={48} alt="Extraordinary Results" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Extraordinary Results</h5>
                  </div>
                  <div className="flex flex-col text-center">
                    <img loading="lazy" src="/images/home/about/icon-lead.svg" width={48} height={48} alt="Lead Boldly" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                    <h5 className="text mt-6">Lead Boldly</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-14">
            <div className="flex items-center">
              <div className="dots flex items-center justify-center gap-8"></div>
            </div>
          </div>
        </div>
        <Script id="HomeAboutValorizCarousel">
          {(gDom: any) => {
            gDom
              .loadPackage("js/embla-carousel.umd.js")
              .then(() => {

                const section = document.getElementById("home_about_carousel_section")
                const emblaNode = section?.querySelector('.embla');
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
                  button.ariaLabel = `about-${index}`
                  button.addEventListener('click', () => embla.scrollTo(index));
                  dotsContainer?.appendChild(button)
                })

                // Update controls
                const updateDots = () => {

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

export default HomeAboutValorizCarousel;