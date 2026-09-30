// "use client";

// import * as React from "react";
// import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { X } from "lucide-react";

// import { cn } from "@/lib/utils";

// const Dialog = DialogPrimitive.Root;

// const DialogTrigger = DialogPrimitive.Trigger;

// const DialogPortal = DialogPrimitive.Portal;

// const DialogClose = DialogPrimitive.Close;

// const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
//   <DialogPrimitive.Overlay
//     ref={ref}
//     className={cn(
//       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
//       className,
//     )}
//     {...props}
//   />
// ));
// DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

// const DialogContent = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <DialogPortal>
//       <DialogOverlay />
//       <DialogPrimitive.Content
//         ref={ref}
//         className={cn(
//           "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
//           className,
//         )}
//         {...props}
//       >
//         {children}
//         <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
//           <X className="h-4 w-4" />
//           <span className="sr-only">Close</span>
//         </DialogPrimitive.Close>
//       </DialogPrimitive.Content>
//     </DialogPortal>
//   ),
// );
// DialogContent.displayName = DialogPrimitive.Content.displayName;

// const DialogHeader = ({ className, ...props }) => (
//   <div
//     className={cn(
//       "flex flex-col space-y-1.5 text-center sm:text-left",
//       className,
//     )}
//     {...props}
//   />
// );
// DialogHeader.displayName = "DialogHeader";

// const DialogFooter = ({ className, ...props }) => (
//   <div
//     className={cn(
//       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
//       className,
//     )}
//     {...props}
//   />
// );
// DialogFooter.displayName = "DialogFooter";

// const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
//   <DialogPrimitive.Title
//     ref={ref}
//     className={cn(
//       "text-lg font-semibold leading-none tracking-tight",
//       className,
//     )}
//     {...props}
//   />
// ));
// DialogTitle.displayName = DialogPrimitive.Title.displayName;

// const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
//   <DialogPrimitive.Description
//     ref={ref}
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ));
// DialogDescription.displayName = DialogPrimitive.Description.displayName;

// export {
//   Dialog,
//   DialogPortal,
//   DialogOverlay,
//   DialogTrigger,
//   DialogClose,
//   DialogContent,
//   DialogHeader,
//   DialogFooter,
//   DialogTitle,
//   DialogDescription,
// };

"use client";

import * as React from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      [
        "fixed inset-0 z-50",

        // Warm translucent backdrop
        "bg-[#3f252e]/35",

        // Soft glass blur
        "backdrop-blur-md",

        // Smooth animation
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

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          [
            // Position
            "fixed left-[50%] top-[50%]",
            "z-50",
            "w-[calc(100%-2rem)]",
            "max-w-lg",
            "-translate-x-1/2",
            "-translate-y-1/2",

            // Layout
            "grid gap-5",

            // Premium glass surface
            "overflow-hidden",
            "rounded-3xl",
            "border border-white/60",
            "bg-white/75",
            "p-6 sm:p-7",

            // Glass
            "backdrop-blur-2xl",

            // Typography
            "text-[#4a2732]",

            // Luxury shadow
            "shadow-[0_30px_100px_-25px_rgba(122,46,68,0.42)]",

            // Animation
            "duration-300",
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0",
            "data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2",
            "data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2",
            "data-[state=open]:slide-in-from-top-[48%]",
          ].join(" "),
          className,
        )}
        {...props}
      >
        {/* Soft ambient rose glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-[#C6577B]/10
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-20
            h-44
            w-44
            rounded-full
            bg-[#7A2E44]/5
            blur-3xl
          "
        />

        {/* Top glass highlight */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-8
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#C6577B]/30
            to-transparent
          "
        />

        <div className="relative z-10">{children}</div>

        <DialogPrimitive.Close
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#C6577B]/10
            bg-white/45
            text-[#7A2E44]/65
            backdrop-blur-md
            outline-none
            transition-all
            duration-200
            hover:scale-105
            hover:bg-[#C6577B]/10
            hover:text-[#7A2E44]
            focus:ring-2
            focus:ring-[#C6577B]/25
            focus:ring-offset-2
            focus:ring-offset-white/50
            disabled:pointer-events-none
          "
        >
          <X className="h-4 w-4" strokeWidth={1.8} />

          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      [
        "relative",
        "flex",
        "flex-col",
        "space-y-2",
        "text-center",
        "sm:text-left",
      ].join(" "),
      className,
    )}
    {...props}
  />
);

DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      [
        "relative",
        "flex",
        "flex-col-reverse",
        "gap-2",
        "sm:flex-row",
        "sm:justify-end",
        "sm:gap-2",
      ].join(" "),
      className,
    )}
    {...props}
  />
);

DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
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

DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      ["text-sm", "leading-relaxed", "text-[#8d6874]"].join(" "),
      className,
    )}
    {...props}
  />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};