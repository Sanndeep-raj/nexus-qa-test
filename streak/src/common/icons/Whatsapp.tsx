/* eslint-disable max-len */
/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * contract agreement you entered into with Valoriz.
 *
 * AppHeader
 *
 * @author Valoriz UI Team
 *
 */
import React from "react";

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "",
}: IconComponentProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <defs>
        <clipPath id="clip-whatsapp">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
      <g id="whatsapp" clipPath="url(#clip-whatsapp)">
        <g id="Vector" transform="translate(-0.328)">
          <path
            id="Path_1"
            data-name="Path 1"
            d="M20.74,3.488A11.9,11.9,0,0,0,2.016,17.837L.328,24l6.306-1.654a11.888,11.888,0,0,0,5.685,1.448h.005A11.9,11.9,0,0,0,20.74,3.488Zm-8.415,18.3h0a9.876,9.876,0,0,1-5.033-1.378l-.361-.214-3.742.981,1-3.647-.235-.374a9.888,9.888,0,1,1,8.376,4.632Z"
            fill="currentColor"
          />
          <path
            id="Path_2"
            data-name="Path 2"
            d="M9.385,6.843c-.22-.489-.452-.5-.661-.508-.171-.007-.367-.007-.563-.007a1.08,1.08,0,0,0-.784.368,3.294,3.294,0,0,0-1.029,2.45,5.716,5.716,0,0,0,1.2,3.039,12.061,12.061,0,0,0,5.019,4.435c2.482.979,2.987.784,3.526.735a2.968,2.968,0,0,0,1.983-1.4,2.454,2.454,0,0,0,.171-1.4c-.073-.122-.269-.2-.563-.343s-1.738-.858-2.008-.956-.465-.147-.661.147-.759.956-.93,1.151-.343.221-.637.074a8.035,8.035,0,0,1-2.363-1.458,8.846,8.846,0,0,1-1.635-2.035c-.171-.294-.018-.453.129-.6.132-.132.294-.343.441-.515a2.015,2.015,0,0,0,.294-.49.541.541,0,0,0-.024-.515C10.217,8.877,9.646,7.424,9.385,6.843Z"
            fillRule="evenodd"
          />
          <path
            id="Path_3"
            data-name="Path 3"
            d="M20.643,3.45A11.761,11.761,0,0,0,2.134,17.635L.465,23.727,6.7,22.092a11.751,11.751,0,0,0,5.62,1.431h.005A11.761,11.761,0,0,0,20.643,3.45ZM12.324,21.538h0a9.762,9.762,0,0,1-4.975-1.362l-.357-.212-3.7.97.988-3.606-.233-.37a9.775,9.775,0,1,1,8.28,4.579Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Icon;
