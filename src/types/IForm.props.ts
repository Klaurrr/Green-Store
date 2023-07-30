import {
      Control,
      ControllerProps,
      FieldErrors,
      FieldPath,
      FieldValues,
      UseFormClearErrors,
      UseFormRegister,
      UseFormSetValue,
} from "react-hook-form";

export interface IFormProps {
      Controller: <
            TFieldValues extends FieldValues = FieldValues,
            TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
      >(
            props: ControllerProps<TFieldValues, TName>
      ) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
      control: Control<FieldValues, any>;
      errors: FieldErrors<FieldValues>;
      register: UseFormRegister<FieldValues>;
      clearErrors: UseFormClearErrors<FieldValues>;
      setValue: UseFormSetValue<FieldValues>;
}
