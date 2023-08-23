import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "@/components/ui/Button";
import Price from "@/components/ui/Price";
import { usePlantsStore } from "@/store";

import styles from "./CartTotals.module.scss";

export const CartTotals = () => {
      const { push } = useRouter();

      const [inputValue, setInputValue] = useState("");

      const {
            cart: { plants },
            setCoupon,
      } = usePlantsStore((state) => state);

      const handleFormSubmit = (event: React.FormEvent) => {
            event.preventDefault();

            setCoupon();

            setInputValue("");
      };

      return (
            <div className={styles.container}>
                  <h3 className={styles.title}>Cart Totals</h3>
                  <p className={styles.coupon}>Coupon Apply</p>
                  <form className={styles.form} onSubmit={handleFormSubmit}>
                        <input
                              type="text"
                              placeholder="Enter coupon here..."
                              value={inputValue}
                              onChange={(event) => setInputValue(event.target.value)}
                        />
                        <button type="submit">Apply</button>
                  </form>
                  <Price />
                  <div className={styles.button}>
                        <Button
                              style={{
                                    width: "332px",
                                    height: "40px",
                                    fontWeight: "700",
                                    fontSize: "15px",
                                    pointerEvents: plants.length ? "auto" : "none",
                                    background: plants.length
                                          ? "rgb(70, 163, 88)"
                                          : "rgb(70, 163, 88, 0.3)",
                              }}
                              handler={() => push("/Shop/Checkout")}>
                              Proceed To Checkout
                        </Button>
                  </div>
                  <h5 className={styles.continue} onClick={() => push("/Home")}>
                        Continue Shopping
                  </h5>
            </div>
      );
};
