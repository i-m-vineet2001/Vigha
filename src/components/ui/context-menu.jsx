// import * as React from "react";
// import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
// import { Check, ChevronRight, Circle } from "lucide-react";

// import { cn } from "@/lib/utils";

// const ContextMenu = ContextMenuPrimitive.Root;

// const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

// const ContextMenuGroup = ContextMenuPrimitive.Group;

// const ContextMenuPortal = ContextMenuPrimitive.Portal;

// const ContextMenuSub = ContextMenuPrimitive.Sub;

// const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

// const ContextMenuSubTrigger = React.forwardRef(
//   ({ className, inset, children, ...props }, ref) => (
//     <ContextMenuPrimitive.SubTrigger
//       ref={ref}
//       className={cn(
//         "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
//         inset && "pl-8",
//         className,
//       )}
//       {...props}
//     >
//       {children}
//       <ChevronRight className="ml-auto h-4 w-4" />
//     </ContextMenuPrimitive.SubTrigger>
//   ),
// );
// ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

// const ContextMenuSubContent = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <ContextMenuPrimitive.SubContent
//       ref={ref}
//       className={cn(
//         "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

// const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
//   <ContextMenuPrimitive.Portal>
//     <ContextMenuPrimitive.Content
//       ref={ref}
//       className={cn(
//         "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//         className,
//       )}
//       {...props}
//     />
//   </ContextMenuPrimitive.Portal>
// ));
// ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

// const ContextMenuItem = React.forwardRef(
//   ({ className, inset, ...props }, ref) => (
//     <ContextMenuPrimitive.Item
//       ref={ref}
//       className={cn(
//         "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//         inset && "pl-8",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

// const ContextMenuCheckboxItem = React.forwardRef(
//   ({ className, children, checked, ...props }, ref) => (
//     <ContextMenuPrimitive.CheckboxItem
//       ref={ref}
//       className={cn(
//         "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//         className,
//       )}
//       checked={checked}
//       {...props}
//     >
//       <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//         <ContextMenuPrimitive.ItemIndicator>
//           <Check className="h-4 w-4" />
//         </ContextMenuPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </ContextMenuPrimitive.CheckboxItem>
//   ),
// );
// ContextMenuCheckboxItem.displayName =
//   ContextMenuPrimitive.CheckboxItem.displayName;

// const ContextMenuRadioItem = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <ContextMenuPrimitive.RadioItem
//       ref={ref}
//       className={cn(
//         "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//         className,
//       )}
//       {...props}
//     >
//       <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//         <ContextMenuPrimitive.ItemIndicator>
//           <Circle className="h-4 w-4 fill-current" />
//         </ContextMenuPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </ContextMenuPrimitive.RadioItem>
//   ),
// );
// ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

// const ContextMenuLabel = React.forwardRef(
//   ({ className, inset, ...props }, ref) => (
//     <ContextMenuPrimitive.Label
//       ref={ref}
//       className={cn(
//         "px-2 py-1.5 text-sm font-semibold text-foreground",
//         inset && "pl-8",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

// const ContextMenuSeparator = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <ContextMenuPrimitive.Separator
//       ref={ref}
//       className={cn("-mx-1 my-1 h-px bg-border", className)}
//       {...props}
//     />
//   ),
// );
// ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

// const ContextMenuShortcut = ({ className, ...props }) => {
//   return (
//     <span
//       className={cn(
//         "ml-auto text-xs tracking-widest text-muted-foreground",
//         className,
//       )}
//       {...props}
//     />
//   );
// };
// ContextMenuShortcut.displayName = "ContextMenuShortcut";

// export {
//   ContextMenu,
//   ContextMenuTrigger,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuCheckboxItem,
//   ContextMenuRadioItem,
//   ContextMenuLabel,
//   ContextMenuSeparator,
//   ContextMenuShortcut,
//   ContextMenuGroup,
//   ContextMenuPortal,
//   ContextMenuSub,
//   ContextMenuSubContent,
//   ContextMenuSubTrigger,
//   ContextMenuRadioGroup,
// };

"use client";

import * as React from "react";

import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const menuSurface = [
  "z-50",
  "min-w-[10rem]",
  "overflow-hidden",
  "rounded-2xl",
  "border border-[#C6577B]/15",
  "bg-white/75",
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

const ContextMenuSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        [
          "relative flex",
          "cursor-default select-none",
          "items-center",
          "rounded-xl",
          "px-3 py-2",
          "text-sm",
          "outline-none",
          "text-[#6b3a49]",
          "transition-all duration-200",
          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",
          "data-[state=open]:bg-[#C6577B]/8",
          "data-[state=open]:text-[#7A2E44]",
          "hover:bg-[#C6577B]/5",
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
    </ContextMenuPrimitive.SubTrigger>
  ),
);

ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(menuSurface, className)}
      {...props}
    />
  ),
);

ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(menuSurface, className)}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));

ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        [
          "relative flex",
          "cursor-default select-none",
          "items-center",
          "gap-2",
          "rounded-xl",
          "px-3 py-2",
          "text-sm",
          "outline-none",
          "text-[#6b3a49]",
          "transition-all duration-200",
          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",
          "hover:bg-[#C6577B]/5",
          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",
          "[&_svg]:pointer-events-none",
          "[&_svg]:h-4",
          "[&_svg]:w-4",
          "[&_svg]:shrink-0",
          "[&_svg]:text-[#C6577B]/70",
        ].join(" "),
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  ),
);

ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <ContextMenuPrimitive.CheckboxItem
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
          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",
          "hover:bg-[#C6577B]/5",
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
            absolute left-3
            flex h-4 w-4
            items-center justify-center
          "
      >
        <ContextMenuPrimitive.ItemIndicator>
          <Check
            className="
                h-4 w-4
                text-[#C6577B]
              "
            strokeWidth={2.5}
          />
        </ContextMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </ContextMenuPrimitive.CheckboxItem>
  ),
);

ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
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
          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",
          "hover:bg-[#C6577B]/5",
          "data-[disabled]:pointer-events-none",
          "data-[disabled]:opacity-40",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <span
        className="
            absolute left-3
            flex h-4 w-4
            items-center justify-center
          "
      >
        <ContextMenuPrimitive.ItemIndicator>
          <Circle
            className="
                h-2.5 w-2.5
                fill-[#C6577B]
                text-[#C6577B]
              "
          />
        </ContextMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </ContextMenuPrimitive.RadioItem>
  ),
);

ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn(
        [
          "px-3 py-2",
          "text-[11px]",
          "font-semibold",
          "uppercase",
          "tracking-wider",
          "text-[#9d7b85]",
        ].join(" "),
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  ),
);

ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn(
        ["mx-2 my-1", "h-px", "bg-[#C6577B]/10"].join(" "),
        className,
      )}
      {...props}
    />
  ),
);

ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        [
          "ml-auto",
          "rounded-md",
          "border border-[#C6577B]/10",
          "bg-white/40",
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

ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};