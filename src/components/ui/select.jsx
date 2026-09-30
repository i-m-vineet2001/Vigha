// "use client";

// import * as React from "react";
// import * as SelectPrimitive from "@radix-ui/react-select";
// import { Check, ChevronDown, ChevronUp } from "lucide-react";

// import { cn } from "@/lib/utils";

// const Select = SelectPrimitive.Root;

// const SelectGroup = SelectPrimitive.Group;

// const SelectValue = SelectPrimitive.Value;

// const SelectTrigger = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <SelectPrimitive.Trigger
//       ref={ref}
//       className={cn(
//         "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
//         className,
//       )}
//       {...props}
//     >
//       {children}
//       <SelectPrimitive.Icon asChild>
//         <ChevronDown className="h-4 w-4 opacity-50" />
//       </SelectPrimitive.Icon>
//     </SelectPrimitive.Trigger>
//   ),
// );
// SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

// const SelectScrollUpButton = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <SelectPrimitive.ScrollUpButton
//       ref={ref}
//       className={cn(
//         "flex cursor-default items-center justify-center py-1",
//         className,
//       )}
//       {...props}
//     >
//       <ChevronUp className="h-4 w-4" />
//     </SelectPrimitive.ScrollUpButton>
//   ),
// );
// SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

// const SelectScrollDownButton = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <SelectPrimitive.ScrollDownButton
//       ref={ref}
//       className={cn(
//         "flex cursor-default items-center justify-center py-1",
//         className,
//       )}
//       {...props}
//     >
//       <ChevronDown className="h-4 w-4" />
//     </SelectPrimitive.ScrollDownButton>
//   ),
// );
// SelectScrollDownButton.displayName =
//   SelectPrimitive.ScrollDownButton.displayName;

// const SelectContent = React.forwardRef(
//   ({ className, children, position = "popper", ...props }, ref) => (
//     <SelectPrimitive.Portal>
//       <SelectPrimitive.Content
//         ref={ref}
//         className={cn(
//           "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//           position === "popper" &&
//             "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
//           className,
//         )}
//         position={position}
//         {...props}
//       >
//         <SelectScrollUpButton />
//         <SelectPrimitive.Viewport
//           className={cn(
//             "p-1",
//             position === "popper" &&
//               "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
//           )}
//         >
//           {children}
//         </SelectPrimitive.Viewport>
//         <SelectScrollDownButton />
//       </SelectPrimitive.Content>
//     </SelectPrimitive.Portal>
//   ),
// );
// SelectContent.displayName = SelectPrimitive.Content.displayName;

// const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
//   <SelectPrimitive.Label
//     ref={ref}
//     className={cn("px-2 py-1.5 text-sm font-semibold", className)}
//     {...props}
//   />
// ));
// SelectLabel.displayName = SelectPrimitive.Label.displayName;

// const SelectItem = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <SelectPrimitive.Item
//       ref={ref}
//       className={cn(
//         "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//         className,
//       )}
//       {...props}
//     >
//       <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
//         <SelectPrimitive.ItemIndicator>
//           <Check className="h-4 w-4" />
//         </SelectPrimitive.ItemIndicator>
//       </span>
//       <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
//     </SelectPrimitive.Item>
//   ),
// );
// SelectItem.displayName = SelectPrimitive.Item.displayName;

// const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
//   <SelectPrimitive.Separator
//     ref={ref}
//     className={cn("-mx-1 my-1 h-px bg-muted", className)}
//     {...props}
//   />
// ));
// SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// export {
//   Select,
//   SelectGroup,
//   SelectValue,
//   SelectTrigger,
//   SelectContent,
//   SelectLabel,
//   SelectItem,
//   SelectSeparator,
//   SelectScrollUpButton,
//   SelectScrollDownButton,
// };

"use client";

import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* Root */
/* ---------------------------------- */

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

/* ---------------------------------- */
/* Trigger */
/* ---------------------------------- */

const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        [
          "group",
          "flex",
          "h-11",
          "w-full",
          "items-center",
          "justify-between",
          "whitespace-nowrap",
          "rounded-xl",

          // Glass surface
          "border border-[#C6577B]/15",
          "bg-white/55",
          "px-3.5",
          "py-2",
          "text-sm",
          "text-[#4a2732]",
          "backdrop-blur-xl",

          // Soft depth
          "shadow-[0_8px_25px_-16px_rgba(122,46,68,0.3)]",

          // Interaction
          "outline-none",
          "transition-all",
          "duration-300",

          "hover:border-[#C6577B]/30",
          "hover:bg-white/65",
          "hover:shadow-[0_10px_30px_-16px_rgba(198,87,123,0.35)]",

          "focus:border-[#C6577B]/40",
          "focus:ring-2",
          "focus:ring-[#C6577B]/15",

          // Placeholder
          "data-[placeholder]:text-[#9d7b85]",

          // Disabled
          "disabled:cursor-not-allowed",
          "disabled:opacity-40",

          // Child text
          "[&>span]:line-clamp-1",
        ].join(" "),
        className,
      )}
      {...props}
    >
      {children}

      <SelectPrimitive.Icon asChild>
        <ChevronDown
          className={cn(
            [
              "h-4",
              "w-4",
              "text-[#8d6874]",
              "transition-transform",
              "duration-300",

              "group-data-[state=open]:rotate-180",
              "group-data-[state=open]:text-[#7A2E44]",
            ].join(" "),
          )}
          strokeWidth={1.8}
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
);

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

