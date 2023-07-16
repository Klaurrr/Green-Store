import React, { FC } from "react";

import { ICardsListProps } from "./props/CardsList.props";
import NavBar from "./NavBar.component";

import styles from "./styles/CardsList.module.scss";

const CardsList: FC<ICardsListProps> = ({ setSort, showPlants }) => {
      return (
            <div className={styles.container}>
                  <NavBar plantsFilter={setSort} />
                  <div className={styles.wrapper}>{showPlants}</div>
            </div>
      );
};

export default CardsList;
