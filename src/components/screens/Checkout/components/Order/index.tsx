import React, { FC } from "react";

import generateKey from "@/components/common/GenerateKey";
import Button from "@/components/ui/Button";
import CardCheckout from "@/components/ui/CardCheckout";
import PaymentMethod from "@/components/ui/PaymentMethod";
import Price from "@/components/ui/Price";
import { usePlantsStore } from "@/store";

import icons from "../../../../../../public/assets/icons";

import { IOrderProps } from "./Order.props";

import styles from "./Order.module.scss";

export const Order: FC<IOrderProps> = ({ currentPaymentMethod, setCurrentPaymentMethod }) => {
      const { plants, quantity } = usePlantsStore((state) => state.cart);
      const { setCoupon } = usePlantsStore((state) => state);

      const getCoupon = () => {
            const userCoupon = prompt("Enter a coupon code");

            userCoupon && setCoupon();
      };

      return (
            <section className={styles.container}>
                  <h3 className={styles.title}>Your Order</h3>
                  <div className={styles.subtitle}>
                        <h4>Products</h4>
                        <h4>Subtotal</h4>
                  </div>
                  <div className={styles.wrapper}>
                        {plants.map((plant) => (
                              <CardCheckout plant={plant} quantity={quantity[plant.name]} />
                        ))}
                  </div>
                  <div className={styles.wrapper__2}>
                        <div className={styles.totalPrice}>
                              <h5 className={styles["price-title"]}>
                                    Have a coupon code? <span onClick={getCoupon}>Click here</span>
                              </h5>
                              <Price />
                        </div>
                        <div className={styles.payment}>
                              <h3 className={styles.title}>Payment Method</h3>
                              <div className={styles.payment__items}>
                                    {[
                                          <img src={icons.Payment.src} />,
                                          <p>Dorect bank transfer</p>,
                                          <p>Cash on delivery</p>,
                                    ].map((item, index) => (
                                          <div
                                                className={styles.payment__item}
                                                onClick={() => setCurrentPaymentMethod(index)}
                                                key={generateKey(`${index}`)}>
                                                <PaymentMethod
                                                      active={index === currentPaymentMethod}>
                                                      {item}
                                                </PaymentMethod>
                                          </div>
                                    ))}
                              </div>
                        </div>
                        <Button
                              style={{
                                    width: "320px",
                                    height: "40px",
                                    fontSize: "15px",
                                    fontWeight: "700",
                              }}
                              type="submit">
                              Place Order
                        </Button>
                  </div>
            </section>
      );
};
