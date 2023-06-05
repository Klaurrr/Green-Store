import { FC, useState } from "react";

import { IPlantDetailProps } from "./props/PlantDetail.props";

import styles from "@/styles/components/ui/PlantDescription.module.scss";

const PlantDescription: FC<IPlantDetailProps> = ({ currentPlant }) => {
      const { description } = currentPlant[0];

      const [currentInfo, setCurrentInfo] = useState("Product Description");

      return (
            <section className={styles.container}>
                  <div className={styles.switches}>
                        {["Product Description", "Reviews"].map((item, index) => (
                              <p
                                    className={currentInfo === item ? styles.active : ""}
                                    onClick={() => setCurrentInfo(item)}
                                    key={index}
                              >
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

export default PlantDescription;
