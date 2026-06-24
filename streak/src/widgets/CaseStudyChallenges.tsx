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
import { hasArrayElements, getCaseStudyChallengesClass } from "utils/commonUtils";

type ChallengeDetail = {
  _key: string;
  _type: string;
  title: string;
  description: string;
};

type ChallengesData = {
  details: ChallengeDetail[];
  features: string[];
};

type CaseStudyChallengesProps = {
  data: {
    challenges?: ChallengesData | null;
    data?: {
      challenges?: ChallengesData | null;
    };
  };
};

const CaseStudyChallenges = (props: CaseStudyChallengesProps) => {
  const challenges = props?.data?.challenges ?? props?.data?.data?.challenges ?? null;

  if (!challenges) return null;

  return (
   <section className="xl:bg-[image:url(/images/case-studies/bg-2.svg)] bg-right-top bg-no-repeat bg-[length:72%]">
      <div className="container">
        <div className="xl:flex xl:justify-between">
          <div className="lg:w-7/12 xl:w-5/12 py-12 xl:py-20 xxl:py-26">
            <h2 className="text-h4 xl:text-h2">Challenges</h2>
            {hasArrayElements(challenges.details) &&
              challenges.details.map((detail, i) => (
                <div
                  key={detail._key}
                  className={i === 0 ? "mt-6 xl:mt-24 mb-12 xl:mb-16" : "mt-14 xl:mb-16"}
                >
                  <h3 className="text-xxl xl:text-h5">{detail.title}</h3>
                  <p className="xl:text-md mt-4">{detail.description}</p>
                </div>
              ))}
          </div>
          <div className="xl:w-5/12 xl:flex xl:items-start text-white max-xl:hidden">
            <div className="flex items-start justify-center gap-5 px-6">
              {hasArrayElements(challenges.features) &&
                challenges.features.map((feature: string, i: number) => {
                  const [first, ...rest] = feature.split(" ");
                  return (
                    <div className="flex flex-col items-center" key={feature}>
                      <div className="flex flex-col items-center">
                        <div className={getCaseStudyChallengesClass(i)} />
                        <div className="flex items-center justify-center w-[19px] h-[19px] rounded-full bg-white">
                          <span className="w-[10px] h-[10px] flex-[0_0_10px] rounded-full bg-red-medium" />
                        </div>
                      </div>
                      <div className="text-red-medium text-center text-md w-[104px] mt-10">
                        {first}
                        {rest.length > 0 && (
                          <>
                            <br />
                            {rest.join(" ")}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default CaseStudyChallenges;
