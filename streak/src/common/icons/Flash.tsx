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
      width="26"
      height="32"
      viewBox="0 0 26 32"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4597 32C12.6013 32 13.668 31.4938 14.393 30.6125L24.9326 17.7812C25.8347 16.6832 26.0264 15.1354 25.4181 13.8499C24.8097 12.5645 23.4972 11.7333 22.0744 11.7333H18.3348V3.79788C18.3348 1.70622 16.6328 0 14.5369 0C13.3953 0 12.3286 0.506246 11.6036 1.38751L1.064 14.2188C0.161932 15.3168 -0.0297463 16.8646 0.578589 18.1501C1.18692 19.4355 2.49942 20.2667 3.92229 20.2667H7.66182V28.2021C7.66182 30.2938 9.36389 32 11.4597 32ZM3.99738 18.1335C3.41616 18.1335 2.85158 17.8501 2.56198 17.3501C2.23074 16.7689 2.29532 16.0814 2.71198 15.5752L13.2036 2.80675C13.4869 2.46091 13.8869 2.20467 14.3286 2.15049C15.3369 2.02757 16.2015 2.81091 16.2015 3.79836V12.8004C16.2015 13.3879 16.6807 13.8671 17.2682 13.8671H21.9994C22.5806 13.8671 23.1452 14.1504 23.4348 14.6504C23.766 15.2316 23.7014 15.9191 23.2848 16.4254L12.7931 29.1938C12.5098 29.5396 12.1098 29.7959 11.6681 29.8501C10.6598 29.973 9.79524 29.1896 9.79524 28.2022V19.2001C9.79524 18.6126 9.31608 18.1335 8.72859 18.1335H3.99738Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon;