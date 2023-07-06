import React, { useState } from "react";

import { usePlantsStore } from "@/store";

import Button from "../../../../ui/Button";

import { useRouter } from "next/router";

import styles from "./styles/CartTotals.module.scss";

const CartTotals = () => {
      const router = useRouter();

      const { plants, quantity } = usePlantsStore((state) => state.cart);

      const [inputValue, setInputValue] = useState("");
      const [coupon, setCoupon] = useState(false);

      const subTotalSum = plants
            .map((plant) => {
                  if (quantity[plant.name]) {
                        return Math.round(plant.price * quantity[plant.name]);
                  }
                  return 0;
            })
            ?.reduce((acc, sum) => acc + sum, 0);

      const handleFormSubmit = (event: any) => {
            event.preventDefault();

            inputValue === "Usachev10"
                  ? setCoupon(true)
                  : console.log("Тут какую-нибудь ошибку выведем");

            setInputValue("");
      };

      const COUPON = 15;

      return (
            <div className={styles.container}>
                  <h3 className={styles.title}>Cart Totals</h3>
                  <p className={styles.coupon}>Coupon Apply</p>
                  <form className={styles.form}>
                        <input
                              type="text"
                              placeholder="Enter Usachev10 here..."
                              value={inputValue}
                              onChange={(event) => setInputValue(event.target.value)}
                        />
                        <button type="submit" onClick={handleFormSubmit}>
                              Apply
                        </button>
                  </form>
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
                  <div className={styles.button}>
                        <Button
                              text="Proceed To Checkout"
                              width="332px"
                              height="40px"
                              fontWeight="700"
                              fontSize="15px"
                              handler={() => router.push("/Shop/Checkout")}
                        />
                  </div>
                  <h5 className={styles.continue}>Continue Shopping</h5>
            </div>
      );
};

export default CartTotals;
