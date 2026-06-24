import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import { Script } from "streak/components";

const ProductEngineeringProducts = () => {

  return (
    <section className="flex py-12 xl:py-20 xxl:py-26" id="products">
      <ScrollFade>
        <div className="container">
          <div className="flex justify-between flex-wrap mb-16 xxl:mb-26">
            <h2 className="text-h4 xl:text-h2">Our Products</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-y-12 xl:gap-y-16 lg:gap-x-16 xl:gap-x-20">
            {/* eslint-disable-next-line max-len */}
            <div className="border-b border-gray-light last:border-b-0 xl:border-b-0 pb-12 xl:rounded-xl xl:p-6 xl:bg-[linear-gradient(211deg,_rgba(128,102,176,0.2)_53%,_rgba(255,255,255,1)_100%)]">
              <img src="/images/products/shopsphere-logo.svg" alt="shopsphere-logo" className="xl:hidden" />
              <div className="rounded-xl overflow-hidden max-xl:hidden">
                <img src="/images/products/shopsphere-bg.svg" alt="shopsphere-bg" className="w-full" />
              </div>
              <p className="text-xxl mt-8">
                A cloud native, feature rich ecommerce platform enabling
                customizable, omnichannel shopping experiences and seamless
                multi-brand rollouts.
              </p>
              <a href="/products" className="flex items-center text-sm font-medium pt-6">
                Learn More
                <span className="sr-only">about ShopSphere ecommerce platform</span>
                <Icon src={ArrowRight} className="ms-1" size="sm" />
              </a>
            </div>
            {/* eslint-disable-next-line max-len */}
            <div className="border-b border-gray-light last:border-b-0 xl:border-b-0 pb-12 xl:rounded-xl xl:p-6 xl:bg-[linear-gradient(211deg,_rgba(136,153,173,0.2)_53%,_rgba(255,255,255,1)_100%)]">
              <img src="/images/products/streak-logo.svg" alt="streak-logo" className="xl:hidden" />
              <div className="rounded-xl overflow-hidden max-xl:hidden">
                <img src="/images/products/streak-bg.svg" alt="streak-bg" className="w-full" />
              </div>
              <p className="text-xxl mt-8">
                A lightweight, high-performance front-end framework for eCommerce,
                blending SSR & SSG, and built for headless commerce.
              </p>
              <a href="/products" className="flex items-center text-sm font-medium pt-6">
                Learn More
                <span className="sr-only">about Streak frontend framework</span>
                <Icon src={ArrowRight} className="ms-1" size="sm" />
              </a>
            </div>
            {/* eslint-disable-next-line max-len */}
            <div className="border-b border-gray-light last:border-b-0 lg:border-b-0 pb-12 xl:rounded-xl xl:p-6 xl:bg-[linear-gradient(211deg,_rgba(124,103,176,0.2)_53%,_rgba(255,255,255,1)_100%)]">
              <img
                src="/images/products/knitrix-logo.svg"
                className="xl:hidden"
                height={36}
                width={144}
                alt="knitrix-logo"
              />
              <div className="rounded-xl overflow-hidden max-xl:hidden">
                <img src="/images/products/knitrix-bg.svg" className="w-full" alt="knitrix-bg" />
              </div>
              <p className="text-xxl mt-8">
                Seamlessly automating data synchronization between Akeneo PIM and
                eCommerce platforms for consistent, accurate product information.
              </p>
              <a href="/products" className="flex items-center text-sm font-medium pt-6">
                Learn More
                <span className="sr-only">about Knitrix PIM sync platform</span>
                <Icon src={ArrowRight} className="ms-1" size="sm" />
              </a>

            </div>
            {/* eslint-disable-next-line max-len */}
            <div className="border-b border-gray-light last:border-b-0 xl:border-b-0 xl:rounded-xl xl:p-6 xl:bg-[linear-gradient(211deg,_rgba(55,161,132,0.2)_53%,_rgba(255,255,255,1)_100%)]">
              <img src="/images/products/vbrand-logo.svg" alt="vbrand-logo" className="xl:hidden" />
              <div className="rounded-xl overflow-hidden max-xl:hidden">
                <img src="/images/products/vbrand-bg.svg" alt="vbrand-bg" className="w-full" />
              </div>
              <p className="text-xxl mt-8">
                A low code Brand Experience Platform empowering teams to create
                engaging, non-transactional mobile apps effortlessly.
              </p>
              <a href="/vbrandx" className="flex items-center text-sm font-medium pt-6">
                Learn More
                <span className="sr-only">about VBrandX brand experience platform</span>
                <Icon src={ArrowRight} className="ms-1" size="sm" />
              </a>


            </div>
          </div>
          <div className="flex justify-center mt-16 xl:mt-26">
            <a href="/products">
              <Button
                className="flex items-center justify-center group"
                variant="outline-secondary"
              >
                <span className="me-2">View All Products</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Icon src={ArrowRight} />
                </span>
              </Button>
            </a>
          </div>
        </div>

        <Script id="ProductEngineeringProducts">
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
  );
};

export default ProductEngineeringProducts;
