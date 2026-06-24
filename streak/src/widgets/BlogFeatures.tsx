/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */

import { hasArrayElements } from "utils/commonUtils";

export const renderLabelAndContent = (point: any) => {
  const [label, ...rest] = point?.split(":");
  const content = rest.join(":").trim();
  return (
    <>
      <span className="font-semibold">{label}:</span> {content}
    </>
  );
};

const RenderPoints = (props: any) => {
  const { title, points } = props || {};
  return (
    <>
      <p className="text-xxl my-10">{title}</p>
      <div className="flex flex-col gap-y-10">
        {points?.map((point: any) => (
          <div className="flex items-start gap-x-8" key={point}>
            <div>
              <div className="w-4 h-4 bg-gray-500 rounded-full mt-2"></div>
            </div>
            <p className="text-md font-medium">
              {renderLabelAndContent(point)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

const BlogFeatures = (props: any) => {
  const { contents } = props || {};
  const {
    benefitsRealised,
    experienceInStore,
    postExperience,
    priorToPurchase,
    purchaseExperience,
    title,
    summary,
  } = contents || {};

  return (
    <div className="scroll-mt-[76px] xl:ps-20 mt-10" id={title}>
      <h1 className="text-h5">{title}</h1>

      {hasArrayElements(priorToPurchase) && (
        <RenderPoints points={priorToPurchase} title="Prior to Purchase:" />
      )}

      {hasArrayElements(experienceInStore) && (
        <RenderPoints points={experienceInStore} title="Experience in-store:" />
      )}

      {hasArrayElements(purchaseExperience) && (
        <RenderPoints points={purchaseExperience} title="Purchase Experience" />
      )}

      {hasArrayElements(postExperience) && (
        <RenderPoints points={postExperience} title="Post-Purchase:" />
      )}

      {hasArrayElements(benefitsRealised) && (
        <>
          <p className="text-xxl my-10">Benefits Realised:</p>
          <div className="flex flex-col gap-y-10">
            {benefitsRealised?.map((each) => (
              <div className="flex items-start gap-x-8" key={each}>
                <div>
                  <div className="w-6 h-6 flex items-center justify-center bg-primary rounded-full">
                    <svg
                      className="h-3 w-3 text-white pointer-events-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-md font-medium">
                  {renderLabelAndContent(each)}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <p className="text-md font-medium my-10">{summary}</p>
    </div>
  );
};

export default BlogFeatures;
