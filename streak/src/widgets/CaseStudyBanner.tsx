/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author
 * Anagha Chandrababu
 */
import Icon from "@common/components/Icon";
import SanityImage from "@common/components/SanityImage";
import MouseArrowBottomWhite from "@common/icons/MouseArrowBottomWhite";

type CaseStudy = {
  data: {
    banner: {
      _key: string;
      link: string;
      caseStudyBannerImage: {
        _type: string;
        desktop: { url: string; alt: string };
        mobile: { url: string; alt: string };
      };
      subTitle: string;
      industryType: string;
    };
    title: string;
  };
};
const CaseStudyBanner = (props: CaseStudy) => {
  const banner = props?.data?.banner ?? null;
  const title = props?.data?.title ?? "";
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <SanityImage
          src={banner?.caseStudyBannerImage?.desktop}
          alt={banner?.caseStudyBannerImage?.desktop?.alt}
          fill
          className="case_study_banner_image w-full h-full max-h-full object-cover"
          loading="lazy"
        />
        <SanityImage
          src={banner?.caseStudyBannerImage?.mobile}
          alt={banner?.caseStudyBannerImage?.mobile?.alt}
          fill
          className="case_study_banner_image w-full h-full max-h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container relative z-10 flex items-center min-h-screen">
        <div>
          <div className="xl:w-9/12 text-white">
            <h1 className="text-h4 xl:text-h1 text-primary-light leading-tight">
              {title}
            </h1>
            <p className="text-md xl:text-xxl mt-8">{banner?.subTitle ?? ""}</p>

            {banner?.industryType && (
              <div className="mt-14">
                <h2 className="xl:text-md">Industry</h2>
                <p className="text-md xl:text-xxl">{banner.industryType}</p>
              </div>
            )}
          </div>
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10 max-lg:hidden"
            style={{ animationDuration: "2s" }}
          >
            <Icon src={MouseArrowBottomWhite} size="" variant="white" className="w-8 h-8" />
            <div className="h-8 bg-linear-to-b from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBanner;
