import { FC, useState } from "react";

import { IPlantDescProps } from "./PlantDescription.props";

import styles from "./PlantDescription.module.scss";

export const PlantDescription: FC<IPlantDescProps> = ({ description }) => {
      const [currentInfo, setCurrentInfo] = useState("Product Description");

      return (
            <section className={styles.container}>
                  <div className={styles.switches}>
                        {["Product Description", "Reviews"].map((item, index) => (
                              <p
                                    className={currentInfo === item ? styles.active : ""}
                                    onClick={() => setCurrentInfo(item)}
                                    key={index}>
                                    {item}
                              </p>
                        ))}
                  </div>
                  <div className={styles.desc}>
                        {currentInfo === "Product Description" ? (
                              <p>{description}</p>
                        ) : (
                              <p>В макете нет дизайна :(</p>
                        )}
                  </div>
            </section>
      );
};
