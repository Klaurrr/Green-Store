import { FC, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

import Rating from "@/components/common/Rating";
import Button from "@/components/ui/Button";
import { usePlantsStore } from "@/store";

import icons from "../../../../../../../../public/assets/icons";
import { IPlantDetailProps } from "../../PlantDetail.props";

import styles from "./PlantInfo.module.scss";

export const PlantInfo: FC<IPlantDetailProps> = ({ currentPlant }) => {
      const { name, price, rating, description } = currentPlant;

      const [currentSize, setCurrentSize] = useState("S");
      const [counter, setCounter] = useState(1);

      const router = useRouter();

      const addCart = usePlantsStore((state) => state.addCart);
      const { plants } = usePlantsStore((state) => state.cart);

      const countHandler = (operation: string) => {
            setCounter((prevCounter) =>
                  operation === "decrease" ? Math.max(prevCounter - 1, 1) : prevCounter + 1
            );
      };

      const addCartHandler = () => {
            addCart(currentPlant, counter);
      };

      const BUTTON_STYLE = { width: "130px", height: "40px" };

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
                  <div className={styles.short__info}>
                        <h3>Short Description: </h3>
                        <p>{description.split(".").slice(0, 2)}.</p>
                  </div>
                  <div className={styles.size}>
                        <h3>Size: </h3>
                        <div className={styles.size__wrapper}>
                              {["S", "M", "L", "XL"].map((size, index) => (
                                    <div
                                          key={index}
                                          className={
                                                currentSize === size
                                                      ? clsx(styles.size__item, styles.active)
                                                      : styles.size__item
                                          }
                                          onClick={() => setCurrentSize(size)}>
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
                              <Button
                                    style={BUTTON_STYLE}
                                    handler={() => {
                                          addCartHandler(), router.push("/Shop/ShoppingCart");
                                    }}>
                                    BUY NOW
                              </Button>
                              <Button style={BUTTON_STYLE} invert handler={addCartHandler}>
                                    {plants.some((plant) => plant.id === currentPlant.id)
                                          ? "ADDED"
                                          : "ADD TO CART"}
                              </Button>
                        </div>
                  </div>
                  <div className={styles.other}>
                        <p>
                              SKU: <span>128390182309</span>
                        </p>
                        <p>
                              Categories: <span>Какая-то категория с сервера</span>
                        </p>
                        <p>
                              Tags: <span>Home, Garden, Plants</span>
                        </p>
                  </div>
                  <div className={styles.socials}>
                        <h3>Share this products:</h3>
                        <div>
                              {["Facebook", "Twitter", "Linkedin", "Message"].map(
                                    (social, index) => (
                                          <img
                                                src={icons[`${social}Gray`].src}
                                                alt="social image"
                                                key={index}
                                          />
                                    )
                              )}
                        </div>
                  </div>
            </section>
      );
};
