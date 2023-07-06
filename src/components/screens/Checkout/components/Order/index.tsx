import React from "react";

import { usePlantsStore } from "@/store";
import plantsImg from "../../../../../../public/assets/plantsImg";

import styles from "./Order.module.scss";

export const Order = () => {
      const { plants, quantity } = usePlantsStore((state) => state.cart);

      return (
            <section className={styles.container}>
                  <h3 className={styles.title}>Your Order</h3>
                  <div className={styles.subtitle}>
                        <h4>Products</h4>
                        <h4>Subtotal</h4>
                  </div>
                  <div className={styles.wrapper}>
                        {plants.map((plant) => (
                              <div className={styles.plant}>
                                    <img
                                          src={plantsImg[plant.img].src}
                                          alt="plant"
                                          className={styles.image}
                                    />
                                    <div className={styles["plant-title"]}>
                                          <h4>{plant.name}</h4>
                                          <p>
                                                SKU: <span>some SKU</span>
                                          </p>
                                    </div>
                                    <div className={styles.quantity}>
                                          <span>(x {quantity[plant.name]})</span>
                                    </div>
                                    <div className={styles.price}>
                                          <p>${plant.price}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </section>
      );
};
