import { Dispatch, SetStateAction } from "react";

export interface ICatalogMenuProps {
      active: string;
      setActive: Dispatch<SetStateAction<string>>;
}
