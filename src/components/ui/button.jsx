// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//         outline:
//           "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2",
//         sm: "h-8 rounded-md px-3 text-xs",
//         lg: "h-10 rounded-md px-8",
//         icon: "h-9 w-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

// const Button = React.forwardRef(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     );
//   },
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };

import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group relative inline-flex items-center justify-center",
    "gap-2 whitespace-nowrap overflow-hidden",
    "rounded-full",
    "text-sm font-medium",
    "tracking-[0.01em]",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[#C6577B]/30",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border border-[#C6577B]/20",
          "bg-gradient-to-r",
          "from-[#C6577B]",
          "to-[#A94768]",
          "text-white",
          "shadow-[0_8px_25px_-10px_rgba(122,46,68,0.65)]",
          "hover:-translate-y-0.5",
          "hover:shadow-[0_14px_35px_-10px_rgba(122,46,68,0.7)]",
          "hover:from-[#CF6A89]",
          "hover:to-[#A94768]",
        ].join(" "),

        destructive: [
          "border border-red-200/30",
          "bg-gradient-to-r",
          "from-red-500",
          "to-rose-600",
          "text-white",
          "shadow-[0_8px_25px_-10px_rgba(185,28,28,0.55)]",
          "hover:-translate-y-0.5",
          "hover:shadow-[0_14px_35px_-10px_rgba(185,28,28,0.65)]",
        ].join(" "),

        outline: [
          "border border-[#C6577B]/25",
          "bg-white/40",
          "text-[#7A2E44]",
          "backdrop-blur-xl",
          "shadow-[0_6px_20px_-12px_rgba(122,46,68,0.4)]",
          "hover:-translate-y-0.5",
          "hover:border-[#C6577B]/40",
          "hover:bg-white/65",
          "hover:shadow-[0_12px_30px_-12px_rgba(122,46,68,0.45)]",
        ].join(" "),

        secondary: [
          "border border-[#C6577B]/10",
          "bg-[#fce8ee]/70",
          "text-[#7A2E44]",
          "shadow-[0_5px_18px_-12px_rgba(122,46,68,0.35)]",
          "hover:-translate-y-0.5",
          "hover:bg-[#f9dce5]",
          "hover:border-[#C6577B]/25",
        ].join(" "),

        ghost: [
          "bg-transparent",
          "text-[#7A2E44]",
          "hover:bg-[#C6577B]/8",
          "hover:text-[#6a273d]",
        ].join(" "),

        link: [
          "h-auto",
          "rounded-none",
          "bg-transparent",
          "px-0",
          "text-[#C6577B]",
          "underline-offset-4",
          "hover:text-[#7A2E44]",
          "hover:underline",
        ].join(" "),
      },

      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-12 px-7 text-[15px]",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      >
        {/* Soft glass shine */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform duration-700
            group-hover:translate-x-full
          "
        />

        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };