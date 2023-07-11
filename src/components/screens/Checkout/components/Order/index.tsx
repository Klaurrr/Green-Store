import React, { FC, useState } from "react";

import { usePlantsStore } from "@/store";
import plantsImg from "../../../../../../public/assets/plantsImg";

import styles from "./Order.module.scss";
import Price from "@/components/ui/Price";
import PaymentMethod from "@/components/ui/PaymentMethod";
import icons from "../../../../../../public/assets/icons";
import Button from "@/components/ui/Button";
import GenerateKey from "@/components/common/GenerateKey";
import { IOrderProps } from "./Order.props";

export const Order: FC<IOrderProps> = ({ currentPaymentMethod, setCurrentPaymentMethod }) => {
      const { plants, quantity } = usePlantsStore((state) => state.cart);

      const [coupon, setCoupon] = useState(false);

      const getCoupon = () => {
            const userCoupon = prompt("Enter a coupon code");

            userCoupon && setCoupon(true);
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
                                          <p>${Math.ceil(plant.price * quantity[plant.name])}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
                  <div className={styles.wrapper__2}>
                        <div className={styles.totalPrice}>
                              <h5 className={styles["price-title"]}>
                                    Have a coupon code? <span onClick={getCoupon}>Click here</span>
                              </h5>
                              <Price coupon={coupon} />
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
                                                key={GenerateKey(`${index}`)}
                                          >
                                                <PaymentMethod
                                                      active={index === currentPaymentMethod}
                                                >
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
                              type="submit"
                        >
                              Place Order
                        </Button>
                  </div>
            </section>
      );
};
