import React, { useState } from "react";

import styles from "@/styles/components/ui/PlantsList.module.scss";
import { usePlantsStore } from "@/store";
import { IPlantsState } from "@/types/IPlantsState";
import plantsImg from "../../../../public/assets/plantsImg";
import icons from "../../../../public/assets/icons";

const PlantsList = () => {
      const { plants, quantity } = usePlantsStore((state: IPlantsState) => state?.cart);

      //   const [counter, setCounter] = useState(quantity[]);

      //   const addCart = usePlantsStore((state) => state.addCart);

      //   const countHandler = (operation: string) => {
      //         if (operation === "decrease") {
      //               if (counter > 1) {
      //                     setCounter(counter - 1);
      //               }
      //         } else setCounter(counter + 1);
      //   };

      //   const addCartHandler = () => {
      //         addCart(currentPlant[0], counter);
      //   };

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
                                                <div>-</div>
                                                <span>{quantity[plant.name]}</span>
                                                <div>+</div>
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
                                          />
                                    </div>
                              ))
                        ) : (
                              <div>Ваша корзина пуста... Переделаешь</div>
                        )}
                  </div>
            </div>
      );
};

export default PlantsList;
