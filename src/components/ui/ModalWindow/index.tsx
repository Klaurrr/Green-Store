import React, { FC, useEffect, useState } from "react";

import { getDate } from "@/components/common/GetDate/getDate";
import { usePlantsStore } from "@/store";

import icons from "../../../../public/assets/icons";
import Button from "../Button";
import CardCheckout from "../CardCheckout";

import { IModalWindowProps } from "./ModalWindow.props";

import styles from "./ModalWindow.module.scss";

const ModalWindow: FC<IModalWindowProps> = ({ setWindowIsVisible }) => {
      const { plants, quantity } = usePlantsStore((state) => state.cart);
      const coupon = usePlantsStore((state) => state.coupon);

      const [date, setDate] = useState<number | null>(null);
      const [shiping] = useState(16);

      const subTotalSum = plants
            .map((plant) => {
                  if (quantity[plant.name]) {
                        return Math.round(plant.price * quantity[plant.name]);
                  }
                  return 0;
            })
            ?.reduce((acc, sum) => acc + sum, 0);

      const submitHandler = () => {
            setWindowIsVisible(false);
      };

      useEffect(() => {
            setDate(Math.floor(Math.random() * 9999999));
      }, []);

      return (
            <div className={styles.modal}>
                  <div className={styles.container}>
                        <div className={styles.wrapper_1}>
                              <img src={icons.Thanks.src} alt="thanks image" />
                              <h4>Your order has been received</h4>
                        </div>
                        <div className={styles.wrapper_2}>
                              <div className={styles.info}>
                                    <div>
                                          <p className={styles.info__title}>Order Number</p>
                                          <span className={styles.info__content}>{date}</span>
                                    </div>
                                    <div>
                                          <p className={styles.info__title}>Date</p>
                                          <span className={styles.info__content}>{getDate()}</span>
                                    </div>
                                    <div>
                                          <p className={styles.info__title}>Total</p>
                                          <span className={styles.info__content}>
                                                {subTotalSum
                                                      ? coupon
                                                            ? subTotalSum - 15
                                                            : subTotalSum
                                                      : 0}
                                                .00
                                          </span>
                                    </div>
                                    <div>
                                          <p className={styles.info__title}>Payment Method</p>
                                          <span className={styles.info__content}>
                                                Cash on delivery
                                          </span>
                                    </div>
                              </div>
                              <div className={styles.order}>
                                    <h3 className={styles.order__title}>Order Details</h3>
                                    <div className={styles.order__subtitles}>
                                          <h4>Products</h4>
                                          <h4>Qty</h4>
                                          <h4>Subtotal</h4>
                                    </div>
                                    <div className={styles.order__plants}>
                                          {plants.map((plant) => (
                                                <CardCheckout
                                                      plant={plant}
                                                      quantity={quantity[plant.name]}
                                                />
                                          ))}
                                    </div>
                              </div>
                              <div className={styles.price}>
                                    <div className={styles["col-1"]}>
                                          <p className={styles.shiping}>
                                                Shiping <span>${shiping}</span>
                                          </p>
                                    </div>
                                    <div className={styles["col-2"]}>
                                          <h4 className={styles.total}>
                                                Total
                                                <span>
                                                      $
                                                      {coupon
                                                            ? subTotalSum + shiping - 15
                                                            : subTotalSum + shiping}
                                                </span>
                                          </h4>
                                    </div>
                              </div>
                              <div className={styles.notification}>
                                    <p>
                                          Your order is currently being processed. You will receive
                                          an order confirmation email shortly with the expected
                                          delivery date for your items.
                                    </p>
                              </div>
                              <div className={styles.button}>
                                    <Button
                                          style={{
                                                width: "162px",
                                                height: "45px",
                                          }}
                                          handler={submitHandler}
                                    >
                                          Track your order
                                    </Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ModalWindow;
