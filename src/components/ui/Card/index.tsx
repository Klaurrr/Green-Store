import { FC } from "react";

import { useRouter } from "next/router";

import plantsImg from "../../../../public/assets/plantsImg";

import CartSvg from "@/../../public/assets/svg/CartSvg.svg";
import HeartSvg from "@/../../public/assets/svg/heart.svg";
import SearchIcon from "@/../../public/assets/svg/SearchIcon.svg";

import { usePlantsStore } from "@/store";

import { ICardProps } from "@/components/screens/Home/components/Catalog/props/Card.props";

import styles from "./Card.module.scss";

const Card: FC<ICardProps> = ({ plant, forSlider = false }) => {
      const router = useRouter();

      const addCart = usePlantsStore((state) => state.addCart);

      const addCartHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            addCart(plant, 1);
      };

      return (
            <div
                  className={styles.container}
                  style={{
                        width: forSlider ? "220px" : "258px",
                        height: forSlider ? "255px" : "355px",
                  }}
                  onClick={() => router.push(`/Shop/${plant.id}`)}
            >
                  <div
                        className={styles.wrapper_1}
                        style={{ height: forSlider ? "255px" : "300px" }}
                  >
                        <img src={plantsImg[`${plant.img}`].src} alt="plant-img" />
                        <div className={styles.icons} style={{ left: forSlider ? "53px" : "73px" }}>
                              <div onClick={addCartHandler}>
                                    <CartSvg />
                              </div>
                              <HeartSvg />
                              <SearchIcon />
                        </div>
                  </div>
                  <div className={styles.wrapper_2}>
                        <p>{plant.name}</p>
                        <span>${plant.price}</span>
                  </div>
            </div>
      );
};

export default Card;
