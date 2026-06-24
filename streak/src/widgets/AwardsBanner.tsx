
/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Anagha Chandrababu
 */

interface BannerSectionProps {
  data: {
    heading: string;
    description: string;
    buttonText: string;
    img: string;
    imgSm: string;
    scrollId: string;
  };
}

const AwardsBanner = (props: BannerSectionProps) => {
  const description = props?.data?.description;

  return (
     <section>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black"></div>
      <div className="container relative flex items-center min-h-screen">
        <div className="w-full lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 text-white max-lg:text-center max-lg:mt-12 z-20">
            <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight">
              Awards & <br className="max-lg:hidden" />
              Recognitions
            </h1>

            <div className="lg:w-3/4">
              <p className="text-md xl:text-xxl mt-8 xl:mt-6">
                {description}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-5/12 lg:ps-8 xl:ps-10 left-0 bottom-0 z-10">
            <img
              src="/images/awards/trophy.webp"
              width={478}
              height={542}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsBanner;
 