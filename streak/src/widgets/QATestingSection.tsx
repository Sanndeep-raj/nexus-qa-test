import ScrollFade from "@common/components/ScrollFade";

const QATestingSection = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container" restrict-transform="true">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-3/12 xl:w-4/12">
              <img
                src="/images/services/service-5.webp"
                width={800}
                height={762}
                alt=""
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="lg:w-8/12 xl:w-7/12 max-lg:mt-12">
              <h2 className="text-h4 xl:text-h2">QA & Testing</h2>
              <p className="text-xxl xl:text-h5 mt-6 xl:mt-12">
                Delivering flawless, high-performing software through rigorous
                testing and quality assurance.
              </p>
              <hr className="border-gray-500 my-6 lg:hidden" />
              <div className="flex max-lg:justify-between gap-5 lg:gap-16 xl:gap-26 max-lg:text-center mt-6 xl:mt-12">
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    98%
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    Defect Detection Rate
                  </p>
                </div>
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    99.9%
                  </h3>
                  <p className="text-md text-gray-900 mt-2">Bug-Free Releases</p>
                </div>
                <div className="max-lg:flex-1">
                  <h3 className="text-xxl xl:text-h4 max-xl:font-semibold">
                    1M+
                  </h3>
                  <p className="text-md text-gray-900 mt-2">
                    Lines of Code Tested
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

export default QATestingSection;