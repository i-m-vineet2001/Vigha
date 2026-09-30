// "use client";

// import * as React from "react";
// import * as MenubarPrimitive from "@radix-ui/react-menubar";
// import { Check, ChevronRight, Circle } from "lucide-react";

// import { cn } from "@/lib/utils";

// function MenubarMenu({ ...props }) {
//   return <MenubarPrimitive.Menu {...props} />;
// }

// function MenubarGroup({ ...props }) {
//   return <MenubarPrimitive.Group {...props} />;
// }

// function MenubarPortal({ ...props }) {
//   return <MenubarPrimitive.Portal {...props} />;
// }

// function MenubarRadioGroup({ ...props }) {
//   return <MenubarPrimitive.RadioGroup {...props} />;
// }

// function MenubarSub({ ...props }) {
//   return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
// }

// const Menubar = React.forwardRef(({ className, ...props }, ref) => (
//   <MenubarPrimitive.Root
//     ref={ref}
//     className={cn(
//       "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
//       className,
//     )}
//     {...props}
//   />
// ));
// Menubar.displayName = MenubarPrimitive.Root.displayName;

// const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (
//   <MenubarPrimitive.Trigger
//     ref={ref}
//     className={cn(
//       "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
//       className,
//     )}
//     {...props}
//   />
// ));
// MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

// const MenubarSubTrigger = React.forwardRef(
//   ({ className, inset, children, ...props }, ref) => (
//     <MenubarPrimitive.SubTrigger
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
//     </MenubarPrimitive.SubTrigger>
//   ),
// );
// MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

// const MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => (
//   <MenubarPrimitive.SubContent
//     ref={ref}
//     className={cn(
//       "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//       className,
//     )}
//     {...props}
//   />
// ));
// MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

// const MenubarContent = React.forwardRef(
//   (
//     { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
//     ref,
//   ) => (
//     <MenubarPrimitive.Portal>
//       <MenubarPrimitive.Content
//         ref={ref}
//         align={align}
//         alignOffset={alignOffset}
//         sideOffset={sideOffset}
//         className={cn(
//           "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//           className,
//         )}
//         {...props}
//       />
//     </MenubarPrimitive.Portal>
//   ),
// );
// MenubarContent.displayName = MenubarPrimitive.Content.displayName;

// const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (
//   <MenubarPrimitive.Item
//     ref={ref}
//     className={cn(
//       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//       inset && "pl-8",
//       className,
//     )}
//     {...props}
//   />
// ));
// MenubarItem.displayName = MenubarPrimitive.Item.displayName;

// const MenubarCheckboxItem = React.forwardRef(
//   ({ className, children, checked, ...props }, ref) => (
//     <MenubarPrimitive.CheckboxItem
//       ref={ref}
//       className={cn(
//         "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//         className,
//       )}
//       checked={checked}
//       {...props}
//     >
//       <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//         <MenubarPrimitive.ItemIndicator>
//           <Check className="h-4 w-4" />
//         </MenubarPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </MenubarPrimitive.CheckboxItem>
//   ),
// );
// MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

// const MenubarRadioItem = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <MenubarPrimitive.RadioItem
//       ref={ref}
//       className={cn(
//         "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//         className,
//       )}
//       {...props}
//     >
//       <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//         <MenubarPrimitive.ItemIndicator>
//           <Circle className="h-4 w-4 fill-current" />
//         </MenubarPrimitive.ItemIndicator>
//       </span>
//       {children}
//     </MenubarPrimitive.RadioItem>
//   ),
// );
// MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

// const MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
//   <MenubarPrimitive.Label
//     ref={ref}
//     className={cn(
//       "px-2 py-1.5 text-sm font-semibold",
//       inset && "pl-8",
//       className,
//     )}
//     {...props}
//   />
// ));
// MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

// const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => (
//   <MenubarPrimitive.Separator
//     ref={ref}
//     className={cn("-mx-1 my-1 h-px bg-muted", className)}
//     {...props}
//   />
// ));
// MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

// const MenubarShortcut = ({ className, ...props }) => {
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
// MenubarShortcut.displayname = "MenubarShortcut";

// export {
//   Menubar,
//   MenubarMenu,
//   MenubarTrigger,
//   MenubarContent,
//   MenubarItem,
//   MenubarSeparator,
//   MenubarLabel,
//   MenubarCheckboxItem,
//   MenubarRadioGroup,
//   MenubarRadioItem,
//   MenubarPortal,
//   MenubarSubContent,
//   MenubarSubTrigger,
//   MenubarGroup,
//   MenubarSub,
//   MenubarShortcut,
// };

"use client";

import * as React from "react";

import * as MenubarPrimitive from "@radix-ui/react-menubar";

import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* Primitive Wrappers */
/* ---------------------------------- */

function MenubarMenu({ ...props }) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

/* ---------------------------------- */
/* Menubar */
/* ---------------------------------- */

