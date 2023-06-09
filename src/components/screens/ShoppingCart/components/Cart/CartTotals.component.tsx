import React, { useState } from "react";

import { usePlantsStore } from "@/store";

import Button from "../../../../ui/Button";

import { useRouter } from "next/router";

import styles from "./styles/CartTotals.module.scss";
import Price from "@/components/ui/Price";

const CartTotals = () => {
      const router = useRouter();

      const [inputValue, setInputValue] = useState("");
      const [coupon, setCoupon] = useState(false);

      const { plants } = usePlantsStore((state) => state.cart);

      const handleFormSubmit = (event: any) => {
            event.preventDefault();

            inputValue === "Usachev10"
                  ? setCoupon(true)
                  : console.log("Тут какую-нибудь ошибку выведем");

            setInputValue("");
      };

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
                  <Price coupon={coupon} />
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
