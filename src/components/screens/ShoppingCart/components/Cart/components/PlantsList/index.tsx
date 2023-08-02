import React from "react";

import { usePlantsStore } from "@/store";
import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";

import icons from "../../../../../../../../public/assets/icons";
import plantsImg from "../../../../../../../../public/assets/plantsImg";

import styles from "./PlantsList.module.scss";

export const PlantsList = () => {
      const { plants, quantity } = usePlantsStore((state: IPlantsState) => state?.cart);

      const deletePlantFromCart = usePlantsStore((state) => state.deletePlantFromCart);
      const changeQuantity = usePlantsStore((state) => state.addCart);

      const handleClickDelete = (plant: IPlants) => {
            deletePlantFromCart(plant);
      };

      const countHandler = (operation: "decrease" | "increase", plant: IPlants) => {
            if (operation === "decrease") {
                  if (quantity[plant.name] > 1) {
                        changeQuantity(plant, (quantity[plant.name] -= 1));
                  } else {
                        deletePlantFromCart(plant);
                  }
            } else {
                  changeQuantity(plant, (quantity[plant.name] += 1));
            }
      };

      return (
            <div className={styles.container}>
                  <div className={styles.titles}>
                        <h3>Products</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                  </div>
                  <div className={styles.list}>
                        {plants?.length > 0 ? (
                              plants.map((plant) => (
                                    <div className={styles.plant}>
                                          <img
                                                src={plantsImg[plant.img].src}
                                                alt="plant"
                                                className={styles.image}
                                          />
                                          <div className={styles["plant-title"]}>
                                                <h4>{plant.name}</h4>
                                                <p>
                                                      SKU: <span>какой-то SKU с апи</span>
                                                </p>
                                          </div>
                                          <div className={styles.price}>
                                                <p>${plant.price}</p>
                                          </div>
                                          <div className={styles.quantity}>
                                                <div
                                                      onClick={() =>
                                                            countHandler("decrease", plant)
                                                      }>
                                                      -
                                                </div>
                                                <span>{quantity[plant.name]}</span>
                                                <div
                                                      onClick={() =>
                                                            countHandler("increase", plant)
                                                      }>
                                                      +
                                                </div>
                                          </div>
                                          <div className={styles.total}>
                                                <p>
                                                      $
                                                      {Math.round(
                                                            plant.price * quantity[plant.name]
                                                      )}
                                                      .00
                                                </p>
                                          </div>
                                          <img
                                                src={icons.Delete.src}
                                                alt="delete icon"
                                                className={styles.delete}
                                                onClick={() => handleClickDelete(plant)}
                                          />
                                    </div>
                              ))
                        ) : (
                              <h1 className={styles.empty}>Ваша корзина пуста...</h1>
                        )}
                  </div>
            </div>
      );
};