const Menubar = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      [
        "flex",
        "h-11",
        "items-center",
        "gap-1",
        "rounded-2xl",

        // Glass surface
        "border border-white/60",
        "bg-white/55",
        "p-1.5",
        "backdrop-blur-xl",

        // Premium shadow
        "shadow-[0_12px_40px_-18px_rgba(122,46,68,0.32)]",

        // Text
        "text-[#5f3644]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

Menubar.displayName = MenubarPrimitive.Root.displayName;

/* ---------------------------------- */
/* Menubar Trigger */
/* ---------------------------------- */

const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      [
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "rounded-xl",
        "px-3",
        "py-1.5",

        "text-sm",
        "font-medium",
        "text-[#6b3a49]",

        "outline-none",
        "transition-all",
        "duration-200",

        "hover:bg-[#C6577B]/5",
        "hover:text-[#7A2E44]",

        "focus:bg-[#C6577B]/8",
        "focus:text-[#7A2E44]",

        "data-[state=open]:bg-[#C6577B]/10",
        "data-[state=open]:text-[#7A2E44]",

        "data-[state=open]:shadow-[0_4px_14px_-8px_rgba(198,87,123,0.35)]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

/* ---------------------------------- */
/* Sub Trigger */
/* ---------------------------------- */

const MenubarSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cn(
        [
          "relative",
          "flex",
          "cursor-default",
          "select-none",
          "items-center",
          "rounded-xl",
          "px-3",
          "py-2",

          "text-sm",
          "text-[#6b3a49]",

          "outline-none",
          "transition-all",
          "duration-200",

          "hover:bg-[#C6577B]/5",
          "hover:text-[#7A2E44]",

          "focus:bg-[#C6577B]/8",
          "focus:text-[#7A2E44]",

          "data-[state=open]:bg-[#C6577B]/8",
          "data-[state=open]:text-[#7A2E44]",
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
            h-4
            w-4
            text-[#C6577B]/60
          "
        strokeWidth={1.8}
      />
    </MenubarPrimitive.SubTrigger>
  ),
);

MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

/* ---------------------------------- */
/* Sub Content */
/* ---------------------------------- */

const MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      [
        "z-50",
        "min-w-[10rem]",
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
      ].join(" "),
      className,
    )}
    {...props}
  />
));

MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

/* ---------------------------------- */
/* Main Content */
/* ---------------------------------- */

const MenubarContent = React.forwardRef(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          [
            "z-50",
            "min-w-[12rem]",
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
          ].join(" "),
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
);

MenubarContent.displayName = MenubarPrimitive.Content.displayName;

/* ---------------------------------- */
/* Menu Item */
/* ---------------------------------- */

const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      [
        "relative",
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "gap-2",
        "rounded-xl",

        "px-3",
        "py-2",

        "text-sm",
        "text-[#6b3a49]",

        "outline-none",
        "transition-all",
        "duration-200",

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
));

MenubarItem.displayName = MenubarPrimitive.Item.displayName;

/* ---------------------------------- */
/* Checkbox Item */
/* ---------------------------------- */

const MenubarCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        [
          "relative",
          "flex",
          "cursor-default",
          "select-none",
          "items-center",

          "rounded-xl",

          "py-2",
          "pl-9",
          "pr-3",

          "text-sm",
          "text-[#6b3a49]",

          "outline-none",
          "transition-all",
          "duration-200",

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
        <MenubarPrimitive.ItemIndicator>
          <Check
            className="
                h-4
                w-4
                text-[#C6577B]
              "
            strokeWidth={2.5}
          />
        </MenubarPrimitive.ItemIndicator>
      </span>

      {children}
    </MenubarPrimitive.CheckboxItem>
  ),
);

MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

/* ---------------------------------- */
/* Radio Item */
/* ---------------------------------- */

const MenubarRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={cn(
        [
          "relative",
          "flex",
          "cursor-default",
          "select-none",
          "items-center",

          "rounded-xl",

          "py-2",
          "pl-9",
          "pr-3",

          "text-sm",
          "text-[#6b3a49]",

          "outline-none",
          "transition-all",
          "duration-200",

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
        <MenubarPrimitive.ItemIndicator>
          <Circle
            className="
                h-2.5
                w-2.5
                fill-[#C6577B]
                text-[#C6577B]
              "
          />
        </MenubarPrimitive.ItemIndicator>
      </span>

      {children}
    </MenubarPrimitive.RadioItem>
  ),
);

MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

/* ---------------------------------- */
/* Label */
/* ---------------------------------- */

const MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      [
        "px-3",
        "py-2",

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
));

MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

/* ---------------------------------- */
/* Separator */
/* ---------------------------------- */

const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(
      ["mx-2", "my-1", "h-px", "bg-[#C6577B]/10"].join(" "),
      className,
    )}
    {...props}
  />
));

MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

/* ---------------------------------- */
/* Shortcut */
/* ---------------------------------- */

const MenubarShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        [
          "ml-auto",
          "rounded-md",
          "border border-[#C6577B]/10",
          "bg-white/45",

          "px-1.5",
          "py-0.5",

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

MenubarShortcut.displayName = "MenubarShortcut";

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};