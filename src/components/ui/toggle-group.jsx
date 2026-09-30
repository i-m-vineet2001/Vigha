// "use client";
// import * as React from "react";
// import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

// import { cn } from "@/lib/utils";
// import { toggleVariants } from "@/components/ui/toggle";

// const ToggleGroupContext = React.createContext({
//   size: "default",
//   variant: "default",
// });

// const ToggleGroup = React.forwardRef(
//   ({ className, variant, size, children, ...props }, ref) => (
//     <ToggleGroupPrimitive.Root
//       ref={ref}
//       className={cn("flex items-center justify-center gap-1", className)}
//       {...props}
//     >
//       <ToggleGroupContext.Provider value={{ variant, size }}>
//         {children}
//       </ToggleGroupContext.Provider>
//     </ToggleGroupPrimitive.Root>
//   ),
// );

// ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

// const ToggleGroupItem = React.forwardRef(
//   ({ className, children, variant, size, ...props }, ref) => {
//     const context = React.useContext(ToggleGroupContext);

//     return (
//       <ToggleGroupPrimitive.Item
//         ref={ref}
//         className={cn(
//           toggleVariants({
//             variant: context.variant || variant,
//             size: context.size || size,
//           }),
//           className,
//         )}
//         {...props}
//       >
//         {children}
//       </ToggleGroupPrimitive.Item>
//     );
//   },
// );

// ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

// export { ToggleGroup, ToggleGroupItem };

"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

/* ---------------------------------- */
/* Context */
/* ---------------------------------- */

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
});

/* ---------------------------------- */
/* Toggle Group */
/* ---------------------------------- */

const ToggleGroup = React.forwardRef(
  (
    { className, variant = "default", size = "default", children, ...props },
    ref,
  ) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn(
        [
          "inline-flex",
          "items-center",
          "justify-center",
          "gap-1",

          // Glass capsule
          "rounded-2xl",
          "border border-[#C6577B]/12",
          "bg-white/45",
          "p-1",
          "backdrop-blur-xl",

          // Subtle depth
          "shadow-[0_8px_30px_-18px_rgba(122,46,68,0.3)]",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{
          variant,
          size,
        }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  ),
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

/* ---------------------------------- */
/* Toggle Group Item */
/* ---------------------------------- */

const ToggleGroupItem = React.forwardRef(
  ({ className, children, variant, size, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(
          toggleVariants({
            // Item value can override group value
            variant: variant || context.variant || "default",

            size: size || context.size || "default",
          }),

          [
            "relative",
            "rounded-xl",
            "border",
            "border-transparent",
            "bg-transparent",

            // Default
            "text-[#8d6874]",

            // Interaction
            "transition-all",
            "duration-300",
            "ease-out",

            // Hover
            "hover:bg-[#C6577B]/7",
            "hover:text-[#7A2E44]",

            // Selected / pressed
            "data-[state=on]:border-[#C6577B]/18",
            "data-[state=on]:bg-white/75",
            "data-[state=on]:text-[#7A2E44]",
            "data-[state=on]:shadow-[0_5px_18px_-10px_rgba(198,87,123,0.45)]",

            // Focus
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-[#C6577B]/20",
            "focus-visible:ring-offset-1",

            // Disabled
            "disabled:pointer-events-none",
            "disabled:opacity-40",

            // Icon styling
            "[&_svg]:shrink-0",
            "[&_svg]:transition-transform",
            "[&_svg]:duration-300",

            // Tiny tactile response
            "active:scale-[0.97]",
          ].join(" "),

          className,
        )}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    );
  },
);

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export { ToggleGroup, ToggleGroupItem };