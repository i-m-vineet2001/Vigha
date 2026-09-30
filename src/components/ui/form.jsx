// "use client";
// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { Controller, FormProvider, useFormContext } from "react-hook-form";

// import { cn } from "@/lib/utils";
// import { Label } from "@/components/ui/label";

// const Form = FormProvider;

// const FormFieldContext = React.createContext({});

// const FormField = ({ ...props }) => {
//   return (
//     <FormFieldContext.Provider value={{ name: props.name }}>
//       <Controller {...props} />
//     </FormFieldContext.Provider>
//   );
// };

// const useFormField = () => {
//   const fieldContext = React.useContext(FormFieldContext);
//   const itemContext = React.useContext(FormItemContext);
//   const { getFieldState, formState } = useFormContext();

//   const fieldState = getFieldState(fieldContext.name, formState);

//   if (!fieldContext) {
//     throw new Error("useFormField should be used within <FormField>");
//   }

//   const { id } = itemContext;

//   return {
//     id,
//     name: fieldContext.name,
//     formItemId: `${id}-form-item`,
//     formDescriptionId: `${id}-form-item-description`,
//     formMessageId: `${id}-form-item-message`,
//     ...fieldState,
//   };
// };

// const FormItemContext = React.createContext({});

// const FormItem = React.forwardRef(({ className, ...props }, ref) => {
//   const id = React.useId();

//   return (
//     <FormItemContext.Provider value={{ id }}>
//       <div ref={ref} className={cn("space-y-2", className)} {...props} />
//     </FormItemContext.Provider>
//   );
// });
// FormItem.displayName = "FormItem";

// const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
//   const { error, formItemId } = useFormField();

//   return (
//     <Label
//       ref={ref}
//       className={cn(error && "text-destructive", className)}
//       htmlFor={formItemId}
//       {...props}
//     />
//   );
// });
// FormLabel.displayName = "FormLabel";

// const FormControl = React.forwardRef(({ ...props }, ref) => {
//   const { error, formItemId, formDescriptionId, formMessageId } =
//     useFormField();

//   return (
//     <Slot
//       ref={ref}
//       id={formItemId}
//       aria-describedby={
//         !error
//           ? `${formDescriptionId}`
//           : `${formDescriptionId} ${formMessageId}`
//       }
//       aria-invalid={!!error}
//       {...props}
//     />
//   );
// });
// FormControl.displayName = "FormControl";

// const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
//   const { formDescriptionId } = useFormField();

//   return (
//     <p
//       ref={ref}
//       id={formDescriptionId}
//       className={cn("text-[0.8rem] text-muted-foreground", className)}
//       {...props}
//     />
//   );
// });
// FormDescription.displayName = "FormDescription";

// const FormMessage = React.forwardRef(
//   ({ className, children, ...props }, ref) => {
//     const { error, formMessageId } = useFormField();
//     const body = error ? String(error?.message) : children;

//     if (!body) {
//       return null;
//     }

//     return (
//       <p
//         ref={ref}
//         id={formMessageId}
//         className={cn("text-[0.8rem] font-medium text-destructive", className)}
//         {...props}
//       >
//         {body}
//       </p>
//     );
//   },
// );
// FormMessage.displayName = "FormMessage";

// export {
//   useFormField,
//   Form,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormDescription,
//   FormMessage,
//   FormField,
// };

"use client";

import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";

/* ---------------------------------- */
/* Form Provider */
/* ---------------------------------- */

const Form = FormProvider;

/* ---------------------------------- */
/* Form Field Context */
/* ---------------------------------- */

const FormFieldContext = React.createContext(null);

const FormField = ({ ...props }) => {
  return (
    <FormFieldContext.Provider
      value={{
        name: props.name,
      }}
    >
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

/* ---------------------------------- */
/* Form Item Context */
/* ---------------------------------- */

const FormItemContext = React.createContext(null);

/* ---------------------------------- */
/* Form Field Hook */
/* ---------------------------------- */

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);

  const itemContext = React.useContext(FormItemContext);

  const formContext = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }

  if (!formContext) {
    throw new Error("useFormField should be used within <Form>");
  }

  const { getFieldState, formState } = formContext;

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,

    formItemId: `${id}-form-item`,

    formDescriptionId: `${id}-form-item-description`,

    formMessageId: `${id}-form-item-message`,

    ...fieldState,
  };
};

/* ---------------------------------- */
/* Form Item */
/* ---------------------------------- */

const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={cn(["group/form-item", "space-y-2.5"].join(" "), className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = "FormItem";

/* ---------------------------------- */
/* Form Label */
/* ---------------------------------- */

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      htmlFor={formItemId}
      className={cn(
        [
          "text-sm",
          "font-medium",
          "text-[#5f3644]",
          "transition-colors duration-200",

          "group-focus-within/form-item:text-[#7A2E44]",

          error && "text-[#b83d5c]",
        ].join(" "),
        className,
      )}
      {...props}
    />
  );
});

FormLabel.displayName = "FormLabel";

/* ---------------------------------- */
/* Form Control */
/* ---------------------------------- */

const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  const describedBy = error
    ? `${formDescriptionId} ${formMessageId}`
    : formDescriptionId;

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={describedBy}
      aria-invalid={!!error}
      className={cn(
        [
          // Base glass input styling
          "border-[#C6577B]/15",
          "bg-white/55",
          "text-[#4a2732]",
          "placeholder:text-[#a88791]",

          "backdrop-blur-md",

          // Smooth interaction
          "transition-all duration-300",

          // Focus
          "focus-visible:border-[#C6577B]/40",
          "focus-visible:ring-2",
          "focus-visible:ring-[#C6577B]/15",
          "focus-visible:ring-offset-0",

          // Hover
          "hover:border-[#C6577B]/25",

          // Validation
          "aria-[invalid=true]:border-[#b83d5c]/40",
          "aria-[invalid=true]:ring-1",
          "aria-[invalid=true]:ring-[#b83d5c]/10",
        ].join(" "),
      )}
      {...props}
    />
  );
});

FormControl.displayName = "FormControl";

/* ---------------------------------- */
/* Form Description */
/* ---------------------------------- */

const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(
        ["text-[0.8rem]", "leading-relaxed", "text-[#987782]"].join(" "),
        className,
      )}
      {...props}
    />
  );
});

FormDescription.displayName = "FormDescription";

/* ---------------------------------- */
/* Form Message */
/* ---------------------------------- */

const FormMessage = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();

    const body = error ? String(error?.message || "") : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn(
          [
            "flex items-center gap-1.5",
            "text-[0.8rem]",
            "font-medium",
            "leading-relaxed",
            "text-[#b83d5c]",
          ].join(" "),
          className,
        )}
        {...props}
      >
        <span
          aria-hidden="true"
          className="
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-[#C6577B]
            "
        />

        {body}
      </p>
    );
  },
);

FormMessage.displayName = "FormMessage";

/* ---------------------------------- */
/* Exports */
/* ---------------------------------- */

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};