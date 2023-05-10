import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";
import { create } from "zustand";

export const usePlantsStore = create<IPlantsState>((set) => ({
      plants: [],
      cart: [],
      filteredPlants: [],
      addPlants: (plants: IPlants[]) => {
            set((state) => ({
                  plants: plants,
            }));
      },
      addCart: (plants: IPlants) =>
            set((state) => ({
                  cart: [...state.cart, plants],
            })),
      addFilteredPlants: (plants: IPlants[]) => {
            set((state) => ({
                  filteredPlants: plants,
            }));
      },
}));
