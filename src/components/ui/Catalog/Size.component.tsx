import React, { ReactNode } from "react";

import { usePlantsStore } from "@/store";

import clsx from "clsx";

import { IPlantsState } from "@/types/IPlantsState";
import { CatalogMenuProps } from "@/components/ui/Catalog/props/CatalogMenu.props";

import styles from "@/styles/components/ui/Size.module.scss";

const Size = ({ active, setActive }: CatalogMenuProps) => {
      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      return (
            <div className={styles.container}>
                  <h3>Size</h3>
                  {["Small", "Medium", "Large"].map((size, index) => (
                        <div
                              key={index}
                              className={
                                    active === size
                                          ? clsx(styles.wrapper, styles.active)
                                          : styles.wrapper
                              }
                              onClick={() => setActive(size)}
                        >
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

export default Size;
