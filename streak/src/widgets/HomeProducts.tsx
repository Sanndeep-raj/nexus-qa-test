import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

const HomeProducts = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container will-change-transform">
          <div className="flex justify-between flex-wrap mb-16 xxl:mb-26">
            <h2 className="text-h4 xl:text-h2">Our Products</h2>
            <div className="w-full lg:w-1/2 max-xl:hidden">
              <p className="text-md lg:text-xxl mt-6 lg:mt-0">
                we create products that transform ideas into reality. Designed to
                solve real world challenges, our solutions empower businesses to
                stay ahead!
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-y-12 xl:gap-y-16 lg:gap-x-16 xl:gap-x-20">

            {/* <!-- Left Fade --> */}
            <a href="/products" className="group fade-item left opacity-0 -translate-x-5 transition-all duration-1000 ease-in-out">
              <div className="border-b border-gray-light last:border-b-0 xl:border-b-0 pb-12 xl:rounded-xl xl:p-6 xl:bg-[linear-gradient(211deg,_rgba(128,102,176,0.2)_53%,_rgba(255,255,255,1)_100%)]">
                <img loading="lazy" src="/images/products/shopsphere-logo.svg" alt="shopsphere" className="xl:hidden" />
                <div className="rounded-xl overflow-hidden max-xl:hidden [clip-path:inset(0_round_0.25rem)]">
                  <img loading="lazy" src="/images/products/shopsphere-bg.svg" alt="shopsphere" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]" />
                </div>
                <p className="text-xxl mt-8">A cloud native, feature rich ecommerce platform enabling customizable, omnichannel shopping experiences and seamless multi-brand rollouts.</p>
                <span className="flex items-center text-sm font-medium pt-6">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Icon src={ArrowRight} className="ms-1" size="sm" />
                  </span>
                </span>
              </div>
            </a>

            {/* <!-- Right Fade --> */}
            <a href="/products" className="group fade-item right opacity-0 translate-x-5 transition-all duration-1000 ease-in-out">
              <div className="border-b border-gray-light last:border-b-0 xl:border-b-0 pb-12 xl:rounded-xl xl:p-6 xl:bg-[linear-gradient(211deg,_rgba(136,153,173,0.2)_53%,_rgba(255,255,255,1)_100%)]">
                <img loading="lazy" src="/images/products/streak-logo.svg" alt="streak" className="xl:hidden" />
                <div className="rounded-xl overflow-hidden max-xl:hidden [clip-path:inset(0_round_0.25rem)]">
                  <img loading="lazy" src="/images/products/streak-bg.svg" alt="streak" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]" />
                </div>
                <p className="text-xxl mt-8">A lightweight, high-performance front-end framework for eCommerce, blending SSR & SSG, and built for headless commerce.</p>
                <span className="flex items-center text-sm font-medium pt-6">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Icon src={ArrowRight} className="ms-1" size="sm" />
                  </span>
                </span>
              </div>
            </a>

            {/* <!-- Left Fade --> */}
            <a href="/products" className="group fade-item left opacity-0 -translate-x-5 transition-all duration-1000 ease-in-out">
              <div className="border-b border-gray-light last:border-b-0 xl:border-b-0 pb-12 xl:rounded-xl xl:p-6 xl:bg-[linear-gradient(211deg,_rgba(124,103,176,0.2)_53%,_rgba(255,255,255,1)_100%)]">
                <img loading="lazy" src="/images/products/knitrix-logo.svg" alt="Knitrix" className="xl:hidden" width={144} height={36} />
                <div className="rounded-xl overflow-hidden max-xl:hidden [clip-path:inset(0_round_0.25rem)]">
                  <img loading="lazy" src="/images/products/knitrix-bg.svg" alt="Knitrix" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]" />
                </div>
                <p className="text-xxl mt-8">Seamlessly automating data synchronization between Akeneo PIM and eCommerce platforms for consistent, accurate product information.</p>
                <span className="flex items-center text-sm font-medium pt-6">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Icon src={ArrowRight} className="ms-1" size="sm" />
                  </span>
                </span>
              </div>
            </a>

            {/* <!-- Right Fade --> */}
            <a href="/vbrandx" className="group fade-item right opacity-0 translate-x-5 transition-all duration-1000 ease-in-out">
              <div className="border-b border-gray-light last:border-b-0 xl:border-b-0 pb-12 xl:rounded-xl xl:p-6 xl:bg-[linear-gradient(211deg,_rgba(55,161,132,0.2)_53%,_rgba(255,255,255,1)_100%)]">
                <img loading="lazy" src="/images/products/vbrand-logo.svg" alt="VBrand" className="xl:hidden" />
                <div className="rounded-xl overflow-hidden max-xl:hidden [clip-path:inset(0_round_0.25rem)]">
                  <img loading="lazy" src="/images/products/vbrand-bg.svg" alt="VBrand" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]" />
                </div>
                <p className="text-xxl mt-8">A low code Brand Experience Platform empowering teams to create engaging, non-transactional mobile apps effortlessly.</p>
                <span className="flex items-center text-sm font-medium pt-6">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Icon src={ArrowRight} className="ms-1" size="sm" />
                  </span>
                </span>
              </div>
            </a>
          </div>
          <div className="flex justify-center mt-16 xl:mt-26">
            <a href="/products">
              <Button className="group flex items-center justify-center" variant="outline-secondary">
                <span className="me-2">View All Products</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
        </div>
        <Script id="HomeProducts">
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

export default HomeProducts;