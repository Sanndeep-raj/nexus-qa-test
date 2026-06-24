import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

const AboutInnovations = () => {

  const contents = [
    {
      title: "Shopsphere",
      imageLg: "/images/about/innovations-shopsphere.webp",
      imageSm: "/images/about/innovations-shopsphere-sm.webp",
      easeClassName: "group fade-item left opacity-0 -translate-x-5 transition-all duration-1000 ease-in-out",
      link: "/products",
      className:
        "absolute inset-0 bg-dark-gradient1 blur-[350px] pointer-events-none",
      content:
        "A cloud native, feature rich ecommerce platform enabling customizable, omnichannel shopping experiences and seamless multi-brand rollouts.",
    },
    {
      title: "Streak",
      imageLg: "/images/about/innovations-streak.webp",
      imageSm: "/images/about/innovations-streak-sm.webp",
      easeClassName: "group fade-item right opacity-0 translate-x-5 transition-all duration-1000 ease-in-out",
      link: "/products",
      className:
        "absolute inset-0 bg-dark-gradient2 blur-[350px] pointer-events-none",
      content:
        "A lightweight, high-performance front-end framework for eCommerce, blending SSR & SSG, and built for headless commerce.",
    },
    {
      title: "knitrix",
      imageLg: "/images/about/innovations-nitrix.webp",
      imageSm: "/images/about/innovations-nitrix-sm.webp",
      easeClassName: "group fade-item left opacity-0 -translate-x-5 transition-all duration-1000 ease-in-out",
      link: "/products",
      className:
        "absolute inset-0 bg-dark-gradient3 blur-[350px] pointer-events-none",
      content:
        "Seamlessly automating data synchronization between Akeneo PIM and eCommerce platforms for consistent, accurate product information.",
    },
    {
      title: "vbrandx",
      imageLg: "/images/about/innovations-vbrand.webp",
      imageSm: "/images/about/innovations-vbrand-sm.webp",
      easeClassName: "group fade-item right opacity-0 translate-x-5 transition-all duration-1000 ease-in-out",
      link: "/vbrandx",
      className:
        "absolute inset-0 bg-dark-gradient4 blur-[350px] pointer-events-none",
      content:
        "A low code Brand Experience Platform empowering teams to create engaging, non-transactional mobile apps effortlessly.",
    },
  ];


  return (
    <section className="flex text-white bg-black py-16 lg:py-26">
      <ScrollFade>
        <div className="container">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center flex-wrap">
              <h2 className="text-h4 lg:text-h2">Our Innovations</h2>
              <div className="w-full lg:w-1/2">
                <p className="text-md lg:text-xxl mt-6 lg:mt-0">
                  We create products that transform ideas into reality. Designed
                  to solve real world challenges, our solutions empower businesses
                  to stay ahead!
                </p>
              </div>
            </div>
            <div className="overflow-x-hidden max-lg:-mx-6 mt-16 lg:mt-22">
              <div className="flex lg:grid lg:grid-cols-2 gap-10 lg:gap-x-30 lg:gap-y-16 flex-nowrap lg:flex-wrap max-lg:overflow-x-auto max-lg:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {contents.map((each) => (
                  <a href={each?.link} key={each?.title} className={each?.easeClassName}>
                    <div className="group relative max-lg:w-[328px] shrink-0 rounded-[24px] px-4 py-6 lg:p-6 overflow-hidden">
                      <div className={each?.className} />
                      <div className="relative z-10">
                        <div className="shrink-0 [clip-path:inset(0_round_1rem)]">
                          <img
                            src={each?.imageLg}
                            width={542}
                            height={132}
                            alt=""
                            loading="lazy"
                            className="w-full rounded-lg hidden lg:block object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                          />
                          <img
                            src={each?.imageSm}
                            width={296}
                            height={80}
                            alt=""
                            loading="lazy"
                            className="w-full rounded-lg block lg:hidden object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
                          />
                        </div>
                        <p className="lg:text-xxl mt-8">{each?.content}</p>
                        <div className="mt-6">
                          <span className="flex items-center text-sm font-medium transition duration-300 delay-200 hover:text-primary">
                            Learn More
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              <Icon src={ArrowRight} size="sm" className="ms-2" />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <a href="/products">
                <Button variant="outline-light" className="flex items-center mt-22 group">
                  <span>View All Products</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                    <Icon src={ArrowRight} size="sm" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <Script id="AboutInnovations">
          {() => {
            const fadeItems = document.querySelectorAll(".fade-item");

            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    (entry.target as HTMLElement).style.opacity = "1";
                    (entry.target as HTMLElement).style.transform = "translateX(0)";
                  }
                });
              },
              { threshold: 0.3 }
            );

            fadeItems.forEach((el) => observer.observe(el));
          }}
        </Script>
      </ScrollFade>
    </section>
  )
}

export default AboutInnovations;