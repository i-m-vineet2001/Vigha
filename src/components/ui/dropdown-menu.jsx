// import * as React from "react";
// import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
// import { Check, ChevronRight, Circle } from "lucide-react";

// import { cn } from "@/lib/utils";

// const DropdownMenu = DropdownMenuPrimitive.Root;

// const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

// const DropdownMenuGroup = DropdownMenuPrimitive.Group;

// const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

// const DropdownMenuSub = DropdownMenuPrimitive.Sub;

// const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

// const DropdownMenuSubTrigger = React.forwardRef(
//   ({ className, inset, children, ...props }, ref) => (
//     <DropdownMenuPrimitive.SubTrigger
//       ref={ref}
//       className={cn(
//         "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//         inset && "pl-8",
//         className,
//       )}
//       {...props}
//     >
//       {children}
//       <ChevronRight className="ml-auto" />
//     </DropdownMenuPrimitive.SubTrigger>
//   ),
// );
// DropdownMenuSubTrigger.displayName =
//   DropdownMenuPrimitive.SubTrigger.displayName;

// const DropdownMenuSubContent = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <DropdownMenuPrimitive.SubContent
//       ref={ref}
//       className={cn(
//         "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// DropdownMenuSubContent.displayName =
//   DropdownMenuPrimitive.SubContent.displayName;

// const DropdownMenuContent = React.forwardRef(
//   ({ className, sideOffset = 4, ...props }, ref) => (
//     <DropdownMenuPrimitive.Portal>
//       <DropdownMenuPrimitive.Content
//         ref={ref}
//         sideOffset={sideOffset}
//         className={cn(
//           "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
//           "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//           className,
//         )}
//         {...props}
//       />
//     </DropdownMenuPrimitive.Portal>
//   ),
// );
// DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

// const DropdownMenuItem = React.forwardRef(
//   ({ className, inset, ...props }, ref) => (
//     <DropdownMenuPrimitive.Item
//       ref={ref}
//       className={cn(
//         "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
//         inset && "pl-8",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

// const DropdownMenuCheckboxItem = React.forwardRef(
//   ({ className, children, checked, ...props }, ref) => (
//     <DropdownMenuPrimitive.CheckboxItem
//       ref={ref}
//       className={cn(
//         "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//         className,
//       )}
//       checked={checked}
//       {...props}
//     >
//       <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//         <DropdownMenuPrimitive.ItemIndicator>
//           <Check className="h-4 w-4" />
//         </DropdownMenuPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </DropdownMenuPrimitive.CheckboxItem>
//   ),
// );
// DropdownMenuCheckboxItem.displayName =
//   DropdownMenuPrimitive.CheckboxItem.displayName;

// const DropdownMenuRadioItem = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <DropdownMenuPrimitive.RadioItem
//       ref={ref}
//       className={cn(
//         "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//         className,
//       )}
//       {...props}
//     >
//       <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//         <DropdownMenuPrimitive.ItemIndicator>
//           <Circle className="h-2 w-2 fill-current" />
//         </DropdownMenuPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </DropdownMenuPrimitive.RadioItem>
//   ),
// );
// DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

// const DropdownMenuLabel = React.forwardRef(
//   ({ className, inset, ...props }, ref) => (
//     <DropdownMenuPrimitive.Label
//       ref={ref}
//       className={cn(
//         "px-2 py-1.5 text-sm font-semibold",
//         inset && "pl-8",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

// const DropdownMenuSeparator = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <DropdownMenuPrimitive.Separator
//       ref={ref}
//       className={cn("-mx-1 my-1 h-px bg-muted", className)}
//       {...props}
//     />
//   ),
// );
// DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

// const DropdownMenuShortcut = ({ className, ...props }) => {
//   return (
//     <span
//       className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
//       {...props}
//     />
//   );
// };
// DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// export {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuCheckboxItem,
//   DropdownMenuRadioItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuGroup,
//   DropdownMenuPortal,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuRadioGroup,
// };

"use client";

import * as React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/* ---------------------------------- */
/* Shared Menu Surface */
/* ---------------------------------- */

const menuSurface = [
  "z-50",
  "min-w-[11rem]",
  "overflow-hidden",
  "rounded-2xl",
  "border border-[#C6577B]/15",
  "bg-white/80",
  "p-1.5",
  "text-[#4a2732]",
  "backdrop-blur-2xl",
  "shadow-[0_20px_60px_-18px_rgba(122,46,68,0.38)]",

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
].join(" ");

/* ---------------------------------- */
/* Sub Trigger */
/* ---------------------------------- */

const DropdownMenuSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        [
          "relative flex",
          "cursor-default select-none",
          "items-center gap-2",
          "rounded-xl",
          "px-3 py-2",
          "text-sm",
          "outline-none",
          "text-[#6b3a49]",
          "transition-all duration-200",

          "hover:bg-[#C6577B]/5",
          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",

          "data-[state=open]:bg-[#C6577B]/8",
          "data-[state=open]:text-[#7A2E44]",

          "[&_svg]:pointer-events-none",
          "[&_svg]:h-4",
          "[&_svg]:w-4",
          "[&_svg]:shrink-0",
        ].join(" "),
        inset && "pl-8",
        className,
      )}
      {...props}
    >
      {children}

      <ChevronRight
        className="
            ml-auto
            h-4 w-4
            text-[#C6577B]/60
          "
        strokeWidth={1.8}
      />
    </DropdownMenuPrimitive.SubTrigger>
  ),
);

DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

/* ---------------------------------- */
/* Sub Content */
/* ---------------------------------- */

const DropdownMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(menuSurface, className)}
      {...props}
    />
  ),
);

DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

/* ---------------------------------- */
/* Main Content */
/* ---------------------------------- */

const DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 6, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(menuSurface, className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  ),
);

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

/* ---------------------------------- */
/* Menu Item */
/* ---------------------------------- */

const DropdownMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        [
          "relative flex",
          "cursor-default select-none",
          "items-center gap-2",
          "rounded-xl",
          "px-3 py-2",
          "text-sm",
          "outline-none",
          "text-[#6b3a49]",

          "transition-all duration-200",

          "hover:bg-[#C6577B]/5",
          "hover:text-[#7A2E44]",

          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",

          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",

          "[&>svg]:pointer-events-none",
          "[&>svg]:h-4",
          "[&>svg]:w-4",
          "[&>svg]:shrink-0",
          "[&>svg]:text-[#C6577B]/70",
        ].join(" "),
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  ),
);

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

/* ---------------------------------- */
/* Checkbox Item */
/* ---------------------------------- */

const DropdownMenuCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        [
          "relative flex",
          "cursor-default select-none",
          "items-center",
          "rounded-xl",
          "py-2 pl-9 pr-3",
          "text-sm",
          "outline-none",
          "text-[#6b3a49]",

          "transition-all duration-200",

          "hover:bg-[#C6577B]/5",
          "hover:text-[#7A2E44]",

          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",

          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",
        ].join(" "),
        className,
      )}
      checked={checked}
      {...props}
    >
      <span
        className="
            absolute
            left-3
            flex
            h-4
            w-4
            items-center
            justify-center
          "
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <Check
            className="
                h-4
                w-4
                text-[#C6577B]
              "
            strokeWidth={2.5}
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  ),
);

DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

/* ---------------------------------- */
/* Radio Item */
/* ---------------------------------- */

const DropdownMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        [
          "relative flex",
          "cursor-default select-none",
          "items-center",
          "rounded-xl",
          "py-2 pl-9 pr-3",
          "text-sm",
          "outline-none",
          "text-[#6b3a49]",

          "transition-all duration-200",

          "hover:bg-[#C6577B]/5",
          "hover:text-[#7A2E44]",

          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",

          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <span
        className="
            absolute
            left-3
            flex
            h-4
            w-4
            items-center
            justify-center
          "
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle
            className="
                h-2.5
                w-2.5
                fill-[#C6577B]
                text-[#C6577B]
              "
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </DropdownMenuPrimitive.RadioItem>
  ),
);

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

/* ---------------------------------- */
/* Label */
/* ---------------------------------- */

const DropdownMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(
        [
          "px-3 py-2",
          "text-[11px]",
          "font-semibold",
          "uppercase",
          "tracking-[0.12em]",
          "text-[#9d7b85]",
        ].join(" "),
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  ),
);

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

/* ---------------------------------- */
/* Separator */
/* ---------------------------------- */

const DropdownMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn(
        ["mx-2 my-1", "h-px", "bg-[#C6577B]/10"].join(" "),
        className,
      )}
      {...props}
    />
  ),
);

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

/* ---------------------------------- */
/* Keyboard Shortcut */
/* ---------------------------------- */

const DropdownMenuShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        [
          "ml-auto",
          "rounded-md",
          "border border-[#C6577B]/10",
          "bg-white/45",
          "px-1.5 py-0.5",
          "text-[10px]",
          "font-medium",
          "tracking-widest",
          "text-[#9d7b85]",
          "backdrop-blur-sm",
        ].join(" "),
        className,
      )}
      {...props}
    />
  );
};

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};