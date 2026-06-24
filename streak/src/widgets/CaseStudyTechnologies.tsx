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
import SanityImage from "@common/components/SanityImage";
import { hasArrayElements } from "utils/commonUtils";

type techDetail = {
  _key: string;
  _type: string;
  title: string;
  description: string;
  media?: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

type TechnologiesData = {
  contents: techDetail[];
  benefits: string[];
  banner?: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

type CaseStudyTechnologiesProps = {
  data: {
    technologies?: TechnologiesData | null;
    data?: {
      technologies?: TechnologiesData | null;
    };
  };
};

const CaseStudyTechnologies = (props: CaseStudyTechnologiesProps) => {
  const technology =
    props?.data?.technologies ?? props?.data?.data?.technologies ?? null;

  if (!technology) return null;

  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2">Technologies used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-10 xl:my-26 xl:mt-20">
          {hasArrayElements(technology?.contents) &&
            technology?.contents?.map((content) => (
              <div
                key={content?._key}
                className="flex items-center gap-8 max-lg:border-b last:border-b-0 border-b-gray-300 max-lg:mb-8 last:mb-0 max-lg:pb-8 last:pb-0"
              >
                <div className="flex items-center justify-center w-[144px] h-30 flex-[0_0_144px] rounded-lg p-4 shadow-lg">
                  <SanityImage
                    src={content?.media}
                    width={114}
                    height={32}
                    alt={content?.media?.alt}
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl">{content?.title}</h3>

                  <p className="xl:text-md">{content?.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="pt-10 pb-20 xl:pt-20">
          <SanityImage
            src={technology?.banner}
            width={1350}
            height={703}
            alt={technology?.banner?.alt}
            className="w-full"
          />
        </div>
        <div className="flex max-md:flex-col max-md:gap-12">
          {hasArrayElements(technology?.benefits) &&
            technology?.benefits?.map((benefit) => {
              const [label, ...rest] = benefit?.split(":");
              const content = rest.join(":").trim();
              const words = content?.split(" ") || [];
              const first = words?.slice(0, 2).join(" ");
              const any = words?.slice(2).join(" ");
              return (
                <div className="md:w-1/3 text-center" key={benefit}>
                  <h3 className="text-h4 xl:text-h2">{label}</h3>
                  <p className="text-md xl:text-h5 mt-4 xl:mt-8">
                    {first}
                    {any && (
                      <>
                        <br />
                        {any}
                      </>
                    )}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTechnologies;
