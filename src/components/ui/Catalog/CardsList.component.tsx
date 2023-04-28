import React from "react";

import { usePlantsStore } from "@/store";

import { IPlantsState } from "@/types/IPlantsState";

import NavBar from "./NavBar.component";
import Card from "./Card.component";

import styles from "@/styles/components/ui/CardsList.module.scss";

const CardsList = () => {
      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      const plantsFilter = (sort: string): void => {
            if (sort === "Ascending") {
                  console.log(plants.sort((a, b) => a.price - b.price));
            } else console.log(plants.sort((a, b) => b.price - a.price));
      };

      return (
            <div className={styles.container}>
                  <NavBar plantsFilter={(sort: string) => plantsFilter(sort)} />
                  <div className={styles.wrapper}>
                        {plants?.map((plant) => (
                              <Card plant={plant} />
                        ))}
                  </div>
            </div>
      );
};

export default CardsList;
