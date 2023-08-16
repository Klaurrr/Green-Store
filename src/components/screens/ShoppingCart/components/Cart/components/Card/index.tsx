import { FC } from "react";

import CardSwiper from "@/components/common/CardSwiper";
import useWindowSize from "@/hooks/UseWindowSize";
import { usePlantsStore } from "@/store";
import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";

import icons from "../../../../../../../../public/assets/icons";
import plantsImg from "../../../../../../../../public/assets/plantsImg";

import { ICardProps } from "./Card.props";

import styles from "./Card.module.scss";

const Card: FC<ICardProps> = ({ plant }) => {
      const { quantity } = usePlantsStore((state: IPlantsState) => state?.cart);
      const deletePlantFromCart = usePlantsStore((state) => state.deletePlantFromCart);
      const changeQuantity = usePlantsStore((state) => state.addCart);

      const isSmallScreen = useWindowSize();

      const handleClickDelete = () => {
            deletePlantFromCart(plant);
      };

      const countHandler = (operation: "decrease" | "increase", plant: IPlants) => {
            if (operation === "decrease") {
                  if (quantity[plant.name] > 1) {
                        changeQuantity(plant, (quantity[plant.name] -= 1));
                  } else {
                        deletePlantFromCart(plant);
                  }
            } else {
                  changeQuantity(plant, (quantity[plant.name] += 1));
            }
      };

      return (
            <div className={styles.container}>
                  <CardSwiper onSwipeLeft={handleClickDelete}>
                        <div className={styles.plant}>
                              <div className={styles.image}>
                                    <img src={plantsImg[plant.img].src} alt="plant" />
                              </div>
                              <div className={styles.wrapper}>
                                    <div className={styles["plant-title"]}>
                                          <h4>{plant.name}</h4>
                                          <p>
                                                SKU: <span>какой-то SKU с апи</span>
                                          </p>
                                    </div>
                                    <div className={styles.price}>
                                          <p>${plant.price}</p>
                                    </div>
                                    <div className={styles.quantity}>
                                          <div onClick={() => countHandler("decrease", plant)}>
                                                -
                                          </div>
                                          <span>{quantity[plant.name]}</span>
                                          <div onClick={() => countHandler("increase", plant)}>
                                                +
                                          </div>
                                    </div>
                                    <div className={styles.total}>
                                          <p>
                                                ${Math.round(plant.price * quantity[plant.name])}
                                                .00
                                          </p>
                                    </div>
                              </div>
                              {!isSmallScreen && (
                                    <img
                                          src={icons.Delete.src}
                                          alt="delete icon"
                                          className={styles.delete}
                                          onClick={handleClickDelete}
                                    />
                              )}
                        </div>
                  </CardSwiper>

                  {isSmallScreen && (
                        <img src={icons.Delete.src} alt="delete icon" className={styles.delete} />
                  )}
            </div>
      );
};

export default Card;
