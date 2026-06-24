import React from "react";
interface ScrollFadeProps {
  children: React.ReactNode;
}

const ScrollFade: React.FC<ScrollFadeProps> = ({ children }) => {
  if (!children) return null;

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const existingClass = (child.props as { className?: string }).className || "";
          return React.cloneElement(child, {
            className: `${existingClass} scroll_fade_section`.trim(),
          } as React.HTMLAttributes<HTMLElement>);
        }
        // Non-element child (like string/number)
        return child;
      })}
    </>
  )
}

export default ScrollFade;