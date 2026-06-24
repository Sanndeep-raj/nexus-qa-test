import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

type HomeClientProps = {
  data: {
    isBlackBg: boolean;
    clients: {
      logo: string;
      client: string;
    }[]
  }
}

const HomeClients = (props: HomeClientProps) => {
  const { isBlackBg, clients } = props?.data || {};

  return (
    <section className={`${isBlackBg ? "text-white bg-black" : ""} py-12 xl:py-20 xxl:py-26`}>
      <ScrollFade>
        <div className="container will-change-transform">
          <div className="flex lg:justify-between flex-wrap mb-16 xl:mb-24 xxl:mb-30">
            <h2 className="text-h4 xl:text-h2">Clients</h2>
            <div className="lg:flex lg:justify-end w-full lg:w-1/2 xxl:w-2/3 max-lg:mt-4">
              <p className="text-xxl xl:text-h4 lg:mt-0">
                Serving Global Leaders with Excellence
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-28 justify-between" id="logos-grid">
            {
              clients?.map((each) => (
                <div key={each?.client} className="flex items-center justify-center">
                  <img loading="lazy" src={each?.logo} alt={each?.client} width="120" height="60" className={`w-full max-w-[126px] xl:max-w-[170px] ${isBlackBg ? "xl:opacity-60" : "opacity-80"} hover:opacity-100 grayscale hover:grayscale-0 transition-all`} />
                </div>
              ))
            }
          </div>

          <div className="flex justify-center mt-16 xl:mt-26">
            <a href="/clients">
              <Button variant={isBlackBg ? "outline-light" : "outline-secondary"} className="flex items-center group">
                <span>View All Clients</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
        </div>
        <Script id="HomeClientsScripts">
          {() => {
            const logoWrappers = document.querySelectorAll("#logos-grid > div");

            logoWrappers.forEach((wrapper, index) => {
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
  );
}

export default HomeClients;