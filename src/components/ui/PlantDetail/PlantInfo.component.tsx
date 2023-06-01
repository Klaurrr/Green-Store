import { FC, useState } from "react";

import { IPlantDetailProps } from "./props/PlantDetail.props";

import styles from "@/styles/components/ui/PlantInfo.module.scss";
import Rating from "@/components/common/Rating";

const PlantInfo: FC<IPlantDetailProps> = ({ currentPlant }) => {
      const { name, price, rating, description, size } = currentPlant[0];

      console.log(currentPlant);

      return (
            <section className={styles.container}>
                  <h2 className={styles.title}>{name}</h2>
                  <div className={styles.important}>
                        <span>${price}</span>
                        <div className={styles.rating}>
                              <Rating rating={3} />
                        </div>
                        <div className={styles.review}>{5} Customer Review</div>
                  </div>
            </section>
      );
};

export default PlantInfo;
