import React, { FC } from "react";

import Card from "../Card";
import Carousel from "@/components/common/Carousel";

import { IPlantsSliderProps } from "./IPlantsSlider.props";

import GenerateKey from "@/components/common/GenerateKey";

import styles from "./PlantsSlider.module.scss";

const PlantsSlider: FC<IPlantsSliderProps> = ({ plants, title }) => {
      const slicePlants = () => {
            const slicedPlants = [];

            const chunkSize = 5;

            for (let i = 0; i < plants.length; i += chunkSize) {
                  const chunk = plants.slice(i, i + chunkSize);
                  slicedPlants.push(chunk);
            }

            return slicedPlants;
      };

      const slicedPlants = slicePlants();

      return (
            <article className={styles.container}>
                  <p className={styles.title}>{title}</p>
                  <Carousel>
                        {slicedPlants.map((chunk, index) => (
                              <div className={styles.chunk} key={index}>
                                    {chunk.map((plant) => (
                                          <Card
                                                plant={plant}
                                                forSlider
                                                key={GenerateKey(plant.name)}
                                          />
                                    ))}
                              </div>
                        ))}
                  </Carousel>
            </article>
      );
};

export default PlantsSlider;
