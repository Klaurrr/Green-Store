import { Dispatch, SetStateAction } from "react";

export interface CatalogMenuProps {
      active: string;
      setActive: Dispatch<SetStateAction<string>>;
}
