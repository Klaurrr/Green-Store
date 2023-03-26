import React from "react";

import styles from "./Categories.module.scss";

const Categories = () => {
    return (
        <div className={styles.container}>
            <h3>Categories</h3>
            <div className={styles.wrapper}>
                <p>Big Plants</p>
                <p>(5)</p>
            </div>
            <div className={styles.wrapper}>
                <p>Small Plants</p>
                <p>(6)</p>
            </div>
        </div>
    );
};

export default Categories;
