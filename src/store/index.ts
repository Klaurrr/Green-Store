import { create } from "zustand";

import { IPlantsState } from "@/types/IPlantsState";

export const usePlantsStore = create<IPlantsState>((set) => ({
      plants: [],
      cart: {
            plants: [],
            quantity: {},
      },
      filteredPlants: [],
      dataForPagination: 0,
      activeCategory: "default",
      coupon: false,

      addPlants: (plants) => {
            set(() => ({
                  plants: plants,
            }));
      },
      addCart: (currentPlant, quantity) => {
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
      deletePlantFromCart: (currentPlant) => {
            set(
                  (state) => (
                        delete state.cart.quantity[currentPlant.name],
                        {
                              cart: {
                                    plants: [...state.cart.plants].filter(
                                          (item) => item != currentPlant
                                    ),
                                    quantity: state.cart.quantity,
                              },
                        }
                  )
            );
      },
      addFilteredPlants: (plants) => {
            set(() => ({
                  filteredPlants: plants,
            }));
      },
      addDataForPagination: (number) => {
            set(() => ({
                  dataForPagination: number,
            }));
      },
      setActiveCategory: (category) => {
            set(() => ({
                  activeCategory: category,
            }));
      },
      setCoupon: () => {
            set(() => ({
                  coupon: true,
            }));
      },
}));
