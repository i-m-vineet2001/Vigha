// import * as React from "react";
// import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
// import { Circle } from "lucide-react";

// import { cn } from "@/lib/utils";

// const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
//   return (
//     <RadioGroupPrimitive.Root
//       className={cn("grid gap-2", className)}
//       {...props}
//       ref={ref}
//     />
//   );
// });
// RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

// const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
//   return (
//     <RadioGroupPrimitive.Item
//       ref={ref}
//       className={cn(
//         "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
//         className,
//       )}
//       {...props}
//     >
//       <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
//         <Circle className="h-3.5 w-3.5 fill-primary" />
//       </RadioGroupPrimitive.Indicator>
//     </RadioGroupPrimitive.Item>
//   );
// });
// RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// export { RadioGroup, RadioGroupItem };

"use client";

import * as React from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* Radio Group */
/* ---------------------------------- */

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(["grid", "gap-2"].join(" "), className)}
    {...props}
  />
));

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

/* ---------------------------------- */
/* Radio Group Item */
/* ---------------------------------- */

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      [
        "group",
        "relative",
        "aspect-square",
        "h-5",
        "w-5",
        "shrink-0",
        "rounded-full",

        // Glass surface
        "border",
        "border-[#C6577B]/25",
        "bg-white/55",
        "backdrop-blur-md",

        // Subtle depth
        "shadow-[0_4px_14px_-8px_rgba(122,46,68,0.35)]",

        // Interaction
        "outline-none",
        "transition-all",
        "duration-300",
        "ease-out",

        // Hover
        "hover:border-[#C6577B]/45",
        "hover:bg-[#C6577B]/8",
        "hover:shadow-[0_6px_18px_-8px_rgba(198,87,123,0.45)]",

        // Focus
        "focus-visible:ring-2",
        "focus-visible:ring-[#C6577B]/25",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-white/50",

        // Disabled
        "disabled:cursor-not-allowed",
        "disabled:opacity-40",

        // Checked state
        "data-[state=checked]:border-[#C6577B]/60",
        "data-[state=checked]:bg-[#C6577B]/10",
        "data-[state=checked]:shadow-[0_0_0_3px_rgba(198,87,123,0.08),0_6px_18px_-8px_rgba(198,87,123,0.45)]",
      ].join(" "),
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator
      className={cn(
        ["flex", "h-full", "w-full", "items-center", "justify-center"].join(
          " ",
        ),
      )}
    >
      <Circle
        className={cn(
          [
            "h-2.5",
            "w-2.5",
            "fill-[#7A2E44]",
            "stroke-[#7A2E44]",
            "transition-transform",
            "duration-200",
            "group-data-[state=checked]:scale-100",
          ].join(" "),
        )}
      />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };