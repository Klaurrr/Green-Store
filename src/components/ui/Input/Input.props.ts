import { FieldErrors, FieldValues } from "react-hook-form";

export interface InputProps {
      title?: string;
      required?: boolean;
      placeholder?: string;
      error: FieldErrors<FieldValues>;
      style?: React.CSSProperties | undefined;
}
