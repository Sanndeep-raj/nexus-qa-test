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
import { hasArrayElements } from "utils/commonUtils";
import SanityImage from "@common/components/SanityImage";

type ImpactDetail = {
  _key: string;
  _type: string;
  title: string;
  description: string;
  media?: any;
};

type CaseStudyImpactProps = {
  data: {
    impact?: ImpactDetail[] | null;
    data?: {
      impact?: ImpactDetail[] | null;
    };
  };
};

const CaseStudyImpact = ({ data }: CaseStudyImpactProps) => {
  const impact = data?.impact ?? data?.data?.impact ?? null;

  if (!impact) return null;

  return (
    <section className="text-white bg-black py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2">Impact</h2>

        {hasArrayElements(impact) &&
          impact.map((each, index) => {
            const isLast = index + 1 === impact.length;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={each._key}
                className={`md:flex md:items-center md:justify-between my-20 xl:my-30 ${
                  isLeft ? "mt-14" : "mt-12"
                } ${isLast ? "mb-0" : ""}`}
              >
                {isLeft && each.media && (
                  <div className="md:w-4/12 lg:w-5/2 md:ps-3 max-md:mb-12 md:order-2">
                    <SanityImage
                      src={each.media}
                      width={554}
                      height={481}
                      alt={each.media?.alt}
                      className="w-full"
                    />
                  </div>
                )}

                {!isLeft && each.media && (
                  <div className="md:w-4/12 lg:w-5/2 md:pe-3 max-md:mb-12">
                    <SanityImage
                      src={each.media}
                      width={492}
                      height={458}
                      alt={each.media?.alt}
                      className="w-full"
                    />
                  </div>
                )}

                <div className={`md:w-6/12 ${isLeft ? "md:order-1" : ""}`}>
                  <h3 className="text-xxl xl:text-h4 mb-4 xl:mb-8">{each.title}</h3>
                  <p className="xl:text-xxl mt-4">{each.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default CaseStudyImpact;
