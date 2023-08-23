import React, { FC } from "react";

import NavBar from "../NavBar";

import { ICardsListProps } from "./CardsList.props";

import styles from "./CardsList.module.scss";

export const CardsList: FC<ICardsListProps> = ({ setSort, showPlants }) => {
      return (
            <div className={styles.container}>
                  <NavBar plantsFilter={setSort} />
                  <div className={styles.wrapper}>{showPlants}</div>
            </div>
      );
};
