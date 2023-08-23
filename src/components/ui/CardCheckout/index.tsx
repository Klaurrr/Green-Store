import React, { FC } from "react";

import plantsImg from "../../../../public/assets/plantsImg";

import { ICardCheckoutProps } from "./CardCheckout.props";

import styles from "./CardCheckout.module.scss";

const CardCheckout: FC<ICardCheckoutProps> = ({ plant, quantity }) => {
      const { img, name, price } = plant;

      return (
            <div className={styles.plant}>
                  <img src={plantsImg[img].src} alt="plant" className={styles.image} />
                  <div className={styles["plant-title"]}>
                        <h4>{name}</h4>
                        <p>
                              SKU: <span>some SKU</span>
                        </p>
                  </div>
                  <div className={styles.quantity}>
                        <span>(x {quantity})</span>
                  </div>
                  <div className={styles.price}>
                        <p>${Math.ceil(price * quantity)}</p>
                  </div>
            </div>
      );
};

export default CardCheckout;
