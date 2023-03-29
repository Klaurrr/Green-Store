import NavBar from "@/components/atoms/CatalogCardsAtoms/NavBar";
import React from "react";

import styles from "./CatalogCards.module.scss";

const CatalogCardsMolecule = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div></div>
        </div>
    );
};

export default CatalogCardsMolecule;