/* ---------------------------------- */
/* Scroll Up */
/* ---------------------------------- */

const SelectScrollUpButton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn(
        [
          "flex",
          "cursor-default",
          "items-center",
          "justify-center",
          "py-1.5",
          "text-[#8d6874]",
          "transition-colors",
          "hover:text-[#7A2E44]",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <ChevronUp className="h-4 w-4" strokeWidth={1.8} />
    </SelectPrimitive.ScrollUpButton>
  ),
);

SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

/* ---------------------------------- */
/* Scroll Down */
/* ---------------------------------- */

const SelectScrollDownButton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={cn(
        [
          "flex",
          "cursor-default",
          "items-center",
          "justify-center",
          "py-1.5",
          "text-[#8d6874]",
          "transition-colors",
          "hover:text-[#7A2E44]",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <ChevronDown className="h-4 w-4" strokeWidth={1.8} />
    </SelectPrimitive.ScrollDownButton>
  ),
);

SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

/* ---------------------------------- */
/* Content */
/* ---------------------------------- */

const SelectContent = React.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        position={position}
        className={cn(
          [
            "relative",
            "z-50",
            "max-h-96",
            "min-w-[8rem]",
            "overflow-hidden",
            "rounded-2xl",

            // Glass dropdown
            "border border-[#C6577B]/15",
            "bg-white/80",
            "text-[#4a2732]",
            "backdrop-blur-2xl",

            // Premium depth
            "shadow-[0_20px_60px_-22px_rgba(122,46,68,0.35)]",

            // Animation
            "outline-none",
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

            // Popper spacing
            position === "popper" &&
              [
                "data-[side=bottom]:translate-y-1.5",
                "data-[side=left]:-translate-x-1.5",
                "data-[side=right]:translate-x-1.5",
                "data-[side=top]:-translate-y-1.5",
              ].join(" "),
          ]
            .filter(Boolean)
            .join(" "),
          className,
        )}
        {...props}
      >
        <SelectScrollUpButton />

        <SelectPrimitive.Viewport
          className={cn(
            [
              "p-1.5",
              "scroll-py-1",

              position === "popper" && [
                "h-[var(--radix-select-trigger-height)]",
                "max-h-[min(24rem,var(--radix-select-content-available-height))]",
                "w-full",
                "min-w-[var(--radix-select-trigger-width)]",
              ],
            ]
              .flat()
              .join(" "),
          )}
        >
          {children}
        </SelectPrimitive.Viewport>

        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);

SelectContent.displayName = SelectPrimitive.Content.displayName;

/* ---------------------------------- */
/* Label */
/* ---------------------------------- */

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      [
        "px-2.5",
        "py-2",
        "text-xs",
        "font-semibold",
        "uppercase",
        "tracking-[0.08em]",
        "text-[#8d6874]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

SelectLabel.displayName = SelectPrimitive.Label.displayName;

/* ---------------------------------- */
/* Item */
/* ---------------------------------- */

const SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        [
          "relative",
          "flex",
          "w-full",
          "cursor-default",
          "select-none",
          "items-center",
          "rounded-xl",
          "py-2",
          "pl-3",
          "pr-9",
          "text-sm",
          "text-[#5f3644]",
          "outline-none",

          // Hover / focus
          "transition-all",
          "duration-200",
          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",

          // Selected
          "data-[state=checked]:bg-[#C6577B]/7",
          "data-[state=checked]:text-[#7A2E44]",

          // Disabled
          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          [
            "absolute",
            "right-2.5",
            "flex",
            "h-4",
            "w-4",
            "items-center",
            "justify-center",
            "rounded-full",
          ].join(" "),
        )}
      >
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-[#7A2E44]" strokeWidth={2} />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ),
);

SelectItem.displayName = SelectPrimitive.Item.displayName;

/* ---------------------------------- */
/* Separator */
/* ---------------------------------- */

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      ["-mx-1", "my-1.5", "h-px", "bg-[#C6577B]/10"].join(" "),
      className,
    )}
    {...props}
  />
));

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};