import { FC, useState } from "react";

import Rating from "@/components/common/Rating";
import Button from "../Button";

import clsx from "clsx";

import { IPlantDetailProps } from "./props/PlantDetail.props";

import styles from "@/styles/components/ui/PlantInfo.module.scss";

const PlantInfo: FC<IPlantDetailProps> = ({ currentPlant }) => {
      const { name, price, rating, description } = currentPlant[0];

      const [currentSize, setCurrentSize] = useState("S");
      const [counter, setCounter] = useState(1);

      const countHandler = (operation: string) => {
            if (operation === "decrease") {
                  if (counter > 1) {
                        setCounter(counter - 1);
                  }
            } else setCounter(counter + 1);
      };

      return (
            <section className={styles.container}>
                  <h2 className={styles.title}>{name}</h2>
                  <div className={styles.important}>
                        <span>${price}</span>
                        <div className={styles.rating}>
                              <div>
                                    <Rating rating={rating} />
                              </div>
                              <div className={styles.review}>{5} Customer Review</div>
                        </div>
                  </div>
                  <div className={styles.info}>
                        <h3>Short Description: </h3>
                        <p>{description.split(".").slice(0, 2)}.</p>
                  </div>
                  <div className={styles.size}>
                        <h3>Size: </h3>
                        <div className={styles.size__wrapper}>
                              {["S", "M", "L", "XL"].map((size) => (
                                    <div
                                          className={
                                                currentSize === size
                                                      ? clsx(styles.size__item, styles.active)
                                                      : styles.size__item
                                          }
                                          onClick={() => setCurrentSize(size)}
                                    >
                                          {size}
                                    </div>
                              ))}
                        </div>
                  </div>
                  <div className={styles.buttons__wrapper}>
                        <div className={styles.counter}>
                              <div onClick={() => countHandler("decrease")}>-</div>
                              <span>{counter}</span>
                              <div onClick={() => countHandler("increase")}>+</div>
                        </div>
                        <div className={styles.buttons}>
                              <Button text="BUY NOW" width={"130px"} height="40px" />
                              <Button text="ADD TO CART" width={"130px"} height="40px" invert />
                        </div>
                  </div>
            </section>
      );
};

export default PlantInfo;
