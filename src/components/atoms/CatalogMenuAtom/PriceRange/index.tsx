import React from "react";
import Button from "../../HeaderAtom/Button";
import styles from "./PriceRange.module.scss";

const PriceRange = () => {
    return (
        <div className={styles.container}>
            <h3>Price Range</h3>
            <div className={styles.wrapper}>
                <div className={styles.price}>
                    Price:{" "}
                    <span>
                        ${1} - ${1230}
                    </span>
                </div>
                <Button width={"90px"} height={"35px"} text={"Filter"} />
            </div>
        </div>
    );
};

export default PriceRange;
