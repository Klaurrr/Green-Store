import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";
import { create } from "zustand";

export const usePlantsStore = create<IPlantsState>((set) => ({
      plants: [],
      cart: {
            plants: [],
            quantity: {},
      },
      filteredPlants: [],
      dataForPagination: 0,
      activeCategory: "default",

      addPlants: (plants: IPlants[]) => {
            set((state) => ({
                  plants: plants,
            }));
      },
      addCart: (currentPlant: IPlants, quantity: number) => {
            set((state) => ({
                  cart: {
                        plants: state.cart.plants.some((plant) => plant.name === currentPlant.name)
                              ? [...state.cart.plants]
                              : [...state.cart.plants, currentPlant],
                        quantity: {
                              ...state.cart.quantity,
                              [currentPlant.name]: quantity,
                        },
                  },
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
