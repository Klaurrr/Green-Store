import React, { useState } from "react";
import { useRouter } from "next/router";

import Price from "@/components/ui/Price";
import { usePlantsStore } from "@/store";

import Button from "../../../../ui/Button";

import styles from "./styles/CartTotals.module.scss";

const CartTotals = () => {
      const router = useRouter();

      const [inputValue, setInputValue] = useState("");

      const { plants, setCoupon } = usePlantsStore((state) => state);

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
                              handler={() => router.push("/Shop/Checkout")}
                        >
                              Proceed To Checkout
                        </Button>
                  </div>
                  <h5 className={styles.continue} onClick={() => router.push("/Home")}>
                        Continue Shopping
                  </h5>
            </div>
      );
};

export default CartTotals;
