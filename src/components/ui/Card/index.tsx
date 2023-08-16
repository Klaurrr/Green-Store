import { FC } from "react";
import { useRouter } from "next/router";

import CartSvg from "@/../../public/assets/svg/CartSvg.svg";
import HeartSvg from "@/../../public/assets/svg/heart.svg";
import SearchIcon from "@/../../public/assets/svg/SearchIcon.svg";
import { ICardProps } from "@/components/screens/Home/components/Catalog/props/Card.props";
import useWindowSize from "@/hooks/UseWindowSize";
import { usePlantsStore } from "@/store";

import plantsImg from "../../../../public/assets/plantsImg";
import IconMobile from "../IconMobile";

import styles from "./Card.module.scss";

const Card: FC<ICardProps> = ({ plant, forSlider = false }) => {
      const router = useRouter();

      const isSmallScreen = useWindowSize();

      const { addCart, addToWishlist, cart, wishlist } = usePlantsStore((state) => state);

      const addCartHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            event.stopPropagation();
            addCart(plant, 1);
      };

      const addToWishlistHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            event.stopPropagation();
            addToWishlist(plant);
      };

      return (
            <div
                  className={styles.container}
                  style={{
                        minWidth: forSlider ? "220px" : "258px",
                        minHeight: forSlider ? "255px" : "355px",
                  }}
                  onClick={() => router.push(`/Shop/${plant.id}`)}>
                  {isSmallScreen && (
                        <IconMobile
                              active={wishlist.some((item) => item.id === plant.id)}
                              style={{ position: "absolute" }}>
                              <HeartSvg onClick={addToWishlistHandler} />
                        </IconMobile>
                  )}
                  <div
                        className={styles.wrapper_1}
                        style={{ height: forSlider ? "255px" : "300px" }}>
                        <img src={plantsImg[`${plant.img}`].src} alt="plant-img" />
                        <div className={styles.icons}>
                              <CartSvg
                                    onClick={addCartHandler}
                                    className={
                                          cart.plants.some((item) => item.id === plant.id) &&
                                          styles.active
                                    }
                              />
                              <HeartSvg
                                    onClick={addToWishlistHandler}
                                    className={
                                          wishlist.some((item) => item.id === plant.id) &&
                                          styles.active
                                    }
                              />
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
