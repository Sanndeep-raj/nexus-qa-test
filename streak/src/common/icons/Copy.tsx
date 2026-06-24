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
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // eslint-disable-next-line max-len
        d="M19.5757 0H2.78249C1.64248 0 0.716989 0.910652 0.695312 2.04155V20.6323C0.695312 21.0694 1.04906 21.4231 1.48613 21.4231C1.9232 21.4231 2.27809 21.0694 2.27809 20.6323L2.29064 2.06667C2.29863 1.80648 2.50974 1.59764 2.77106 1.59081L19.5757 1.58282C20.0128 1.58282 20.3677 1.22793 20.3677 0.790863C20.3677 0.353796 20.0128 0 19.5757 0ZM20.928 4.16881C21.1905 4.17451 21.4016 4.38449 21.4084 4.64467V21.9275C21.4016 22.1889 21.1905 22.3977 20.928 22.4045H5.40703C5.1457 22.3977 4.93458 22.1889 4.92661 21.9275V4.64467C4.9346 4.38449 5.14571 4.1745 5.40703 4.16881H20.928ZM5.41959 2.57689V2.57803H5.41845C4.27958 2.57803 3.35409 3.48754 3.33127 4.61844V21.9539C3.35409 23.0871 4.27958 24 5.41959 24H20.9166C22.0555 24 22.9821 23.0871 23.0038 21.9539V4.61844C22.9821 3.48754 22.0555 2.57689 20.9166 2.57689L5.41959 2.57689Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon;
