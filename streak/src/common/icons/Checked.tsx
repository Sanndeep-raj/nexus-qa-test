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
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.30929 1.90165L4.2716 4.86396L3.21094 5.92462L0.248627 2.96231L1.30929 1.90165Z"
        fill="currentColor"
      />
      <path
        d="M6.61259 0.40165L7.67325 1.46231L3.21094 5.92462L2.15028 4.86396L6.61259 0.40165Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon;