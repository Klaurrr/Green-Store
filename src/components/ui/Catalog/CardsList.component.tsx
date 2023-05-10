import React, { FC, useState } from "react";

import { usePlantsStore } from "@/store";

import { IPlantsState } from "@/types/IPlantsState";
import { IPlants } from "@/types/IPlants";
import { ICardsListProps } from "./props/CardsList.props";

import GenerateKey from "@/components/common/GenerateKey";
import NavBar from "./NavBar.component";
import Card from "./Card.component";

import styles from "@/styles/components/ui/CardsList.module.scss";

const CardsList: FC<ICardsListProps> = ({ active }) => {
      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      const [sort, setSort] = useState<string>("default");

      const filteredPlants = usePlantsStore((state: IPlantsState) => state.filteredPlants);

      const sortPlants = (plants: IPlants[], sortOrder: string) => {
            return [...plants].sort((a, b) => {
                  if (sortOrder === "default") {
                        return 0;
                  }
                  return sortOrder === "Ascending" ? a.price - b.price : b.price - a.price;
            });
      };

      const showPlants = React.useMemo(() => {
            const sortedPlants = sortPlants(
                  filteredPlants.length > 0 ? filteredPlants : plants,
                  sort
            );

            const resultPlants =
                  active.split(" ")[0] !== "default"
                        ? sortedPlants
                                .filter((plant) => plant.size === active.split(" ")[0])
                                .map((plant) => (
                                      <Card plant={plant} key={GenerateKey(plant.name)} />
                                ))
                        : sortedPlants.map((plant) => (
                                <Card plant={plant} key={GenerateKey(plant.name)} />
                          ));

            return resultPlants.length > 0 ? resultPlants : <h1>Ничего не найдено...</h1>;
      }, [active, filteredPlants, plants, sort]);

      return (
            <div className={styles.container}>
                  <NavBar plantsFilter={setSort} />
                  <div className={styles.wrapper}>{showPlants}</div>
            </div>
      );
};

export default CardsList;
