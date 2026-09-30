// "use client";

// import * as React from "react";
// import * as AvatarPrimitive from "@radix-ui/react-avatar";

// import { cn } from "@/lib/utils";

// const Avatar = React.forwardRef(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Root
//     ref={ref}
//     className={cn(
//       "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
//       className,
//     )}
//     {...props}
//   />
// ));
// Avatar.displayName = AvatarPrimitive.Root.displayName;

// const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Image
//     ref={ref}
//     className={cn("aspect-square h-full w-full", className)}
//     {...props}
//   />
// ));
// AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Fallback
//     ref={ref}
//     className={cn(
//       "flex h-full w-full items-center justify-center rounded-full bg-muted",
//       className,
//     )}
//     {...props}
//   />
// ));
// AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// export { Avatar, AvatarImage, AvatarFallback };

"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      [
        "group relative flex h-11 w-11 shrink-0",
        "overflow-hidden rounded-full",
        "border border-[#C6577B]/20",
        "bg-gradient-to-br from-[#fff8fa] via-[#fceef2] to-[#f7dce4]",
        "shadow-[0_6px_20px_-8px_rgba(122,46,68,0.45)]",
        "transition-all duration-500 ease-out",
        "hover:scale-105",
        "hover:border-[#C6577B]/40",
        "hover:shadow-[0_10px_30px_-8px_rgba(122,46,68,0.5)]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      [
        "aspect-square h-full w-full",
        "object-cover",
        "transition-transform duration-700",
        "group-hover:scale-105",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      [
        "flex h-full w-full items-center justify-center",
        "rounded-full",
        "bg-gradient-to-br",
        "from-[#fce4eb] via-[#f7d4df] to-[#eab8c8]",
        "font-serif text-sm font-semibold",
        "text-[#7A2E44]",
        "tracking-wide",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };