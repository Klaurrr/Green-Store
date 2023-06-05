import { IPlants } from "./IPlants";

export interface IPlantsState {
      filteredPlants: IPlants[];
      plants: IPlants[];
      cart: {
            plants: IPlants[];
            quantity: {
                  [key: string]: number;
            };
      };
      dataForPagination: number;
      activeCategory: string;
      addPlants: (plants: IPlants[]) => void;
      addCart: (plants: IPlants, quantity: number) => void;
      addFilteredPlants: (plants: IPlants[]) => void;
      addDataForPagination: (number: number) => void;
      setActiveCategory: (category: string) => void;
}
