// import * as React from "react";
// import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
// import { Check } from "lucide-react";

// import { cn } from "@/lib/utils";

// const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
//   <CheckboxPrimitive.Root
//     ref={ref}
//     className={cn(
//       "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
//       className,
//     )}
//     {...props}
//   >
//     <CheckboxPrimitive.Indicator
//       className={cn("flex items-center justify-center text-current")}
//     >
//       <Check className="h-4 w-4" />
//     </CheckboxPrimitive.Indicator>
//   </CheckboxPrimitive.Root>
// ));
// Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// export { Checkbox };

import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      [
        "peer relative flex",
        "h-5 w-5 shrink-0",
        "items-center justify-center",
        "overflow-hidden",
        "rounded-md",
        "border border-[#C6577B]/25",
        "bg-white/50",
        "text-transparent",
        "backdrop-blur-md",
        "shadow-[0_4px_14px_-8px_rgba(122,46,68,0.4)]",
        "transition-all duration-300 ease-out",

        // Hover
        "hover:scale-105",
        "hover:border-[#C6577B]/45",
        "hover:bg-[#C6577B]/5",

        // Focus
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[#C6577B]/25",
        "focus-visible:ring-offset-2",

        // Disabled
        "disabled:cursor-not-allowed",
        "disabled:opacity-40",

        // Checked
        "data-[state=checked]:border-[#C6577B]",
        "data-[state=checked]:bg-gradient-to-br",
        "data-[state=checked]:from-[#C6577B]",
        "data-[state=checked]:to-[#A94768]",
        "data-[state=checked]:text-white",
        "data-[state=checked]:shadow-[0_6px_18px_-8px_rgba(122,46,68,0.65)]",

        // Unchecked active
        "active:scale-95",
      ].join(" "),
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className="
          flex
          items-center
          justify-center
          text-current
          animate-in
          zoom-in-75
          duration-200
        "
    >
      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
    </CheckboxPrimitive.Indicator>

    {/* Tiny glass highlight */}
    <span
      aria-hidden="true"
      className="
          pointer-events-none
          absolute inset-x-1 top-0
          h-px
          bg-white/60
          opacity-0
          transition-opacity duration-300
          peer-data-[state=checked]:opacity-100
        "
    />
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };