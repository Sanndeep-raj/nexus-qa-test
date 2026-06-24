import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

const HomePartners = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26 bg-light-gradient">
      <ScrollFade>
        <div className="container will-change-transform">
          <h2 className="text-h4 xl:text-h2 mb-16 xl:mb-30">Partners</h2>
          <div className="xl:w-10/12 xl:mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 xl:gap-x-30 gap-y-26 xl:gap-y-30" id="partners-grid">
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/microsoft.svg" alt="microsoft" /></div>
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/shopify.svg" alt="shopify" /></div>
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/sanity.svg" alt="sanity" /></div>
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/akeneo.svg" alt="akeneo" /></div>
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/odoo_logo.svg" alt="odoo" /></div>
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/commerce-layer.svg" alt="commerce-layer" /></div>
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/brink.svg" alt="brink" /></div>
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/algolia.svg" alt="algolia" /></div>
              <div className="flex justify-center items-center"> <img loading="lazy" width={168} height={60} src="/images/partners/occtoo.svg" alt="occtoo" /></div>
            </div>
          </div>
          <div className="flex justify-center mt-16 xl:mt-26">
            <a href="/partners">
              <Button variant="outline-secondary" className="flex items-center group">
                <span>View All Partners</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
        </div>
        <Script id="HomePartners">
          {() => {
            const logoWrappers = document.querySelectorAll("#partners-grid > div");
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
  )
}

export default HomePartners;