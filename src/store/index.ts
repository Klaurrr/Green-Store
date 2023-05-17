import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";
import { create } from "zustand";

export const usePlantsStore = create<IPlantsState>((set) => ({
      plants: [],
      cart: [],
      filteredPlants: [],
      dataForPagination: 0,
      activeCategory: "default",
      addPlants: (plants: IPlants[]) => {
            set((state) => ({
                  plants: plants,
            }));
      },
      addCart: (plants: IPlants) => {
            set((state) => ({
                  cart: [...state.cart, plants],
            }));
      },
      addFilteredPlants: (plants: IPlants[]) => {
            set((state) => ({
                  filteredPlants: plants,
            }));
      },
      addDataForPagination: (number: number) => {
            set((state) => ({
                  dataForPagination: number,
            }));
      },
      setActiveCategory: (category: string) => {
            set((state) => ({
                  activeCategory: category,
            }));
      },
}));
