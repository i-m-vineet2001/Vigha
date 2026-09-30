// import * as React from "react";
// import { cva } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const badgeVariants = cva(
//   "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
//   {
//     variants: {
//       variant: {
//         default:
//           "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
//         secondary:
//           "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         destructive:
//           "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
//         outline: "text-foreground",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   },
// );

// function Badge({ className, variant, ...props }) {
//   return (
//     <div className={cn(badgeVariants({ variant }), className)} {...props} />
//   );
// }

// export { Badge, badgeVariants };

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "whitespace-nowrap",
    "rounded-full",
    "border",
    "px-3 py-1",
    "text-[11px]",
    "font-medium",
    "tracking-wide",
    "transition-all duration-300 ease-out",
    "select-none",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-[#C6577B]/30",
    "focus:ring-offset-2",
    "hover:-translate-y-0.5",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-[#C6577B]/20",
          "bg-gradient-to-r",
          "from-[#fff4f7]",
          "to-[#fce4eb]",
          "text-[#7A2E44]",
          "shadow-[0_4px_15px_-6px_rgba(122,46,68,0.35)]",
          "hover:border-[#C6577B]/40",
          "hover:shadow-[0_7px_20px_-7px_rgba(122,46,68,0.45)]",
        ].join(" "),

        secondary: [
          "border-[#7A2E44]/10",
          "bg-white/60",
          "text-[#6b3a49]",
          "backdrop-blur-md",
          "shadow-sm",
          "hover:bg-white/80",
          "hover:border-[#7A2E44]/20",
        ].join(" "),

        destructive: [
          "border-red-200/60",
          "bg-gradient-to-r",
          "from-red-50",
          "to-rose-50",
          "text-red-700",
          "shadow-[0_4px_15px_-7px_rgba(185,28,28,0.35)]",
          "hover:border-red-300",
        ].join(" "),

        outline: [
          "border-[#C6577B]/30",
          "bg-transparent",
          "text-[#7A2E44]",
          "hover:bg-[#C6577B]/5",
          "hover:border-[#C6577B]/50",
        ].join(" "),
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        "relative overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Subtle shine */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <span className="relative z-10">{props.children}</span>
    </div>
  );
}

export { Badge, badgeVariants };