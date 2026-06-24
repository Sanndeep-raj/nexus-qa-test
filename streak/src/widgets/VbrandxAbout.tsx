/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Valoriz UI Team
 */
import { Script } from "streak/components";

const VbrandxAbout = () => {

  return (
    <section
      className="text-white bg-black py-12 xl:py-20 xxl:py-26"
      id="vstarted"
    >
      <div className="container">
        <div className="md:w-5/12">
          <h2 className="text-h4 lg:text-h2">
            Powering intuitive app creation
          </h2>
          <p className="text-md lg:text-h6 mt-4">
            With This Technology, We Guarantee You
          </p>
        </div>
        <div id="container" className="mt-10 lg:mt-22">
          <div
            id="section1"
            className="flex max-md:flex-col max-md:justify-between md:items-center min-h-[469px] lg:h-[469px] rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover mb-8 last:mb-0 sticky top-[200px]"
            style={{ backgroundImage: "url(/images/vbrandx/card-bg-1.webp)" }}
          >
            <div className="flex justify-end md:justify-center lg:h-full md:w-5/12 md:order-2 pt-6 lg:pt-17">
              <img
                src="/images/vbrandx/speed.webp"
                width={732}
                height={822}
                alt=""
                className="w-auto max-h-full max-md:hidden"
              />
              <img
                src="/images/vbrandx/speed-sm.webp"
                width={644}
                height={862}
                alt=""
                className="w-full md:hidden max-w-[65%] max-md:-mb-6"
              />
            </div>
            <div className="md:w-7/12 md:order-1 md:ps-16 md:pe-12 lg:ps-19 max-md:p-6 max-md:pt-0">
              <h3 className="text-h4 lg:text-h3">Speed</h3>
              <p className="text-xxl lg:text-h5 mt-2">
                Designed for rapid deployment and effortless content management.
              </p>
            </div>
          </div>
          <div
            id="section2"
            className="flex max-md:flex-col md:items-center min-h-[469px] lg:h-[469px] rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover mb-8 last:mb-0 sticky top-[200px]"
            style={{ backgroundImage: "url(/images/vbrandx/card-bg-2.webp)" }}
          >
            <div className="flex flex-1 items-center justify-end lg:h-full md:w-5/12 md:order-2 max-md:ps-6 pt-12 lg:pt-0">
              <img
                src="/images/vbrandx/interactivity.webp"
                width={1000}
                height={430}
                alt=""
                className="w-auto max-h-[70%]"
              />
            </div>
            <div className="max-md:flex max-md:flex-col max-md:justify-end flex-1 md:w-7/12 md:order-1 md:ps-16 md:pe-8 lg:ps-19 max-md:p-6 max-md:pt-0">
              <h3 className="text-h4 lg:text-h3">Interactivity</h3>
              <p className="text-xxl lg:text-h5 mt-2">
                Built to create interactive, non-transactional mobile
                experiences.
              </p>
            </div>
          </div>
          <div
            id="section3"
            className="flex max-md:flex-col max-md:justify-between md:items-center min-h-[469px] lg:h-[469px] rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover mb-8 last:mb-0 sticky top-[200px]"
            style={{ backgroundImage: "url(/images/vbrandx/card-bg-3.webp)" }}
          >
            <div className="flex justify-end md:justify-end lg:h-full md:w-5/12 md:order-2 pt-6 lg:pt-17">
              <img
                src="/images/vbrandx/zero-complexity.webp"
                width={444}
                height={328}
                alt=""
                className="w-auto max-h-full object-contain max-lg:hidden"
              />
              <img
                src="/images/vbrandx/zero-complexity-sm.webp"
                width={450}
                height={300}
                alt=""
                className="w-full lg:hidden object-contain max-w-[65%]"
              />
            </div>
            <div className="md:w-7/12 md:order-1 md:ps-16 md:pe-12 lg:ps-19 max-md:p-6 max-md:pt-0">
              <h3 className="text-h4 lg:text-h3">Zero Complexity</h3>
              <p className="text-xxl lg:text-h5 mt-2">
                Empowers businesses to launch apps without technical complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Script id="VbrandxAbout">
        {() => {
          let started = false;

          const target1 = document.getElementById("section1") as HTMLElement;
          const target2 = document.getElementById("section2") as HTMLElement;
          const target3 = document.getElementById("section3") as HTMLElement;
          const options = {
            root: null,
            threshold: 0.8,
          };
          const observer = new IntersectionObserver((entries) => {
            if (!started) {
              started = true;
              return;
            }
            entries.forEach((entry) => {
              if (entry.target === target2) {
                setTransform(entry.isIntersecting, false);
              }
              if (entry.target === target3) {
                setTransform(true, entry.isIntersecting);
              }
            });
          }, options);
          observer.observe(target2);
          observer.observe(target3);

          const setTransform = (section1: boolean, section2: boolean) => {
            target2.style.transform = section2
              ? "translateY(-33.5071px) rotate(-1.78705deg) scale(0.955324)"
              : "none";

            target2.style.transition = "transform 0.5s ease-in-out";

            target1.style.transform = section1
              ? "translateY(-81.0922px) rotate(-3.89243deg) scale(0.870252)"
              : "none";

            target1.style.transition = "transform 0.5s ease-in-out";

          }
        }
        }
      </Script>
    </section>
  );
};

export default VbrandxAbout;