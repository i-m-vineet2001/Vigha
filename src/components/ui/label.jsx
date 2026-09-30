// import * as React from "react";
// import * as LabelPrimitive from "@radix-ui/react-label";
// import { cva } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const labelVariants = cva(
//   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
// );

// const Label = React.forwardRef(({ className, ...props }, ref) => (
//   <LabelPrimitive.Root
//     ref={ref}
//     className={cn(labelVariants(), className)}
//     {...props}
//   />
// ));
// Label.displayName = LabelPrimitive.Root.displayName;

// export { Label };

"use client";

import * as React from "react";

import * as LabelPrimitive from "@radix-ui/react-label";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  [
    "text-sm",
    "font-medium",
    "leading-none",
    "tracking-[-0.01em]",
    "text-[#5f3644]",

    // Smooth interaction with the associated input
    "transition-colors",
    "duration-200",

    // Disabled state inherited from the form control
    "peer-disabled:cursor-not-allowed",
    "peer-disabled:opacity-50",

    // Subtle focus state when used with peer inputs
    "peer-focus:text-[#7A2E44]",
  ].join(" "),
);

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };