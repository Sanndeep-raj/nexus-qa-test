import { cn } from "@common/lib/tailwind";
import { cva } from "class-variance-authority";

export const buttonCva = cva("", {
  variants: {
    variant: {
     "outline-primary":"",
      primary:
        // eslint-disable-next-line max-len
        "bg-primary-gradient text-white hover:primary-gradient hover:brightness-90 hover:brightness-90 hover:text-white active:primary-gradient active:text-white focus:outline-none transition-all duration-300",
      secondary:
        "border border-secondary bg-secondary text-white hover:bg-secondary hover:text-white active:bg-secondary active:text-white focus:outline-none",
      light:
        // eslint-disable-next-line max-len
        "bg-gray-100 text-secondary hover:bg-gray-300 hover:text-secondary active:gray-300 active:text-secondary focus:outline-none transition-all duration-300",
      "outline-secondary":
        // eslint-disable-next-line max-len
        "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white active:bg-secondary active:text-white focus:outline-none transition-all duration-300",
      "outline-beige":
        // eslint-disable-next-line max-len
        "border border-beige text-beige bg-transparent hover:bg-beige hover:text-secondary active:bg-beige active:text-secondary focus:outline-none transition-all duration-300",
      "outline-light":
        // eslint-disable-next-line max-len
        "border border-white text-white bg-transparent hover:bg-white hover:text-secondary active:bg-beige active:text-secondary focus:outline-none transition-all duration-300",
      white:
        "bg-white text-secondary hover:bg-gray-300 hover:text-secondary active:gray-300 active:text-secondary focus:outline-none transition-all duration-300",
    },
    size: {
      sm: "px-3 py-1 text-sm font-medium rounded h-[30px]",
      md: "px-4 py-2 text-base font-medium rounded h-[38px]",
      lg: "px-5 py-2 text-md font-medium rounded h-[44px]",
      xl: "px-6 py-3 text-lg font-medium rounded h-[52px]",
      xxl: "p-6 text-lg font-medium rounded h-[76px]",
      28: "w-[28px] h-[28px] flex items-center justify-center rounded-lg",
    },
    disabled: {
      false: "opacity-100",
      true: "cursor-not-allowed opacity-70",
    },
  },
  defaultVariants: {
    size: "xxl",
    variant: "primary",
    disabled: false,
  },
});

type ButtonProps = {
  showLoading?: boolean;
  variant?: "primary" | "secondary" | "light" | "outline-secondary" | "outline-beige" | "outline-light" | "white" | "outline-primary";
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | 28 | null | undefined;
  className?: string;
  children?: React.ReactNode;
} & Record<string, any>; // catches all extra props

const Button = ({
  children,
  className,
  disabled = false,
  variant = "primary",
  size = "xxl",
  ...restProps
}: ButtonProps) => {
  const classes = cn(buttonCva({ variant, disabled, size }), className);
  return (
    <button disabled={disabled} className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
