import React, { FC, useState } from "react";

import { usePlantsStore } from "@/store";

import Button from "@/components/ui/Button";

import { IPlantsState } from "@/types/IPlantsState";
import { IPriceRangeProps } from "./props/PriceRange.props";

import styles from "./styles/PriceRange.module.scss";

const PriceRange: FC<IPriceRangeProps> = ({ setCurrentPage }) => {
      const [value, setValue] = useState(0);

      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      const addFilteredPlants = usePlantsStore((state: IPlantsState) => state.addFilteredPlants);

      const filterHandler = () => {
            setCurrentPage(1);
            addFilteredPlants(plants.filter((plant) => plant.price <= value));
      };

      const priceMin = Math.ceil(Math.min(...plants.map((plant) => plant.price)));
      const priceMax = Math.ceil(Math.max(...plants.map((plant) => plant.price)));

      return (
            <div className={styles.container}>
                  <h3>Price Range</h3>
                  <div className={styles.wrapper}>
                        <input
                              type="range"
                              min={priceMin}
                              max={priceMax}
                              value={value}
                              onChange={(e) => setValue(+e.target.value)}
                        />
                        <div className={styles.price}>
                              Price:{" "}
                              <span>
                                    ${priceMin} - ${value === 0 ? priceMin : value}
                              </span>
                        </div>

                        <Button
                              handler={() => filterHandler()}
                              width={"90px"}
                              height={"35px"}
                              text={"Filter"}
                              fontWeight={"700"}
                        />
                  </div>
            </div>
      );
};

export default PriceRange;
