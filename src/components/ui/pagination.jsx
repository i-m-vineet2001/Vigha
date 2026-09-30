// import * as React from "react";
// import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";

// const Pagination = ({ className, ...props }) => (
//   <nav
//     role="navigation"
//     aria-label="pagination"
//     className={cn("mx-auto flex w-full justify-center", className)}
//     {...props}
//   />
// );
// Pagination.displayName = "Pagination";

// const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
//   <ul
//     ref={ref}
//     className={cn("flex flex-row items-center gap-1", className)}
//     {...props}
//   />
// ));
// PaginationContent.displayName = "PaginationContent";

// const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
//   <li ref={ref} className={cn("", className)} {...props} />
// ));
// PaginationItem.displayName = "PaginationItem";

// const PaginationLink = ({ className, isActive, size = "icon", ...props }) => (
//   <a
//     aria-current={isActive ? "page" : undefined}
//     className={cn(
//       buttonVariants({
//         variant: isActive ? "outline" : "ghost",
//         size,
//       }),
//       className,
//     )}
//     {...props}
//   />
// );
// PaginationLink.displayName = "PaginationLink";

// const PaginationPrevious = ({ className, ...props }) => (
//   <PaginationLink
//     aria-label="Go to previous page"
//     size="default"
//     className={cn("gap-1 pl-2.5", className)}
//     {...props}
//   >
//     <ChevronLeft className="h-4 w-4" />
//     <span>Previous</span>
//   </PaginationLink>
// );
// PaginationPrevious.displayName = "PaginationPrevious";

// const PaginationNext = ({ className, ...props }) => (
//   <PaginationLink
//     aria-label="Go to next page"
//     size="default"
//     className={cn("gap-1 pr-2.5", className)}
//     {...props}
//   >
//     <span>Next</span>
//     <ChevronRight className="h-4 w-4" />
//   </PaginationLink>
// );
// PaginationNext.displayName = "PaginationNext";

// const PaginationEllipsis = ({ className, ...props }) => (
//   <span
//     aria-hidden
//     className={cn("flex h-9 w-9 items-center justify-center", className)}
//     {...props}
//   >
//     <MoreHorizontal className="h-4 w-4" />
//     <span className="sr-only">More pages</span>
//   </span>
// );
// PaginationEllipsis.displayName = "PaginationEllipsis";

// export {
//   Pagination,
//   PaginationContent,
//   PaginationLink,
//   PaginationItem,
//   PaginationPrevious,
//   PaginationNext,
//   PaginationEllipsis,
// };

"use client";

import * as React from "react";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

/* ---------------------------------- */
/* Pagination */
/* ---------------------------------- */

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(
      ["mx-auto", "flex", "w-full", "justify-center"].join(" "),
      className,
    )}
    {...props}
  />
);

Pagination.displayName = "Pagination";

/* ---------------------------------- */
/* Pagination Content */
/* ---------------------------------- */

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      [
        "flex",
        "flex-row",
        "items-center",
        "gap-1.5",
        "rounded-2xl",
        "border border-[#C6577B]/10",
        "bg-white/35",
        "p-1",
        "backdrop-blur-md",
        "shadow-[0_8px_30px_-18px_rgba(122,46,68,0.28)]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

PaginationContent.displayName = "PaginationContent";

/* ---------------------------------- */
/* Pagination Item */
/* ---------------------------------- */

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("flex items-center", className)} {...props} />
));

PaginationItem.displayName = "PaginationItem";

/* ---------------------------------- */
/* Pagination Link */
/* ---------------------------------- */

const PaginationLink = ({ className, isActive, size = "icon", ...props }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "secondary" : "ghost",
        size,
      }),
      [
        "rounded-xl",
        "text-[#6b3a49]",
        "transition-all",
        "duration-200",

        !isActive && "hover:bg-[#C6577B]/7 hover:text-[#7A2E44]",

        isActive &&
          [
            "border border-[#C6577B]/20",
            "bg-gradient-to-br",
            "from-[#C6577B]/15",
            "to-[#7A2E44]/8",
            "text-[#7A2E44]",
            "shadow-[0_5px_18px_-10px_rgba(198,87,123,0.45)]",
          ].join(" "),
      ],
      className,
    )}
    {...props}
  />
);

PaginationLink.displayName = "PaginationLink";

/* ---------------------------------- */
/* Previous */
/* ---------------------------------- */

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn(
      ["gap-1.5", "rounded-xl", "pl-2.5", "pr-3"].join(" "),
      className,
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />

    <span>Previous</span>
  </PaginationLink>
);

PaginationPrevious.displayName = "PaginationPrevious";

/* ---------------------------------- */
/* Next */
/* ---------------------------------- */

const PaginationNext = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn(
      ["gap-1.5", "rounded-xl", "pl-3", "pr-2.5"].join(" "),
      className,
    )}
    {...props}
  >
    <span>Next</span>

    <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
  </PaginationLink>
);

PaginationNext.displayName = "PaginationNext";

/* ---------------------------------- */
/* Ellipsis */
/* ---------------------------------- */

const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden="true"
    className={cn(
      [
        "flex",
        "h-10",
        "w-10",
        "items-center",
        "justify-center",
        "rounded-xl",
        "text-[#9d7b85]",
      ].join(" "),
      className,
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" strokeWidth={1.8} />

    <span className="sr-only">More pages</span>
  </span>
);

PaginationEllipsis.displayName = "PaginationEllipsis";

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};