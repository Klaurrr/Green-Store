import React from "react";

import clsx from "clsx";

import { ICatalogMenuAtomProps } from "@/types/ICatalogMenuAtomProps";

import styles from "./Size.module.scss";

const Size = ({ active, setActive }: ICatalogMenuAtomProps) => {
    // Потом можно вынести в массив [small, medium, large]. А значения фильтровать из хранилища
    return (
        <div className={styles.container}>
            <h3>Size</h3>
            <div
                className={
                    active === "Small"
                        ? clsx(styles.wrapper, styles.active)
                        : styles.wrapper
                }
                onClick={() => setActive("Small")}
            >
                <p>Small</p>
                <p>(5)</p>
            </div>
            <div
                className={
                    active === "Medium"
                        ? clsx(styles.wrapper, styles.active)
                        : styles.wrapper
                }
                onClick={() => setActive("Medium")}
            >
                <p>Medium</p>
                <p>(6)</p>
            </div>
            <div
                className={
                    active === "Large"
                        ? clsx(styles.wrapper, styles.active)
                        : styles.wrapper
                }
                onClick={() => setActive("Large")}
            >
                <p>Large</p>
                <p>(6)</p>
            </div>
        </div>
    );
};

export default Size;
