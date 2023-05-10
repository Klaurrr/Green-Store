import { IPlants } from "./IPlants";

export interface IPlantsState {
      filteredPlants: IPlants[];
      plants: IPlants[];
      cart: IPlants[];
      addPlants: (plants: IPlants[]) => void;
      addCart: (plants: IPlants) => void;
      addFilteredPlants: (plants: IPlants[]) => void;
}
