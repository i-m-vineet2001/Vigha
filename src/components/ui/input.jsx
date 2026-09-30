// import * as React from "react";

// import { cn } from "@/lib/utils";

// const Input = React.forwardRef(({ className, type, ...props }, ref) => {
//   return (
//     <input
//       type={type}
//       className={cn(
//         "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         className,
//       )}
//       ref={ref}
//       {...props}
//     />
//   );
// });
// Input.displayName = "Input";

// export { Input };

"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        [
          // Layout
          "flex",
          "h-11",
          "w-full",
          "rounded-xl",

          // Glass surface
          "border",
          "border-[#C6577B]/15",
          "bg-white/55",
          "backdrop-blur-md",

          // Spacing
          "px-3.5",
          "py-2",

          // Typography
          "text-sm",
          "text-[#4a2732]",
          "placeholder:text-[#a88791]",

          // Shadow
          "shadow-[0_6px_20px_-12px_rgba(122,46,68,0.3)]",

          // Smooth interaction
          "transition-all",
          "duration-300",

          // File input
          "file:border-0",
          "file:bg-transparent",
          "file:text-sm",
          "file:font-medium",
          "file:text-[#7A2E44]",

          // Focus
          "focus-visible:outline-none",
          "focus-visible:border-[#C6577B]/45",
          "focus-visible:bg-white/70",
          "focus-visible:ring-2",
          "focus-visible:ring-[#C6577B]/15",
          "focus-visible:shadow-[0_8px_25px_-12px_rgba(198,87,123,0.45)]",

          // Hover
          "hover:border-[#C6577B]/25",
          "hover:bg-white/65",

          // Disabled
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",

          // Responsive typography
          "md:text-sm",
        ].join(" "),
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };