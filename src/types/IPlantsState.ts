import { IPlants } from "./IPlants";

export interface IPlantsState {
      plants: IPlants[];
      cart: IPlants[];
      filteredPlants: IPlants[];
      addPlants: (plants: IPlants[]) => void;
      addCart: (plants: IPlants) => void;
      addFilteredPlants: (plants: IPlants[]) => void;
}
