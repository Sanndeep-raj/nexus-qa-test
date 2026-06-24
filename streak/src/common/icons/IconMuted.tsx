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



const IconMuted: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        <g transform="translate(-0.137 0.452)">
          <path
            // eslint-disable-next-line max-len
            d="M3.961,17.365H7.6l3.6,3.6a3.347,3.347,0,0,0,2.386.991A3.359,3.359,0,0,0,16.959,18.6l.015-.9,4.039,4.039a.819.819,0,0,0,1.082,0,.758.758,0,0,0,0-1.079l-5.129-5.129V3.964A3.369,3.369,0,0,0,13.588.548a3.346,3.346,0,0,0-2.386.991l-3.6,3.6H6.569L2.2.774A.763.763,0,1,0,1.126,1.853L4.347,5.074l-.795.084A3.815,3.815,0,0,0,.137,8.96v4.59a3.83,3.83,0,0,0,3.825,3.825ZM8.455,6.334a2.209,2.209,0,0,0,.451-.348L12.283,2.61a1.847,1.847,0,0,1,3.152,1.349V13.991l-7.4-7.4.421-.252ZM1.666,8.951A2.3,2.3,0,0,1,3.961,6.656H5.939l9.5,9.5v2.383a1.876,1.876,0,0,1-1.064,1.717,1.85,1.85,0,0,1-2.089-.372L8.906,16.5a2.285,2.285,0,0,0-1.621-.674H3.961a2.3,2.3,0,0,1-2.295-2.295V8.951Z"
            transform="translate(0)"
          />
          <path
            // eslint-disable-next-line max-len
            d="M17.45,6.478a.764.764,0,1,0-1.079,1.083,2.671,2.671,0,0,1,.539,1.755,2.713,2.713,0,0,1-.544,1.755.763.763,0,0,0,0,1.079.8.8,0,0,0,1.082,0,4.045,4.045,0,0,0,.99-2.834,4.065,4.065,0,0,0-.99-2.839Z"
            transform="translate(5.409 1.929)"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconMuted;
