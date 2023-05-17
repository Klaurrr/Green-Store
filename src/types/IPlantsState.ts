import { IPlants } from "./IPlants";

export interface IPlantsState {
      filteredPlants: IPlants[];
      plants: IPlants[];
      cart: IPlants[];
      dataForPagination: number;
      activeCategory: string;
      addPlants: (plants: IPlants[]) => void;
      addCart: (plants: IPlants) => void;
      addFilteredPlants: (plants: IPlants[]) => void;
      addDataForPagination: (number: number) => void;
      setActiveCategory: (category: string) => void;
}
