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
import renderPortableText from "@common/components/PortableText";

type SolutionDetail = {
  _key: string;
  _type: string;
  title: string;
  description: any;
  image?: any;              
};

type CaseStudySolutionProps = {
  data: {
    solution?: {
      description?: string;
      details?: SolutionDetail[];
    } | null;

    data?: {
      solution?: {
        description?: string;
        details?: SolutionDetail[];
      } | null;
    };
  };
};

const CaseStudySolution = ({ data }: CaseStudySolutionProps) => {
 
  const solutionRoot =
    data?.solution ?? data?.data?.solution ?? null;

  const details = solutionRoot?.details ?? null;

  if (!details) return null;

  return (
    <section className="text-black py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2">Solution</h2>

        {solutionRoot?.description && (
          <div className="text-md xl:text-xxl mt-6 xl:mt-8">
            {solutionRoot.description}
          </div>
        )}

        {hasArrayElements(details) &&
          (details as SolutionDetail[]).map((each, index) => {
            const isLast = index + 1 === details.length;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={each._key}
                className={`md:flex md:items-center md:justify-between my-20 xl:my-30 ${
                  isLeft ? "mt-14" : "mt-12"
                } ${isLast ? "mb-0" : ""}`}
              >
                {isLeft && each.image && (
                  <div className="md:w-4/12 lg:w-5/12 md:ps-3 max-md:mb-12 md:order-2">
                    <SanityImage
                      src={each.image}
                      width={554}
                      height={481}
                      alt={each.image?.alt}
                      className="w-full"
                    />
                  </div>
                )}

                {!isLeft && each.image && (
                  <div className="md:w-4/12 lg:w-5/12 md:pe-3 max-md:mb-12">
                    <SanityImage
                      src={each.image}
                      width={492}
                      height={458}
                      alt={each.image?.alt}
                      className="w-full"
                    />
                  </div>
                )}
                <div className={`md:w-6/12 ${isLeft ? "md:order-1" : ""}`}>
                  <h3 className="text-xxl xl:text-h4 mb-4 xl:mb-8">
                    {each.title}
                  </h3>

                  <div
                    className="xl:text-xxl mt-4 space-y-4"
                    dangerouslySetInnerHTML={{
                      __html: renderPortableText(each.description || []),
                    }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default CaseStudySolution;
