import { useState } from "react";

import icons from "../../../../public/assets/icons";

import Categories from "./Categories.component";
import PriceRange from "./PriceRange.component";
import Size from "./Size.component";

import styles from "@/styles/components/ui/CatalogMenu.module.scss";

const Menu = () => {
      const [active, setActive] = useState("Big Plants");

      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <div className={styles.inner}>
                              <Categories active={active} setActive={setActive} />
                              <PriceRange />
                              <Size active={active} setActive={setActive} />
                        </div>

                        <img src={icons.Banner.src} alt="banner-img" />
                  </div>
            </div>
      );
};

export default Menu;