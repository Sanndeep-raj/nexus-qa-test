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
import { getCaseStudyGoalClass, hasArrayElements } from "utils/commonUtils";

type GoalDetail = {
  _key: string;
  _type: string;
  title: string;
  description: string;
};

type GoalsData = {
  description?: string;
  details?: GoalDetail[];
  features?: string[];
};

type CaseStudyGoalProps = {
  data: {
    goals?: GoalsData | null;
    data?: {
      goals?: GoalsData | null;
    };
  };
};

const CaseStudyGoal = (props: CaseStudyGoalProps) => {
  const goals = props?.data?.goals ?? props?.data?.data?.goals ?? null;

  if (!goals) return null;

  return (
   <section className="bg-black xl:bg-[image:url(/images/case-studies/bg.svg)] bg-right-bottom  bg-no-repeat bg-[length:72%]">
      <div className="container">
        <div className="xl:flex xl:justify-between">
          <div className="lg:w-7/12 xl:w-5/12 text-white py-12 xl:py-20 xxl:py-26">
            <h2 className="text-h4 xl:text-h2">The Goal</h2>

            {goals?.description && (
              <p className="text-md xl:text-h5 mt-4 xl:mt-8">
                {goals.description}
              </p>
            )}

            {hasArrayElements(goals?.details) &&
              goals.details.map((detail) => (
                <div className="mt-14 mb-12 xl:mb-16" key={detail._key}>
                  <h3 className="text-xxl xl:text-h5">{detail.title}</h3>
                  <p className="xl:text-md mt-4">{detail.description}</p>
                </div>
              ))}
          </div>

          <div className="xl:w-5/12 xl:flex xl:items-end text-white max-xl:hidden">
            <div className="flex items-end justify-center gap-5 px-6">
              {hasArrayElements(goals?.features) &&
                goals.features.map((feature, index) => {
                  const [first, ...rest] = feature.split(" ");
                  return (
                    <div className="flex flex-col items-center" key={feature}>
                      <div className="text-primary text-center text-md w-[104px] mb-10">
                        <>
                          {first}
                          {rest?.length > 0 && (
                            <>
                              <br />
                              {rest.join(" ")}
                            </>
                          )}
                        </>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[19px] h-[19px] rounded-full bg-white">
                          <span className="w-[10px] h-[10px] flex-[0_0_10px] rounded-full bg-primary" />
                        </div>
                        <div className={getCaseStudyGoalClass(index)} />
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

export default CaseStudyGoal;
