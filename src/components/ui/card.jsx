// import * as React from "react";

// import { cn } from "@/lib/utils";

// const Card = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-xl border bg-card text-card-foreground shadow",
//       className,
//     )}
//     {...props}
//   />
// ));
// Card.displayName = "Card";

// const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("flex flex-col space-y-1.5 p-6", className)}
//     {...props}
//   />
// ));
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("font-semibold leading-none tracking-tight", className)}
//     {...props}
//   />
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ));
// CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
// ));
// CardContent.displayName = "CardContent";

// const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("flex items-center p-6 pt-0", className)}
//     {...props}
//   />
// ));
// CardFooter.displayName = "CardFooter";

// export {
//   Card,
//   CardHeader,
//   CardFooter,
//   CardTitle,
//   CardDescription,
//   CardContent,
// };

import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "group relative overflow-hidden",
        "rounded-3xl",
        "border border-[#C6577B]/15",
        "bg-white/50",
        "text-[#3f252e]",
        "backdrop-blur-2xl",
        "shadow-[0_20px_60px_-25px_rgba(122,46,68,0.28)]",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1",
        "hover:border-[#C6577B]/25",
        "hover:bg-white/60",
        "hover:shadow-[0_28px_70px_-25px_rgba(122,46,68,0.38)]",
      ].join(" "),
      className,
    )}
    {...props}
  >
    {/* Soft romantic glow */}
    <div
      aria-hidden="true"
      className="
          pointer-events-none
          absolute -right-20 -top-20
          h-48 w-48
          rounded-full
          bg-[#C6577B]/8
          blur-3xl
          transition-all duration-700
          group-hover:bg-[#C6577B]/15
        "
    />

    {/* Bottom atmospheric glow */}
    <div
      aria-hidden="true"
      className="
          pointer-events-none
          absolute -bottom-24 -left-20
          h-48 w-48
          rounded-full
          bg-[#7A2E44]/5
          blur-3xl
        "
    />

    {/* Glass highlight */}
    <div
      aria-hidden="true"
      className="
          pointer-events-none
          absolute inset-x-8 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/80
          to-transparent
        "
    />

    <div className="relative z-10">{props.children}</div>
  </div>
));

Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      ["flex flex-col space-y-2", "p-6 sm:p-7"].join(" "),
      className,
    )}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "font-semibold",
        "leading-tight",
        "tracking-[-0.02em]",
        "text-[#7A2E44]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      ["text-sm", "leading-6", "text-[#8d6874]"].join(" "),
      className,
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(["px-6 pb-6 sm:px-7 sm:pb-7"].join(" "), className)}
    {...props}
  />
));

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "flex items-center",
        "gap-3",
        "border-t border-[#C6577B]/8",
        "bg-white/20",
        "px-6 py-5",
        "backdrop-blur-md",
        "sm:px-7",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};