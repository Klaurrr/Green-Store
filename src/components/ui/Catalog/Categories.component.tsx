import { ReactNode } from "react";

import clsx from "clsx";

import { CatalogMenuProps } from "@/components/ui/Catalog/props/CatalogMenuProps";

import { IPlantsState } from "@/types/IPlantsState";

import { usePlantsStore } from "@/store";

import styles from "@/styles/components/ui/Categories.module.scss";

const Categories = ({ active, setActive }: CatalogMenuProps) => {
      const plants = usePlantsStore((state: IPlantsState) => state?.plants);

      return (
            <div className={styles.container}>
                  <h3>Categories</h3>
                  {["Big Plants", "Small Plants"].map((size, index) => (
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
                                                size === "Big Plants"
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
