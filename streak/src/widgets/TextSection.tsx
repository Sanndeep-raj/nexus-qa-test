/* eslint-disable max-len */
/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Neeraj
 */

import PortableDescription from "@common/components/PortableDescription";

const TextSection = (props: any) => {
  const { contents, index, isLastWidget } = props || {};

  return (
    <div className="scroll-mt-30 xl:ps-20" id={contents?.title}>
      {index !== 0 && <h1 className="text-h5 mb-10">{contents?.title}</h1>}
      <p className="text-xxl mt-8 md:mt-0">{contents?.subtitle}</p>
      <div className={isLastWidget ? "text-md" : "text-lg font-medium mt-10"}>
        <PortableDescription value={contents?.description} />
      </div>
    </div>
  );
};

export default TextSection;