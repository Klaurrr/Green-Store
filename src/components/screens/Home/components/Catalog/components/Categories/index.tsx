import { FC, ReactNode } from "react";
import clsx from "clsx";

import { usePlantsStore } from "@/store";
import { IPlantsState } from "@/types/IPlantsState";

import { IStateProps } from "../props/IState.props";

import styles from "./Categories.module.scss";

export const Categories: FC<IStateProps> = ({ active, setActive }) => {
      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      return (
            <div className={styles.container}>
                  <h3>Categories</h3>
                  {["Large Plants", "Small Plants"].map((size, index) => (
                        <div
                              key={index}
                              className={clsx(styles.wrapper, active === size && styles.active)}
                              onClick={() => setActive(size)}>
                              <p>{size}</p>
                              <p>
                                    (
                                    {
                                          plants?.filter((plant) =>
                                                size === "Large Plants"
                                                      ? plant.size === "Large"
                                                      : plant.size === "Small"
                                          ).length as ReactNode
                                    }
                                    )
                              </p>
                        </div>
                  ))}
            </div>
      );
};
