import React from "react";

import generateKey from "@/components/common/GenerateKey";
import ReturnHat from "@/components/ui/ReturnHat";
import useWindowSize from "@/hooks/UseWindowSize";
import { usePlantsStore } from "@/store";
import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";

import Card from "../Card";

import styles from "./PlantsList.module.scss";

export const PlantsList = () => {
      const { plants } = usePlantsStore((state: IPlantsState) => state?.cart);

      const isSmallScreen = useWindowSize();

      return (
            <div className={styles.container}>
                  {isSmallScreen && <ReturnHat title="Cart" />}
                  <div className={styles.titles}>
                        <h3>Products</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                  </div>
                  <div className={styles.list}>
                        {plants?.length > 0 ? (
                              plants.map((plant: IPlants, index) => (
                                    <Card plant={plant} key={generateKey(`${index}`)} />
                              ))
                        ) : (
                              <h1 className={styles.empty}>Ваша корзина пуста...</h1>
                        )}
                  </div>
            </div>
      );
};
