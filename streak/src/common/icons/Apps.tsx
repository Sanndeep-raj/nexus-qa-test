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
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.7333 0.0585938H8C5.64789 0.0585938 3.73333 1.97315 3.73333 4.32526V6.45859C3.73333 7.04611 4.2125 7.52526 4.8 7.52526C5.3875 7.52526 5.86667 7.04609 5.86667 6.45859V4.32526C5.86667 3.14611 6.82085 2.19193 8 2.19193H27.7333C28.9125 2.19193 29.8667 3.14611 29.8667 4.32526V19.2586C29.8667 20.4377 28.9125 21.3919 27.7333 21.3919H20.2667C19.6791 21.3919 19.2 21.8711 19.2 22.4586C19.2 23.0461 19.6792 23.5253 20.2667 23.5253H27.7333C30.0854 23.5253 32 21.6107 32 19.2586V4.32526C32 1.97315 30.0854 0.0585938 27.7333 0.0585938Z"
        fill="currentColor"
      />
      <path
        d="M30.9333 29.9253H20.2667C19.6791 29.9253 19.2 30.4044 19.2 30.9919C19.2 31.5794 19.6792 32.0586 20.2667 32.0586H30.9333C31.5209 32.0586 32 31.5794 32 30.9919C32 30.4044 31.5208 29.9253 30.9333 29.9253Z"
        fill="currentColor"
      />
      <path
        d="M9.06667 12.8586H4.26667C1.91456 12.8586 0 14.7732 0 17.1253V27.7919C0 30.144 1.91456 32.0586 4.26667 32.0586H9.06667C11.4188 32.0586 13.3333 30.144 13.3333 27.7919V17.1253C13.3333 14.7732 11.4188 12.8586 9.06667 12.8586ZM11.2 27.7919C11.2 28.9503 10.225 29.9253 9.06667 29.9253H4.26667C3.10832 29.9253 2.13333 28.9503 2.13333 27.7919V17.1253C2.13333 15.9669 3.10832 14.9919 4.26667 14.9919H9.06667C10.225 14.9919 11.2 15.9669 11.2 17.1253V27.7919Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon;