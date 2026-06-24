import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import { Script } from "streak/components";

const OtherServices = () => {
  return (
    <section className="text-white bg-black py-12 xl:py-20 xxl:py-26 overflow-hidden">
      <ScrollFade>
        <div className="container">
          <div className="mb-14 xl:mb-22">
            <h3 className="text-h4 xl:text-h2">
              <p>
                Other
                <br className="lg:hidden" /> Services
              </p>
              <p className="max-xl:hidden">We Provide</p>
            </h3>
          </div>
          <div className="hidden xl:grid grid-cols-3 gap-5">
            <div className="other-service-fade-item">
              <CardAIML />
            </div>
            <div className="flex flex-col gap-5">
              <div className="other-service-fade-item">
                <CardProductEngineering />
              </div>
              <div className="other-service-fade-item">
                <CardEnterpriseSoftware />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="other-service-fade-item">
                <CardDataAnalytics />
              </div>
              <div className="other-service-fade-item">
                <CardDigitalProcessAutomation />
              </div>
            </div>
          </div>
          <div className="mt-14 xl:hidden">
            <OtherServicesCarousel />
          </div>
        </div>
        <Script id="OtherServices">
          {() => {
            const wrappers = document.querySelectorAll(".other-service-fade-item");

            wrappers.forEach((wrapper, index) => {
              const el = wrapper as HTMLElement;
              el.style.opacity = "0";
              el.style.transform = "translateY(40px)";

              const observer = new IntersectionObserver(
                (entries, obs) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      el.style.transition = `opacity 0.6s ${index * 0.1}s ease-out, transform 0.6s ${index * 0.1}s ease-out`;
                      el.style.opacity = "1";
                      el.style.transform = "translateY(0)";
                      obs.unobserve(el);
                    }
                  });
                },
                { threshold: 0.4 }
              );

              observer.observe(wrapper);
            });
          }}
        </Script>
      </ScrollFade>
    </section>
  )
}

export default OtherServices;

const OtherServicesCarousel = () => {
  return (
    <div id="OtherServicesCarouselSection">
      <div className="embla">
        <div className="embla__container flex -mx-3">
          <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
            <CardAIML />
          </div>
          <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
            <CardProductEngineering />
          </div>
          <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
            <CardEnterpriseSoftware />
          </div>
          <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
            <CardDataAnalytics />
          </div>
          <div className="embla__slide flex-none w-[95%] md:w-[50%] lg:w-[33.3333%] px-3">
            <CardDigitalProcessAutomation />
          </div>
        </div>
      </div>
      <div className="mt-12 xl:mt-26">
        <div className="flex items-center justify-center gap-6 lg:gap-8">
          <button className="embla_navigation_button disabled:opacity-20" data-action="previous" aria-label="previous service">
            <Icon src={ChevronLeft} size="md" />
          </button>
          <div className="dots flex items-center gap-2">
          </div>
          <button className="embla_navigation_button disabled:opacity-20" data-action="next" aria-label="next service">
            <Icon src={ChevronRight} size="md" />
          </button>
        </div>
      </div>
      <Script id="OtherServicesCarousel">
        {(gDom: any) => {
          gDom
            .loadPackage("js/embla-carousel.umd.js")
            .then(() => {
              const EmblaCarousel = (gDom as any).EmblaCarousel;

              const section = gDom.geById("OtherServicesCarouselSection");
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
                button.ariaLabel = `service-${index}`
                button.addEventListener('click', () => embla.scrollTo(index));
                dotsContainer?.appendChild(button)
              })

              // Arrow navigation
              navigationButtons?.forEach((button: HTMLButtonElement) => {
                button.addEventListener("click", () => button?.dataset?.action === "previous" ? embla.scrollPrev() : embla.scrollNext());
              })

              // Update controls
              const updateDots = () => {

                navigationButtons?.forEach((button: HTMLButtonElement) => {
                  if (button?.dataset?.action === "previous") button.disabled = !embla.canScrollPrev()
                  else button.disabled = !embla.canScrollNext()
                })

                const selectedIndex = embla.selectedScrollSnap()
                const buttons = dotsContainer?.querySelectorAll('button')

                buttons?.forEach((button: HTMLButtonElement, index: number) => {
                  const span = button.querySelector('span')
                  if (span) {
                    span.style.width = ".25rem"
                    span.style.height = ".25rem"
                    if (index === selectedIndex) {
                      button.className = "group flex items-center justify-center w-4 h-4 rounded-full border-4 border-white"
                      // TO DO border-4 not rendering
                      button.style.borderWidth = "4px"
                      span.className = "rounded-full bg-white"
                    } else {
                      button.className = `group flex items-center justify-center w-4 h-4 rounded-full ${defaultClass}`
                      // TO DO border-4 not rendering
                      button.style.borderWidth = "1px"
                      span.className = 'rounded-full bg-gray-600 group-hover:bg-gray-500'
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
    </div>
  );
}

const CardDigitalProcessAutomation = () => {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden group">
      <div className="relative">
        <span className="absolute w-full h-full z-10 bg-[linear-gradient(180deg,_rgba(36,22,40,0)_0%,_rgba(36,22,40,1)_100%)]"></span>
        <img
          src="/images/services/service-automation.webp"
          width={420}
          height={589}
          alt=""
          className="w-full max-xl:hidden group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <img
          src="/images/services/service-automation-sm.webp"
          width={420}
          height={326}
          alt=""
          className="w-full xl:hidden"
          loading="lazy"
        />
      </div>
      <div className="relative flex-1 text-center bg-[#101010] py-8 px-10 xl:px-12">
        <div className="relative z-30">
          <h4 className="text-xxl">Digital Process Automation</h4>
          <div className="w-full max-w-[60%] h-[1px] mx-auto mt-2 xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0.1)_0%,_rgba(193,119,215,0.75)_50%,_rgba(4,158,118,0.2)_100%)]" />
          <p className="text-md mt-8">
            Delivering AI and ML solutions like chatbots and automation to
            enhance efficiency and customer experiences.
          </p>
        </div>
        <span className="absolute left-0 -top-1/2 w-full h-full aspect-video z-20 bg-[radial-gradient(circle,_rgba(174,71,204,0.15)_0%,_rgba(0,0,0,0)_100%)]" />
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[60%] h-[1px] mx-auto max-xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0.1)_0%,_rgba(193,119,215,0.75)_50%,_rgba(4,158,118,0.2)_100%)]" />
      </div>
    </div>
  );
};

const CardDataAnalytics = () => {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden group">
      <div className="relative">
        <span className="absolute w-full h-full z-10 bg-[linear-gradient(180deg,_#4D3B2600_0%,_#4D3B26_100%)]"></span>
        <img
          src="/images/services/service-data.webp"
          width={420}
          height={589}
          alt=""
          className="w-full max-xl:hidden group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <img
          src="/images/services/service-data-sm.webp"
          width={420}
          height={326}
          alt=""
          className="w-full xl:hidden"
          loading="lazy"
        />
      </div>
      <div className="relative flex-1 text-center bg-[#101010] py-8 px-10 xl:px-12">
        <div className="relative z-30">
          <h4 className="text-xxl">Data Analytics</h4>
          <div className="w-full max-w-[60%] h-[1px] mx-auto mt-2 xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0.1)_0%,_rgba(194,157,43,0.75)_50%,_rgba(4,158,118,0.2)_100%)]" />
          <p className="text-md mt-8">
            We help you unlock real time insights, predict trends, and track
            performance for smarter decisions.
          </p>
        </div>
        <span className="absolute left-0 -top-1/2 w-full h-full aspect-video z-20 bg-[radial-gradient(circle,_rgba(255,141,85,0.1)_0%,_rgba(0,0,0,0)_100%)]" />
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[60%] h-[1px] mx-auto max-xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0.1)_0%,_rgba(194,157,43,0.75)_50%,_rgba(4,158,118,0.2)_100%)]" />
      </div>
    </div>
  );
};

