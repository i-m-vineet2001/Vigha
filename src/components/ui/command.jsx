// import * as React from "react";
// import { Command as CommandPrimitive } from "cmdk";
// import { Search } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Dialog, DialogContent } from "@/components/ui/dialog";

// const Command = React.forwardRef(({ className, ...props }, ref) => (
//   <CommandPrimitive
//     ref={ref}
//     className={cn(
//       "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
//       className,
//     )}
//     {...props}
//   />
// ));
// Command.displayName = CommandPrimitive.displayName;

// const CommandDialog = ({ children, ...props }) => {
//   return (
//     <Dialog {...props}>
//       <DialogContent className="overflow-hidden p-0">
//         <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
//           {children}
//         </Command>
//       </DialogContent>
//     </Dialog>
//   );
// };

// const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
//   <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
//     <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
//     <CommandPrimitive.Input
//       ref={ref}
//       className={cn(
//         "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
//         className,
//       )}
//       {...props}
//     />
//   </div>
// ));

// CommandInput.displayName = CommandPrimitive.Input.displayName;

// const CommandList = React.forwardRef(({ className, ...props }, ref) => (
//   <CommandPrimitive.List
//     ref={ref}
//     className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
//     {...props}
//   />
// ));

// CommandList.displayName = CommandPrimitive.List.displayName;

// const CommandEmpty = React.forwardRef((props, ref) => (
//   <CommandPrimitive.Empty
//     ref={ref}
//     className="py-6 text-center text-sm"
//     {...props}
//   />
// ));

// CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

// const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
//   <CommandPrimitive.Group
//     ref={ref}
//     className={cn(
//       "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
//       className,
//     )}
//     {...props}
//   />
// ));

// CommandGroup.displayName = CommandPrimitive.Group.displayName;

// const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
//   <CommandPrimitive.Separator
//     ref={ref}
//     className={cn("-mx-1 h-px bg-border", className)}
//     {...props}
//   />
// ));
// CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

// const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
//   <CommandPrimitive.Item
//     ref={ref}
//     className={cn(
//       "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//       className,
//     )}
//     {...props}
//   />
// ));

// CommandItem.displayName = CommandPrimitive.Item.displayName;

// const CommandShortcut = ({ className, ...props }) => {
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
// CommandShortcut.displayName = "CommandShortcut";

// export {
//   Command,
//   CommandDialog,
//   CommandInput,
//   CommandList,
//   CommandEmpty,
//   CommandGroup,
//   CommandItem,
//   CommandShortcut,
//   CommandSeparator,
// };

"use client";

import * as React from "react";

import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      [
        "group/command",
        "flex h-full w-full flex-col",
        "overflow-hidden",
        "rounded-3xl",
        "border border-[#C6577B]/15",
        "bg-white/65",
        "text-[#4a2732]",
        "backdrop-blur-2xl",
        "shadow-[0_25px_80px_-25px_rgba(122,46,68,0.35)]",

        "[&_[cmdk-group-heading]]:px-3",
        "[&_[cmdk-group-heading]]:py-2",
        "[&_[cmdk-group-heading]]:text-[11px]",
        "[&_[cmdk-group-heading]]:font-semibold",
        "[&_[cmdk-group-heading]]:uppercase",
        "[&_[cmdk-group-heading]]:tracking-wider",
        "[&_[cmdk-group-heading]]:text-[#9d7b85]",

        "[&_[cmdk-group]]:px-2",
        "[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-1",

        "[&_[cmdk-item]]:mx-1",
        "[&_[cmdk-item]]:rounded-xl",
        "[&_[cmdk-item]]:px-3",
        "[&_[cmdk-item]]:py-3",

        "[&_[cmdk-item]_svg]:h-4",
        "[&_[cmdk-item]_svg]:w-4",

        "[&_[cmdk-input-wrapper]_svg]:h-5",
        "[&_[cmdk-input-wrapper]_svg]:w-5",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent
        className="
          overflow-hidden
          rounded-3xl
          border border-[#C6577B]/15
          bg-white/70
          p-0
          backdrop-blur-2xl
          shadow-[0_30px_100px_-25px_rgba(122,46,68,0.45)]
        "
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-20 -top-20
            h-48 w-48
            rounded-full
            bg-[#C6577B]/10
            blur-3xl
          "
        />

        <div className="relative z-10">
          <Command
            className="
              border-0
              bg-transparent
              shadow-none
            "
          >
            {children}
          </Command>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className="
          flex items-center
          border-b border-[#C6577B]/10
          bg-white/25
          px-4
        "
    cmdk-input-wrapper=""
  >
    <Search
      className="
            mr-3
            h-4 w-4
            shrink-0
            text-[#C6577B]
          "
      strokeWidth={1.8}
    />

    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        [
          "flex h-12 w-full",
          "bg-transparent",
          "py-3",
          "text-sm",
          "text-[#4a2732]",
          "outline-none",
          "placeholder:text-[#b3959e]",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",
        ].join(" "),
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      [
        "max-h-[320px]",
        "overflow-y-auto",
        "overflow-x-hidden",
        "scrollbar-thin",
        "scrollbar-thumb-[#C6577B]/20",
        "scrollbar-track-transparent",
        "p-2",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="
          py-10
          text-center
          text-sm
          text-[#9d7b85]
        "
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      [
        "overflow-hidden",
        "p-1",
        "text-[#4a2732]",
        "[&_[cmdk-group-heading]]:px-3",
        "[&_[cmdk-group-heading]]:py-2",
        "[&_[cmdk-group-heading]]:text-[11px]",
        "[&_[cmdk-group-heading]]:font-semibold",
        "[&_[cmdk-group-heading]]:uppercase",
        "[&_[cmdk-group-heading]]:tracking-wider",
        "[&_[cmdk-group-heading]]:text-[#9d7b85]",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(
      ["mx-2", "my-1", "h-px", "bg-[#C6577B]/10"].join(" "),
      className,
    )}
    {...props}
  />
));

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      [
        "relative flex",
        "cursor-default",
        "select-none",
        "items-center",
        "gap-3",
        "rounded-xl",
        "px-3 py-2.5",
        "text-sm",
        "text-[#6b3a49]",
        "outline-none",
        "transition-all duration-200",

        // Selected
        "data-[selected=true]:bg-[#C6577B]/8",
        "data-[selected=true]:text-[#7A2E44]",
        "data-[selected=true]:shadow-[inset_0_0_0_1px_rgba(198,87,123,0.10)]",

        // Disabled
        "data-[disabled=true]:pointer-events-none",
        "data-[disabled=true]:opacity-40",

        "[&_svg]:pointer-events-none",
        "[&_svg]:h-4",
        "[&_svg]:w-4",
        "[&_svg]:shrink-0",
        "[&_svg]:text-[#C6577B]/70",

        "hover:bg-[#C6577B]/5",
      ].join(" "),
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }) => {
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

CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};