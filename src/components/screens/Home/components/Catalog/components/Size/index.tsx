import React, { FC, ReactNode } from "react";
import clsx from "clsx";

import { usePlantsStore } from "@/store";
import { IPlantsState } from "@/types/IPlantsState";

import { IStateProps } from "../props/IState.props";

import styles from "./Size.module.scss";

export const Size: FC<IStateProps> = ({ active, setActive }) => {
      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      return (
            <div className={styles.container}>
                  <h3>Size</h3>
                  {["Small", "Medium", "Large"].map((size, index) => (
                        <div
                              key={index}
                              className={clsx(styles.wrapper, active === size && styles.active)}
                              onClick={() => setActive(size)}>
                              <p>{size}</p>
                              <p>
                                    (
                                    {
                                          plants?.filter((plant) => plant.size === size)
                                                .length as ReactNode
                                    }
                                    )
                              </p>
                        </div>
                  ))}
            </div>
      );
};
