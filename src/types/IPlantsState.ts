import { IPlants } from "./IPlants";

interface Cart {
      plants: IPlants[];
      quantity: {
            [key: string]: number;
      };
}

export interface IPlantsState {
      filteredPlants: IPlants[];
      plants: IPlants[];
      cart: Cart;
      wishlist: IPlants[];
      dataForPagination: number;
      activeCategory: string;
      addPlants: (plants: IPlants[]) => void;
      addCart: (plants: IPlants, quantity: number) => void;
      addToWishlist: (currentPlant: IPlants) => void;
      deletePlantFromCart: (currentPlant: IPlants) => void;
      addFilteredPlants: (plants: IPlants[]) => void;
      addDataForPagination: (number: number) => void;
      setActiveCategory: (category: string) => void;
      coupon: boolean;
      setCoupon: () => void;
}
