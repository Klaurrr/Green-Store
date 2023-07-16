import {
      FieldError,
      FieldErrorsImpl,
      FieldValues,
      Merge,
      UseFormClearErrors,
} from "react-hook-form";

export interface ISelectProps {
      title: string;
      answers: {
            title: string;
            options: string[];
      };
      placeholder: string;
      width: string;
      register: (func: any) => void;
      error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
      setValue: (option: string, answer: string) => void;
      clearErrors: UseFormClearErrors<FieldValues>;
}
