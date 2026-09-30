// import * as React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { DayPicker } from "react-day-picker";

// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";

// function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
//   return (
//     <DayPicker
//       showOutsideDays={showOutsideDays}
//       className={cn("p-3", className)}
//       classNames={{
//         months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
//         month: "space-y-4",
//         caption: "flex justify-center pt-1 relative items-center",
//         caption_label: "text-sm font-medium",
//         nav: "space-x-1 flex items-center",
//         nav_button: cn(
//           buttonVariants({ variant: "outline" }),
//           "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
//         ),
//         nav_button_previous: "absolute left-1",
//         nav_button_next: "absolute right-1",
//         table: "w-full border-collapse space-y-1",
//         head_row: "flex",
//         head_cell:
//           "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
//         row: "flex w-full mt-2",
//         cell: cn(
//           "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
//           props.mode === "range"
//             ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
//             : "[&:has([aria-selected])]:rounded-md",
//         ),
//         day: cn(
//           buttonVariants({ variant: "ghost" }),
//           "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
//         ),
//         day_range_start: "day-range-start",
//         day_range_end: "day-range-end",
//         day_selected:
//           "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
//         day_today: "bg-accent text-accent-foreground",
//         day_outside:
//           "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
//         day_disabled: "text-muted-foreground opacity-50",
//         day_range_middle:
//           "aria-selected:bg-accent aria-selected:text-accent-foreground",
//         day_hidden: "invisible",
//         ...classNames,
//       }}
//       components={{
//         IconLeft: ({ className, ...props }) => (
//           <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
//         ),
//         IconRight: ({ className, ...props }) => (
//           <ChevronRight className={cn("h-4 w-4", className)} {...props} />
//         ),
//       }}
//       {...props}
//     />
//   );
// }
// Calendar.displayName = "Calendar";

// export { Calendar };

import * as React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <div
      className={cn(
        [
          "relative overflow-hidden",
          "rounded-3xl",
          "border border-[#C6577B]/15",
          "bg-white/55",
          "p-4 sm:p-5",
          "backdrop-blur-2xl",
          "shadow-[0_20px_60px_-25px_rgba(122,46,68,0.35)]",
        ].join(" "),
        className,
      )}
    >
      {/* Top romantic glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-16 -top-16
          h-40 w-40
          rounded-full
          bg-[#C6577B]/10
          blur-3xl
        "
      />

      {/* Bottom glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-20 -left-16
          h-44 w-44
          rounded-full
          bg-[#7A2E44]/5
          blur-3xl
        "
      />

      {/* Glass highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-8 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#C6577B]/35
          to-transparent
        "
      />

      <DayPicker
        showOutsideDays={showOutsideDays}
        className="relative z-10 p-0"
        classNames={{
          months: "flex flex-col sm:flex-row gap-6 sm:gap-8",

          month: "space-y-4 w-full",

          caption: "relative flex items-center justify-center h-10",

          caption_label: [
            "text-sm",
            "font-semibold",
            "tracking-wide",
            "text-[#7A2E44]",
          ].join(" "),

          nav: "absolute inset-x-0 flex items-center justify-between",

          nav_button: cn(
            buttonVariants({
              variant: "outline",
            }),
            [
              "h-8 w-8",
              "rounded-full",
              "border-[#C6577B]/15",
              "bg-white/50",
              "p-0",
              "text-[#7A2E44]",
              "shadow-none",
              "backdrop-blur-md",
              "transition-all duration-300",
              "hover:scale-105",
              "hover:border-[#C6577B]/30",
              "hover:bg-[#C6577B]/8",
            ].join(" "),
          ),

          nav_button_previous: "absolute left-0",

          nav_button_next: "absolute right-0",

          table: "w-full border-collapse",

          head_row: "flex",

          head_cell: [
            "w-9",
            "font-medium",
            "text-[0.7rem]",
            "uppercase",
            "tracking-wider",
            "text-[#9d7b85]",
            "rounded-md",
          ].join(" "),

          row: "mt-2 flex w-full",

          cell: cn(
            [
              "relative",
              "h-9 w-9",
              "p-0",
              "text-center",
              "text-sm",
              "focus-within:relative",
              "focus-within:z-20",
              "[&:has([aria-selected])]:bg-[#fce8ee]/70",
            ].join(" "),
            props.mode === "range"
              ? [
                  "[&:has(>.day-range-end)]:rounded-r-full",
                  "[&:has(>.day-range-start)]:rounded-l-full",
                  "first:[&:has([aria-selected])]:rounded-l-full",
                  "last:[&:has([aria-selected])]:rounded-r-full",
                ].join(" ")
              : "[&:has([aria-selected])]:rounded-full",
          ),

          day: cn(
            buttonVariants({
              variant: "ghost",
            }),
            [
              "h-9 w-9",
              "rounded-full",
              "p-0",
              "font-normal",
              "text-[#6b3a49]",
              "transition-all duration-300",
              "hover:scale-105",
              "hover:bg-[#C6577B]/10",
              "hover:text-[#7A2E44]",
              "aria-selected:opacity-100",
            ].join(" "),
          ),

          day_range_start: "day-range-start",

          day_range_end: "day-range-end",

          day_selected: [
            "bg-gradient-to-br",
            "from-[#C6577B]",
            "to-[#A94768]",
            "text-white",
            "font-semibold",
            "shadow-[0_6px_15px_-7px_rgba(122,46,68,0.65)]",
            "hover:from-[#CF6A89]",
            "hover:to-[#A94768]",
            "hover:text-white",
            "focus:bg-[#C6577B]",
            "focus:text-white",
          ].join(" "),

          day_today: [
            "relative",
            "bg-[#C6577B]/8",
            "text-[#7A2E44]",
            "font-semibold",
            "after:absolute",
            "after:bottom-1",
            "after:left-1/2",
            "after:h-1",
            "after:w-1",
            "after:-translate-x-1/2",
            "after:rounded-full",
            "after:bg-[#C6577B]",
          ].join(" "),

          day_outside: [
            "day-outside",
            "text-[#c6aab3]",
            "opacity-60",
            "aria-selected:bg-[#fce8ee]/30",
            "aria-selected:text-[#c6aab3]",
          ].join(" "),

          day_disabled: ["text-[#c6aab3]", "opacity-35", "line-through"].join(
            " ",
          ),

          day_range_middle: [
            "aria-selected:bg-[#fce8ee]",
            "aria-selected:text-[#7A2E44]",
          ].join(" "),

          day_hidden: "invisible",

          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft
              className={cn("h-4 w-4", className)}
              strokeWidth={1.8}
              {...props}
            />
          ),

          IconRight: ({ className, ...props }) => (
            <ChevronRight
              className={cn("h-4 w-4", className)}
              strokeWidth={1.8}
              {...props}
            />
          ),
        }}
        {...props}
      />
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };