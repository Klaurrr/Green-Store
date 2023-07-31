import React, { FC } from "react";

import { usePlantsStore } from "@/store";

import styles from "./Price.module.scss";

const Price: FC = () => {
      const { plants, quantity } = usePlantsStore((state) => state.cart);
      const coupon = usePlantsStore((state) => state.coupon);

      const SHIPPING = 16;
      const COUPON = 15;

      const subTotalSum = plants
            .map((plant) => {
                  if (quantity[plant.name]) {
                        return Math.round(plant.price * quantity[plant.name]);
                  }
                  return 0;
            })
            ?.reduce((acc, sum) => acc + sum, 0);

      const totalSum = subTotalSum
            ? subTotalSum - (coupon ? COUPON : 0) + SHIPPING
            : subTotalSum + SHIPPING;

      return (
            <>
                  <div className={styles.subtotal}>
                        <p>Subtotal</p>
                        <span>${subTotalSum}.00</span>
                  </div>
                  <div className={styles.discount}>
                        <p>Coupon Discount</p>
                        <span>(-) ${coupon ? COUPON : 0}.00</span>
                  </div>
                  <div className={styles.shiping}>
                        <p>Shiping</p>
                        <div>
                              <span>$16.00</span>
                              <span className={styles.charge}>View shipping charge</span>
                        </div>
                  </div>
                  <div className={styles.total}>
                        <h4>Total</h4>
                        <span>${totalSum}</span>
                  </div>
            </>
      );
};

export default Price;
