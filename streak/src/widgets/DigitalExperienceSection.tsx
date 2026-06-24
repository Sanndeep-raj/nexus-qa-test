import ScrollFade from "@common/components/ScrollFade";

const DigitalExperienceSection = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container" restrict-transform="true">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-3/12 xl:w-4/12 lg:order-2">
              <img
                src="/images/services/service-4.webp"
                width={800}
                height={762}
                alt=""
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="lg:w-8/12 xl:w-7/12 max-lg:mt-12 lg:order-1">
              <p className="text-h4 xl:text-h2">Digital Experience</p>
              <p className="text-xxl xl:text-h5 mt-6 xl:mt-12">
                We design digital experiences that are smooth, fun to use, and
                leave users excited to return.
              </p>
              <hr className="border-gray-500 my-6 lg:hidden" />
              <div className="flex max-lg:justify-between gap-5 lg:gap-16 xl:gap-26 max-lg:text-center mt-6 xl:mt-12">
                <div className="max-lg:flex-1">
                  <p className="text-xxl xl:text-h4 max-xl:font-semibold">
                    20+
                  </p>
                  <p className="text-md text-gray-900 mt-2">
                    Top-rated UX/UI designers
                  </p>
                </div>
                <div className="max-lg:flex-1">
                  <p className="text-xxl xl:text-h4 max-xl:font-semibold">
                    97%
                  </p>
                  <p className="text-md text-gray-900 mt-2">
                    success rate in UI redesigns
                  </p>
                </div>
                <div className="max-lg:flex-1">
                  <p className="text-xxl xl:text-h4 max-xl:font-semibold">
                    100%
                  </p>
                  <p className="text-md text-gray-900 mt-2">
                    accessibility compliance across projects
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

export default DigitalExperienceSection;