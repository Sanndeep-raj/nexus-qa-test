/* eslint-disable import/no-extraneous-dependencies */
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

import { urlFor } from "utils/sanityClient";

const SanityImage = (props: any) => {
  const { src, width, height, alt, urlWithOutDimension, ...rest } = props || {};

  return src?.asset?._ref ? (
    <img
      src={
        urlWithOutDimension
          ? urlFor(src).url()
          : urlFor(src).width(width).height(height).url()
      }
      alt={alt ?? ""}
      width={width}
      height={height}
      {...rest}
    />
  ) : (
    <></>
  );
};

export default SanityImage;
