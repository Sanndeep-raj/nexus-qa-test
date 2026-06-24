/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Vishakh B S
 */
import { isValidElement, type FC, type ReactNode, cloneElement } from "react";

type Placement = "top" | "bottom" | "left" | "right";

const positionMap: Record<Placement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowPositionMap: Record<Placement, string> = {
  top: "bottom-[-4px] left-1/2 -translate-x-1/2",
  bottom: "top-[-4px] left-1/2 -translate-x-1/2",
  left: "right-[-4px] top-1/2 -translate-y-1/2",
  right: "left-[-4px] top-1/2 -translate-y-1/2",
};

interface TooltipProps {
  children: ReactNode;
}

const TooltipWrapper: FC<TooltipProps> = ({ children }) => {
  if (!isValidElement(children)) return <>{children}</>;

  const props = children.props as Record<string, any>;
  const tooltip = props["data-bs-title"];
  const placement: Placement = props["data-bs-placement"] || "top";

  if (!tooltip) return children;

  const tooltipId = `tooltip-${Math.random().toString(36).slice(2, 9)}`;

  const enhancedChild = cloneElement(children as React.ReactElement<any>, {
    "aria-describedby": tooltipId,
    tabIndex: 0,
  });

  return (
    <div
      className="relative inline-block group focus-within:outline-none focus-within:ring-0"
      role="presentation"
    >
      {enhancedChild}
      <div
        id={tooltipId}
        role="tooltip"
        className={`absolute z-10 hidden group-hover:flex group-focus-within:flex 
          px-2 py-1 text-sm text-white bg-black rounded shadow-md whitespace-nowrap
          transition-all duration-200 ease-out opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
          ${positionMap[placement] || positionMap.top}`}
      >
        {tooltip}
        <div
          className={`absolute w-2 h-2 bg-black rotate-45 ${
            arrowPositionMap[placement] || arrowPositionMap.top
          }`}
        />
      </div>
    </div>
  );
};

export default TooltipWrapper;
