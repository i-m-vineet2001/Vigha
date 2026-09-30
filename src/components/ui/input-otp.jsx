// import * as React from "react"
// import { OTPInput, OTPInputContext } from "input-otp"
// import { Minus } from "lucide-react"

// import { cn } from "@/lib/utils"

// const InputOTP = React.forwardRef(({ className, containerClassName, ...props }, ref) => (
//   <OTPInput
//     ref={ref}
//     containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
//     className={cn("disabled:cursor-not-allowed", className)}
//     {...props} />
// ))
// InputOTP.displayName = "InputOTP"

// const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("flex items-center", className)} {...props} />
// ))
// InputOTPGroup.displayName = "InputOTPGroup"

// const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
//   const inputOTPContext = React.useContext(OTPInputContext)
//   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

//   return (
//     (<div
//       ref={ref}
//       className={cn(
//         "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
//         isActive && "z-10 ring-1 ring-ring",
//         className
//       )}
//       {...props}>
//       {char}
//       {hasFakeCaret && (
//         <div
//           className="pointer-events-none absolute inset-0 flex items-center justify-center">
//           <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
//         </div>
//       )}
//     </div>)
//   );
// })
// InputOTPSlot.displayName = "InputOTPSlot"

// const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (
//   <div ref={ref} role="separator" {...props}>
//     <Minus />
//   </div>
// ))
// InputOTPSeparator.displayName = "InputOTPSeparator"

// export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

"use client";

import * as React from "react";

import { OTPInput, OTPInputContext } from "input-otp";

import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* OTP Input */
/* ---------------------------------- */

const InputOTP = React.forwardRef(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        [
          "flex",
          "items-center",
          "justify-center",
          "gap-2",
          "has-[:disabled]:opacity-50",
        ].join(" "),
        containerClassName,
      )}
      className={cn(
        ["disabled:cursor-not-allowed", "outline-none"].join(" "),
        className,
      )}
      {...props}
    />
  ),
);

InputOTP.displayName = "InputOTP";

/* ---------------------------------- */
/* OTP Group */
/* ---------------------------------- */

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(["flex", "items-center", "gap-2"].join(" "), className)}
    {...props}
  />
));

InputOTPGroup.displayName = "InputOTPGroup";

/* ---------------------------------- */
/* OTP Slot */
/* ---------------------------------- */

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);

  const slot = inputOTPContext?.slots?.[index];

  const char = slot?.char;
  const hasFakeCaret = slot?.hasFakeCaret;
  const isActive = slot?.isActive;

  return (
    <div
      ref={ref}
      className={cn(
        [
          // Shape
          "relative",
          "flex",
          "h-12",
          "w-11",
          "items-center",
          "justify-center",
          "rounded-xl",

          // Glass
          "border",
          "border-[#C6577B]/15",
          "bg-white/55",
          "backdrop-blur-md",

          // Typography
          "text-lg",
          "font-semibold",
          "text-[#7A2E44]",

          // Shadow
          "shadow-[0_8px_25px_-12px_rgba(122,46,68,0.35)]",

          // Interaction
          "transition-all",
          "duration-300",

          // Hover
          "hover:border-[#C6577B]/30",
          "hover:bg-white/70",

          // Active
          isActive &&
            [
              "z-10",
              "border-[#C6577B]/50",
              "bg-[#C6577B]/8",
              "shadow-[0_0_0_3px_rgba(198,87,123,0.10)]",
              "scale-[1.03]",
            ].join(" "),

          // Disabled
          "has-[:disabled]:opacity-50",

          className,
        ]
          .filter(Boolean)
          .join(" "),
      )}
      {...props}
    >
      {char}

      {/* Fake caret */}
      {hasFakeCaret && (
        <div
          className="
                pointer-events-none
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
        >
          <div
            className="
                  h-5
                  w-px
                  animate-caret-blink
                  bg-[#C6577B]
                  duration-1000
                "
          />
        </div>
      )}

      {/* Active glow */}
      {isActive && (
        <div
          aria-hidden="true"
          className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                bg-gradient-to-br
                from-[#C6577B]/8
                via-transparent
                to-[#7A2E44]/5
              "
        />
      )}
    </div>
  );
});

InputOTPSlot.displayName = "InputOTPSlot";

/* ---------------------------------- */
/* OTP Separator */
/* ---------------------------------- */

const InputOTPSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className={cn(
      [
        "flex",
        "h-12",
        "w-4",
        "items-center",
        "justify-center",
        "text-[#C6577B]/50",
      ].join(" "),
      className,
    )}
    {...props}
  >
    <Minus className="h-3.5 w-3.5" strokeWidth={1.8} />
  </div>
));

InputOTPSeparator.displayName = "InputOTPSeparator";

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };