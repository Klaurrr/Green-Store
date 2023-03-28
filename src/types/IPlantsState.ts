import { IPlants } from "./IPlants";

export interface IPlantsState {
    plants: IPlants[];
    cart: IPlants[];
    addPlants: (plants: IPlants[]) => void;
    addCart: (plants: IPlants) => void;
}
