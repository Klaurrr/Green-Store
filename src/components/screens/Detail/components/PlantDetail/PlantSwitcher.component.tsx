import { FC, useState } from "react";
import Image from "next/image";

import { IPlantSwitcherProps } from "./props/PlantsSwitcher.props";

import styles from "./styles/PlantSwitcher.module.scss";

const PlantSwitcher: FC<IPlantSwitcherProps> = ({ images }) => {
      const [currentImage, setCurrentImage] = useState(0);

      return (
            <article className={styles.container}>
                  <div className={styles.switches}>
                        {images.map((image, index) => (
                              <img
                                    src={image}
                                    alt="slider with plants"
                                    className={index === currentImage ? styles.active : ""}
                                    onClick={() => setCurrentImage(index)}
                                    key={index}
                              />
                        ))}
                  </div>
                  <Image
                        src={images[currentImage]}
                        alt={"current image in slider"}
                        loading="eager"
                        width={404}
                        height={404}
                        className={styles.image}
                  />
            </article>
      );
};

export default PlantSwitcher;
