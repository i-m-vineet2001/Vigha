// import * as React from "react";
// import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
// import { cva } from "class-variance-authority";
// import { ChevronDown } from "lucide-react";

// import { cn } from "@/lib/utils";

// const NavigationMenu = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <NavigationMenuPrimitive.Root
//       ref={ref}
//       className={cn(
//         "relative z-10 flex max-w-max flex-1 items-center justify-center",
//         className,
//       )}
//       {...props}
//     >
//       {children}
//       <NavigationMenuViewport />
//     </NavigationMenuPrimitive.Root>
//   ),
// );
// NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

// const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
//   <NavigationMenuPrimitive.List
//     ref={ref}
//     className={cn(
//       "group flex flex-1 list-none items-center justify-center space-x-1",
//       className,
//     )}
//     {...props}
//   />
// ));
// NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

// const NavigationMenuItem = NavigationMenuPrimitive.Item;

// const navigationMenuTriggerStyle = cva(
//   "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
// );

// const NavigationMenuTrigger = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <NavigationMenuPrimitive.Trigger
//       ref={ref}
//       className={cn(navigationMenuTriggerStyle(), "group", className)}
//       {...props}
//     >
//       {children}{" "}
//       <ChevronDown
//         className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
//         aria-hidden="true"
//       />
//     </NavigationMenuPrimitive.Trigger>
//   ),
// );
// NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

// const NavigationMenuContent = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <NavigationMenuPrimitive.Content
//       ref={ref}
//       className={cn(
//         "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

// const NavigationMenuLink = NavigationMenuPrimitive.Link;

// const NavigationMenuViewport = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <div className={cn("absolute left-0 top-full flex justify-center")}>
//       <NavigationMenuPrimitive.Viewport
//         className={cn(
//           "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
//           className,
//         )}
//         ref={ref}
//         {...props}
//       />
//     </div>
//   ),
// );
// NavigationMenuViewport.displayName =
//   NavigationMenuPrimitive.Viewport.displayName;

// const NavigationMenuIndicator = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <NavigationMenuPrimitive.Indicator
//       ref={ref}
//       className={cn(
//         "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
//         className,
//       )}
//       {...props}
//     >
//       <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
//     </NavigationMenuPrimitive.Indicator>
//   ),
// );
// NavigationMenuIndicator.displayName =
//   NavigationMenuPrimitive.Indicator.displayName;

// export {
//   navigationMenuTriggerStyle,
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuItem,
//   NavigationMenuContent,
//   NavigationMenuTrigger,
//   NavigationMenuLink,
//   NavigationMenuIndicator,
//   NavigationMenuViewport,
// };

"use client";

import * as React from "react";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cva } from "class-variance-authority";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* Navigation Menu */
/* ---------------------------------- */

const NavigationMenu = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        [
          "relative",
          "z-10",
          "flex",
          "max-w-max",
          "flex-1",
          "items-center",
          "justify-center",
        ].join(" "),
        className,
      )}
      {...props}
    >
      {children}

      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  ),
);

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

/* ---------------------------------- */
/* Navigation List */
/* ---------------------------------- */

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      [
        "group",
        "flex",
        "flex-1",
        "list-none",
        "items-center",
        "justify-center",
        "gap-1",

        "rounded-2xl",
        "border border-white/60",
        "bg-white/45",
        "p-1.5",
        "backdrop-blur-xl",

        "shadow-[0_10px_35px_-18px_rgba(122,46,68,0.28)]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

/* ---------------------------------- */
/* Navigation Item */
/* ---------------------------------- */

const NavigationMenuItem = NavigationMenuPrimitive.Item;

/* ---------------------------------- */
/* Trigger Styles */
/* ---------------------------------- */

const navigationMenuTriggerStyle = cva(
  [
    "group",
    "inline-flex",
    "h-10",
    "w-max",
    "items-center",
    "justify-center",

    "rounded-xl",
    "px-3.5",
    "py-2",

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

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "data-[active]:bg-[#C6577B]/8",
    "data-[active]:text-[#7A2E44]",

    "data-[state=open]:bg-[#C6577B]/10",
    "data-[state=open]:text-[#7A2E44]",

    "data-[state=open]:shadow-[0_4px_14px_-8px_rgba(198,87,123,0.35)]",
  ].join(" "),
);

/* ---------------------------------- */
/* Navigation Trigger */
/* ---------------------------------- */

const NavigationMenuTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}

      <ChevronDown
        className="
            relative
            top-[1px]
            ml-1.5
            h-3.5
            w-3.5
            text-[#C6577B]/65
            transition-transform
            duration-300
            group-data-[state=open]:rotate-180
          "
        aria-hidden="true"
        strokeWidth={1.8}
      />
    </NavigationMenuPrimitive.Trigger>
  ),
);

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

/* ---------------------------------- */
/* Navigation Content */
/* ---------------------------------- */

const NavigationMenuContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        [
          "left-0",
          "top-0",
          "w-full",

          "data-[motion^=from-]:animate-in",
          "data-[motion^=to-]:animate-out",

          "data-[motion^=from-]:fade-in",
          "data-[motion^=to-]:fade-out",

          "data-[motion=from-end]:slide-in-from-right-52",
          "data-[motion=from-start]:slide-in-from-left-52",

          "data-[motion=to-end]:slide-out-to-right-52",
          "data-[motion=to-start]:slide-out-to-left-52",

          "md:absolute",
          "md:w-auto",
        ].join(" "),
        className,
      )}
      {...props}
    />
  ),
);

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

/* ---------------------------------- */
/* Navigation Link */
/* ---------------------------------- */

const NavigationMenuLink = NavigationMenuPrimitive.Link;

/* ---------------------------------- */
/* Navigation Viewport */
/* ---------------------------------- */

const NavigationMenuViewport = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      className="
          absolute
          left-0
          top-full
          flex
          justify-center
        "
    >
      <NavigationMenuPrimitive.Viewport
        ref={ref}
        className={cn(
          [
            "relative",
            "mt-2",

            "origin-top-center",

            "h-[var(--radix-navigation-menu-viewport-height)]",

            "w-full",
            "overflow-hidden",

            "rounded-2xl",

            "border border-white/60",
            "bg-white/80",

            "text-[#4a2732]",

            "backdrop-blur-2xl",

            "shadow-[0_25px_70px_-20px_rgba(122,46,68,0.38)]",

            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",

            "data-[state=closed]:fade-out-0",
            "data-[state=open]:fade-in-0",

            "data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95",

            "md:w-[var(--radix-navigation-menu-viewport-width)]",
          ].join(" "),
          className,
        )}
        {...props}
      />
    </div>
  ),
);

NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

/* ---------------------------------- */
/* Navigation Indicator */
/* ---------------------------------- */

const NavigationMenuIndicator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        [
          "top-full",
          "z-[1]",
          "flex",
          "h-2",
          "items-end",
          "justify-center",
          "overflow-hidden",

          "data-[state=visible]:animate-in",
          "data-[state=hidden]:animate-out",

          "data-[state=hidden]:fade-out",
          "data-[state=visible]:fade-in",
        ].join(" "),
        className,
      )}
      {...props}
    >
      <div
        className="
            relative
            top-[60%]
            h-2
            w-2
            rotate-45
            rounded-tl-sm
            border-l
            border-t
            border-[#C6577B]/15
            bg-white/80
            shadow-[0_0_12px_rgba(198,87,123,0.12)]
          "
      />
    </NavigationMenuPrimitive.Indicator>
  ),
);

NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};