const CardEnterpriseSoftware = () => {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden group">
      <div className="relative">
        <span className="absolute w-full h-full z-10 bg-[linear-gradient(180deg,_rgba(13,37,39,0)_0%,_rgba(13,37,39,1)_100%)]"></span>
        <img
          src="/images/services/service-software.webp"
          width={420}
          height={589}
          alt=""
          className="w-full max-xl:hidden group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <img
          src="/images/services/service-software-sm.webp"
          width={420}
          height={326}
          alt=""
          className="w-full xl:hidden"
          loading="lazy"
        />
      </div>
      <div className="relative flex-1 text-center bg-[#101010] py-8 px-10 xl:px-12">
        <div className="relative z-30">
          <h4 className="text-xxl">Enterprise Software</h4>
          <div className="w-full max-w-[60%] h-[1px] mx-auto mt-2 xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0)_0%,_rgba(4,158,118,1)_50%,_rgba(4,158,118,0)_100%)]" />
          <p className="text-md mt-8">
            Creating smart, scalable solutions that streamline operations, boost
            efficiency, and drive business growth.
          </p>
        </div>
        <span className="absolute left-0 -top-1/2 w-full h-full aspect-video z-20 bg-[radial-gradient(circle,_rgba(11,175,192,0.15)_0%,_rgba(0,0,0,0)_100%)]" />
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[60%] h-[1px] mx-auto max-xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0)_0%,_rgba(4,158,118,1)_50%,_rgba(4,158,118,0)_100%)]" />
      </div>
    </div>
  );
};

const CardProductEngineering = () => {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden group">
      <div className="relative">
        <span className="absolute w-full h-full z-10 bg-[linear-gradient(180deg,_rgba(13,37,39,0)_0%,_rgba(13,37,39,1)_100%)]"></span>
        <img
          src="/images/services/service-engineering.webp"
          width={420}
          height={589}
          alt=""
          className="w-full max-xl:hidden group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <img
          src="/images/services/service-engineering-sm.webp"
          width={420}
          height={326}
          alt=""
          className="w-full xl:hidden"
          loading="lazy"
        />
      </div>
      <div className="relative flex-1 text-center bg-[#101010] py-8 px-10 xl:px-12">
        <div className="relative z-30">
          <h4 className="text-xxl">Product Engineering</h4>
          <div className="w-full max-w-[60%] h-[1px] mx-auto mt-2 xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0.1)_0%,_rgba(52,94,107,1)_50%,_rgba(4,158,118,0.2)_100%)]" />
          <p className="text-md mt-8">
            We build smart, scalable products with APIs and cloud solutions to
            help your business grow.
          </p>
        </div>
        <span className="absolute left-0 -top-1/2 w-full h-full aspect-video z-20 bg-[radial-gradient(circle,_rgba(54,102,208,0.2)_0%,_rgba(0,0,0,0)_100%)]" />
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[60%] h-[1px] mx-auto max-xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0.1)_0%,_rgba(52,94,107,1)_50%,_rgba(4,158,118,0.2)_100%)]" />
      </div>
    </div>
  );
};

const CardAIML = () => {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden group">
      <div className="relative">
        <span className="absolute w-full h-full z-10 bg-[linear-gradient(180deg,_rgba(13,37,39,0)_0%,_rgba(13,37,39,1)_100%)]"></span>
        <img
          src="/images/services/service-ai.webp"
          width={420}
          height={589}
          alt=""
          className="w-full max-xl:hidden group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <img
          src="/images/services/service-ai-sm.webp"
          width={420}
          height={326}
          alt=""
          className="w-full xl:hidden"
          loading="lazy"
        />
      </div>
      <div className="relative flex-1 text-center bg-[#101010] py-8 px-10 xl:px-12">
        <div className="relative z-30">
          <h4 className="text-xxl">AI & ML</h4>
          <div className="w-full max-w-[60%] h-[1px] mx-auto mt-2 xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0)_0%,_rgba(4,158,118,1)_50%,_rgba(4,158,118,0)_100%)]" />
          <p className="text-md mt-8">
            We automate business processes to help you work smarter, cut down on
            mistakes, and keep everything running seamlessly.
          </p>
        </div>
        <span className="absolute left-0 -top-1/2 w-full h-full aspect-video z-20 bg-[radial-gradient(circle,_rgba(3,193,210,0.15)_0%,_rgba(0,0,0,0.1)_100%)]" />
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[60%] h-[1px] mx-auto max-xl:hidden bg-[linear-gradient(90deg,_rgba(4,158,118,0)_0%,_rgba(4,158,118,1)_50%,_rgba(4,158,118,0)_100%)]" />
      </div>
    </div>
  );
};