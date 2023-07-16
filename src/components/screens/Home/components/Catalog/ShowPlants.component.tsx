import React from "react";

import Card from "@/components/ui/Card";
import { usePlantsStore } from "@/store";
import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";

import { IShowPlantsProps } from "./props/ShowPlants.props";

const showPlants = ({
      sort,
      activeCategory,
      setDataForPagination,
      firstDataIndex,
      lastDataIndex,
}: IShowPlantsProps) => {
      const plants = usePlantsStore((state) => state.plants);
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
                  activeCategory.split(" ")[0] !== "default"
                        ? sortedPlants
                                .filter((plant) => plant.size === activeCategory.split(" ")[0])
                                .map((plant) => <Card plant={plant} key={plant.id} />)
                        : sortedPlants.map((plant) => <Card plant={plant} key={plant.id} />);

            setDataForPagination(resultPlants.length);

            return resultPlants.length > 0 ? (
                  resultPlants.slice(firstDataIndex, lastDataIndex)
            ) : (
                  <h1>Ничего не найдено...</h1>
            );
      }, [activeCategory, filteredPlants, plants, sort, firstDataIndex, lastDataIndex]);

      return showPlants;
};

export default showPlants;
