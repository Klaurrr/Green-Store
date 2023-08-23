import { Dispatch, SetStateAction } from "react";

export interface IMenuProps {
      active: string;
      setActive: Dispatch<SetStateAction<string>>;
      setCurrentPage: (item: number) => void;
}
