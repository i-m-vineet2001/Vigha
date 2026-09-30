// "use client";

// import * as React from "react";
// import { Drawer as DrawerPrimitive } from "vaul";

// import { cn } from "@/lib/utils";

// const Drawer = ({ shouldScaleBackground = true, ...props }) => (
//   <DrawerPrimitive.Root
//     shouldScaleBackground={shouldScaleBackground}
//     {...props}
//   />
// );
// Drawer.displayName = "Drawer";

// const DrawerTrigger = DrawerPrimitive.Trigger;

// const DrawerPortal = DrawerPrimitive.Portal;

// const DrawerClose = DrawerPrimitive.Close;

// const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
//   <DrawerPrimitive.Overlay
//     ref={ref}
//     className={cn("fixed inset-0 z-50 bg-black/80", className)}
//     {...props}
//   />
// ));
// DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

// const DrawerContent = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <DrawerPortal>
//       <DrawerOverlay />
//       <DrawerPrimitive.Content
//         ref={ref}
//         className={cn(
//           "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
//           className,
//         )}
//         {...props}
//       >
//         <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
//         {children}
//       </DrawerPrimitive.Content>
//     </DrawerPortal>
//   ),
// );
// DrawerContent.displayName = "DrawerContent";

// const DrawerHeader = ({ className, ...props }) => (
//   <div
//     className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
//     {...props}
//   />
// );
// DrawerHeader.displayName = "DrawerHeader";

// const DrawerFooter = ({ className, ...props }) => (
//   <div
//     className={cn("mt-auto flex flex-col gap-2 p-4", className)}
//     {...props}
//   />
// );
// DrawerFooter.displayName = "DrawerFooter";

// const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
//   <DrawerPrimitive.Title
//     ref={ref}
//     className={cn(
//       "text-lg font-semibold leading-none tracking-tight",
//       className,
//     )}
//     {...props}
//   />
// ));
// DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

// const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
//   <DrawerPrimitive.Description
//     ref={ref}
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ));
// DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

// export {
//   Drawer,
//   DrawerPortal,
//   DrawerOverlay,
//   DrawerTrigger,
//   DrawerClose,
//   DrawerContent,
//   DrawerHeader,
//   DrawerFooter,
//   DrawerTitle,
//   DrawerDescription,
// };

"use client";

import * as React from "react";

import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);

Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      [
        "fixed inset-0 z-50",

        // Warm wine-tinted backdrop
        "bg-[#3f252e]/35",

        // Soft cinematic blur
        "backdrop-blur-md",

        // Smooth entrance / exit
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",

        "duration-300",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DrawerPortal>
      <DrawerOverlay />

      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          [
            "fixed inset-x-0 bottom-0 z-50",

            // Layout
            "mt-24 flex h-auto",
            "max-h-[92vh]",
            "flex-col",

            // Premium glass surface
            "overflow-hidden",
            "rounded-t-[2rem]",
            "border border-b-0",
            "border-[#C6577B]/15",
            "bg-white/80",

            // Glass
            "backdrop-blur-2xl",

            // Deep luxury shadow
            "shadow-[0_-25px_80px_-30px_rgba(122,46,68,0.45)]",

            // Text
            "text-[#4a2732]",

            // Animation
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:slide-out-to-bottom",
            "data-[state=open]:slide-in-from-bottom",
            "duration-500",
            "ease-out",
          ].join(" "),
          className,
        )}
        {...props}
      >
        {/* Ambient rose glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-[#C6577B]/10
            blur-3xl
          "
        />

        {/* Secondary wine glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-24
            bottom-0
            h-56
            w-56
            rounded-full
            bg-[#7A2E44]/5
            blur-3xl
          "
        />

        {/* Top highlight */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-10
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#C6577B]/30
            to-transparent
          "
        />

        {/* Drawer handle */}
        <div
          className="
            relative
            z-10
            mx-auto
            mt-4
            h-1.5
            w-14
            rounded-full
            bg-[#7A2E44]/20
            shadow-[0_1px_4px_rgba(122,46,68,0.08)]
          "
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          {children}
        </div>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  ),
);

DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }) => (
  <div
    className={cn(
      [
        "relative",
        "grid gap-2",
        "p-5 sm:p-6",
        "text-center",
        "sm:text-left",
      ].join(" "),
      className,
    )}
    {...props}
  />
);

DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }) => (
  <div
    className={cn(
      [
        "relative",
        "mt-auto",
        "flex flex-col gap-2",
        "border-t border-[#C6577B]/10",
        "bg-white/25",
        "p-5 sm:p-6",
        "backdrop-blur-md",
      ].join(" "),
      className,
    )}
    {...props}
  />
);

DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      [
        "text-xl",
        "font-semibold",
        "leading-tight",
        "tracking-[-0.01em]",
        "text-[#7A2E44]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(
      ["text-sm", "leading-relaxed", "text-[#8d6874]"].join(" "),
      className,
    )}
    {...props}
  />
));

DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};