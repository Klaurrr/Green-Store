import { FC, useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import generateKey from "@/components/common/GenerateKey";
import IconMobile from "@/components/ui/IconMobile";
import useWindowSize from "@/hooks/UseWindowSize";
import { usePlantsStore } from "@/store";

import ArrowLeft from "../../../../../../../../public/assets/svg/ArrowLeft.svg";
import HeartSvg from "../../../../../../../../public/assets/svg/heart.svg";

import { IPlantSwitcherProps } from "./PlantsSwitcher.props";

import styles from "./PlantSwitcher.module.scss";

export const PlantSwitcher: FC<IPlantSwitcherProps> = ({ images, currentPlant }) => {
      const [currentImage, setCurrentImage] = useState(0);

      const { push } = useRouter();

      const isSmallScreen = useWindowSize();

      const { addToWishlist, wishlist } = usePlantsStore((state) => state);

      const addToWishlistHandler = useCallback(
            (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  event.stopPropagation();
                  addToWishlist(currentPlant);
            },
            [addToWishlist, currentPlant]
      );

      const STYLES = { width: "48px", height: "48px", background: "#F6F6F6" };

      return (
            <article className={styles.container}>
                  <div className={styles.switches}>
                        {images.map((image, index) => (
                              <img
                                    src={image}
                                    alt="slider with plants"
                                    className={index === currentImage ? styles.active : ""}
                                    onClick={() => setCurrentImage(index)}
                                    key={generateKey(`${index}`)}
                              />
                        ))}
                  </div>
                  <div>
                        {isSmallScreen && (
                              <div className={styles.mobile__icons}>
                                    <IconMobile style={STYLES}>
                                          <ArrowLeft onClick={() => push("/Home")} />
                                    </IconMobile>
                                    <IconMobile
                                          active={wishlist.some(
                                                (item) => item.id === currentPlant.id
                                          )}
                                          style={STYLES}>
                                          <HeartSvg onClick={addToWishlistHandler} />
                                    </IconMobile>
                              </div>
                        )}
                        <Image
                              src={images[currentImage]}
                              alt={"current image in slider"}
                              loading="eager"
                              width={404}
                              height={404}
                              className={styles.image}
                        />
                  </div>
            </article>
      );
};
