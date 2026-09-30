// import * as React from "react";
// import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDown } from "lucide-react";

// import { cn } from "@/lib/utils";

// const Accordion = AccordionPrimitive.Root;

// const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
//   <AccordionPrimitive.Item
//     ref={ref}
//     className={cn("border-b", className)}
//     {...props}
//   />
// ));
// AccordionItem.displayName = "AccordionItem";

// const AccordionTrigger = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <AccordionPrimitive.Header className="flex">
//       <AccordionPrimitive.Trigger
//         ref={ref}
//         className={cn(
//           "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
//           className,
//         )}
//         {...props}
//       >
//         {children}
//         <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
//       </AccordionPrimitive.Trigger>
//     </AccordionPrimitive.Header>
//   ),
// );
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// const AccordionContent = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <AccordionPrimitive.Content
//       ref={ref}
//       className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
//       {...props}
//     >
//       <div className={cn("pb-4 pt-0", className)}>{children}</div>
//     </AccordionPrimitive.Content>
//   ),
// );
// AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "mb-3 overflow-hidden rounded-2xl bg-cream/70 border border-rosewood/15 soft-shadow transition-all duration-300 data-[state=open]:bg-cream data-[state=open]:border-rosewood/30",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between px-6 py-4 font-heading text-lg text-plum transition-all text-left hover:text-rosewood [&[data-state=open]>div]:rotate-180",
          className,
        )}
        {...props}
      >
        <span className="tracking-wide">{children}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blush/50 text-rosewood transition-transform duration-300">
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-[15px] leading-relaxed text-plum/85 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("px-6 pb-6 pt-1 text-plum/75", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  ),
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };