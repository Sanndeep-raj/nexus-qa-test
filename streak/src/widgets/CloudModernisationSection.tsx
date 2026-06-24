import ScrollFade from "@common/components/ScrollFade";

const CloudModernisationSection = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container" restrict-transform="true">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-3/12 xl:w-4/12 lg:order-2">
              <img
                src="/images/services/service-2.webp"
                width={800}
                height={762}
                alt=""
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="lg:w-8/12 xl:w-7/12 max-lg:mt-12 lg:order-1">
              <h2 className="text-h4 xl:text-h2">Cloud Modernisation</h2>
              <p className="text-xxl xl:text-h5 mt-6 xl:mt-12">
                We help modernize your cloud with smooth migration, serverless
                solutions, and top notch security.
              </p>
              <hr className="border-gray-500 my-6 lg:hidden" />
              <div className="flex max-lg:justify-between gap-5 lg:gap-16 xl:gap-26 max-lg:text-center mt-6 xl:mt-12">
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    400+
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    Migrated servers to the cloud
                  </p>
                </div>
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    40%
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    faster deployment cycles after modernization
                  </p>
                </div>
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    10+
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    {" "}
                    years mastering AWS, Azure & cloud solutions
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

export default CloudModernisationSection;