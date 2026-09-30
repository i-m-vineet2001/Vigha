// "use client";

// import { GripVertical } from "lucide-react";
// import * as ResizablePrimitive from "react-resizable-panels";

// import { cn } from "@/lib/utils";

// const ResizablePanelGroup = ({ className, ...props }) => (
//   <ResizablePrimitive.PanelGroup
//     className={cn(
//       "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
//       className,
//     )}
//     {...props}
//   />
// );

// const ResizablePanel = ResizablePrimitive.Panel;

// const ResizableHandle = ({ withHandle, className, ...props }) => (
//   <ResizablePrimitive.PanelResizeHandle
//     className={cn(
//       "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
//       className,
//     )}
//     {...props}
//   >
//     {withHandle && (
//       <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
//         <GripVertical className="h-2.5 w-2.5" />
//       </div>
//     )}
//   </ResizablePrimitive.PanelResizeHandle>
// );

// export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

"use client";

import { GripVertical } from "lucide-react";

import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* Resizable Panel Group */
/* ---------------------------------- */

const ResizablePanelGroup = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      [
        "flex",
        "h-full",
        "w-full",
        "data-[panel-group-direction=vertical]:flex-col",
      ].join(" "),
      className,
    )}
    {...props}
  />
);

/* ---------------------------------- */
/* Resizable Panel */
/* ---------------------------------- */

const ResizablePanel = ResizablePrimitive.Panel;

/* ---------------------------------- */
/* Resizable Handle */
/* ---------------------------------- */

const ResizableHandle = ({ withHandle, className, ...props }) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      [
        "group",
        "relative",
        "flex",
        "w-px",
        "items-center",
        "justify-center",

        // Soft divider
        "bg-[#C6577B]/10",

        // Larger invisible interaction area
        "after:absolute",
        "after:inset-y-0",
        "after:left-1/2",
        "after:w-2",
        "after:-translate-x-1/2",
        "after:rounded-full",
        "after:bg-transparent",
        "after:transition-all",
        "after:duration-300",

        // Focus
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[#C6577B]/25",
        "focus-visible:ring-offset-1",

        // Horizontal → vertical mode
        "data-[panel-group-direction=vertical]:h-px",
        "data-[panel-group-direction=vertical]:w-full",

        "data-[panel-group-direction=vertical]:after:inset-x-0",
        "data-[panel-group-direction=vertical]:after:inset-y-auto",
        "data-[panel-group-direction=vertical]:after:left-0",
        "data-[panel-group-direction=vertical]:after:h-2",
        "data-[panel-group-direction=vertical]:after:w-full",
        "data-[panel-group-direction=vertical]:after:translate-x-0",
        "data-[panel-group-direction=vertical]:after:-translate-y-1/2",

        // Hover
        "hover:bg-[#C6577B]/25",

        "hover:after:bg-[#C6577B]/8",

        // Handle rotation in vertical layouts
        "[&[data-panel-group-direction=vertical]>div]:rotate-90",
      ].join(" "),
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div
        className={cn(
          [
            "z-10",
            "flex",
            "h-7",
            "w-4",
            "items-center",
            "justify-center",
            "rounded-full",

            // Glass handle
            "border",
            "border-[#C6577B]/15",
            "bg-white/65",
            "backdrop-blur-md",

            // Premium depth
            "shadow-[0_5px_16px_-8px_rgba(122,46,68,0.35)]",

            // Interaction
            "text-[#8d6874]",
            "transition-all",
            "duration-300",

            "group-hover:border-[#C6577B]/35",
            "group-hover:bg-[#C6577B]/10",
            "group-hover:text-[#7A2E44]",
            "group-hover:shadow-[0_6px_18px_-8px_rgba(198,87,123,0.45)]",
          ].join(" "),
        )}
      >
        <GripVertical className="h-3.5 w-3.5" strokeWidth={1.8} />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };