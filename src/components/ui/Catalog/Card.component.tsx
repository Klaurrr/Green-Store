import { FC } from "react";
import plantsImg from "../../../../public/assets/plantsImg";

import CartSvg from "@/../../public/assets/svg/CartSvg.svg";
import HeartSvg from "@/../../public/assets/svg/heart.svg";
import SearchIcon from "@/../../public/assets/svg/SearchIcon.svg";

import { usePlantsStore } from "@/store";

import { ICardProps } from "./props/Card.props";

import styles from "@/styles/components/ui/Card.module.scss";
import { useRouter } from "next/router";

const Card: FC<ICardProps> = ({ plant }) => {
      const addCart = usePlantsStore((state) => state.addCart);
      const plantsInCart = usePlantsStore((state) => state.cart);

      const router = useRouter();

      const addCartHandler = () => {
            !plantsInCart.includes(plant) && addCart(plant);
      };

      return (
            <div className={styles.container} onClick={() => router.push(`/Shop/${plant.id}`)}>
                  <div className={styles.wrapper_1}>
                        <img src={plantsImg[`${plant.img}`].src} alt="plant-img" />
                        <div className={styles.icons}>
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
