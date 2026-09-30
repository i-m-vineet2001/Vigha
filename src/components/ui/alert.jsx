// import * as React from "react";
// import { cva } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const alertVariants = cva(
//   "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
//   {
//     variants: {
//       variant: {
//         default: "bg-background text-foreground",
//         destructive:
//           "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   },
// );

// const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
//   <div
//     ref={ref}
//     role="alert"
//     className={cn(alertVariants({ variant }), className)}
//     {...props}
//   />
// ));
// Alert.displayName = "Alert";

// const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
//   <h5
//     ref={ref}
//     className={cn("mb-1 font-medium leading-none tracking-tight", className)}
//     {...props}
//   />
// ));
// AlertTitle.displayName = "AlertTitle";

// const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("text-sm [&_p]:leading-relaxed", className)}
//     {...props}
//   />
// ));
// AlertDescription.displayName = "AlertDescription";

// export { Alert, AlertTitle, AlertDescription };

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  [
    "group relative w-full overflow-hidden rounded-2xl",
    "border px-5 py-4",
    "backdrop-blur-xl",
    "transition-all duration-500 ease-out",
    "animate-in fade-in-0 slide-in-from-bottom-2",
    "shadow-[0_10px_40px_-15px_rgba(122,46,68,0.25)]",
    "[&>svg+div]:translate-y-[-2px]",
    "[&>svg]:absolute [&>svg]:left-5 [&>svg]:top-5",
    "[&>svg]:h-5 [&>svg]:w-5",
    "[&>svg~*]:pl-8",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-[#C6577B]/20",
          "bg-gradient-to-br",
          "from-[#fff8fa]/95",
          "via-[#fff1f5]/90",
          "to-[#fce4eb]/80",
          "text-[#4a1f2c]",
          "hover:border-[#C6577B]/35",
          "hover:shadow-[0_18px_50px_-18px_rgba(122,46,68,0.35)]",
        ].join(" "),

        destructive: [
          "border-red-300/30",
          "bg-gradient-to-br",
          "from-red-50/95",
          "via-rose-50/90",
          "to-pink-50/80",
          "text-red-900",
          "shadow-[0_10px_40px_-15px_rgba(185,28,28,0.25)]",
        ].join(" "),
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {/* Romantic glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -right-12 -top-12
            h-32 w-32 rounded-full
            bg-[#C6577B]/10 blur-3xl
            transition-all duration-700
            group-hover:bg-[#C6577B]/20
          "
        />

        {/* Bottom glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -bottom-16 -left-10
            h-28 w-28 rounded-full
            bg-[#7A2E44]/5 blur-3xl
          "
        />

        {/* Top shine */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 top-0 h-px
            bg-gradient-to-r
            from-transparent
            via-[#C6577B]/40
            to-transparent
          "
        />

        {children}
      </div>
    );
  },
);

Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn(
        [
          "mb-1.5",
          "font-semibold",
          "leading-tight",
          "tracking-[-0.01em]",
          "text-[#7A2E44]",
          "transition-colors duration-300",
          "group-hover:text-[#5f2336]",
        ].join(" "),
        className,
      )}
      {...props}
    />
  );
});

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        [
          "text-sm",
          "leading-6",
          "text-[#6b3a49]/80",
          "[&_p]:leading-6",
          "[&_strong]:font-semibold",
          "[&_strong]:text-[#7A2E44]",
        ].join(" "),
        className,
      )}
      {...props}
    />
  );
});

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };