import React from "react";

import clsx from "clsx";

import { ICatalogMenuAtomProps } from "@/types/ICatalogMenuAtomProps";

import styles from "./Categories.module.scss";

const Categories = ({ active, setActive }: ICatalogMenuAtomProps) => {
    return (
        <div className={styles.container}>
            <h3>Categories</h3>
            <div
                className={
                    active === "Big Plants"
                        ? clsx(styles.wrapper, styles.active)
                        : styles.wrapper
                }
                onClick={() => setActive("Big Plants")}
            >
                <p>Big Plants</p>
                <p>(5)</p>
            </div>
            <div
                className={
                    active === "Small Plants"
                        ? clsx(styles.wrapper, styles.active)
                        : styles.wrapper
                }
                onClick={() => setActive("Small Plants")}
            >
                <p>Small Plants</p>
                <p>(6)</p>
            </div>
        </div>
    );
};

export default Categories;
