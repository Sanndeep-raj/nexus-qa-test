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


const Icon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "",
}: IconComponentProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="currentColor"
    >
      <defs>
        <clipPath id="b">
          <rect width="64" height="64" />
        </clipPath>
      </defs>
      <g id="a" clipPath="url(#b)">
        <g transform="translate(-0.719)">
          <path d="M32.719,0A32.037,32.037,0,1,0,55.335,9.383,32,32,0,0,0,32.719,0Zm0,59.077a27.109,27.109,0,1,1,19.137-7.94A27.077,27.077,0,0,1,32.719,59.077Z" />
          <path d="M46.461,25.6,31.387,16.9A7.385,7.385,0,0,0,20.31,23.3V40.709a7.367,7.367,0,0,0,11.077,6.4L46.461,38.4a7.385,7.385,0,0,0,0-12.8ZM44,34.129l-15.077,8.7A2.462,2.462,0,0,1,25.231,40.7V23.3a2.417,2.417,0,0,1,1.231-2.132,2.533,2.533,0,0,1,1.231-.337,2.389,2.389,0,0,1,1.231.34L44,29.868a2.458,2.458,0,0,1,0,4.261Z" />
        </g>
      </g>
    </svg>
  );
};

export default Icon;
