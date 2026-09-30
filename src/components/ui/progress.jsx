// "use client";

// import * as React from "react";
// import * as ProgressPrimitive from "@radix-ui/react-progress";

// import { cn } from "@/lib/utils";

// const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
//   <ProgressPrimitive.Root
//     ref={ref}
//     className={cn(
//       "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
//       className,
//     )}
//     {...props}
//   >
//     <ProgressPrimitive.Indicator
//       className="h-full w-full flex-1 bg-primary transition-all"
//       style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
//     />
//   </ProgressPrimitive.Root>
// ));
// Progress.displayName = ProgressPrimitive.Root.displayName;

// export { Progress };

"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    value={value}
    className={cn(
      [
        "relative",
        "h-2.5",
        "w-full",
        "overflow-hidden",
        "rounded-full",

        // Glass track
        "border border-[#C6577B]/10",
        "bg-[#C6577B]/8",
        "backdrop-blur-md",

        // Soft depth
        "shadow-[inset_0_1px_2px_rgba(122,46,68,0.08)]",

        className,
      ].join(" "),
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        [
          "h-full",
          "w-full",
          "flex-1",
          "rounded-full",

          // Romantic rose → wine gradient
          "bg-gradient-to-r",
          "from-[#C6577B]",
          "to-[#7A2E44]",

          // Subtle highlight
          "shadow-[0_2px_10px_rgba(198,87,123,0.28)]",

          // Smooth movement
          "transition-transform",
          "duration-500",
          "ease-out",
        ].join(" "),
      )}
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
      }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };