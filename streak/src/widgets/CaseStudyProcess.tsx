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

type ResponsiveMedia = {
  desktop?: any;
  mobile?: any;
};

type ProcessDetail = {
  _key: string;
  title: string;
  description: string;
  media?: ResponsiveMedia;
};

type CaseStudyProcessProps = {
  data: {
    process?: ProcessDetail[] | null;
    data?: { process?: ProcessDetail[] | null };
  };
};

const CaseStudyProcess = ({ data }: CaseStudyProcessProps) => {
  const process = data?.process ?? data?.data?.process ?? null;
  if (!process) return null;

  return (
    <section className="relative bg-black text-white py-12 xl:py-20">
       <div
          className="absolute top-0 bottom-0 left-1/2 w-2 h-full max-lg:hidden"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #2A2A2A, #2A2A2A 3px, transparent 3px, transparent 10px)",
          }}
        />
      <div className="container relative">
        <h2 className="text-h4 xl:text-h2 font-bold mb-14 xl:mb-24">Process</h2>
        {hasArrayElements(process) &&
          process.map((each, index) => {
            const isLeft = index % 2 === 0;
            const step = `STEP ${index + 1}`;

            return (
              <div
                key={each._key}
                className={`lg:flex lg:items-center lg:gap-18 mb-40 lg:mb-[72px] last:mb-0 ${
                  isLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`lg:flex lg:items-center lg:gap-6 lg:w-1/2 ${
                    isLeft ? "lg:pe-2" : "lg:ps-2"
                  }`}
                >
                  <div
                    className={`order-1 relative lg:flex-[0_0_155px] rounded-lg max-lg:mb-6 overflow-hidden 
                      before:absolute before:left-0 before:top-0 before:w-full before:h-screen before:bg-black/70 before:z-10
                      ${isLeft ? "lg:order-2" : "lg:order-1"}
                    }`}
                  >
                    {each.media?.desktop && (
                      <SanityImage
                        src={each.media.desktop}
                        width={400}
                        height={392}
                        alt={each.title}
                        className="w-full max-lg:hidden"
                      />
                    )}

                    {each.media?.mobile && (
                      <SanityImage
                        src={each.media.mobile}
                        width={800}
                        height={215}
                        alt={each.title}
                        className="w-full lg:hidden"
                      />
                    )}

                    <span className="absolute left-0 top-0 flex items-center lg:justify-center w-full h-full text-md font-semibold p-8 lg:p-4 z-20">
                      {each.title}
                    </span>
                  </div>
                  <div
                    className={`${
                      isLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                   <p
      className={
        isLeft ? "lg:text-end xl:text-md" : "xl:text-md"
      }
    >
      {each.description}
    </p>
                  </div>
                </div>

                <div className="lg:w-1/2 max-lg:hidden relative">
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-1
  ${isLeft ? "-left-17" : "-right-19"}
  `}
                  >
                    {isLeft ? (
                      <>
                        <span className="w-[9px] h-[9px] border-[3px] border-primary rounded-full"></span>
                        <span className="h-[3px] bg-primary w-7"></span>
                      </>
                    ) : (
                      <>
                        <span className="h-[3px] bg-primary w-7"></span>
                        <span className="w-[9px] h-[9px] border-[3px] border-primary rounded-full"></span>
                      </>
                    )}
                  </div>
                  <p
                    className={`absolute top-1/2 -translate-y-1/2 text-[#AEAEAE] text-sm font-semibold uppercase ${
                      isLeft ? "left-0 ml-2" : "right-0 mr-2 text-end"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default CaseStudyProcess;
