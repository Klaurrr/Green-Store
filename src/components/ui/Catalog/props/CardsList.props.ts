import { Dispatch, SetStateAction } from "react";

export interface ICardsListProps {
      active: string;
      lastDataIndex: number;
      firstDataIndex: number;
      setTotalData: Dispatch<SetStateAction<number>>;
}
