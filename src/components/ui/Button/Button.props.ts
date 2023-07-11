import { ReactNode } from "react";

export interface IProps {
      handler?: (e: any) => void;
      width?: string;
      height?: string;
      children?: ReactNode;
      fontSize?: string;
      fontWeight?: string;
      invert?: boolean;
      type?: "button" | "submit";
      style: { [key: string]: string };
}
