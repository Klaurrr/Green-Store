import Card from "@/components/atoms/CatalogCardsAtoms/Card";
import NavBar from "@/components/atoms/CatalogCardsAtoms/NavBar";
import { usePlantsStore } from "@/store";
import { IPlantsState } from "@/types/IPlantsState";
import React from "react";

import styles from "./CatalogCards.module.scss";

const CatalogCardsMolecule = () => {
    const plants = usePlantsStore((state: IPlantsState) => state?.plants);

    const plantsFilter = (sort: string): void => {
        if (sort === "Ascending") {
            console.log(plants.sort((a, b) => a.price - b.price));
        } else console.log(plants.sort((a, b) => b.price - a.price));
    };

    return (
        <div className={styles.container}>
            <NavBar plantsFilter={(sort: string) => plantsFilter(sort)} />
            <div className={styles.wrapper}>
                {plants?.map((plant) => (
                    <Card plant={plant} />
                ))}
            </div>
        </div>
    );
};

export default CatalogCardsMolecule;
