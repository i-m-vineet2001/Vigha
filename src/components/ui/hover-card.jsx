// "use client";

// import * as React from "react";
// import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

// import { cn } from "@/lib/utils";

// const HoverCard = HoverCardPrimitive.Root;

// const HoverCardTrigger = HoverCardPrimitive.Trigger;

// const HoverCardContent = React.forwardRef(
//   ({ className, align = "center", sideOffset = 4, ...props }, ref) => (
//     <HoverCardPrimitive.Content
//       ref={ref}
//       align={align}
//       sideOffset={sideOffset}
//       className={cn(
//         "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// export { HoverCard, HoverCardTrigger, HoverCardContent };

"use client";

import * as React from "react";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef(
  ({ className, align = "center", sideOffset = 8, ...props }, ref) => (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        [
          // Position
          "z-50",
          "w-72",
          "max-w-[calc(100vw-2rem)]",

          // Shape
          "overflow-hidden",
          "rounded-2xl",

          // Glass surface
          "border border-white/60",
          "bg-white/75",
          "p-4",
          "text-[#4a2732]",
          "backdrop-blur-2xl",

          // Premium shadow
          "shadow-[0_20px_60px_-18px_rgba(122,46,68,0.35)]",

          // Animation
          "outline-none",
          "duration-300",
          "data-[state=open]:animate-in",
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95",
          "data-[state=open]:zoom-in-95",

          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
        ].join(" "),
        className,
      )}
      {...props}
    >
      {/* Soft rose glow */}
      <div
        aria-hidden="true"
        className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-28
            w-28
            rounded-full
            bg-[#C6577B]/10
            blur-2xl
          "
      />

      {/* Soft wine glow */}
      <div
        aria-hidden="true"
        className="
            pointer-events-none
            absolute
            -bottom-12
            -left-12
            h-24
            w-24
            rounded-full
            bg-[#7A2E44]/5
            blur-2xl
          "
      />

      {/* Top glass highlight */}
      <div
        aria-hidden="true"
        className="
            pointer-events-none
            absolute
            inset-x-6
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#C6577B]/30
            to-transparent
          "
      />

      <div className="relative z-10">{props.children}</div>
    </HoverCardPrimitive.Content>
  ),
);

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };