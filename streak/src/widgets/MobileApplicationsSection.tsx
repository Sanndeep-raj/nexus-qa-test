import ScrollFade from "@common/components/ScrollFade";

const MobileApplicationsSection = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container" restrict-transform="true">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-3/12 xl:w-4/12">
              <img
                src="/images/services/service-3.webp"
                width={800}
                height={762}
                alt=""
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="lg:w-8/12 xl:w-7/12 max-lg:mt-12">
              <h2 className="text-h4 xl:text-h2">Mobile Applications</h2>
              <p className="text-xxl xl:text-h5 mt-6 xl:mt-12">
                We design custom mobile apps that fit your needs perfectly and
                integrate seamlessly with your systems.
              </p>
              <hr className="border-gray-500 my-6 lg:hidden" />
              <div className="flex max-lg:justify-between gap-5 lg:gap-16 xl:gap-26 max-lg:text-center mt-6 xl:mt-12">
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    100+
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    custom apps launched successfully
                  </p>
                </div>
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    98%
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    user satisfaction across projects.
                  </p>
                </div>
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    10+
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    years in cross-platform development
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

export default MobileApplicationsSection;