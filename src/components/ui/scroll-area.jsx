// import * as React from "react";
// import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

// import { cn } from "@/lib/utils";

// const ScrollArea = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <ScrollAreaPrimitive.Root
//       ref={ref}
//       className={cn("relative overflow-hidden", className)}
//       {...props}
//     >
//       <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
//         {children}
//       </ScrollAreaPrimitive.Viewport>
//       <ScrollBar />
//       <ScrollAreaPrimitive.Corner />
//     </ScrollAreaPrimitive.Root>
//   ),
// );
// ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

// const ScrollBar = React.forwardRef(
//   ({ className, orientation = "vertical", ...props }, ref) => (
//     <ScrollAreaPrimitive.ScrollAreaScrollbar
//       ref={ref}
//       orientation={orientation}
//       className={cn(
//         "flex touch-none select-none transition-colors",
//         orientation === "vertical" &&
//           "h-full w-2.5 border-l border-l-transparent p-[1px]",
//         orientation === "horizontal" &&
//           "h-2.5 flex-col border-t border-t-transparent p-[1px]",
//         className,
//       )}
//       {...props}
//     >
//       <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
//     </ScrollAreaPrimitive.ScrollAreaScrollbar>
//   ),
// );
// ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// export { ScrollArea, ScrollBar };

"use client";

import * as React from "react";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* Scroll Area */
/* ---------------------------------- */

const ScrollArea = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn(["relative", "overflow-hidden"].join(" "), className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={cn(
          [
            "h-full",
            "w-full",
            "rounded-[inherit]",

            // Smooth native scrolling
            "scroll-smooth",

            // Better touch scrolling
            "[&>div]:!block",
          ].join(" "),
        )}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollBar />

      <ScrollAreaPrimitive.Corner className="bg-transparent" />
    </ScrollAreaPrimitive.Root>
  ),
);

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

/* ---------------------------------- */
/* Scroll Bar */
/* ---------------------------------- */

const ScrollBar = React.forwardRef(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        [
          "group",
          "flex",
          "touch-none",
          "select-none",

          // Smooth interaction
          "transition-all",
          "duration-300",

          // Vertical
          orientation === "vertical" && [
            "h-full",
            "w-3",
            "border-l",
            "border-l-transparent",
            "p-[2px]",
          ],

          // Horizontal
          orientation === "horizontal" && [
            "h-3",
            "flex-col",
            "border-t",
            "border-t-transparent",
            "p-[2px]",
          ],

          "data-[state=hidden]:opacity-0",
          "data-[state=visible]:opacity-100",
        ]
          .flat()
          .join(" "),
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(
          [
            "relative",
            "flex-1",
            "rounded-full",

            // Glassy rose thumb
            "border",
            "border-[#C6577B]/15",
            "bg-[#C6577B]/25",
            "backdrop-blur-md",

            // Soft depth
            "shadow-[0_3px_12px_-6px_rgba(122,46,68,0.35)]",

            // Interaction
            "transition-all",
            "duration-300",

            "hover:bg-[#C6577B]/40",
            "hover:border-[#C6577B]/25",
            "hover:shadow-[0_4px_16px_-6px_rgba(198,87,123,0.45)]",
          ].join(" "),
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  ),
);

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export { ScrollArea, ScrollBar };