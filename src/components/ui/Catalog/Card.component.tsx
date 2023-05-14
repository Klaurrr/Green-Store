import { FC } from "react";
import plantsImg from "../../../../public/assets/plantsImg";

import CartSvg from "@/../../public/assets/svg/CartSvg.svg";
import HeartSvg from "@/../../public/assets/svg/heart.svg";
import SearchIcon from "@/../../public/assets/svg/SearchIcon.svg";

import { ICardProps } from "./Props/Card.props";

import styles from "@/styles/components/ui/Card.module.scss";

const Card: FC<ICardProps> = ({ plant }) => {
      return (
            <div className={styles.container}>
                  <div className={styles.wrapper_1}>
                        <img src={plantsImg[`${plant.img}`].src} alt="plant-img" />
                        <div className={styles.icons}>
                              <CartSvg />
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
