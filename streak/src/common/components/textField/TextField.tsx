import React, { forwardRef } from "react";
import { cn } from "@common/lib/tailwind";
import { cva } from "class-variance-authority";

export const textFieldCva = cva("", {
  variants: {
    variant: {
      default:
        "w-full border border-black rounded-none placeholder:text-gray-500 placeholder:text-base focus:outline-none",
      error:
        "w-full border border-red rounded-none placeholder:text-red text-red focus:outline-none",
    },
    sizes: {
      sm: "text-sm px-3 py-2 h-[40px]",
      md: "text-base px-4 py-2 h-[48px]",
      lg: "text-md px-5 py-4 h-[56px]",
    },
    disabled: {
      false: "opacity-100",
      true: "cursor-not-allowed opacity-50",
    },
  },
  defaultVariants: {
    sizes: "md",
    variant: "default",
    disabled: false,
  },
});

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error";
  sizes?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      variant = "default",
      sizes = "md",
      disabled = false,
      className,
      ...restProps
    },
    ref,
  ) => {
    const classes = cn(textFieldCva({ variant, sizes, disabled }), className);
    return (
      <input
        ref={ref}
        type="text"
        disabled={disabled}
        className={classes}
        {...restProps}
      />
    );
  },
);

TextField.displayName = "TextField";

export default TextField;