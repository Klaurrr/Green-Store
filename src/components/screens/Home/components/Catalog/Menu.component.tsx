import { FC } from "react";

import icons from "../../../../../../public/assets/icons";

import { IMenuProps } from "./props/Menu.props";
import Categories from "./Categories.component";
import PriceRange from "./PriceRange.component";
import Size from "./Size.component";

import styles from "./styles/CatalogMenu.module.scss";

const Menu: FC<IMenuProps> = ({ active, setActive, setCurrentPage }) => {
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

export default Menu;
