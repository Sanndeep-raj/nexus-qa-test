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



const IconVolume: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "",
}: IconComponentProps) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="b">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
      <g id="a" clipPath="url(#b)">
        <g transform="translate(-0.139 0.743)">
          <path
            // eslint-disable-next-line max-len
            d="M3.966,17.375H7.6l3.6,3.6a3.348,3.348,0,0,0,2.386.991,3.37,3.37,0,0,0,3.379-3.416V3.964A3.37,3.37,0,0,0,13.594.548a3.346,3.346,0,0,0-2.386.991l-3.6,3.6H3.965A3.831,3.831,0,0,0,.139,8.964v4.59A3.831,3.831,0,0,0,3.965,17.38ZM1.671,8.96a2.3,2.3,0,0,1,2.3-2.3H7.291a2.264,2.264,0,0,0,1.621-.674l3.377-3.377a1.847,1.847,0,0,1,3.153,1.349V18.545a1.877,1.877,0,0,1-1.064,1.717,1.851,1.851,0,0,1-2.089-.372L8.912,16.513a2.285,2.285,0,0,0-1.621-.674H3.966a2.3,2.3,0,0,1-2.3-2.3V8.96Z"
            transform="translate(0 0)"
          />
          <path
            // eslint-disable-next-line max-len
            d="M17.448,6.482a.764.764,0,1,0-1.079,1.083,2.67,2.67,0,0,1,.539,1.756,2.714,2.714,0,0,1-.544,1.756.763.763,0,0,0,0,1.079.8.8,0,0,0,1.082,0,4.044,4.044,0,0,0,.991-2.835,4.066,4.066,0,0,0-.991-2.839Z"
            transform="translate(5.419 1.934)"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconVolume;
