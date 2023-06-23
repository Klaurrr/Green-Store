import { IPlants } from "@/types/IPlants";

export interface IPageProps {
      plants: IPlants[];
      title: string;
      allPlants?: IPlants[];
      plant?: IPlants[];
}
