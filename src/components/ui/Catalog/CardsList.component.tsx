import React, { useState } from "react";

import { usePlantsStore } from "@/store";

import { IPlantsState } from "@/types/IPlantsState";

import NavBar from "./NavBar.component";
import Card from "./Card.component";

import styles from "@/styles/components/ui/CardsList.module.scss";

const CardsList = () => {
      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      const [sort, setSort] = useState<string>("default");

      const showPlants = () => {
            switch (sort) {
                  case "default":
                        return plants?.map((plant) => <Card plant={plant} />);
                        break;
                  case "Ascending":
                        return plants
                              ?.sort((a, b) => a.price - b.price)
                              .map((plant) => <Card plant={plant} />);
                        break;
                  case "Descending":
                        return plants
                              ?.sort((a, b) => b.price - a.price)
                              .map((plant) => <Card plant={plant} />);
                        break;
            }
      };

      return (
            <div className={styles.container}>
                  <NavBar plantsFilter={setSort} />
                  <div className={styles.wrapper}>{showPlants()}</div>
            </div>
      );
};

export default CardsList;
