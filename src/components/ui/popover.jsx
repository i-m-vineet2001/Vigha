// import * as React from "react";
// import * as PopoverPrimitive from "@radix-ui/react-popover";

// import { cn } from "@/lib/utils";

// const Popover = PopoverPrimitive.Root;

// const PopoverTrigger = PopoverPrimitive.Trigger;

// const PopoverAnchor = PopoverPrimitive.Anchor;

// const PopoverContent = React.forwardRef(
//   ({ className, align = "center", sideOffset = 4, ...props }, ref) => (
//     <PopoverPrimitive.Portal>
//       <PopoverPrimitive.Content
//         ref={ref}
//         align={align}
//         sideOffset={sideOffset}
//         className={cn(
//           "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//           className,
//         )}
//         {...props}
//       />
//     </PopoverPrimitive.Portal>
//   ),
// );
// PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };

"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef(
  ({ className, align = "center", sideOffset = 8, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          [
            "z-50",
            "w-72",
            "overflow-hidden",
            "rounded-2xl",

            // Glass surface
            "border border-[#C6577B]/15",
            "bg-white/75",
            "text-[#4a2732]",
            "backdrop-blur-2xl",
            "supports-[backdrop-filter]:bg-white/60",

            // Premium depth
            "shadow-[0_20px_60px_-22px_rgba(122,46,68,0.32)]",

            // Spacing
            "p-4",

            // Focus
            "outline-none",

            // Open / close animations
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0",
            "data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95",

            // Directional movement
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",

            // Subtle interaction
            "duration-200",
          ].join(" "),
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
);

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };