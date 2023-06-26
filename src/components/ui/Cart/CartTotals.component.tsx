import React from "react";

import { usePlantsStore } from "@/store";

import styles from "@/styles/components/ui/CartTotals.module.scss";
import Button from "../Button";

const CartTotals = () => {
      const { plants, quantity } = usePlantsStore((state) => state.cart);

      const subTotalSum = plants
            .map((plant) => {
                  if (quantity[plant.name]) {
                        return Math.round(plant.price * quantity[plant.name]);
                  }
                  return 0;
            })
            ?.reduce((acc, sum) => acc + sum, 0);

      const couponDiscount = 15;

      return (
            <div className={styles.container}>
                  <h3 className={styles.title}>Cart Totals</h3>
                  <p className={styles.coupon}>Coupon Apply</p>
                  <form className={styles.form}>
                        <input type="text" placeholder="Enter coupon code here..." />
                        <button type="submit">Apply</button>
                  </form>
                  <div className={styles.subtotal}>
                        <p>Subtotal</p>
                        <span>${subTotalSum}.00</span>
                  </div>
                  <div className={styles.discount}>
                        <p>Coupon Discount</p>
                        <span>(-) ${couponDiscount}.00</span>
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
                        <span>${subTotalSum ? subTotalSum - couponDiscount : subTotalSum}</span>
                  </div>
                  <div className={styles.button}>
                        <Button
                              text="Proceed To Checkout"
                              width="332px"
                              height="40px"
                              fontWeight="700"
                              fontSize="15px"
                        />
                  </div>
                  <h5 className={styles.continue}>Continue Shopping</h5>
            </div>
      );
};

export default CartTotals;
