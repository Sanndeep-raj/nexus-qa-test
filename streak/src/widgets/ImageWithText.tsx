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
 * @author Ram S Madhav
 */

import PortableDescription from "@common/components/PortableDescription";
import SanityImage from "@common/components/SanityImage";

const ImageWithText = (props: any) => {
  const { contents } = props || {};
  return (
    <div className="scroll-mt-[76px] xl:ps-20 my-10" id={contents?.title}>
      <h1 className="text-h5 mb-10">{contents?.title}</h1>
      <SanityImage
        src={contents?.banner}
        width={436}
        height={160}
        className="rounded-lg"
        alt={contents?.banner?.alt}
      />
      <p className="text-xxl my-10">{contents?.subtitle}</p>
      <div className="text-md font-medium mb-10">
        <PortableDescription value={contents?.description} />
      </div>
    </div>
  );
};

export default ImageWithText;