/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Minna Ancy Mathew
 */


import React from "react";

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "",
}: IconComponentProps) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <defs>
        <clipPath id="b">
          <rect width="32" height="32" />
        </clipPath>
      </defs>
      <g id="a" clipPath="url(#b)">
        <path
          // eslint-disable-next-line max-len
          d="M19.516,17.183a21.469,21.469,0,0,1,4.9-13.622Q27.516-.187,29.39.318q1.73.649,1.73,1.946a4.132,4.132,0,0,1-1.153,2.595q-1.081,1.369-1.73,2.234a9.059,9.059,0,0,0-1.081,1.874,10.869,10.869,0,0,0-1.009,4.9,4.425,4.425,0,0,1,3.459.432q3.171,1.8,3.171,4.613a6.047,6.047,0,0,1-1.73,4.468,6.235,6.235,0,0,1-4.613,1.658A6.439,6.439,0,0,1,21.462,22.8,8.424,8.424,0,0,1,19.516,17.183Zm-18.739,0A20.909,20.909,0,0,1,5.606,3.561Q9.282-.835,11.732.894a1.319,1.319,0,0,1,.5,1.153,4.5,4.5,0,0,1-1.081,2.811Q10.147,6.228,9.5,7.092A9.057,9.057,0,0,0,8.417,8.966a10.869,10.869,0,0,0-1.009,4.9A4.231,4.231,0,0,1,10.8,14.3q3.1,1.8,3.1,4.613a6.191,6.191,0,0,1-1.658,4.468,6.235,6.235,0,0,1-4.613,1.658,6.224,6.224,0,0,1-4.9-2.234A8.424,8.424,0,0,1,.777,17.183Z"
          transform="translate(-0.777 3.742)"
        />
      </g>
    </svg>
  );
};

export default Icon;
