import { Dispatch, SetStateAction } from "react";

export interface IStateProps {
      active: string;
      setActive: Dispatch<SetStateAction<string>>;
}
