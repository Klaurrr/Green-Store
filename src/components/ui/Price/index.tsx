import React, { FC } from "react";

import { usePlantsStore } from "@/store";
import { IPriceProps } from "./Price.props";

import styles from "./Price.module.scss";

const Price: FC<IPriceProps> = ({ coupon }) => {
      const { plants, quantity } = usePlantsStore((state) => state.cart);

      const subTotalSum = plants
            .map((plant) => {
                  if (quantity[plant.name]) {
                        return Math.round(plant.price * quantity[plant.name]);
                  }
                  return 0;
            })
            ?.reduce((acc, sum) => acc + sum, 0);

      const COUPON = 15;

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
                              <span>$0.00</span>
                              <span className={styles.charge}>View shipping charge</span>
                        </div>
                  </div>
                  <div className={styles.total}>
                        <h4>Total</h4>
                        <span>
                              ${subTotalSum ? subTotalSum - (coupon ? COUPON : 0) : subTotalSum}
                        </span>
                  </div>
            </>
      );
};

export default Price;
