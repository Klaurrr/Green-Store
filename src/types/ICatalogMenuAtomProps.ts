import { Dispatch, SetStateAction } from "react";

export interface ICatalogMenuAtomProps {
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
}
