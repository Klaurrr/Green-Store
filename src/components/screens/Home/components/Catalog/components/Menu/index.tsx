import { FC } from "react";

import icons from "../../../../../../../../public/assets/icons";

import { Categories, PriceRange, Size } from "./../";
import { IMenuProps } from "./Menu.props";

import styles from "./CatalogMenu.module.scss";

export const Menu: FC<IMenuProps> = ({ active, setActive, setCurrentPage }) => {
      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <div className={styles.inner}>
                              <Categories active={active} setActive={setActive} />
                              <PriceRange setCurrentPage={setCurrentPage} />
                              <Size active={active} setActive={setActive} />
                        </div>

                        <img src={icons.Banner.src} alt="banner-img" />
                  </div>
            </div>
      );
};
