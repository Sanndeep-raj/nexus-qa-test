import ScrollFade from "@common/components/ScrollFade";

const DigitalCommerceSection = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container" restrict-transform="true">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-3/12 xl:w-4/12">
              <a href="/digital-commerce" aria-label="digital commerce">
                <img
                  src="/images/services/service-1.webp"
                  width={800}
                  height={762}
                  alt=""
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="lg:w-8/12 xl:w-7/12 max-lg:mt-12">
              <h2 className="text-h4 xl:text-h2">Digital Commerce</h2>
              <p className="text-xxl xl:text-h5 mt-6 xl:mt-12">
                We build scalable digital commerce platforms with seamless
                integrations, ensuring enhanced connectivity and flexibility.
              </p>
              <hr className="border-gray-500 my-6 lg:hidden" />
              <div className="flex max-lg:justify-between gap-5 lg:gap-16 xl:gap-26 max-lg:text-center mt-6 xl:mt-12">
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    1.4+ M
                  </h3>
                  <p className="text-md text-gray-900 mt-2">Products Listed</p>
                </div>
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    100+M
                  </h3>
                  <p className="text-md text-gray-900 mt-2">Revenue</p>
                </div>
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    10+
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    Years Of Industry Expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollFade>
    </section>
  );
}

export default DigitalCommerceSection;