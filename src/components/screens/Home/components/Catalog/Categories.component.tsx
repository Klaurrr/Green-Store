import { FC, ReactNode } from "react";

import clsx from "clsx";

import { ICatalogMenuProps } from "./props/CatalogMenu.props";

import { IPlantsState } from "@/types/IPlantsState";

import { usePlantsStore } from "@/store";

import styles from "./styles/Categories.module.scss";

const Categories: FC<ICatalogMenuProps> = ({ active, setActive }) => {
      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      return (
            <div className={styles.container}>
                  <h3>Categories</h3>
                  {["Large Plants", "Small Plants"].map((size, index) => (
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

export default Categories;
